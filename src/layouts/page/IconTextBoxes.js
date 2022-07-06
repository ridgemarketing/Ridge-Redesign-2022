import React from 'react'
import {Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import IconTextBoxStack from '../../components/IconTextBoxStack'
import IconTextBoxFlex from '../../components/IconTextBoxFlex'


const IconTextBoxes = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    let textColor = 'text-black';

    if (settings.backgroundColor == 'black') {
      textColor = 'text-white';
    }

    const cols = content.settings.columns == 3 ? ' xl:grid-cols-3 ' : ' ';
    const wrapperClasses = (content.settings.type === 'stack') ? `md:grid md:grid-cols-2${cols}gap-8 max-w-[1100px] mx-auto mt-6 lg:mt-12` : `flex w-full flex-wrap justify-between threeColIconsText mt-6 lg:mt-12`;

    return (
        <Section settings={settings}>
            <Container>
            <div>
              {content.heading &&
            <h3 className={`text-center ${textColor}`}>
                <span className={theme.text.H2}>{content.heading}
                </span>
            </h3>
              }
            {content.body &&
            <p className={`mt-6 max-w-5xl mx-auto text-center ${textColor}`}>
                <span className={theme.text.P_STD}>{content.body}
                </span>
            </p>
            }
            {content.subheading &&
            <p className={`mt-10 text-center ${textColor}`}>
                <span className={theme.text.H4}>{content.subheading}</span>
            </p>
            }
            </div>

            <div className={wrapperClasses}>
                {content.boxes.map((item, idx) => {
                    return (content.settings.type === 'stack') ? <IconTextBoxStack idx={idx+1} color={textColor} content={item} iconType={content.settings.feature}/> : <IconTextBoxFlex iconType={content.settings.feature} color={textColor} columns={content.settings.columns} content={item}/>;
                })}
            </div>
            </Container>
        </Section>
    )
}

export default IconTextBoxes


export const query = graphql`
  fragment IconTextBoxesPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_IconTextBoxes {
        fieldGroupName
        layoutIconTextBoxes {
          layoutContent {
            body
            boxes {
              body
              heading
              link {
                target
                title
                url
              }
              image {
                localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                sourceUrl
              }
            }
            heading
            settings {
              columns
              feature
              type
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
