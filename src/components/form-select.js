import React from "react"
import { theme } from '../static/theme'
import { Formik, Field  } from "formik"

const SelectInput = (props) => {

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
export default SelectInput