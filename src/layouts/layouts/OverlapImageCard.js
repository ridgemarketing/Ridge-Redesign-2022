import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Section, Container } from "../../components/global/Wrappers"
import Parser from "../../components/global/Parser"
import Buttons from "../../components/global/Buttons"

const OverlapImageCard = (props) => {
    const content                  = props.layoutData.layoutContent
    const settings                 = props.layoutData.layoutSettings

    const body                     = content.body            ?? false
    const componentButton          = content.componentButton ?? false
    const image                    = content.image           ?? false
    const imagePosition            = content.imagePosition   ?? 'left'
    const halfBackground           = content.halfBackground  ?? false
    const halfBackgroundColor      = content.halfBackgroundColor    ?? 'rm-pale-grey'
    const halfBackgroundPosition   = content.halfBackgroundPosition ?? 'top'

    let renderImage = null
    if (image) {
        renderImage = (image.localFile?.ext === '.svg')
            ? <img src={image.sourceUrl} alt={image.altText || ''} className="w-full h-full object-cover rounded-[12px]" />
            : image.localFile?.childImageSharp?.gatsbyImageData
                ? <GatsbyImage
                    image={image.localFile.childImageSharp.gatsbyImageData}
                    alt={image.altText || ''}
                    className="w-full h-full rounded-[12px]"
                    objectFit="cover" />
                : null
    }

    return (
        <Section settings={settings}>
            {halfBackground &&
                <div className={`absolute left-0 w-full h-1/2 bg-${halfBackgroundColor} ${halfBackgroundPosition === 'bottom' ? 'bottom-0' : 'top-0'}`} aria-hidden="true"></div>
            }
            <Container container="default">
                <div className="relative bg-rm-white rounded-[20px] shadow-[0_0_5px_0_rgba(0,0,0,0.1)] flex flex-col xl:flex-row gap-8 xl:gap-[26px] items-center p-8 md:p-12 xl:p-[80px] mx-2">

                    {renderImage &&
                        <div className={`w-full xl:w-1/2 xl:max-w-[465px] aspect-[465/343] overflow-hidden rounded-[12px] ${imagePosition === 'right' ? 'xl:order-2' : ''}`}>
                            {renderImage}
                        </div>
                    }

                    <div className={`flex flex-col gap-8 w-full xl:w-1/2 xl:max-w-[466px] ${imagePosition === 'right' ? 'xl:order-1' : ''}`}>
                        {body &&
                            <div
                                dangerouslySetInnerHTML={{ __html: Parser(body) }}
                                className="font-basic-sans font-light text-[21px] leading-[28px] text-black [&_p]:mb-4 [&_strong]:font-bold [&_a]:underline"
                            />
                        }
                        {componentButton?.link?.url &&
                            <div>
                                <Buttons content={componentButton} sectionBackground="white" />
                            </div>
                        }
                    </div>

                </div>
            </Container>
        </Section>
    )
}

export default OverlapImageCard


export const query = graphql`
  fragment OverlapImageCardPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_OverlapImageCard {
        fieldGroupName
        layoutOverlapImageCard {
          layoutContent {
            body
            imagePosition
            halfBackground
            halfBackgroundColor
            halfBackgroundPosition
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
            image {
              altText
              sourceUrl
              localFile {
                ext
                childImageSharp { gatsbyImageData }
              }
            }
          }
          layoutSettings {
            padding { bottom top }
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
  fragment OverlapImageCardService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_OverlapImageCard {
        fieldGroupName
        layoutOverlapImageCard {
          layoutContent {
            body
            imagePosition
            halfBackground
            halfBackgroundColor
            halfBackgroundPosition
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
            image {
              altText
              sourceUrl
              localFile {
                ext
                childImageSharp { gatsbyImageData }
              }
            }
          }
          layoutSettings {
            padding { bottom top }
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
  fragment OverlapImageCardProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_OverlapImageCard {
        fieldGroupName
        layoutOverlapImageCard {
          layoutContent {
            body
            imagePosition
            halfBackground
            halfBackgroundColor
            halfBackgroundPosition
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
            image {
              altText
              sourceUrl
              localFile {
                ext
                childImageSharp { gatsbyImageData }
              }
            }
          }
          layoutSettings {
            padding { bottom top }
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
