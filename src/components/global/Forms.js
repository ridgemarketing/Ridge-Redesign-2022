import React, { useEffect, useState } from "react"
import { Input, PhoneInput, Select, TextArea, CheckboxGroup } from "./FormFields"
import { theme } from "../../static/theme"
import { useForm } from "react-hook-form";
import { navigate } from "gatsby"

export const FormCareers = ({classes, submitLabel, btnContainerClasses, btnStyle}) => {
    const { register, handleSubmit, watch, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm()
    const [status, setStatus]                   = useState(false)
    const [submittedData, setSubmittedData]     = useState({})

    const onSubmit = async (data) => {

        setStatus(`processing`)

        let attachments = []
        if (data?.resume && data?.resume.length > 0) {
            for (const file of data.resume) {

                // File type validation
                const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];
                if (!allowedTypes.includes(file?.type)) {
                    console.log('Invalid file type:', file?.type)
                    setStatus(`fail-email`)
                    return 
                }

                const maxFileSize = 5 * 1024 * 1024; // 5MB
                if (file.size > maxFileSize) {
                    console.log('File too large:', file.size, 'bytes')
                    setStatus(`fail-email`)
                    return 
                }

                const base64 = await new Promise((resolve) => {
                    const reader    = new FileReader()
                    reader.onload   = () => resolve(reader.result.split(',')[1])
                    reader.readAsDataURL(file)
                })

                attachments.push({
                    content     : base64,
                    filename    : file.name,
                    type        : file.type,
                    disposition : 'attachment'
                })
            }
        }

        const dataToSend    = { ...data }
        delete dataToSend.resume;
        const message       = JSON.stringify(dataToSend)

        const res = await fetch("/api/sendgrid-careers", {
            body: JSON.stringify({
                email           : data.email,
                subject         : `New Careers Form Submission`,
                message         : message,
                // attachments     : attachments
        }),
            headers: {
            "Content-Type": "application/json",
        },
            method: "POST",
        })

        const { error } = await res.json();
          
        if (error) {
          console.log(error);
          setStatus(`fail-email`)
          return
        }

        setSubmittedData(data)
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful && status !== `fail-email`) {
            setStatus(`success`)
            reset()

            if (window.dataLayer && typeof window.dataLayer.push === "function") {
                window.dataLayer.push({event: 'Careers Form Submission'});
            }
            
          }
      
    }, [formState, submittedData, reset])

    return(
        <form onSubmit={handleSubmit(onSubmit)} className={classes}>
            {errors[0] && 
                <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                    {errors.map((error) => {
                        return(
                            <p className={`${theme.text.P_BLD}`}>{error.message}</p>
                        )
                    })}
                </div>
            }

            {status === `fail-email` &&
                <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                    <p className={`${theme.text.P_BLD}`}>There was an error when emailing your submission. Please try again. If the issue persist, let us know at <a href="tel:908-340-4480">908-340-4480</a>.</p>
                </div>
            }

            {status === `success` &&
                <div className={`bg-rm-aqua text-white py-3 px-6 mt-3 mb-6`}>
                    <p className={`${theme.text.P_BLD}`}>Thank you for your submission. We will be in touch with you soon.</p>
                </div>
            }

            <span className={`block mb-2`}><Input errors={errors} register={register} required={true} type={`text`} name={`name`} label={`Name`} textColor={`white`} bgColor={`black`} /></span>
            <span className={`block mb-2`}><Input errors={errors} register={register} required={true} type={`email`} name={`email`} label={`Email`} textColor={`white`} bgColor={`black`} /></span>
            <span className={`block mb-2`}><Input errors={errors} register={register} required={true} type={`tel`} name={`phone`} label={`Phone`} textColor={`white`} bgColor={`black`} /></span>
            <span className={`block mb-2`}><Input errors={errors} register={register} required={true} type={`text`} name={`position`} label={`Position Sought`} textColor={`white`} bgColor={`black`} /></span>
            <span className={`block mb-2`}><Input errors={errors} register={register} required={false} type={`text`} name={`portfolio`} label={`Portfolio or LinkedIn`} textColor={`white`} bgColor={`black`} /></span>
            <span className={`block`}><TextArea errors={errors} register={register} required={false} name={`message`} label={`What would you bring to the Barn of Brands`} textColor={`white`} bgColor={`black`} /></span>
            {/* taking this out for now until the bodyparser rebuild issue is completed */}
            {/* <span className={`block mt-10 mb-16`}><Input errors={errors} register={register} required={false} type={`file`} name={`resume`} label={`Upload Resume`} textColor={`white`} bgColor={`black`} /></span> */}
            

            <div className={`mt-6 ${btnContainerClasses ? btnContainerClasses : ``}`}>
                <button
                    className={`${status === `processing` ? `opacity-80` : `` } ${theme.button['BASE_STYLING']} ${theme.button[btnStyle ? btnStyle : `SOLID_GREEN_HOVER_DARK`]} cursor-pointer min-w-[210px]`}
                    type="submit" disabled={status === `processing` ? true : false }>
                        { status === `processing` ? `Sending...` : submitLabel}
                </button>
            </div>
        </form>
    )
}

