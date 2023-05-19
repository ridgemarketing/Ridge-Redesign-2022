import React from "react"
import { useForm } from "@formspree/react"
import { Input, TextArea } from "./FormFields"
import { theme } from "../../static/theme"

export const FormCareers = ({formId, classes, submitLabel, btnContainerClasses, btnStyle}) => {
    const [state, handleSubmit] = useForm(formId)

    return(
        <form onSubmit={handleSubmit} className={classes}>

            {state.errors[0] && 
                <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                    {state.errors.map((error) => {
                        return(
                            <p className={`${theme.text.P_BLD}`}>{error.message}</p>
                        )
                    })}
                </div>
            }

            {state.succeeded &&
                <div className={`bg-rm-aqua text-white py-3 px-6 mt-3 mb-6`}>
                    <p className={`${theme.text.P_BLD}`}>Thank you for your submission. We will be in touch with you soon.</p>
                </div>
            }

            <span className={`block mb-2`}><Input state={state} type={`text`} name={`name`} label={`Name`} textColor={`white`} bgColor={`black`} /></span>
            <span className={`block mb-2`}><Input state={state} type={`email`} name={`email`} label={`Email`} textColor={`white`} bgColor={`black`} /></span>
            <span className={`block mb-2`}><Input state={state} type={`tel`} name={`phone`} label={`Phone`} textColor={`white`} bgColor={`black`} /></span>
            <span className={`block mb-2`}><Input state={state} type={`text`} name={`position`} label={`Position Sought`} textColor={`white`} bgColor={`black`} /></span>
            <span className={`block mb-2`}><Input state={state} type={`url`} name={`portfolio`} label={`Portfolio Link`} textColor={`white`} bgColor={`black`} /></span>
            <span className={`block`}><Input state={state} type={`file`} name={`resume`} label={`Upload Resume`} textColor={`white`} bgColor={`black`} /></span>

            <div className={`mt-6 ${btnContainerClasses ? btnContainerClasses : ``}`}>
                <button
                    className={`${theme.button['BASE_STYLING']} ${theme.button[btnStyle ? btnStyle : `SOLID_GREEN_HOVER_DARK`]} cursor-pointer min-w-[210px]`}
                    type="submit" disabled={state.submitting}>
                        {submitLabel}
                </button>
            </div>
        </form>
    )
}

export const FormContacPage = ({formId, classes, submitLabel, btnContainerClasses, btnStyle}) => {
    const [state, handleSubmit] = useForm(formId)

    return(
        <form onSubmit={handleSubmit} className={classes}>
            {state.errors[0] && 
                <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                    {state.errors.map((error) => {
                        return(
                            <p className={`${theme.text.P_BLD}`}>{error.message}</p>
                        )
                    })}
                </div>
            }

            {state.succeeded &&
                <div className={`bg-rm-aqua text-white py-3 px-6 mt-3 mb-6`}>
                    <p className={`${theme.text.P_BLD}`}>Thank you for your submission. We will be in touch with you soon about how we can help with your marketing goals.</p>
                </div>
            }

            <span className={`mb-6 block`}><Input state={state} type={`text`} name={`name`} label={`Name`} bgColor={`white`} textColor={`black`} /></span>
            <span className={`mb-6 block`}><Input state={state} type={`text`} name={`company`} label={`Company`} bgColor={`white`} textColor={`black`} /></span>
            <span className={`mb-6 block`}><Input state={state} type={`email`} name={`email`} label={`Email`} bgColor={`white`} textColor={`black`} /></span>
            <span className={`mb-6 block`}><Input state={state} type={`tel`} name={`phone`} label={`Phone`} bgColor={`white`} textColor={`black`} /></span>
            <span className={`mb-6 block`}><TextArea state={state} name={`message`} label={`What are your marketing goals?`} bgColor={`white`} textColor={`black`} /></span>
            
            <div className={`mt-6 ${btnContainerClasses ? btnContainerClasses : ``}`}>
                <button
                    className={`${theme.button['BASE_STYLING']} ${theme.button[btnStyle ? btnStyle : `SOLID_GREEN_HOVER_DARK`]} cursor-pointer min-w-[210px]`}
                    type="submit" disabled={state.submitting}>
                        {submitLabel}
                </button>
            </div>
        </form>
    )
}

export const FormCTALayout = ({formId, classes, submitLabel, btnContainerClasses, btnStyle, textColor, bgColor}) => {
    const [state, handleSubmit] = useForm(formId)
    return(
        <form onSubmit={handleSubmit} className={classes}>
            {state.errors[0] && 
                <div className={`bg-[#E10000] text-white py-3 px-6 mt-3 mb-6`}>
                    {state.errors.map((error) => {
                        return(
                            <p className={`${theme.text.P_BLD}`}>{error.message}</p>
                        )
                    })}
                </div>
            }

            {state.succeeded &&
                <div className={`bg-rm-aqua text-white py-3 px-6 mt-3 mb-6`}>
                    <p className={`${theme.text.P_BLD}`}>Thank you for your submission. We will be in touch with you soon about how we can help with your marketing goals.</p>
                </div>
            }

            <span className={`mb-6 block md:col-span-1`}><Input state={state} type={`text`} name={`name`} label={`Name`} textColor={textColor} bgColor={bgColor} /></span>
            <span className={`mb-6 block md:col-span-1`}><Input state={state} type={`text`} name={`company`} label={`Company`} textColor={textColor} bgColor={bgColor} /></span>
            <span className={`mb-6 block md:col-span-1`}><Input state={state} type={`email`} name={`email`} label={`Email`} textColor={textColor} bgColor={bgColor} /></span>
            <span className={`mb-6 block md:col-span-1`}><Input state={state} type={`tel`} name={`phone`} label={`Phone`} textColor={textColor} bgColor={bgColor} /></span>
            <span className={`block md:col-span-1`}> <Input state={state} type={`text`} name={`budget`} label={`Budget Range`} textColor={textColor} bgColor={bgColor} /></span>
            <span className={`block md:col-span-1`}><Input state={state} type={`text`} name={`timing`} label={`Timing for Start`} textColor={textColor} bgColor={bgColor} /></span>

            <div className={`mt-6 ${btnContainerClasses ? btnContainerClasses : ``}`}>
                <button
                    className={`${theme.button['BASE_STYLING']} ${theme.button[btnStyle ? btnStyle : `SOLID_GREEN_HOVER_DARK`]} cursor-pointer min-w-[210px]`}
                    type="submit" disabled={state.submitting}>
                        {submitLabel}
                </button>
            </div>
        </form>
    )
}