import React from "react"
import { graphql } from "gatsby"
import { theme } from '../static/theme'
import { Formik  } from "formik"

const MultiLineText = (props) => {
    return(
        <>
            {props.inputID &&
                <>  
                    <label for={ 'textarea' + props.inputID }> { props.inputName } </label>
                    <textarea id={ 'textarea' + props.inputID } name={ props.inputName }></textarea>
                </>
            }
        </>
    )
}
export default MultiLineText