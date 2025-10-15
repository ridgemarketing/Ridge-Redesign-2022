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
                navigate("/thank-you/")
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
                        <span className={`mb-6 block`}><Select errors={errors} register={register} required={true} name={`serviceArea`} label={`Service Area`} options={[`Local`,`Regional`,`National`,`Global`]} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
                        <span className={`mb-6 block`}><CheckboxGroup errors={errors} register={register} required={true} name={`interests`} label={`What are you interested in? (Select all that apply)`} options={['Branding', 'Marketing Strategy & Messaging', 'Website Design & Development', 'Content Marketing', 'Search & AI Marketing', 'Digital Advertising', 'Social Media Support', 'Video Production']} bgColor={`white`} textColor={`black`} fontWeight={`light`} /></span>
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