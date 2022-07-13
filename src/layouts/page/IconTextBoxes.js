import React from 'react'
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import IconTextBoxStack from '../../components/IconTextBoxStack'
import IconTextBoxFlex from '../../components/IconTextBoxFlex'
import Buttons from '../../components/global/Buttons'
import Parser from "../../components/global/Parser"
const IconTextBoxes = (props) => {
  const content = props.layoutData.layoutContent;
  const settings = props.layoutData.layoutSettings;
  let textColor = 'text-black';
  const bottomHeadingMargin = (content.settings.type === 'stack') ? 'lg:mt-20' : '';

  if (settings.backgroundColor == 'black') {
    textColor = 'text-white';
  }

    const cols = content.settings.columns == 3 ? 'xl:grid-cols-3' : '';
    const wrapperClasses = (content.settings.type === 'stack') ? `grid gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-12 ${cols} gap-8 max-w-[1100px] mx-auto` : `flex w-full flex-wrap justify-between threeColIconsText`;

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
          <p dangerouslySetInnerHTML={{__html: Parser(content.body)}} className={`${theme.text.P_STD} mt-6 max-w-[1120px] mx-auto text-center ${textColor}`}></p>
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

          <div>
              {content.bottomHeading &&
              <h3 className={`mt-10 ${bottomHeadingMargin} mb-12 text-center ${textColor}`}>
                  <span className={theme.text.H5}>{content.bottomHeading}
                  </span>
              </h3>
              }
              {content.bottomBody &&
              <p className={ `text-center ${textColor}`}>
                  <span className={theme.text.P_STD}>{content.bottomBody}</span>
              </p>
              }
              {content.componentButton && content.componentButton.link &&
                <div className='text-center my-8'>
                  <Buttons 
                    content={content.componentButton} 
                    sectionBackground={settings.backgroundColor}/>
                </div>
              }
            </div>

          </Container>
      </Section>
  )
}

export default IconTextBoxes


export const pageQuery = graphql`
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
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                sourceUrl
              }
            }
            heading
            bottomHeading
            bottomBody
            componentButton {
              fieldGroupName
              colors {
                fieldGroupName
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

export const serviceQuery = graphql`
  fragment IconTextBoxesService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_IconTextBoxes {
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
            bottomHeading
            bottomBody
            componentButton {
              fieldGroupName
              colors {
                fieldGroupName
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

export const projectQuery = graphql`
  fragment IconTextBoxesProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_IconTextBoxes {
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
            body
            bottomHeading
            bottomBody

            componentButton {
              fieldGroupName
              colors {
                fieldGroupName
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
