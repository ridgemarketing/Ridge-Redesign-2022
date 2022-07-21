import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"

const TwoColTextQuote = (props) => {

    const content     = props.layoutData.layoutContent;
    const settings    = props.layoutData.layoutSettings;
    const textColor   = settings.backgroundColor === 'black' ? 'text-rm-white' : 'text-rm-black'; 
    
    let order;
    (content.imageLeft) ? order= 'order-2' : order = '';

    return (
        <Section settings={settings}>
            <Container>
                <div className={'lg:grid grid-cols-2 gap-16 pt-16'}>
                    <div className={'pb-12 xl:px-20 lg:pb-0 ' + order}>
                        <h2 className={`${theme.text.H2} ${textColor}`}>
                            {content.textContent.heading}
                        </h2>
                        <p className={`${theme.text.H4_LTE} ${textColor} mt-8`}>
                            {content.textContent.intro}  
                        </p>
                        <p className={`${theme.text.P_STD} ${textColor} mt-8`}>
                            {content.textContent.body}  
                        </p>
                    </div>

                    <div className={"text-left"}>
                        { content.quoteContent.quote &&
                          <q className={`${theme.text.Q} text-rm-green`}>
                              {content.quoteContent.quote}
                          </q>
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
                    </div>
                </div>
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
          }
        }
      }
  }
`