import React, { useRef, useEffect } from "react"
import { theme } from '../../static/theme'
import { Formik, Form  } from 'formik'

import Pristine from 'pristinejs'
import { BasicInputs, MultiLineText, SelectInput, FormSubmit}  from './FormParts'
 
let form_;
const phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

const FormWrapper = (props) => {

    const formSize      = props.formSize === `FULL` ? `FULL`:`HALF`;
    let formBkg         = props.formBkg;
    const dropShadow    = props.dropShadow === true ? `drop-shadow-lg` :``;
    let full            = false;
    let half            = false;

    if(formSize === 'FULL'){
        full = true;
    }
    if(formSize === 'HALF'){
        half = true;
    }

    if(formBkg === 'white'){
        formBkg = `bg-rm-white`;
    }else{
        formBkg = `bg-rm-black`;
    }

    const textColor     = formBkg === `bg-rm-black` ? `rm-white` : `rm-black`;
    const buttonColor   = formBkg === `bg-rm-black` ? `SOLID_GREEN_HOVER_LIGHT` : `SOLID_GREEN_HOVER_DARK`;

    const formRef = useRef(null);
    useEffect( () => {
        form_ = new Pristine(formRef.current);
    });

    return( 
        <Formik
            initialValues={{}}
            onSubmit={ async (values, actions) => {
                
                let valid = form_.validate();

                // if( valid ){
                //     console.log(JSON.stringify(values, null, 2));
                //     actions.resetForm({
                //         values: { }
                //     });
                //         const response = await fetch (sendGridURL, {
                //             method: 'POST',
                //             headers: {
                //                 'Authorization' : 'Bearer ' + sendGridKey,
                //                 "Access-Control-Allow-Origin": "http://localhost:8000",
                //                 'Content-Type'  : 'application/json'
                //             },
                //             data: {"personalizations": 
                //                     [{"to": [{"email": "dev@ridgemarketing.com"}]}],
                //                     "from": {"email": "dev@ridgemarketing.com"},
                //                     "subject": JSON.stringify(values, null, 2),
                //                     "content": 
                //                         [{"type": "text/plain", 
                //                         "value": JSON.stringify(values, null, 2)}]},
                //         }); 

                //         if( response.status == 200 ) {
                //             alert("Thank you for your submission. We will be in touch with you soon about how we can help with your marketing goals.");
                //             actions.resetForm();
                //         } else {
                //             alert("uh, oh ");
                //         }

                // }else{}
        }}>
        {({ isSubmitting }) => (
            <>
            <div className={`${theme.forms.BASE_STYLING} ${theme.forms[formSize]}`}>
              {props.heading &&
                <h2 className={`${theme.text.H5} ${textColor} text-center lg:text-left mt-20 xl:mt-0 mb-4`}>{props.heading}</h2>
              }
                <Form 
                    ref={formRef} 
                    className={`${formBkg} ${dropShadow} ${theme.forms[formSize + `_PADDING`]} ${theme.forms[formSize + `_DISPLAY`]}`} 
                    autoComplete="on">
                        <BasicInputs 
                            type        = { 'text' }
                            color       = { textColor }
                            inputID     = { `form-part-0` } 
                            inputName   = { `Name` }
                            required    = { true }
                            pristineM   = { 'Please complete the required field' }
                        />
                        <BasicInputs 
                            type        = { 'text' }
                            color       = { textColor }
                            inputID     = { 'form-part-1' }
                            inputName   = { 'Company Name' }
                            required    = { true }
                            pristineM   = { 'Please complete the required field' }
                        />
                        <BasicInputs 
                            type        = { 'email' }
                            color       = { textColor }
                            inputID     = { 'form-part-2' }
                            inputName   = { 'Email' }
                            required    = { true }
                            pristineM   = { 'Please complete the required field' }
                        />
                        <BasicInputs 
                            type        = { 'tel' }
                            color       = { textColor}
                            inputID     = { 'form-part-3' }
                            inputName   = { 'Phone' }
                            required    = { true }
                            pristineP   = { phoneNumberPattern }
                            pristineI   = { 'Please enter a valid phone number' }
                            pristineM   = { 'Please complete the required field' }
                        />
                        {half &&
                            <MultiLineText
                                inputID     = { 'form-part-4' }
                                color       = { textColor }
                                inputName   = { 'What are Your Marketing Goals?' }
                                required    = { true }
                                pristineM   = { 'Please complete the required field' }
                            />
                        }
                        {full && 
                        <>
                            <SelectInput
                                type        = { 'select' }
                                color       = { textColor }
                                inputID     = { 'form-part-4' }
                                inputName   = { 'Budget Range' }
                                required    = { true }
                                pristineM   = { 'Please complete the required field' }
                                option1     = { '$0 – $10,000' }
                                option2     = { '$10,000 – $30,000' }
                            /> 
                            <BasicInputs
                                type        = { 'date' }
                                inputID     = { 'form-part-5' }
                                color       = { textColor }
                                inputName   = { 'Timing for Start' }
                                required    = { true }
                                pristineM   = { 'Please complete the required field' }
                            />
                        </>
                        }
                        <FormSubmit 
                            inputID     = { 'form-part-6' }
                            value       = { "SUBMIT" }
                            submit      = { isSubmitting }
                            buttonColor = { buttonColor }
                        />
                </Form>
            </div>
            </>
        )}
        </Formik>
    )
}

export default FormWrapper