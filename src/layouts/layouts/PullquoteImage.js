import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { motion } from "framer-motion"

const PullquoteImage = (props) => {

    const content     = props.layoutData.layoutContent;
    const settings    = props.layoutData.layoutSettings;
    const quote       = content.quote;
    const image       = (content.image.localFile.ext === `.svg`) 
    ? <img className={``} src={content.image.sourceUrl} alt={content.image_alt} />

    : <GatsbyImage 
        image={content.image.localFile.childImageSharp.gatsbyImageData} 
        alt={content.image_alt ? content.image_alt : ``}
        className={``} 
        objectFit={``}/> 

    return (
        <Section settings={settings}>
            <Container container={settings.containerWidth}>
                {content &&
                  <div className={'grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-16'}>
                    <div className={`md:col-span-3 lg:col-span-2`}>
                      <p className={`text-45px font-semibold font-basic-sans italic text-rm-green leading-[1.135]`}>{quote}</p>
                    </div>
                    <div className={`col-span-1`}>
                      <div className={`flex justify-center`}>
                        {image}
                      </div>
                      
                    </div>
                  </div>
                }
            </Container>
        </Section>
    )
}

export default PullquoteImage


export const query = graphql`
  fragment PullquoteImagePage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_PullquoteImage {
        fieldGroupName
        layoutPullquoteImage {
          layoutContent {
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
                ext
              }
              sourceUrl
            }
            quote
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
            containerWidth
          }
        }
      }
  }
`

export const serviceQuery = graphql`
  fragment PullquoteImageService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_PullquoteImage {
        fieldGroupName
        layoutPullquoteImage {
          layoutContent {
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
                ext
              }
              sourceUrl
            }
            quote
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
            containerWidth
          }
        }
      }
  }
`

export const projectQuery = graphql`
  fragment PullquoteImageProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_PullquoteImage {
        fieldGroupName
        layoutPullquoteImage {
          layoutContent {
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
                ext
              }
              sourceUrl
            }
            quote
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
            containerWidth
          }
        }
      }
  }
`

export const landerQuery = graphql`
  fragment PullquoteImageLander on WpLander_Flexiblelayouts_Layouts {
    ... on WpLander_Flexiblelayouts_Layouts_PullquoteImage {
        fieldGroupName
        layoutPullquoteImage {
          layoutContent {
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
                ext
              }
              sourceUrl
            }
            quote
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
            containerWidth
          }
        }
      }
  }
`