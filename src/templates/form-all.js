import React, { useRef, useEffect } from "react"
import { theme } from '../static/theme'
import { Formik, Form  } from 'formik'
import Pristine from 'pristinejs'

import { BasicInputs, MultiLineText, SelectInput, FormSubmit}  from '../components/global/Forms'

//const sendGridURL = 'https://api.sendgrid.com/v3/mail/send';
//const sendGridKey = process.env.SENDGRID_API_KEY;
let form_;
const phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

const FormAll = (props) => {

    const formRef = useRef(null);

    useEffect( () => {
        form_ = new Pristine(formRef.current);
    });

    return(
        <>
            <h5 className={ theme.text['H5']  + 'text-center'}>NEED MARKETING SUPPORT?</h5>
            <Formik
                initialValues={{}}
                onSubmit={ async (values, actions) => {
                    
                    let valid = form_.validate();

                    if( valid ){
                        console.log(JSON.stringify(values, null, 2));
                        actions.resetForm({
                            values: { }
                        });
                        
                            // const response = await fetch (sendGridURL, {
                            //     method: 'POST',
                            //     headers: {
                            //         'Authorization' : 'Bearer ' + sendGridKey,
                            //         "Access-Control-Allow-Origin": "http://localhost:8000",
                            //         'Content-Type'  : 'application/json'
                            //     },
                            //     data: {"personalizations": 
                            //             [{"to": [{"email": "dev@ridgemarketing.com"}]}],
                            //             "from": {"email": "dev@ridgemarketing.com"},
                            //             "subject": JSON.stringify(values, null, 2),
                            //             "content": 
                            //                 [{"type": "text/plain", 
                            //                 "value": JSON.stringify(values, null, 2)}]},
                            // }); 
            
                            // if( response.status == 200 ) {
                            //     alert("Thank you for your submission. We will be in touch with you soon about how we can help with your marketing goals.");
                            //     actions.resetForm();
                            // } else {
                            //     alert("uh, oh ");
                            // }

                    }else{}
                }}  
            >
            {({ isSubmitting }) => (
                //class name = props. half form
                //props.full width 
                //props.form background color 
                //props.form drop shadow
                <Form ref={formRef} className={ theme.forms['BASE_STYLING'] + theme.forms['FULL'] + 'bg-rm-black drop-shadow-lg' } autoComplete="on">
                    <BasicInputs 
                        type        = { 'text' }
                        inputID     = { props.ID } 
                        color       = { 'rm-white' }
                        inputName   = { `Name` }
                        required    = { true }
                        pristineM   = { 'Please complete the required field' }
                    />
                    <BasicInputs 
                        type        = { 'text' }
                        color       = { 'rm-white' }
                        inputID     = { props.ID + '1' }
                        inputName   = { 'Company Name' }
                        required    = { true }
                        pristineM   = { 'Please complete the required field' }
                    />
                    <BasicInputs 
                        type        = { 'email' }
                        color       = { 'rm-white' }
                        inputID     = { props.ID + '2' }
                        inputName   = { 'Email' }
                        required    = { true }
                        pristineM   = { 'Please complete the required field' }
                    />
                    <BasicInputs 
                        type        = { 'tel' }
                        color       = { 'rm-white' }
                        inputID     = { props.ID + '3' }
                        inputName   = { 'Phone' }
                        required    = { true }
                        pristineP   = { phoneNumberPattern }
                        pristineI   = { 'Please enter a valid phone number' }
                        pristineM   = { 'Please complete the required field' }
                    />
                    <MultiLineText
                        inputID     = { props.ID + '4' }
                        color       = { 'rm-white' }
                        inputName   = { 'What are Your Marketing Goals?' }
                        required    = { true }
                        pristineM   = { 'Please complete the required field' }
                    />
                    <SelectInput
                       type        = { 'select' }
                       color       = { 'rm-white' }
                       inputID     = { props.ID + '5' }
                       inputName   = { 'Budget Range' }
                       required    = { true }
                       pristineM   = { 'Please complete the required field' }
                       option1     = { '$0 – $10,000' }
                       option2     = { '$10,000 – $30,000' }
                    /> 
                    <FormSubmit 
                        inputID     = { props.ID }
                        value       = { "SUBMIT" }
                        submit      = { isSubmitting }
                        buttonColor = { 'SECONDARY_LIGHT_H_W' }
                    />
                </Form>
            )}
            </Formik>
        </>
    )
}

export default FormAll