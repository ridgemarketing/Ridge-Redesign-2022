import React from "react"
import { Container, Section } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"

const PortfolioHeader = (props) => {
    const content       = props.layoutData.layoutContent;
    const settings      = props.layoutData.layoutSettings;

    return (
        <Section classes={'mb-20'} settings={settings}>
        <Container>
            {content.heading.green && content.heading.black && 
                <h2 className={theme.text.H1_STD + 'mb-9'}>
                    <span className="text-rm-black">
                    {content.heading.black}
                    </span>
                    <span className="text-rm-green">
                    {content.heading.green + " "}
                    </span>
                </h2>
            }
            {content.body &&
                <p dangerouslySetInnerHTML={{__html: Parser(content.body)}} className={`mb-9 ${theme.text.H4_LTE}`}></p>
            }
          </Container>
        </Section>
    )
}

export default PortfolioHeader;

export const query = graphql`
  fragment PortfolioHeader on WpPage {
    portfolioHeader {
        portfolioHeader {
            layoutContent {
              heading {
                black
                green
              }
              body
            }
            layoutSettings {
              anchorId
              backgroundColor
              classes
              containerWidth
              id
              padding {
                bottom
                top
              }
            }
        }
    }
}
`