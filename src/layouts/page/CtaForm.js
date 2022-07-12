import React, { useRef, useEffect } from "react"
import { theme } from '../../static/theme'
import { Formik, Form  } from 'formik'

import Pristine from 'pristinejs'
import { Container, Section } from '../../components/global/Wrappers.js'
import { BasicInputs, MultiLineText, SelectInput, FormSubmit}  from '../../components/global/Forms'
import { graphql } from "gatsby"

let form_;
const phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

const CtaForm = (props) => {

    console.log('form', props);
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

    const formRef = useRef(null);
    useEffect( () => {
        form_ = new Pristine(formRef.current);
    });

    return(
        <Section settings={ settings }>
            <Container>
                {content.heading &&
                    <h2 className={ 
                        theme.text.H2
                        + ' text-rm-white ' + content.textColor 
                        + ' text-center ' + content.textAlign
                        }> 
                        { content.heading }
                    </h2>
                }
                {content.body &&
                    <p className={ 
                        theme.text['P_STD'] 
                        + ' text-rm-white ' + content.textColor 
                        + ' text-center ' + content.textAlign
                        + ' mt-6'
                        }>
                        { content.body }
                    </p>
                }
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
                    }}  
                >
                 {({ isSubmitting }) => (
                    // class name = props. half form
                    // props.full width 
                    // props.form background color 
                    // props.form drop shadow 
                    <Form ref={formRef} className={ theme.forms['BASE_STYLING'] + theme.forms['FULL'] + 'bg-rm-black drop-shadow-lg' } autoComplete="on">
                        <BasicInputs 
                            type        = { 'text' }
                            color       = { 'rm-white' }
                            inputID     = { props.ID + `0` } 
                            inputName   = { `Your Name` }
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
                            inputID     = { props.ID + '6' }
                            value       = { "SUBMIT" }
                            submit      = { isSubmitting }
                            buttonColor = { 'SOLID_GREEN_HOVER_DARK' }
                        />
                    </Form>
                 )}
                </Formik>
        </Container>
    </Section>
    )
}

export default CtaForm

export const pageQuery = graphql`
  fragment CTAFormPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_CtaForm {
        fieldGroupName
        layoutCtaForm {
          layoutContent {
            body
            heading
          }
          layoutSettings {
            padding {
              bottom
              top
            }
            anchorId
            backgroundColor
            classes
            id
          }
        }
    }
  }
`

export const serviceQuery = graphql`
  fragment CTAFormService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_CtaForm {
        fieldGroupName
        layoutCtaForm {
          layoutContent {
            body
            heading
          }
          layoutSettings {
            padding {
              bottom
              top
            }
            anchorId
            backgroundColor
            classes
            id
          }
        }
    }
  }
`
export const projectQuery = graphql`
  fragment CTAFormProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_CtaForm {
        fieldGroupName
        layoutCtaForm {
          layoutContent {
            body
            heading
          }
          layoutSettings {
            padding {
              bottom
              top
            }
            anchorId
            backgroundColor
            classes
            id
          }
        }
    }
  }
  `
