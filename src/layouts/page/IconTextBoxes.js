import React from 'react'
import {Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import IconTextBoxStack from '../../components/IconTextBoxStack'
import IconTextBoxFlex from '../../components/IconTextBoxFlex'


const IconTextBoxes = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

    const cols = content.threeCols ? ' lg:grid-cols-3 ' : ' ';
    const wrapperClasses = (content.orientation === 'stacked') ? `md:grid md:grid-cols-2${cols}gap-8 max-w-[1100px] mx-auto mt-6 lg:mt-12` : `flex w-full flex-wrap justify-between threeColIconsText mt-6`;

    return (
        <Section settings={settings}>
            <Container>
            <div>
            <h3 className={'text-center'}>
                <span className={theme.text.H2}>{content.heading}
                </span>
            </h3>
            <p className={"mt-6 max-w-5xl mx-auto text-center"}>
                <span className={theme.text.P_STD}>{content.bodyText}
                </span>
            </p>
        
            <p className={'mt-10 text-center'}>
                <span className={theme.text.H4}>{content.subheading}</span>
            </p>
            </div>

            {/* <div className={wrapperClasses}>
                {content.list.map(item => {
                    return (content.orientation === 'stacked') ? <IconTextBoxStack content={item} /> : <IconTextBoxFlex threeCol={content.threeCols} content={item}/>;
                })}
            </div> */}
            </Container>
        </Section>
    )
}

export default IconTextBoxes


export const query = graphql`
  fragment IconTextBoxes on WpPage_Flexiblelayouts_Layouts {
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
                gatsbyImage
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
