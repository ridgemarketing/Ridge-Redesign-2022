import React from "react"
import { theme } from '../static/theme'
import { Field  } from "formik"

const FormSubmit = (props) => {

    return(
        <>
            {props.value && props.inputID &&
                <Field 
                    type='submit'
                    id={'formSubmit' + props.inputID } 
                    className={ theme.button['BASE_STYLING'] + ' ' + theme.button[props.buttonColor] + ' w-[210px] h-min -mt-6'}
                    value={props.value}
                    disabled={props.submit}
                />
            }
        </>
    )

}
export default FormSubmit            