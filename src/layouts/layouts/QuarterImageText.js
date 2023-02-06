import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import Buttons from "../../components/global/Buttons"
import Parser from "../../components/global/Parser"
import { motion } from "framer-motion"

const QuarterImageText = (props) => {


    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.componentFlexibleMedia.image.localFile);
    const introText = Parser(content.introText);
    const body = Parser(content.body);

    let order;
    order = (content.imagePosition) === 'left' ? '' : 'flex-reverse' ;

    return (
        <Section settings={settings}>
            <Container size={`slim`}>
                <div className={`mb-12`}>
                  <p dangerouslySetInnerHTML={{__html: introText}} className={theme.text.H4_LTE}>
                  </p>
                </div>
                <div className={`lg:flex ${order}`}>
                      <motion.div
                      className={`lg:text-left text-center mb-12 lg:w-1/4 lg:mr-12 lg:flex-grow-1 lg:flex-shrink-0`}
                      initial={{ scale: 0.75}}
                      whileInView={{ scale: [0.75, 1.2, 1] }}
                      transition={{ease: "easeOut", duration: 1.5}}
                      >
                        <GatsbyImage image={image} />
                      </motion.div>
                    <div className={``}>
                        <p dangerouslySetInnerHTML={{__html:body}} className={`${theme.text.P_STD}`}>
                        </p>
                        {content.componentButton && content.componentButton.link.url &&
                          <div className={`mt-14`}>
                            <Buttons 
                              content={content.componentButton} 
                              sectionBackground={settings.backgroundColor}/>
                          </div>
                        }
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default QuarterImageText


export const query = graphql`
  fragment QuarterImageTextPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_QuarterImageText {
        fieldGroupName
        layoutQuarterImageText {
          layoutContent {
            introText
            body
            imagePosition
            componentFlexibleMedia {
              video {
                videoUrl
                thumbnailImage {
                  publicUrl
                }
              }
              type
              lottie
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
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