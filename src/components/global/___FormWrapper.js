import React, { useRef, useEffect } from "react"
import { theme } from '../../static/theme'
import { Formik, Form  } from 'formik'

//import Pristine from 'pristinejs'
import { BasicInputs, MultiLineText, SelectInput, FormSubmit, FileUpload}  from './__FormParts'
import { useState } from "react";
 
const phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

const FormWrapper = (props) => {

    let formSize        = props.formSize;
    let formBkg         = props.formBkg;
    let full            = false;
    let half            = false;
    let careers         = false;
    let other           = true;

    let textColor
    let buttonColor
    let dropShadow    = props.dropShadow === true ? `drop-shadow-lg` :``;

    const formRef               = useRef(null);
    const [isSent, setIsSent]   = useState(false)
    const [status, setStatus]   = useState(false)


    if(formSize === 'FULL'){
        full = true;
    }
    if(formSize === 'HALF'){
        half = true;
    }

    if(formBkg === 'white'){
        formBkg     = `bg-rm-white`;
        textColor   = `text-rm-black`
        buttonColor = `SOLID_GREEN_HOVER_DARK`
    }else{
        formBkg     = `bg-rm-black`;
        textColor   = `text-rm-white`
        buttonColor = `SOLID_GREEN_HOVER_LIGHT`
    }

    if(props.careers){
        if(props.careers === true){
            careers = true;
            other   = false;
        }
    }


    useEffect( () => {
        //let form_ = new Pristine(formRef.current);
    }, []);

    return( 
        <Formik
            initialValues={{}}
            onSubmit={ async (values, actions) => {
                const file = values['Resume'];
                const reader = new FileReader();

                reader.addEventListener("load", () => {
                    if (file) {
                        reader.readAsDataURL(file);
                        console.log(reader.result)
                        console.log(`file???`)
                    }
                  }, false);



                console.log(file)
                

                const res = await fetch("/api/sendgrid", {
                    body: JSON.stringify({
                        emailTo: `aaron@ridgemarketing.com`,
                        email: values['Email'],
                        subject: `New form submission`,
                        message: JSON.stringify(values)
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                    method: "POST",
                  })
            
                const { error } = await res.json();
                  
                  if (error) {
                        console.log(error);
                        setStatus(`fail-email`)
                        return
                  }

                  setStatus('success')
        }}>
        {({ isSubmitting }) => (
            <>
                {other &&
                    <div className={`${theme.forms.BASE_STYLING} ${theme.forms[formSize]}`}>
                        {props.heading &&
                            <h2 className={`${theme.text.H5} ${textColor} text-center lg:text-left mt-20 xl:mt-0 mb-4`}>{props.heading}</h2>
                        }
                        <Form 
                            ref={formRef} 
                            className={`relative ${formBkg} ${dropShadow} ${theme.forms[formSize + `_PADDING`]}}`} 
                            autoComplete="on">
                                {status === `success` && 
                                    <div className={`absolute top-0 left-0 w-full text-center ${theme.forms[formSize + `_PADDING`]}`}>
                                        <h3 className={`${theme.text.H5} text-rm-green text-26px mb-6`}>Thank you for your submission.</h3>
                                        <p className={`${theme.text.P_STD} ${textColor}`}>We will be in touch with you soon about how we can help with your marketing goals.</p>
                                    </div>
                                }
                                    <div className={`${theme.forms[formSize + `_DISPLAY`]} ${status === `success` ? `opacity-0` : `opacity-100`}`}>
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
                                        

                                    </div>
                                <div className={`mt-8`}>
                                    {status === 'fail-email' &&
                                        <p>
                                            Your submission was not sent. Please try again.
                                        </p>
                                    }
                                </div>
                        </Form>
                    </div>
                }
                {careers &&
                    <div className={`xl:max-w-[${theme.containers.slim['lg']}] ml-auto mr-auto mt-10 relative`}>
                        {status === `success` && 
                            <div className={`absolute top-0 left-0 w-full text-center ${theme.forms[formSize]} h-full z-[2]`}>
                                <h3 className={`${theme.text.H5} text-rm-green text-26px mb-6`}>Thank you for your submission.</h3>
                                <p className={`${theme.text.P_STD} ${textColor}`}>We will be in touch with you soon about how we can help with your marketing goals.</p>
                            </div>
                        }
                        <div className={`${theme.forms.BASE_STYLING} ${theme.forms[formSize]} ${theme.forms[formSize + `_DISPLAY`]} ${status === `success` ? `opacity-0` : `opacity-100`}`}>
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
                                        type        = { 'email' }
                                        color       = { textColor }
                                        inputID     = { 'form-part-1' }
                                        inputName   = { 'Email' }
                                        required    = { true }
                                        pristineM   = { 'Please complete the required field' }
                                    />
                                    <BasicInputs 
                                        type        = { 'tel' }
                                        color       = { textColor}
                                        inputID     = { 'form-part-2' }
                                        inputName   = { 'Phone' }
                                        required    = { true }
                                        pristineM   = { 'Please complete the required field' }
                                    />
                                    <BasicInputs 
                                        type        = { 'text' }
                                        color       = { textColor }
                                        inputID     = { `form-part-3` } 
                                        inputName   = { `Positon Sought` }
                                        required    = { true }
                                        pristineM   = { 'Please complete the required field' }
                                    />
                                    <BasicInputs 
                                        type        = { 'text' }
                                        color       = { textColor }
                                        inputID     = { `form-part-4` } 
                                        inputName   = { `Portfolio/Resume Link` }
                                        required    = { true }
                                        pristineM   = { 'Please complete the required field' }
                                    />
                                    <MultiLineText
                                        inputID     = { 'form-part-5' }
                                        color       = { textColor }
                                        inputName   = { 'What would bring you to the barn?' }
                                        required    = { true }
                                        pristineM   = { 'Please complete the required field' }
                                    />
                                    {/* <FileUpload 
                                        color       = { textColor }
                                        inputID     = { `form-part-6` } 
                                        inputName   = { `Resume` }
                                        required    = { true }
                                        pristineM   = { 'Please complete the required field' }
                                    /> */}
                                    <FormSubmit 
                                        inputID     = { 'form-part-7' }
                                        value       = { "SUBMIT" }
                                        submit      = { isSubmitting }
                                        buttonColor = { buttonColor }
                                    />
                            </Form>
                        </div>
                    </div>
                }
            </>
        )}
        </Formik>
    )
}

export default FormWrapper