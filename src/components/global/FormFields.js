import React, { useState, useRef } from "react"
import { theme } from '../../static/theme.js'
import InputMask from "react-input-mask";

export const Input = ({type, label, name, textColor, fontWeight, required, errors, register, bg}) => {
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
                <span className={`${bg === 'white' ? 'bg-white pl-4 pt-4 pb-3' : ''} absolute top-0 left-0 w-full transition-all ${fontWeight === `light` ? theme.text['P_STD'] : theme.text['P_BLD']} duration-300 ${isFocused || type === `file` ? `opacity-0 -translate-y-4` : `opacity-1`}`}>{label}</span>
                {type == 'file' && 
                    <input type={type} onBlur={checkValue} onFocus={() => setIsFocused(true)} {...register(name, { required: required })} className={`relative w-full ${theme.forms.INPUT} ${theme.text['P_STD']} form-control bg-transparent border-rm-${textColor} text-rm-${textColor} focus:border-rm-green ${errors.name && `border-b-[#EA0000]`}`}  accept=".pdf, .doc, .docx" />
                }
                {type !== 'file' && 
                    <input type={type} onBlur={checkValue} onFocus={() => setIsFocused(true)} {...register(name, { required: required })} className={`${bg === 'white' ? 'pl-4 pt-4 pb-3 border-l border-t border-r border-solid border-l-[#48474730] border-r-[#48474730] border-t-[#48474730]' : ''} relative w-full ${theme.forms.INPUT} ${theme.text['P_STD']} form-control bg-transparent border-rm-${textColor} text-rm-${textColor} focus:border-rm-green ${errors.name && `border-b-[#EA0000]`}`} />
                }
                {/* errors will return when field validation fails  */}
                {errors.name && <span className="block text-[#EA0000] text-18px leading-26px">This field is required</span>}
            </span>
        </>
    )
}

export const PhoneInput = ({type, label, name, textColor, fontWeight, required, errors, register, bg}) => {
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
                <span className={`${bg === 'white' ? 'bg-white pl-4 pt-4 pb-3' : ''} absolute top-0 left-0 w-full transition-all ${fontWeight === `light` ? theme.text['P_STD'] : theme.text['P_BLD']} duration-300 ${isFocused || type === `file` ? `opacity-0 -translate-y-4` : `opacity-1`}`}>{label}</span>
                <InputMask
                    mask="(999) 999-9999"
                    type={type}
                    onBlur={checkValue}
                    onFocus={() => setIsFocused(true)}
                    className={`${bg === 'white' ? 'pl-4 pt-4 pb-3 border-l border-t border-r border-solid border-l-[#48474730] border-r-[#48474730] border-t-[#48474730]' : ''} relative w-full ${theme.forms.INPUT} ${theme.text['P_STD']} form-control bg-transparent border-rm-${textColor} text-rm-${textColor} focus:border-rm-green ${errors.name && `border-b-[#EA0000]`}`}
                    {...register(name, { required: required })}
                    />
                {/* errors will return when field validation fails  */}
                {errors.name && errors.name.type === 'required' && <span className="block text-[#EA0000] text-18px leading-26px">This field is required</span>}
            </span>
        </>
    )
}

export const TextArea = ({label, name, textColor, fontWeight, required, errors, register}) => {
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
                <span className={`absolute top-0 left-0 w-full transition-all ${fontWeight === `light` ? theme.text['P_STD'] : theme.text['P_BLD']} duration-300 ${isFocused ? `opacity-0 -translate-y-4` : `opacity-1`}`}>{label}</span>
                <textarea onBlur={checkValue} onFocus={() => setIsFocused(true)} {...register(name, { required: required })} className={`relative w-full ${theme.forms.INPUT} ${theme.text['P_STD']} form-control bg-transparent border-rm-${textColor} text-rm-${textColor} focus:border-rm-green ${errors.name && `border-b-[#EA0000]`}`} rows={4} />
                {errors.name && <span className="block text-[#EA0000] text-18px leading-26px">This field is required</span>}
            </span>
        </>
    )
}

export const Select = ({label, name, options, textColor, fontWeight, required, errors, register}) => {
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
                <span className={`absolute top-0 left-0 w-full transition-all ${fontWeight === `light` ? theme.text['P_STD'] : theme.text['P_BLD']} duration-300 ${isFocused ? `opacity-0 -translate-y-4` : `opacity-1`}`}>{label}</span>
                <select onBlur={checkValue} onFocus={() => setIsFocused(true)} {...register(name, { required: required })} className={`relative w-full ${theme.forms.INPUT} ${theme.text['P_STD']} form-control bg-transparent border-rm-${textColor} text-rm-${textColor} focus:border-rm-green ${errors.name && `border-b-[#EA0000]`}`}>
                    <option value={``} disabled selected></option>
                    {options.map(option => {
                        return(
                            <option value={option}>{option}</option>
                        )
                    })}
                </select>
                {errors.name && <span className="block text-[#EA0000] text-18px leading-26px">This field is required</span>}
            </span>
        </>
    )
}

export const CheckboxGroup = ({label, name, options, textColor, fontWeight, required, errors, register}) => {
    const [selectedValues, setSelectedValues] = useState([])

    const handleChange = (value, isChecked) => {
        if (isChecked) {
            setSelectedValues([...selectedValues, value])
        } else {
            setSelectedValues(selectedValues.filter(v => v !== value))
        }
    }

    return(
        <>
            <label className={`block mb-4 ${theme.text['FOOTER']} ${theme.forms['LABEL']} text-rm-${textColor} ${fontWeight === `light` ? theme.text['P_STD'] : theme.text['P_BLD']}`}>{label}</label>
            <div className={`flex flex-col gap-3`}>
                {options.map((option, index) => {
                    return(
                        <label key={index} className={`flex items-center gap-3 cursor-pointer`}>
                            <input
                                type="checkbox"
                                value={option}
                                {...register(name, { required: required })}
                                onChange={(e) => handleChange(option, e.target.checked)}
                                className={`w-5 h-5 border-2 border-rm-${textColor} text-rm-green focus:ring-rm-green focus:ring-2 rounded`}
                            />
                            <span className={`${theme.text['P_STD']} text-rm-${textColor}`}>{option}</span>
                        </label>
                    )
                })}
            </div>
            {errors[name] && <span className="block mt-2 text-[#EA0000] text-18px leading-26px">This field is required</span>}
        </>
    )
}