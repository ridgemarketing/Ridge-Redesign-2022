import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"

const TwoColTextQuote = (props) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.componentFlexibleMedia.image)
    let order;
    (content.imageLeft) ? order= 'order-2' : order = '';

    return (
        <Section settings={settings}>
            <Container>
                <div className={'lg:grid grid-cols-2 gap-16 pt-16'}>
                    <div className={'pb-12 xl:px-20 xl:pt-12 lg:pb-0 ' + order}>
                        <h2>
                            <span className={theme.text['H2'] }>
                                {content.heading}
                            </span>
                        </h2>
                        <p className={theme.text['P_STD'] + ' mt-8'}>
                            {content.bodyText}  
                        </p>
                    </div>

                    <div className={"lg:text-left text-center"}>
                        <q className={ theme.text['Q'] + ' ' + content.quoteColor }>
                            {content.quoteText}
                        </q>
                        <p className={ theme.text['P_BLD'] }>
                            { content.quote.name }
                        </p>
                        <small className={ theme.text['FOOTER'] }>
                            { content.quote.company }
                        </small>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default TwoColTextQuote


export const query = graphql`
  fragment TwoColTextQuote on WpPage_Flexiblelayouts_Layouts {
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