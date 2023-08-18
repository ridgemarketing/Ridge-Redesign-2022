import React, { useState, useRef } from "react"
import { theme } from '../../static/theme.js'
import InputMask from "react-input-mask";

export const Input = ({type, label, name, textColor, required, errors, register}) => {
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
                <input type={type} onBlur={checkValue} onFocus={() => setIsFocused(true)} {...register(name, { required: required })} className={`relative w-full ${theme.forms.INPUT} ${theme.text['P_STD']} form-control bg-transparent border-rm-${textColor} text-rm-${textColor} focus:border-rm-green ${errors.name && `border-b-[#EA0000]`}`} />
                {/* errors will return when field validation fails  */}
                {errors.name && <span className="block text-[#EA0000] text-18px leading-26px">This field is required</span>}
            </span>
        </>
    )
}

export const PhoneInput = ({type, label, name, textColor, required, errors, register}) => {
    const [isFocused, setIsFocused] = useState(false)

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
                <InputMask
                    mask="(999) 999-9999"
                    type={type}
                    onBlur={checkValue}
                    onFocus={() => setIsFocused(true)}
                    className={`relative w-full ${theme.forms.INPUT} ${theme.text['P_STD']} form-control bg-transparent border-rm-${textColor} text-rm-${textColor} focus:border-rm-green ${errors.name && `border-b-[#EA0000]`}`}
                    {...register(name, { required: required })}
                    />
                {/* errors will return when field validation fails  */}
                {errors.name && errors.name.type === 'required' && <span className="block text-[#EA0000] text-18px leading-26px">This field is required</span>}
            </span>
        </>
    )
}

export const TextArea = ({label, name, textColor, required, errors, register}) => {
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
                <textarea onBlur={checkValue} onFocus={() => setIsFocused(true)} {...register(name, { required: required })} className={`relative w-full ${theme.forms.INPUT} ${theme.text['P_STD']} form-control bg-transparent border-rm-${textColor} text-rm-${textColor} focus:border-rm-green ${errors.name && `border-b-[#EA0000]`}`} rows={4} />
                {errors.name && <span className="block text-[#EA0000] text-18px leading-26px">This field is required</span>}
            </span>
        </>
    )
}