export const FormContactPage = ({classes, submitLabel, btnContainerClasses, btnStyle}) => {
    const { register, handleSubmit, watch, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm()
    const [status, setStatus]               = useState(false)
    const [submittedData, setSubmittedData] = useState({});
    const [savedData, setSavedData]         = useState({});
    const [step, setStep]                   = useState(1)
        
    const saveData = (data) => {
        setStatus(`processing`)
        setSavedData(data)
        setStep(2)
        setStatus(false)
    } 

    const onSubmit = async (data) => {

        setStatus(`processing`)

        const message = JSON.stringify(data)

        const res = await fetch("/api/sendgrid-basic-contact", {
            body: JSON.stringify({
            email: data.email,
            subject: `New Contact Form Submission`,
            message: message,
        }),
            headers: {
            "Content-Type": "application/json",
        },
            method: "POST",
        })

        const { error } = await res.json();
          
        if (error) {
          console.log(error);
          setStatus(`fail-email`)
          return
        }

        setStatus(`success`)
        setSubmittedData(data)

    }

    useEffect(() => {
        if (formState.isSubmitSuccessful && status === `success`) {
            reset()
            setStep(1)
            if (window.dataLayer && typeof window.dataLayer.push === "function") {
             window.dataLayer.push({event: 'Contact Form Submission'});
            }
            
          }
      
    }, [formState, submittedData, reset])

    // useEffect(() => {
    //     if (formState.isSubmitSuccessful && status !== `fail-email`) {
    //         setStatus(`success`)
    //         reset()
            
    //         if (window.dataLayer && typeof window.dataLayer.push === "function") {
    //          window.dataLayer.push({event: 'Contact Form Submission'});
    //         }
            
    //       }
      
    // }, [formState, submittedData, reset])

    return(
        <>
            {step === 1 &&
                <form onSubmit={handleSubmit(saveData)} className={classes}>
                    {errors[0] && 
                        <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                            {errors.map((error) => {
                                return(
                                    <p className={`${theme.text.P_BLD}`}>{error.message}</p>
                                )
                            })}
                        </div>
                    }

                    {status === `fail-email` &&
                        <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                            <p className={`${theme.text.P_BLD}`}>There was an error when emailing your submission. Please try again. If the issue persist, let us know at <a href="tel:908-340-4480">908-340-4480</a>.</p>
                        </div>
                    }

                    {status === `success` &&
                        <div className={`bg-rm-aqua text-white py-3 px-6 mt-3 mb-6`}>
                            <p className={`${theme.text.P_BLD}`}>Thank you for your submission. We will be in touch with you soon.</p>
                        </div>
                    }

                    <span className={`mb-6 block`}><Input errors={errors} register={register} required={true} type={`text`} name={`name`} label={`Name`} bgColor={`white`} textColor={`black`} /></span>
                    <span className={`mb-6 block`}><Input errors={errors} register={register} required={true} type={`text`} name={`company`} label={`Company`} bgColor={`white`} textColor={`black`} /></span>
                    <span className={`mb-6 block`}><Input errors={errors} register={register} required={true} type={`email`} name={`email`} label={`Email`} bgColor={`white`} textColor={`black`} /></span>
                    <span className={`mb-6 block`}><PhoneInput errors={errors} register={register} required={true} type={`tel`} name={`phone`} label={`Phone`} bgColor={`white`} textColor={`black`} /></span>
                    <span className={`mb-6 block`}><TextArea errors={errors} register={register} required={true} name={`message`} label={`What are your marketing goals?`} bgColor={`white`} textColor={`black`} /></span>
                    
                    <div className={`mt-6 ${btnContainerClasses ? btnContainerClasses : ``}`}>
                        <button
                            className={`${status === `processing` ? `opacity-80` : `` } ${theme.button['BASE_STYLING']} ${theme.button[btnStyle ? btnStyle : `SOLID_GREEN_HOVER_DARK`]} cursor-pointer min-w-[210px]`}
                            type="submit" 
                            disabled={status === `processing` ? true : false }>
                                { status === `processing` ? `Saving...` : `Continue`}
                        </button>
                    </div>
                </form>
            }
            {step === 2 &&
                 <form onSubmit={handleSubmit(onSubmit)} className={classes}>
                    {errors[0] && 
                        <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                            {errors.map((error) => {
                                return(
                                    <p className={`${theme.text.P_BLD}`}>{error.message}</p>
                                )
                            })}
                        </div>
                    }

                    {status === `fail-email` &&
                        <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                            <p className={`${theme.text.P_BLD}`}>There was an error when emailing your submission. Please try again. If the issue persist, let us know at <a href="tel:908-340-4480">908-340-4480</a>.</p>
                        </div>
                    }

                    {status === `success` &&
                        <div className={`bg-rm-aqua text-white py-3 px-6 mt-3 mb-6`}>
                            <p className={`${theme.text.P_BLD}`}>Thank you for your submission. We will be in touch with you soon.</p>
                        </div>
                    }
                    <div>
                        <span className={`mb-6 block`}><Select errors={errors} register={register} required={true} name={`companySize`} label={`Company Size`} options={[`< 10 Employees`,`10-50 Employees`,`50-250 Employees`,`250+ Employees`]} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
                        <span className={`mb-6 block`}><Select errors={errors} register={register} required={true} name={`companyRevenue`} label={`Company Revenue`} options={[`Less than $5M`,`$5M-$50M`,`$50M-250M`,`$250M-$1B`,`$1B+`]} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
                        <span className={`mb-6 block`}><Input errors={errors} register={register} required={true} type={`text`} name={`budget`} label={`Budget`} bgColor={`white`} textColor={`black`} /></span>
                        <div className={`mt-6 ${btnContainerClasses ? btnContainerClasses : ``}`}>
                            <button
                                className={`${status === `processing` ? `opacity-80` : `` } ${theme.button['BASE_STYLING']} ${theme.button[btnStyle ? btnStyle : `SOLID_GREEN_HOVER_DARK`]} cursor-pointer min-w-[210px]`}
                                type="submit" 
                                disabled={status === `processing` ? true : false }>
                                    { status === `processing` ? `Sending...` : submitLabel}
                            </button>
                        </div>
                    </div>
                 </form>
            }
        </>
    )
}

export const FormCTALayout = ({classes, submitLabel, btnContainerClasses, btnStyle, textColor, bgColor}) => {
    const { register, handleSubmit, watch, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm()
    const [status, setStatus] = useState(false)
    const [submittedData, setSubmittedData] = useState({});

    const onSubmit = async (data) => {

        setStatus(`processing`)

        const message = JSON.stringify(data)

        const res = await fetch("/api/sendgrid-cta-contact", {
            body: JSON.stringify({
            email: data.email,
            subject: `New CTA Form Submission`,
            message: message,
        }),
            headers: {
            "Content-Type": "application/json",
        },
            method: "POST",
        })

        const { error } = await res.json();
          
        if (error) {
          console.log(error);
          setStatus(`fail-email`)
          return
        }

        setSubmittedData(data)
        setStatus(`success`)
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful && status !== `fail-email`) {
            setStatus(`success`)
            reset()
            
            if (window.dataLayer && typeof window.dataLayer.push === "function") {
                window.dataLayer.push({event: 'CTA Form Submission'});
            }
            
        }
      
    }, [formState, submittedData, reset])

    return(
        <form onSubmit={handleSubmit(onSubmit)} className={classes}>
            <div className="md:col-span-2">
                {errors[0] && 
                    <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                        {errors.map((error) => {
                            return(
                                <p className={`${theme.text.P_BLD}`}>{error.message}</p>
                            )
                        })}
                    </div>
                }

                {status === `fail-email` &&
                    <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                        <p className={`${theme.text.P_BLD}`}>There was an error when emailing your submission. Please try again. If the issue persist, let us know at <a href="tel:908-340-4480">908-340-4480</a>.</p>
                    </div>
                }

                {status === `success` &&
                    <div className={`bg-rm-aqua text-white py-3 px-6 mt-3 mb-6`}>
                        <p className={`${theme.text.P_BLD}`}>Thank you for your submission. We will be in touch with you soon.</p>
                    </div>
                }
            </div>
            <span className={`mb-6 block md:col-span-1`}><Input errors={errors} register={register} required={true} type={`text`} name={`name`} label={`Name`} textColor={textColor} bgColor={bgColor} /></span>
            <span className={`mb-6 block md:col-span-1`}><Input errors={errors} register={register} required={true} type={`text`} name={`company`} label={`Company`} textColor={textColor} bgColor={bgColor} /></span>
            <span className={`mb-6 block md:col-span-1`}><Input errors={errors} register={register} required={true} type={`email`} name={`email`} label={`Email`} textColor={textColor} bgColor={bgColor} /></span>
            <span className={`mb-6 block md:col-span-1`}><Input errors={errors} register={register} required={true} type={`tel`} name={`phone`} label={`Phone`} textColor={textColor} bgColor={bgColor} /></span>
            <span className={`mb-6 block md:col-span-1`}> <Input errors={errors} register={register} required={true} type={`text`} name={`companySize`} label={`Company Size`} textColor={textColor} bgColor={bgColor} /></span>
            <span className={`mb-6 block md:col-span-1`}><Input errors={errors} register={register} required={true} type={`text`} name={`timing`} label={`Timing for Start`} textColor={textColor} bgColor={bgColor} /></span>
            <span className={`block md:col-span-2`}><TextArea errors={errors} register={register} required={true} name={`message`} label={`Tell us about your marketing needs`} textColor={textColor} bgColor={bgColor} /></span>
            
            <div className={`mt-6 ${btnContainerClasses ? btnContainerClasses : ``}`}>
                <button
                    className={`${status === `processing` ? `opacity-50` : `` } ${theme.button['BASE_STYLING']} ${theme.button[btnStyle ? btnStyle : `SOLID_GREEN_HOVER_DARK`]} cursor-pointer min-w-[210px]`}
                    type="submit" disabled={status === `processing` ? true : false }>
                        { status === `processing` ? `Sending...` : submitLabel}
                </button>
            </div>
        </form>
    )
}

