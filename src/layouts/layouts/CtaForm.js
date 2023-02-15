import React from "react"
import { theme } from '../../static/theme'

import { Container, Section } from '../../components/global/Wrappers.js'
import { graphql } from "gatsby"
import FormWrapper from "../../components/global/FormWrapper"

const CtaForm = (props) => {

    const content   = props.layoutData.layoutContent;
    const settings  = props.layoutData.layoutSettings;

    const textColor = settings.backgroundColor === `white` ? `text-rm-black` : `text-rm-white`;

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
              <FormWrapper
                formSize    = {`FULL`}
                formBkg     = {settings.backgroundColor}
                dropShadow  = {false}
              />
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
