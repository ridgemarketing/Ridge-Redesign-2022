import React, { useState } from "react"
import { theme } from '../../static/theme'

import { Container, Section } from '../../components/global/Wrappers.js'
import { graphql } from "gatsby"
import { FormSpreeForm } from "../../components/global/FormSpreeForm"
import { Input } from "../../components/global/FormFields"
import { FormCTALayout } from "../../components/global/Forms"

const CtaForm = (props) => {

    const content   = props.layoutData.layoutContent;
    const settings  = props.layoutData.layoutSettings;
    let textColor   = `rm-white`
    let btnStyle    = `SOLID_GREEN_HOVER_LIGHT`
    
    if (settings.backgroundColor === `white`) {
      textColor = `black`
      btnStyle = `SOLID_GREEN_HOVER_DARK`
    }
    
    const formId                = `xnqyroyz`
    const [formState, setFormState] = useState({})

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
                  <FormCTALayout formId={formId} classes={`md:grid md:grid-cols-2 gap-4`} submitLabel={`Submit`} btnContainerClasses={`md:col-span-2 text-center`} btnStyle={btnStyle} textColor={textColor} bgColor={settings.backgroundColor} />
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