export const FormLanders = ({classes, submitLabel, btnContainerClasses, btnStyle, redirectForm}) => {
    const { register, handleSubmit, watch, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm()
    const [status, setStatus] = useState(false)
    const [submittedData, setSubmittedData] = useState({});
    const [savedData, setSavedData] = useState({});
    const [step, setStep] = useState(1)

    const saveData = (data) => {
        setStatus(`processing`)
        setSavedData(data)
        setStep(2)
        setStatus(false)
    } 
    const onSubmit = async (data) => {

        setStatus(`processing`)

        const message = JSON.stringify(data)

        const res = await fetch("/api/sendgrid-landers", {
            body    : JSON.stringify({
            email   : data.email,
            subject : `New Lander Form Submission`,
            message : message,
        }),
            headers : {
            "Content-Type": "application/json",
        },
            method  : "POST",
        })

        const { error } = await res.json();
          
        if (error) {
          console.log(error);
          setStatus(`fail-email`)
          return
        }

        setStatus(`success`)
        setSubmittedData(data)



    }

    useEffect(() => {
        if (formState.isSubmitSuccessful && status === `success`) {
            reset()
            setStep(1)
            if (window.dataLayer && typeof window.dataLayer.push === "function") {
             window.dataLayer.push({event: 'Contact Form Submission'});
            }
            if (redirectForm) {
                navigate("/thank-you-landers/")
            }
            
          }
      
    }, [formState, submittedData, reset])

    return(
        <div>
            {step === 1 &&
                <form onSubmit={handleSubmit(saveData)} className={`${classes}`}>
                    {errors[0] && 
                        <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                            {errors.map((error) => {
                                return(
                                    <p className={`${theme.text.P_BLD}`}>{error.message}</p>
                                )
                            })}
                        </div>
                    }

                    {status === `fail-email` &&
                        <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                            <p className={`${theme.text.P_BLD}`}>There was an error when emailing your submission. Please try again. If the issue persist, let us know at <a href="tel:908-340-4480">908-340-4480</a>.</p>
                        </div>
                    }

                    {status === `success` &&
                        <div className={`bg-rm-aqua text-white py-3 px-6 mt-3 mb-6`}>
                            <p className={`${theme.text.P_BLD}`}>Thank you for your submission. We will be in touch with you soon.</p>
                        </div>
                    }

                    <div>
                        <span className={`mb-6 block`}><Input errors={errors} register={register} required={true} type={`text`} name={`name`} label={`Name`} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
                        <span className={`mb-6 block`}><Input errors={errors} register={register} required={true} type={`text`} name={`company`} label={`Company`} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
                        <span className={`mb-6 block`}><Input errors={errors} register={register} required={true} type={`email`} name={`email`} label={`Email`} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
                        <span className={`mb-6 block`}><PhoneInput errors={errors} register={register} required={true} type={`tel`} name={`phone`} label={`Phone`} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
                        <div className={`mt-10 ${btnContainerClasses ? btnContainerClasses : ``}`}>
                            <button
                                className={`${status === `processing` ? `opacity-80` : `` } ${theme.button['BASE_STYLING']} ${theme.button[btnStyle ? btnStyle : `SOLID_GREEN_HOVER_DARK`]} ${theme.text_links.FWD_BASE} ${theme.text_links.ARW_FWD_BLACK} ${theme.text_links.HOVER_ARW_FWD_WHITE} !inline-flex items-center cursor-pointer min-w-[210px]`}
                                type="submit"
                                disabled={status === `processing` ? true : false }
                                >
                                { status === `processing` ? `Saving...` :  `Continue`}
                            </button>
                        </div>
                    </div>
                </form>
            }
            {step === 2 &&
                <form onSubmit={handleSubmit(onSubmit)} className={`${classes}`}>
                    {errors[0] && 
                        <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                            {errors.map((error) => {
                                return(
                                    <p className={`${theme.text.P_BLD}`}>{error.message}</p>
                                )
                            })}
                        </div>
                    }

                    {status === `fail-email` &&
                        <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                            <p className={`${theme.text.P_BLD}`}>There was an error when emailing your submission. Please try again. If the issue persist, let us know at <a href="tel:908-340-4480">908-340-4480</a>.</p>
                        </div>
                    }

                    {status === `success` &&
                        <div className={`bg-rm-aqua text-white py-3 px-6 mt-3 mb-6`}>
                            <p className={`${theme.text.P_BLD}`}>Thank you for your submission. We will be in touch with you shortly.</p>
                        </div>
                    }

                    <div>
                        <span className={`mb-6 block`}><Select errors={errors} register={register} required={true} name={`companySize`} label={`Company Size`} options={[`< 10 Employees`,`10-50 Employees`,`50-250 Employees`,`250+ Employees`]} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
                        <span className={`mb-6 block`}><Select errors={errors} register={register} required={true} name={`companyRevenue`} label={`Company Revenue`} options={[`< $10M`,`$10M-$50M`,`$50M-$1B`,`$1B+`]} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
                        <span className={`mb-6 block`}><CheckboxGroup errors={errors} register={register} required={true} name={`interests`} label={`What are you interested in? (Select all that apply)`} options={['Branding', 'Marketing Strategy & Messaging', 'Website Design & Development', 'Content Marketing', 'AI Search Marketing', 'Digital & PPC Advertising', 'Social Media Support', 'Video Production']} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
                        <span className={`mb-6 block`}><TextArea errors={errors} register={register} required={true} name={`message`} label={`Tell us about your marketing goals`} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
                        <div className={`mt-10 ${btnContainerClasses ? btnContainerClasses : ``}`}>
                            <button
                                className={`${status === `processing` ? `opacity-80` : `` } ${theme.button['BASE_STYLING']} ${theme.button[btnStyle ? btnStyle : `SOLID_GREEN_HOVER_DARK`]} cursor-pointer min-w-[210px]`}
                                type="submit" disabled={status === `processing` ? true : false }>
                                    { status === `processing` ? `Sending...` :  `Submit`}
                            </button>
                        </div>
                    </div>
                </form>
            }
        </div>
    )
}

export const FormLander2026 = ({classes, submitLabel, btnContainerClasses, btnStyle, redirectForm}) => {
    const { register, handleSubmit, watch, reset, setValue, formState, formState: { errors, isSubmitSuccessful } } = useForm()
    const [status, setStatus]               = useState(false)
    const [submittedData, setSubmittedData] = useState({})
    const [savedData, setSavedData]         = useState({})
    const [step, setStep]                   = useState(1)
    const [urlSource, setUrlSource]         = useState(null)

    useEffect(() => {
        let params = new URLSearchParams(document.location.search)
        if (params.get("utm_source")) {
            setUrlSource(params.get("utm_source"))
            setValue('urlSource', params.get("utm_source"))
        }
    },[])

    const saveData = (data) => {
        setStatus(`processing`)
        setSavedData(data)
        setStep(2)
        setStatus(false)
    } 
    const onSubmit = async (data) => {

        setStatus(`processing`)

        const message = JSON.stringify(data)

        // const googleSheet = await fetch("/api/google-sheet", {
        //     body: JSON.stringify({
        //         message : message,
        //     }),
        //     headers : {
        //         "Content-Type": "application/json",
        //     },
        //     method  : "POST",
        // })
        // const { googleError } = await googleSheet.json()
        // console.log('google data', googleError)

        // if (googleError) {
        //   console.log(googleError);
        //   setStatus(`fail-email`)
        //   return
        // }

        const res = await fetch("/api/sendgrid-landers", {
            body    : JSON.stringify({
            email   : data.email,
            subject : `New 2026 PPC Page Submission`,
            message : message,
        }),
            headers : {
            "Content-Type": "application/json",
        },
            method  : "POST",
        })

        const { error } = await res.json();
          
        if (error) {
          console.log(error);
          setStatus(`fail-email`)
          return
        }

        setStatus(`success`)
        setSubmittedData(data)

    }

    useEffect(() => {
        if (formState.isSubmitSuccessful && status === `success`) {
            reset()
            setStep(1)
            if (window.dataLayer && typeof window.dataLayer.push === "function") {
                window.dataLayer.push({event: 'PPC 2026 Form Submission'});
            }
            if (redirectForm) {
                navigate("/thank-you-marketing-dream/")
            }
          }
      
    }, [formState, submittedData, reset])

    return(
        <div>
            {step === 1 &&
                <form onSubmit={handleSubmit(saveData)} className={`${classes}`}>
                    {errors[0] && 
                        <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                            {errors.map((error) => {
                                return(
                                    <p className={`${theme.text.P_BLD}`}>{error.message}</p>
                                )
                            })}
                        </div>
                    }

                    {status === `fail-email` &&
                        <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                            <p className={`${theme.text.P_BLD}`}>There was an error when emailing your submission. Please try again. If the issue persist, let us know at <a href="tel:908-340-4480">908-340-4480</a>.</p>
                        </div>
                    }

                    {status === `success` &&
                        <div className={`bg-rm-aqua text-white py-3 px-6 mt-3 mb-6`}>
                            <p className={`${theme.text.P_BLD}`}>Thank you for your submission. We will be in touch with you soon.</p>
                        </div>
                    }

                    <div className="flex flex-wrap xl:gap-x-7">
                        <span className={`block w-full xl:w-[calc(50%-28px)]`}><Input bg={'white'} errors={errors} register={register} required={true} type={`text`} name={`name`} label={`Full Name`} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
                        <span className={`block w-full xl:w-[calc(50%-28px)]`}><Input bg={'white'} errors={errors} register={register} required={true} type={`text`} name={`company`} label={`Company`} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
                        <span className={`block w-full xl:w-[calc(50%-28px)]`}><Input bg={'white'} errors={errors} register={register} required={true} type={`email`} name={`email`} label={`Email`} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
                        <span className={`block w-full xl:w-[calc(50%-28px)]`}><PhoneInput bg={'white'} errors={errors} register={register} required={true} type={`tel`} name={`phone`} label={`Phone`} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
                        <div className={`mt-10 mx-auto xl:ml-0 ${btnContainerClasses ? btnContainerClasses : ``}`}>
                            <button
                                className={`${status === `processing` ? `opacity-80` : `` } ${theme.button['BASE_STYLING']} ${theme.button[btnStyle ? btnStyle : `SOLID_GREEN_HOVER_DARK`]} ${theme.text_links.FWD_BASE} ${theme.text_links.ARW_FWD_BLACK} ${theme.text_links.HOVER_ARW_FWD_WHITE} !inline-flex items-center cursor-pointer min-w-[210px]`}
                                type="submit"
                                disabled={status === `processing` ? true : false }
                                >
                                { status === `processing` ? `Saving...` :  `Continue`}
                            </button>
                        </div>
                    </div>
                </form>
            }
            {step === 2 &&
                <form onSubmit={handleSubmit(onSubmit)} className={`${classes}`}>
                    {errors[0] && 
                        <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                            {errors.map((error) => {
                                return(
                                    <p className={`${theme.text.P_BLD}`}>{error.message}</p>
                                )
                            })}
                        </div>
                    }

                    {status === `fail-email` &&
                        <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                            <p className={`${theme.text.P_BLD}`}>There was an error when emailing your submission. Please try again. If the issue persist, let us know at <a href="tel:908-340-4480">908-340-4480</a>.</p>
                        </div>
                    }

                    {status === `success` &&
                        <div className={`bg-rm-aqua text-white py-3 px-6 mt-3 mb-6`}>
                            <p className={`${theme.text.P_BLD}`}>Thank you for your submission. We will be in touch with you shortly.</p>
                        </div>
                    }

                    <div>
                        <span className={`mb-6 block`}><Select bg={'white'} errors={errors} register={register} required={true} name={`companySize`} label={`Company Size`} options={[`< 10 Employees`,`10-50 Employees`,`50-250 Employees`,`250+ Employees`]} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
                        <span className={`mb-6 block`}><Select bg={'white'} errors={errors} register={register} required={true} name={`companyRevenue`} label={`Company Revenue`} options={[`< $10M`,`$10M-$50M`,`$50M-$1B`,`$1B+`]} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
                        <span className={`mb-6 block`}><CheckboxGroup bg={'white'} errors={errors} register={register} required={true} name={`interests`} label={`What are you interested in? (Select all that apply)`} options={['Branding', 'Marketing Strategy & Messaging', 'Website Design & Development', 'Content Marketing', 'AI Search Marketing', 'Digital & PPC Advertising', 'Social Media Support', 'Video Production']} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
                        <span className={`mb-6 block`}><TextArea bg={'white'} errors={errors} register={register} required={true} name={`message`} label={`Tell us about your marketing goals`} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
                        <input type="hidden" {...register('urlSource')} />
                        <div className={`mt-10 ${btnContainerClasses ? btnContainerClasses : ``}`}>
                            <button
                                className={`${status === `processing` ? `opacity-80` : `` } ${theme.button['BASE_STYLING']} ${theme.button[btnStyle ? btnStyle : `SOLID_GREEN_HOVER_DARK`]} cursor-pointer min-w-[210px]`}
                                type="submit" disabled={status === `processing` ? true : false }>
                                    { status === `processing` ? `Sending...` :  `Submit`}
                            </button>
                        </div>
                    </div>
                </form>
            }
        </div>
    )
}

export const FormAudit2026 = ({classes, submitLabel, btnStyle, redirectForm}) => {
    const { register, handleSubmit, watch, reset, setValue, formState, formState: { errors, isSubmitSuccessful } } = useForm()
    const [status, setStatus]               = useState(false)
    const [submittedData, setSubmittedData] = useState({})
    const [urlSource, setUrlSource]         = useState(null)

    useEffect(() => {
        let params = new URLSearchParams(document.location.search)
        if (params.get("utm_source")) {
            setUrlSource(params.get("utm_source"))
            setValue('urlSource', params.get("utm_source"))
        }
    },[])

    const onSubmit = async (data) => {

        setStatus(`processing`)

        const message = JSON.stringify(data)


        const res = await fetch("/api/sendgrid-audit", {
            body    : JSON.stringify({
            email   : data.email,
            subject : `New Audit Page Submission`,
            message : message,
        }),
            headers : {
            "Content-Type": "application/json",
        },
            method  : "POST",
        })

        const { error } = await res.json();

        if (error) {
          console.log(error);
          setStatus(`fail-email`)
          return
        }

        setStatus(`success`)
        setSubmittedData(data)

    }

    useEffect(() => {
        if (formState.isSubmitSuccessful && status === `success`) {
            reset()
            if (window.dataLayer && typeof window.dataLayer.push === "function") {
                window.dataLayer.push({event: 'Audit 2026 Form Submission'});
            }
            if (redirectForm) {
                navigate("/thank-you-audit/")
            }
          }

    }, [formState, submittedData, reset])

    return(
        <form onSubmit={handleSubmit(onSubmit)} className={`${classes}`}>
            {errors[0] &&
                <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                    {errors.map((error) => {
                        return(
                            <p className={`${theme.text.P_BLD}`}>{error.message}</p>
                        )
                    })}
                </div>
            }

            {status === `fail-email` &&
                <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                    <p className={`${theme.text.P_BLD}`}>There was an error when emailing your submission. Please try again. If the issue persist, let us know at <a href="tel:908-340-4480">908-340-4480</a>.</p>
                </div>
            }

            {status === `success` &&
                <div className={`bg-rm-aqua text-white py-3 px-6 mt-3 mb-6`}>
                    <p className={`${theme.text.P_BLD}`}>Thank you for your submission. We will be in touch with you shortly.</p>
                </div>
            }

            <div className="flex flex-col gap-2">
                <Input errors={errors} register={register} required={true} type={`text`} name={`firstName`} label={`First Name`} bgColor={`white`} textColor={`black`} fontWeight={`light`} />
                <Input errors={errors} register={register} required={true} type={`text`} name={`lastName`} label={`Last Name`} bgColor={`white`} textColor={`black`} fontWeight={`light`} />
                <Input errors={errors} register={register} required={true} type={`email`} name={`email`} label={`Business Email`} bgColor={`white`} textColor={`black`} fontWeight={`light`} />
                <Input errors={errors} register={register} required={true} type={`url`} name={`website`} label={`Website URL`} bgColor={`white`} textColor={`black`} fontWeight={`light`} />
                <input type="hidden" {...register('urlSource')} />
                <div className={`mt-4`}>
                    <button
                        className={`${status === `processing` ? `opacity-80` : `` } ${theme.button['BASE_STYLING']} ${theme.button[btnStyle ? btnStyle : `SOLID_GREEN_HOVER_DARK`]} cursor-pointer w-max flex flex-nowrap items-center gap-2 group mt-8`}
                        type="submit" disabled={status === `processing` ? true : false }>
                            { status === `processing` ? `Sending...` : submitLabel || `Submit`}
                            <svg className="group:hover:text-white group-focus:text-white" width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1328 0.21875C16.4062 0 16.7891 0 17.0625 0.21875L24.2812 7.4375C24.5 7.71094 24.5 8.09375 24.2812 8.36719L17.0625 15.5859C16.7891 15.8047 16.4062 15.8047 16.1328 15.5859L15.0391 14.4922C14.8203 14.2188 14.8203 13.8359 15.0938 13.5625L19.4688 9.29688H0.65625C0.273438 9.29688 0 9.02344 0 8.64062V7.10938C0 6.78125 0.273438 6.45312 0.65625 6.45312H19.4688L15.0938 2.24219C14.8203 1.96875 14.8203 1.58594 15.0391 1.3125L16.1328 0.21875Z" fill="currentColor"/>
                            </svg>
                    </button>
                </div>
            </div>
        </form>
    )
}