import React, { useState } from "react"
import { theme } from '../../static/theme.js'
import { ValidationError } from "@formspree/react"

export const Input = ({type, label, name, textColor, state}) => {
    const [isFocused, setIsFocused] = useState(false)
    //const [hasValue, setHasValue] = useState(false)

    const checkValue = (e) => {
        console.log(e.target.value)
        if (e.target.value !== null && e.target.value !== ``) {
            setIsFocused(true)
        } else {
            setIsFocused(false)
        }
    }

    return(
        <>
            <label className={`block mb-2 ${theme.text['FOOTER']} ${theme.forms['LABEL']} text-rm-${textColor} duration-500 ${isFocused || type === `file` ? `opacity-1` : `opacity-0 translate-y-6`}`} htmlFor={name}>{label}</label>
            <span className={`relative block`}>
                <span className={`absolute top-0 left-0 w-full transition-all ${theme.text['P_BLD']} duration-300 ${isFocused || type === `file` ? `opacity-0 -translate-y-4` : `opacity-1`}`}>{label}</span>
                <input required onBlur={checkValue} onFocus={() => setIsFocused(true)} className={`relative w-full ${theme.forms.INPUT} ${theme.text['P_BLD']} form-control bg-transparent border-rm-${textColor} text-rm-${textColor} focus:border-rm-green`} id={name} type={type} name={name} />
                <ValidationError field={name} prefix={name} errors={state.errors} />
            </span>
        </>
    )
}

export const TextArea = ({label, name, textColor, state}) => {
    const [isFocused, setIsFocused] = useState(false)
    //const [hasValue, setHasValue] = useState(false)

    const checkValue = (e) => {
        console.log(e.target.value)
        if (e.target.value !== null && e.target.value !== ``) {
            setIsFocused(true)
        } else {
            setIsFocused(false)
        }
    }
    return(
        <>
            <label className={`block mb-2 ${theme.text['FOOTER']} ${theme.forms['LABEL']} text-rm-${textColor} duration-500 ${isFocused ? `opacity-1` : `opacity-0 translate-y-6`}`} htmlFor={name}>{label}</label>
            <span className={`relative block`}>
                <span className={`absolute top-0 left-0 w-full transition-all ${theme.text['P_BLD']} duration-300 ${isFocused ? `opacity-0 -translate-y-4` : `opacity-1`}`}>{label}</span>
                <textarea onBlur={checkValue} onFocus={() => setIsFocused(true)} className={`relative w-full ${theme.forms.INPUT} ${theme.text['P_BLD']} form-control bg-transparent border-rm-${textColor} text-rm-${textColor} focus:border-rm-green`} id={name} rows={4} name={name} />
                <ValidationError field={name} prefix={name} errors={state.errors} />
            </span>
        </>
    )
}