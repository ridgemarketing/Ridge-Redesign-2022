import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import  { theme } from "../../static/theme"
import Link from "../../components/global/FlexibleLink"
import { graphql } from "gatsby"

const TextBlock = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

    return (
        <Section settings={settings}>
            <Container>
                <h2>
                    <span className={theme.text.H1}>
                        {content.headerText}
                    </span>
                </h2>
                <p>
                    <span className={theme.text.P_STD}>
                        {content.wysiwygText}
                    </span>
                </p>
                {
                    content.hasButton &&  
                    <Link
                    link={content.link}
                    classes={theme.text_links.BASE_STYLING + theme.text_links.STD + theme.text_link.ARW_FWD_WHITE}
                    />
                }
            </Container>
        </Section>
    )
}

export default TextBlock

export const query = graphql`
  fragment TextBlock on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_TextBlock {
        fieldGroupName
        layoutTextBlock {
          layoutContent {
            alignment
            body
            componentButton {
                colors {
                hover
                resting
                }
                icon
                link {
                target
                title
                url
                }
                style
            }
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