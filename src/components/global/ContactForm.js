import React from "react"
import { useForm, ValidationError } from '@formspree/react';
import { theme } from '../../static/theme.js'

export const ContactForm = (props) => {
    const [state, handleSubmit] = useForm("mdovyzbl");
    return(
        <div className={``}>
            {props.heading &&
                <h2 className={`${theme.text.H5} text-rm-black text-center lg:text-left mt-20 xl:mt-0 mb-4`}>{props.heading}</h2>
            }
            <form onSubmit={handleSubmit} className={`relative bg-white shadow-lg ${theme.forms[`HALF` + `_PADDING`]}}`} >
                <label className={`block ${theme.text['P_STD']} ${theme.forms['LABEL']} text-rm-black`} htmlFor="name">Name</label>
                <input className={`w-full ${theme.forms.INPUT} form-control border-${props.color} text-rm-black`} id="name" type="text" name="name" />

                <label className={`block ${theme.text['P_STD']} ${theme.forms['LABEL']} text-rm-black`} htmlFor="company">Company Name</label>
                <input className={`w-full ${theme.forms.INPUT} form-control border-${props.color} text-rm-black`} id="company_name" type="text" name="company_name" />

                <label className={`block ${theme.text['P_STD']} ${theme.forms['LABEL']} text-rm-black`} htmlFor="email">Email</label>
                <input className={`w-full ${theme.forms.INPUT} form-control border-${props.color} text-rm-black`} id="email" type="email" name="email" />

                <label className={`block ${theme.text['P_STD']} ${theme.forms['LABEL']} text-rm-black`} htmlFor="phone">Phone</label>
                <input className={`w-full ${theme.forms.INPUT} form-control border-${props.color} text-rm-black`} id="phone" type="tel" name="phone" />

                <label className={`block ${theme.text['P_STD']} ${theme.forms['LABEL']} text-rm-black`} htmlFor="message">What are your marketing goals?</label>
                <input className={`w-full ${theme.forms.INPUT} form-control border-${props.color} text-rm-black`} id="message" type="textarea" name="message" />
                <div className={`mt-6`}>
                    <button
                        className={`${theme.button['BASE_STYLING']} ${theme.button['SOLID_GREEN_HOVER_DARK']} cursor-pointer min-w-[210px]`}
                        type="submit" disabled={state.submitting}>
                            Let's Talk
                        </button>
                </div>
            </form>
        </div>

    )
}