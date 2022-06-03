import React from "react"
import { graphql } from "gatsby"
import { theme } from '../static/theme'
import { Formik  } from "formik"

const MultiLineText = (props) => {
    return(
        <>
            {props.inputID && props.inputName &&
                <>  
                    <textarea 
                        id={ 'textarea' + props.inputID } 
                        name={ props.inputName }
                        className={ theme.forms['INPUT'] + 'resize-none' }   
                    >
                    </textarea>
                    <label 
                        for={ 'textarea' + props.inputID } 
                        className={ theme.text['P_STD'] + theme.forms['LABEL'] }
                        placeholder=" "
                        > 
                        
                        { props.inputName } 
                    </label>
                </>
            }
        </>
    )
}
export default MultiLineText