import React from "react"
import { graphql } from "gatsby"
import { theme } from '../static/theme'
import { Formik  } from "formik"

//basic text input
const OneLineText = (props) => {
    return(
        <>
            {props.inputID &&
                <>
                    <label for={'oneLineText' + props.inputID}>{ props.inputName }</label>
                    <input type="text" id={'oneLineText' + props.inputID } name={ props.inputName } required />
                </>
            }
        </>
    )
}
export default OneLineText