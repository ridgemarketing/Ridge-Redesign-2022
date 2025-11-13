import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import Link from "../../components/global/FlexibleLink"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser";
import Buttons from '../../components/global/Buttons';

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
    let headingStyle = content.headingStyle;
    if (headingStyle === 'H1'){
      headingStyle = 'H1_LTE';
    }

    return (
        <Section settings={settings}>
            <Container classes={`${alignment} ${settings.classes}`} container={settings.containerWidth}>
                <h2 className={`${theme.text[headingStyle]} pb-6 lg:w-[95%]`} dangerouslySetInnerHTML={{__html: heading}}></h2>
                <p className={`${theme.text.P_STD} lg:w-[95%]`} dangerouslySetInnerHTML={{__html: body}}></p>
                {content.componentButton &&  
                    <Buttons 
                    content={content.componentButton} 
                    sectionBackground={settings.backgroundColor}/>
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
            headingStyle
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
            containerWidth
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
            headingStyle
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
            containerWidth
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

export const projectQuery = graphql`
  fragment TextBlockProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_TextBlock {
        fieldGroupName
        layoutTextBlock {
          layoutContent {
            alignment
            body
            headingStyle
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
            containerWidth
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