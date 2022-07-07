import React from 'react'
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import IconTextBoxStack from '../../components/IconTextBoxStack'
import IconTextBoxFlex from '../../components/IconTextBoxFlex'
import Buttons from '../../components/global/Buttons'

const IconTextBoxes = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

    const cols = content.settings.columns == 3 ? ' lg:grid-cols-3 ' : ' ';
    const wrapperClasses = (content.settings.type === 'stack') ? `md:grid md:grid-cols-2${cols}gap-8 max-w-[1100px] mx-auto mt-6 lg:mt-12` : `flex w-full flex-wrap justify-between threeColIconsText mt-6`;

    console.log(settings);

    return (
        <Section settings={settings}>
            <Container>
            <div>
              {content.heading &&
            <h3 className={'text-center'}>
                <span className={theme.text.H2}>{content.heading}
                </span>
            </h3>
              }
            {content.body &&
            <p className={"mt-6 max-w-5xl mx-auto text-center"}>
                <span className={theme.text.P_STD}>{content.body}
                </span>
            </p>
            }
            </div>
 
            <div className={wrapperClasses}>
                {content.boxes.map(item => {
                    return (content.settings.type === 'stack') ? <IconTextBoxStack content={item} key={item.heading} iconType={content.settings.feature}/> : <IconTextBoxFlex columns={content.settings.columns} content={item}/>;
                })}
            </div>

            <div>
              {content.bottomHeading &&
              <h3 className={'text-center'}>
                  <span className={theme.text.H5}>{content.bottomHeading}
                  </span>
              </h3>
              }
              {content.bottomBody &&
              <p className={'mt-10 text-center'}>
                  <span className={theme.text.P_STD}>{content.bottomBody}</span>
              </p>
              }
              {content.componentButton.link.url &&
                <div className='text-center'>
                  <Buttons content={content.componentButton} sectionBackground={settings.backgroundColor}/>
                </div>
              }
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
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            heading
            body
            bottomHeading
            bottomBody

            componentButton {
              fieldGroupName
              colors {
                fieldGroupName
                hover
                resting
              }
              link {
                url
                title
                target
              }
              style
            }

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
