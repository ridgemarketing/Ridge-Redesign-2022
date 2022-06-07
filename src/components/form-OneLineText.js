import React from "react"
import { graphql } from "gatsby"
import { theme } from '../static/theme'
import { Formik  } from "formik"

//basic text input
const OneLineText = (props) => {
    return(
        <>
            {props.inputID && props.inputName &&
                <>
                    <input 
                        type="text" 
                        id={'oneLineText' + props.inputID } 
                        className={ theme.forms['INPUT'] } 
                        name={ props.inputName } 

                        />
                    <label 
                        for={'oneLineText' + props.inputID} 
                        className={ theme.text['P_STD'] + theme.forms['LABEL']}
                        placeholder=" "
                        >
                        
                        { props.inputName }
                    </label>
                </>
            }
        </>
    )
}
export default OneLineText