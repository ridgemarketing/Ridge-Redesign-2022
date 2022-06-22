import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import  { theme } from "../../static/theme"
import Link from "../../components/global/FlexibleLink"
import { graphql } from "gatsby"

const TextBlock = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

    const alignment = `text-${content.alignment}`;
    let buttonAlignment = ' justify-center';
    if (content.alignment === 'left') {
      buttonAlignment = ' justify-start'
    } else if (content.alignment === 'right') {
      buttonAlignment = ' justify-end'
    }

    return (
        <Section settings={settings}>
            <Container classes={` ${alignment}`}>
                <h2 className={theme.text.H1_LTE + ' pb-6'}>
                        {content.heading}
                </h2>
                <p className={theme.text.P_STD + ' pb-8'}>
                        {content.body}
                </p>
                {
                    content.componentButton &&  
                    <Link
                    link={content.componentButton.link}
                    classes={theme.button.BASE_STYLING + theme.button.PRIMARY_LIGHT + theme.text_links.ARW_FWD_WHITE + buttonAlignment}
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