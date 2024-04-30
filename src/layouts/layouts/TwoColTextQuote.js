import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"
import { motion } from "framer-motion"

const TwoColTextQuote = (props) => {

    const content     = props.layoutData.layoutContent;
    //console.log(content);
    const settings    = props.layoutData.layoutSettings;
    const textColor   = settings.backgroundColor === 'black' ? 'text-rm-white' : 'text-rm-black'; 
    const quotations  = content.quoteContent.quotations;
    
    let order;
    (content.imageLeft) ? order= 'order-2' : order = '';
    

    return (
        <Section settings={settings}>
            <Container container={settings.containerWidth}>
                {content && <div className={'xl:grid grid-cols-2 gap-16'}> {/* pt-16 */}
                  <motion.div
                  className={'pb-12 xl:pb-0 ' + order}
                  initial={{x: 0}}
                  animate={{ x: 0 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  >
                        <h2 className={`${theme.text.H2} ${textColor}`}>
                            {content.textContent.heading}
                        </h2>
                        <p dangerouslySetInnerHTML={{__html: Parser(content.textContent.intro)}} className={`${theme.text.H4_LTE} ${textColor} mt-8`}></p>
                        <p dangerouslySetInnerHTML={{__html: Parser(content.textContent.body)}} className={`${theme.text.P_STD} ${textColor} mt-8`}></p>
                  </motion.div>

                    <motion.div
                      className={"text-left"}
                      initial={{x: 0}}
                      animate={{ x: 0 }}
                      transition={{ ease: "easeOut", duration: 1 }}
                    >
                        { content.quoteContent.quote && quotations && 
                          <q className={`font-basic-sans italic font-semibold text-30px md:text-45px leading-36px md:leading-[50px] text-rm-green text-rm-green`}>
                              {content.quoteContent.quote}
                          </q>
                        }
                        { content.quoteContent.quote && !quotations && 
                          <p className={`font-basic-sans italic font-semibold text-30px md:text-45px leading-36px md:leading-[50px] text-rm-green text-rm-green`}>
                              {content.quoteContent.quote}
                          </p>
                        }
                        { content.quoteContent.author &&
                          <p className={`${theme.text.P_BLD} mt-14`}>
                              { content.quoteContent.author }
                          </p>
                        }
                        { content.quoteContent.title &&
                          <small className={ theme.text.FOOTER }>
                              { content.quoteContent.title }
                          </small>
                        }
                    </motion.div> 
                </div> }
            </Container>
        </Section>
    )
}

export default TwoColTextQuote


export const query = graphql`
  fragment TwoColTextQuotePage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_TwoColTextQuote {
        fieldGroupName
        layoutTwoColTextQuote {
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
  fragment TwoColTextQuoteService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_TwoColTextQuote {
        fieldGroupName
        layoutTwoColTextQuote {
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
  fragment TwoColTextQuoteProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_TwoColTextQuote {
        fieldGroupName
        layoutTwoColTextQuote {
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