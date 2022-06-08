import React from "react"
import { theme } from '../static/theme'
import { Field } from "formik"

const MultiLineText = (props) => {
    return(
        <div className={ theme.forms['CONTAINER'] }>
            {props.inputID && props.inputName &&
                <>  
                    <Field 
                        component="textarea"
                        id={ 'textarea' + props.inputID } 
                        name={ props.inputName }
                        className={ theme.forms['INPUT'] + 'resize-none ' + 'border-' + props.color + ' text-' + props.color} 
                        required={ props.required }   
                        spellCheck
                        placeholder=" "
                    />
                    
                    <label 
                        htmlFor={ 'textarea' + props.inputID } 
                        className={ theme.text['P_STD'] + theme.forms['LABEL']  + ' text-' + props.color }
                        placeholder=" "
                        > 
                        
                        { props.inputName } 
                    </label>
                </>
            }
        </div>
    )
}
export default MultiLineText