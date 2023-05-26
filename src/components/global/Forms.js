import React, { useState } from "react"
import { Input, TextArea } from "./FormFields"
import { theme } from "../../static/theme"
import { useForm } from "react-hook-form";

export const FormCareers = ({classes, submitLabel, btnContainerClasses, btnStyle}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [status, setStatus] = useState(false)

    const onSubmit = async (data) => {
        console.log(data)

        const message = JSON.stringify(data, null, " ")

        console.log(message)

        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
            email: data.email,
            subject: `New Careers Form Submission`,
            message: message
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
    }

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
            <span className={`block`}><Input errors={errors} register={register} required={true} type={`url`} name={`portfolio`} label={`Portfolio Link`} textColor={`white`} bgColor={`black`} /></span>
            {/* <span className={`block`}><Input errors={errors} register={register} required={true} type={`file`} name={`resume`} label={`Upload Resume`} textColor={`white`} bgColor={`black`} /></span> */}

            <div className={`mt-6 ${btnContainerClasses ? btnContainerClasses : ``}`}>
                <button
                    className={`${theme.button['BASE_STYLING']} ${theme.button[btnStyle ? btnStyle : `SOLID_GREEN_HOVER_DARK`]} cursor-pointer min-w-[210px]`}
                    type="submit">
                        {submitLabel}
                </button>
            </div>
        </form>
    )
}

export const FormContacPage = ({classes, submitLabel, btnContainerClasses, btnStyle}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [status, setStatus] = useState(false)

    const onSubmit = async (data) => {
        console.log(data)

        const message = JSON.stringify(data, null, " ")

        console.log(message)

        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
            email: data.email,
            subject: `New Contact Form Submission`,
            message: message
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
    }

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

            <span className={`mb-6 block`}><Input errors={errors} register={register} required={true} type={`text`} name={`name`} label={`Name`} bgColor={`white`} textColor={`black`} /></span>
            <span className={`mb-6 block`}><Input errors={errors} register={register} required={true} type={`text`} name={`company`} label={`Company`} bgColor={`white`} textColor={`black`} /></span>
            <span className={`mb-6 block`}><Input errors={errors} register={register} required={true} type={`email`} name={`email`} label={`Email`} bgColor={`white`} textColor={`black`} /></span>
            <span className={`mb-6 block`}><Input errors={errors} register={register} required={true} type={`tel`} name={`phone`} label={`Phone`} bgColor={`white`} textColor={`black`} /></span>
            <span className={`mb-6 block`}><TextArea errors={errors} register={register} required={true} name={`message`} label={`What are your marketing goals?`} bgColor={`white`} textColor={`black`} /></span>
            
            <div className={`mt-6 ${btnContainerClasses ? btnContainerClasses : ``}`}>
                <button
                    className={`${theme.button['BASE_STYLING']} ${theme.button[btnStyle ? btnStyle : `SOLID_GREEN_HOVER_DARK`]} cursor-pointer min-w-[210px]`}
                    type="submit">
                        {submitLabel}
                </button>
            </div>
        </form>
    )
}

export const FormCTALayout = ({classes, submitLabel, btnContainerClasses, btnStyle, textColor, bgColor}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [status, setStatus] = useState(false)

    const onSubmit = async (data) => {
        console.log(data)

        const message = JSON.stringify(data, null, " ")

        console.log(message)

        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
            email: data.email,
            subject: `New CTA Form Submission`,
            message: message
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
    }
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
            
            <span className={`mb-6 block md:col-span-1`}><Input errors={errors} register={register} required={true} type={`text`} name={`name`} label={`Name`} textColor={textColor} bgColor={bgColor} /></span>
            <span className={`mb-6 block md:col-span-1`}><Input errors={errors} register={register} required={true} type={`text`} name={`company`} label={`Company`} textColor={textColor} bgColor={bgColor} /></span>
            <span className={`mb-6 block md:col-span-1`}><Input errors={errors} register={register} required={true} type={`email`} name={`email`} label={`Email`} textColor={textColor} bgColor={bgColor} /></span>
            <span className={`mb-6 block md:col-span-1`}><Input errors={errors} register={register} required={true} type={`tel`} name={`phone`} label={`Phone`} textColor={textColor} bgColor={bgColor} /></span>
            <span className={`block md:col-span-1`}> <Input errors={errors} register={register} required={true} type={`text`} name={`budget`} label={`Budget Range`} textColor={textColor} bgColor={bgColor} /></span>
            <span className={`block md:col-span-1`}><Input errors={errors} register={register} required={true} type={`text`} name={`timing`} label={`Timing for Start`} textColor={textColor} bgColor={bgColor} /></span>

            <div className={`mt-6 ${btnContainerClasses ? btnContainerClasses : ``}`}>
                <button
                    className={`${theme.button['BASE_STYLING']} ${theme.button[btnStyle ? btnStyle : `SOLID_GREEN_HOVER_DARK`]} cursor-pointer min-w-[210px]`}
                    type="submit">
                        {submitLabel}
                </button>
            </div>
        </form>
    )
}