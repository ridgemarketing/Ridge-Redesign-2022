import React from "react"
import { theme } from '../static/theme'
import { Formik, Field  } from "formik"

export const BasicInputs = (props) => {

    return(
        <div className={ theme.forms['CONTAINER'] }>
            {props.inputID && props.inputName && props.type &&
                <>
                    <Field 
                        type={ props.type }
                        id={'basicInputs' + props.inputID } 
                        className={ theme.forms['INPUT'] + 'form-control ' + 'border-' + props.color + ' text-' + props.color } 
                        name={ props.inputName } 
                        data-pristine-required-message = { props.pristineM }
                        pattern = { props.pristineP }
                        data-pristine-pattern-message = { props.pristineI  }
                        required={ props.required }
                        placeholder=" "
                        />
                     <label 
                        htmlFor={'basicInputs' + props.inputID} 
                        className={ theme.text['P_STD'] + theme.forms['LABEL'] + 'text-' + props.color }
                        >
                        
                        { props.inputName }
                    </label>
                </>
            }
        </div>
    )
}

export const MultiLineText = (props) => {
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

export const SelectInput = (props) => {
    return(
        <div className={ theme.forms['CONTAINER'] }>
            {props.inputID && props.inputName && props.type &&
                <>
                    <Field 
                        as={ props.type }
                        id={'selectInput' + props.inputID } 
                        className={ theme.forms['INPUT'] + 'form-control ' + 'border-' + props.color + ' text-' + props.color } 
                        name={ props.inputName } 
                        data-pristine-required-message = { props.pristineM }
                        pattern = { props.pristineP }
                        data-pristine-pattern-message = { props.pristineI  }
                        required={ props.required }
                        placeholder=" "
                        >
                            <option value={props.option1} > { props.option1 } </option>
                            <option value={props.option2} > { props.option2 }  </option>
                    </Field>
                     <label 
                        htmlFor={'basicInputs' + props.inputID} 
                        className={ theme.text['P_STD'] + theme.forms['LABEL'] + 'text-' + props.color }
                        >
                        
                        { props.inputName }
                    </label>
                </>
            }
        </div>
    )
}

export const FormSubmit = (props) => {

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