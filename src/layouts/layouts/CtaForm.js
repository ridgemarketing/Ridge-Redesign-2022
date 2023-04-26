import React from "react"
import { theme } from '../../static/theme'

import { Container, Section } from '../../components/global/Wrappers.js'
import { graphql } from "gatsby"
import { FormSpreeForm } from "../../components/global/FormSpreeForm"
import { Input } from "../../components/global/FormFields"

const CtaForm = (props) => {

    const content   = props.layoutData.layoutContent;
    const settings  = props.layoutData.layoutSettings;
    let textColor   = `rm-white`
    let btnStyle    = `SOLID_GREEN_HOVER_LIGHT`
    if (settings.backgroundColor === `white`) {
      textColor = `black`
      btnStyle = `SOLID_GREEN_HOVER_DARK`
    }
    

    return(
        <Section settings={ settings }>
            <Container>
                {content.heading &&
                  <h2 className={`${theme.text.H2} ${textColor} text-center`}> 
                      { content.heading }
                  </h2>
                }
                {content.body &&
                  <p className={`${theme.text.P_STD} ${textColor} text-center mt-6`}>
                      { content.body }
                  </p>
                }
                <div className={`mt-10`}>
                  <FormSpreeForm formId={`mdovyzbl`} classes={`md:grid md:grid-cols-2 gap-4`} submitLabel={`Submit`} btnContainerClasses={`md:col-span-2 text-center`} btnStyle={btnStyle}>
                    <span className={`mb-6 block md:col-span-1`}><Input type={`text`} name={`name`} label={`Name`} textColor={textColor} bgColor={settings.backgroundColor} /></span>
                    <span className={`mb-6 block md:col-span-1`}><Input type={`text`} name={`company`} label={`Company`} textColor={textColor} bgColor={settings.backgroundColor} /></span>
                    <span className={`mb-6 block md:col-span-1`}><Input type={`email`} name={`email`} label={`Email`} textColor={textColor} bgColor={settings.backgroundColor} /></span>
                    <span className={`mb-6 block md:col-span-1`}><Input type={`tel`} name={`phone`} label={`Phone`} textColor={textColor} bgColor={settings.backgroundColor} /></span>
                    <span className={`block md:col-span-1`}> <Input type={`text`} name={`budget`} label={`Budget Range`} textColor={textColor} bgColor={settings.backgroundColor} /></span>
                    <span className={`block md:col-span-1`}><Input type={`text`} name={`timing`} label={`Timing for Start`} textColor={textColor} bgColor={settings.backgroundColor} /></span>
                  </FormSpreeForm>
                </div>
        </Container>
    </Section>
    )
}

export default CtaForm

export const query = graphql`
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
