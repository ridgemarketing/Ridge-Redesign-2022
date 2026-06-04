import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"
import { motion } from "framer-motion"

const TwoColTextQuoteCard = (props) => {

    const content   = props.layoutData.layoutContent
    const settings  = props.layoutData.layoutSettings
    const text      = content.textContent
    const quoteCard = content.quoteContent
    const quoteOnLeft = content.quotePosition === 'left'

    return (
        <Section settings={settings}>
            <Container container={settings.containerWidth}>
                {content &&
                    <div className="flex flex-col xl:grid xl:grid-cols-[1fr_408px] gap-12 xl:gap-[59px] items-center">
                        <motion.div
                            className={`flex flex-col gap-6 xl:gap-[34px] ${quoteOnLeft ? 'xl:order-2' : ''}`}
                            initial={{ x: 0 }}
                            animate={{ x: 0 }}
                            transition={{ ease: "easeOut", duration: 1 }}
                        >
                            {text?.heading &&
                                <h2 className="font-stratos font-semibold uppercase text-[40px] md:text-[50px] leading-[0.995] text-rm-white">
                                    {text.heading}
                                </h2>
                            }
                            {text?.intro &&
                                <p
                                    dangerouslySetInnerHTML={{ __html: Parser(text.intro) }}
                                    className="font-basic-sans font-light text-[26px] md:text-[34px] leading-[1.15] text-rm-white"
                                />
                            }
                            {text?.body &&
                                <p
                                    dangerouslySetInnerHTML={{ __html: Parser(text.body) }}
                                    className="font-basic-sans font-light text-[21px] leading-[28px] text-rm-white"
                                />
                            }
                        </motion.div>

                        <motion.div
                            className={`w-full xl:w-[408px] ${quoteOnLeft ? 'xl:order-1' : ''}`}
                            initial={{ x: 0 }}
                            animate={{ x: 0 }}
                            transition={{ ease: "easeOut", duration: 1 }}
                        >
                            {quoteCard?.quote &&
                                <div className="bg-rm-carbon rounded-[20px] py-5 px-6 flex flex-col items-center justify-center xl:min-h-[469px]">
                                    <div className="flex flex-col gap-4 items-center justify-center xl:max-w-[357px]">
                                        <p className="font-basic-sans font-semibold italic text-[32px] md:text-[43px] leading-[1.2] text-rm-white">
                                            {quoteCard.quote}
                                        </p>
                                        {quoteCard.author &&
                                            <p className="font-basic-sans font-bold text-[18px] leading-[1.4] text-rm-white mt-4 not-italic">
                                                {quoteCard.author}
                                            </p>
                                        }
                                        {quoteCard.title &&
                                            <small className="font-basic-sans text-[14px] leading-[1.4] text-rm-white not-italic">
                                                {quoteCard.title}
                                            </small>
                                        }
                                    </div>
                                </div>
                            }
                        </motion.div>
                    </div>
                }
            </Container>
        </Section>
    )
}

export default TwoColTextQuoteCard


export const query = graphql`
  fragment TwoColTextQuoteCardPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_TwoColTextQuoteCard {
        fieldGroupName
        layoutTwoColTextQuoteCard {
          layoutContent {
            quoteContent {
                author
                quote
                title
                quotations
            }
            quotePosition
            textContent {
              body
              heading
              intro
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
  fragment TwoColTextQuoteCardService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_TwoColTextQuoteCard {
        fieldGroupName
        layoutTwoColTextQuoteCard {
          layoutContent {
            quoteContent {
                author
                quote
                title
                quotations
            }
            quotePosition
            textContent {
              body
              heading
              intro
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
  fragment TwoColTextQuoteCardProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_TwoColTextQuoteCard {
        fieldGroupName
        layoutTwoColTextQuoteCard {
          layoutContent {
            quoteContent {
                author
                quote
                title
                quotations
            }
            quotePosition
            textContent {
              body
              heading
              intro
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
