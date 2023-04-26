import React, { useEffect } from "react"
import { useForm, ValidationError } from '@formspree/react'
import { theme } from '../../static/theme.js'

export const FormSpreeForm = ({formId, classes, children, submitLabel, btnContainerClasses, btnStyle, setFormState}) => {
    const [state, handleSubmit] = useForm(formId)
    const handleState = () => {
        setFormState(state)
        handleSubmit()
    }

    useEffect(() => {
        setFormState(state)
    }, [])
    return(
        <form onSubmit={handleState} className={classes}>
            {children}
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