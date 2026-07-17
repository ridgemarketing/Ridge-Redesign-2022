import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"

const TwoColTextList = (props) => {

    const content   = props.layoutData.layoutContent
    const settings  = props.layoutData.layoutSettings
    const textColor = settings.backgroundColor === 'black' ? 'text-rm-white' : 'text-rm-black'
    const items     = content.items ?? []

    return (
        <Section settings={settings}>
            <Container container={settings.containerWidth}>
                <div className={'xl:grid grid-cols-2 gap-14 items-center'}>
                    <div className={'pb-10 xl:pb-0'}>
                        {content.heading &&
                            <h2
                                dangerouslySetInnerHTML={{ __html: Parser(content.heading) }}
                                className={`${theme.text.H2} ${textColor}`}
                            ></h2>
                        }
                        {content.body &&
                            <div
                                dangerouslySetInnerHTML={{ __html: Parser(content.body) }}
                                className={`mt-8 ${theme.text.P_STD} ${textColor} [&_p]:mb-5 [&_strong]:font-bold [&_a]:underline`}
                            ></div>
                        }
                        {content.bodySmall &&
                            <div
                                dangerouslySetInnerHTML={{ __html: Parser(content.bodySmall) }}
                                className={`mt-6 ${theme.text.P_SML} ${textColor} [&_p]:mb-4 [&_strong]:font-bold [&_a]:underline`}
                            ></div>
                        }
                    </div>

                    {items.length > 0 &&
                        <div className={'bg-rm-white rounded-[20px] shadow-[0px_0px_10px_rgba(0,0,0,0.2)] p-8 lg:p-[30px]'}>
                            <div className={'grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-[52px] gap-y-8 lg:gap-y-[25px]'}>
                                {items.map((item, index) => (
                                    <div key={`TwoColTextList__item__${index}`} className={'flex flex-col gap-[15px]'}>
                                        <div className={`${theme.text.CIRCLE_NUM} shrink-0 w-[55px] h-[55px] border-rm-green text-rm-green`}>{index + 1}</div>
                                        {item.text &&
                                            <div
                                                dangerouslySetInnerHTML={{ __html: Parser(item.text) }}
                                                className={`${theme.text.P_STD} text-rm-black [&_strong]:font-bold`}
                                            ></div>
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </Container>
        </Section>
    )
}

export default TwoColTextList


export const query = graphql`
  fragment TwoColTextListPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_TwoColTextList {
        fieldGroupName
        layoutTwoColTextList {
          layoutContent {
            heading
            body
            bodySmall
            items {
              text
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
  fragment TwoColTextListService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_TwoColTextList {
        fieldGroupName
        layoutTwoColTextList {
          layoutContent {
            heading
            body
            bodySmall
            items {
              text
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
  fragment TwoColTextListProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_TwoColTextList {
        fieldGroupName
        layoutTwoColTextList {
          layoutContent {
            heading
            body
            bodySmall
            items {
              text
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
