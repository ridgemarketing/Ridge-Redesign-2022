import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"
import Buttons from "../../components/global/Buttons"

const TwoColTextText = (props) => {

    const content        = props.layoutData.layoutContent
    const settings       = props.layoutData.layoutSettings
    const textColor      = settings.backgroundColor === 'black' ? 'text-rm-white' : 'text-rm-black'
    const componentButton = content.componentButton ?? false
    const sectionBackground = settings.backgroundColor || 'white'

    return (
        <Section settings={settings}>
            <Container container={settings.containerWidth}>
                {content &&
                    <div className={'xl:grid grid-cols-2 gap-16'}>
                        <div className={'pb-8 xl:pb-0'}>
                            {content.heading &&
                                <h2
                                    dangerouslySetInnerHTML={{ __html: Parser(content.heading) }}
                                    className={`font-stratos font-bold uppercase text-60px leading-[3.73125rem] ${textColor}`}
                                ></h2>
                            }
                        </div>

                        <div className={'text-left'}>
                            {content.body &&
                                <div
                                    dangerouslySetInnerHTML={{ __html: Parser(content.body) }}
                                    className={`${theme.text.P_STD} ${textColor} [&_p]:mb-5 [&_strong]:font-bold [&_a]:underline`}
                                ></div>
                            }
                            {componentButton?.link?.url &&
                                <div className={'mt-10'}>
                                    <Buttons content={componentButton} sectionBackground={sectionBackground} />
                                </div>
                            }
                        </div>
                    </div>
                }
            </Container>
        </Section>
    )
}

export default TwoColTextText


export const query = graphql`
  fragment TwoColTextTextPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_TwoColTextText {
        fieldGroupName
        layoutTwoColTextText {
          layoutContent {
            heading
            body
            componentButton {
              style
              colors {
                resting
              }
              link {
                url
                title
                target
              }
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
  fragment TwoColTextTextService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_TwoColTextText {
        fieldGroupName
        layoutTwoColTextText {
          layoutContent {
            heading
            body
            componentButton {
              style
              colors {
                resting
              }
              link {
                url
                title
                target
              }
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
  fragment TwoColTextTextProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_TwoColTextText {
        fieldGroupName
        layoutTwoColTextText {
          layoutContent {
            heading
            body
            componentButton {
              style
              colors {
                resting
              }
              link {
                url
                title
                target
              }
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
