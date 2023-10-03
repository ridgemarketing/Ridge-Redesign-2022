import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"
import { motion } from "framer-motion"
import { FormLanders } from "../../components/global/Forms"

const TwoColTextForm = (props) => {

    const content     = props.layoutData.layoutContent;
    const settings    = props.layoutData.layoutSettings;
    const textContent = content.textContent;
    const textHeading = textContent.heading;
    const textBody    = textContent.body;
    const formContent = content.formContent;
    const formHeading = formContent.heading;

    return (
        <Section settings={settings}>
            <Container container={settings.containerWidth}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12`}>
                <div className={`col-span-1`}>
                  {content &&
                    <div>
                      {textHeading &&
                        <h2 className={`font-stratos uppercase font-bold text-[2.875rem] leading-[1.1] mb-8`}>{textHeading}</h2>
                      }

                      {textBody && 
                        <div dangerouslySetInnerHTML={{__html: Parser(textBody)}} className={`block two-col-text-form-body`}></div>
                      }
                    </div>
                  }
                </div>
                <div className={`col-span-1 relative`}>
                  <div id={`contact-form`} class="absolute -top-20"></div>
                  {formHeading &&
                    <h3 className={`${theme.text.H5} mb-5`}>{formHeading}</h3>
                  }
                  <div className={`shadow-block p-10`}>
                    <FormLanders />
                  </div>
                  
                </div>
              </div>
            </Container>
        </Section>
    )
}

export default TwoColTextForm


export const query = graphql`
  fragment TwoColTextFormPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_TwoColTextForm {
        fieldGroupName
        layoutTwoColTextForm {
          layoutContent {
            formContent {
              heading
            }
            textContent {
              body
              heading
            }
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
            containerWidth
          }
        }
      }
  }
`

export const serviceQuery = graphql`
  fragment TwoColTextFormService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_TwoColTextForm {
        fieldGroupName
        layoutTwoColTextForm {
          layoutContent {
            formContent {
              heading
            }
            textContent {
              body
              heading
            }
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
            containerWidth
          }
        }
      }
  }
`

export const projectQuery = graphql`
  fragment TwoColTextFormProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_TwoColTextForm {
        fieldGroupName
        layoutTwoColTextForm {
          layoutContent {
            formContent {
              heading
            }
            textContent {
              body
              heading
            }
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
            containerWidth
          }
        }
      }
  }
`

export const landerQuery = graphql`
  fragment TwoColTextFormLander on WpLander_Flexiblelayouts_Layouts {
    ... on WpLander_Flexiblelayouts_Layouts_TwoColTextForm {
        fieldGroupName
        layoutTwoColTextForm {
          layoutContent {
            formContent {
              heading
            }
            textContent {
              body
              heading
            }
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
            containerWidth
          }
        }
      }
  }
`