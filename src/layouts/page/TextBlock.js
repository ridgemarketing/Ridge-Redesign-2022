import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import  { theme } from "../../static/theme"
import Link from "../../components/global/FlexibleLink"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser";

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
    const body = Parser(content.body);
    const heading = Parser(content.heading);

    return (
        <Section settings={settings}>
            <Container classes={`${alignment}`}>
                <h2 className={theme.text.H1_LTE + ' pb-6'} dangerouslySetInnerHTML={{__html: heading}}>
                </h2>
                <p className={theme.text.P_STD + ' pb-8'} dangerouslySetInnerHTML={{__html: body}}>
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
  fragment TextBlockPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_TextBlock {
        fieldGroupName
        layoutTextBlock {
          layoutContent {
            alignment
            body
            componentButton {
                colors {
                resting
                }
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
export const serviceQuery = graphql`
  fragment TextBlockService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_TextBlock {
        fieldGroupName
        layoutTextBlock {
          layoutContent {
            alignment
            body
            componentButton {
                colors {
                resting
                }
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