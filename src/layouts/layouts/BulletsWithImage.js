import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Section, Container } from "../../components/global/Wrappers"
import Parser from "../../components/global/Parser"

const BulletsWithImage = (props) => {
    const content    = props.layoutData.layoutContent
    const settings   = props.layoutData.layoutSettings

    const heading    = content.heading    ?? false
    const introBody  = content.introBody  ?? false
    const subHeading = content.subHeading ?? false
    const bullets    = content.bullets    ?? []
    const image      = content.image      ?? false
    const outroBody  = content.outroBody  ?? false

    const textColor  = settings.backgroundColor === 'black' ? 'text-white' : 'text-black'

    let renderImage = null
    if (image) {
        renderImage = (image.localFile?.ext === '.svg')
            ? <img src={image.sourceUrl} alt={image.altText || ''} className="w-full h-auto object-contain" />
            : image.localFile?.childImageSharp?.gatsbyImageData
                ? <GatsbyImage
                    image={image.localFile.childImageSharp.gatsbyImageData}
                    alt={image.altText || ''}
                    className="w-full h-auto rounded-[20px]"
                    objectFit="contain" />
                : null
    }

    return (
        <Section settings={settings}>
            <Container container={settings.containerWidth}>
                <div className="flex flex-col gap-10 lg:gap-[34px]">

                    {(heading || introBody) &&
                        <div className="flex flex-col gap-6 lg:gap-[34px] max-w-[1114px]">
                            {heading &&
                                <h2 className={`font-stratos font-semibold uppercase text-[40px] md:text-[50px] leading-[0.995] ${textColor}`}>
                                    {heading}
                                </h2>
                            }
                            {introBody &&
                                <div
                                    dangerouslySetInnerHTML={{ __html: Parser(introBody) }}
                                    className={`font-basic-sans font-light text-[21px] leading-[28px] ${textColor} [&_p]:mb-4 [&_a]:underline [&_strong]:font-bold`}
                                />
                            }
                        </div>
                    }

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
                        <div className="flex flex-col gap-4">
                            {subHeading &&
                                <p className={`font-basic-sans font-semibold text-[26px] leading-[36px] ${textColor}`}>
                                    {subHeading}
                                </p>
                            }
                            {bullets.length > 0 &&
                                <ul className={`flex flex-col gap-3.5 font-basic-sans font-light text-[21px] leading-[28px] ${textColor}`}>
                                    {bullets.map((b, idx) => (
                                        <li key={`BulletsWithImageItem__${idx}`} className="flex items-start gap-4">
                                            <span className="text-[24px] leading-[24px] shrink-0">•</span>
                                            <span>{b.item}</span>
                                        </li>
                                    ))}
                                </ul>
                            }
                        </div>
                        {renderImage &&
                            <div className="w-full flex items-center justify-center max-w-[750px] xl:max-w-full mx-auto">
                                {renderImage}
                            </div>
                        }
                    </div>

                    {outroBody &&
                        <div
                            dangerouslySetInnerHTML={{ __html: Parser(outroBody) }}
                            className={`font-basic-sans font-light text-[21px] leading-[28px] max-w-[1119px] ${textColor} [&_p]:mb-4 [&_a]:underline [&_strong]:font-bold`}
                        />
                    }

                </div>
            </Container>
        </Section>
    )
}

export default BulletsWithImage


export const query = graphql`
  fragment BulletsWithImagePage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_BulletsWithImage {
        fieldGroupName
        layoutBulletsWithImage {
          layoutContent {
            heading
            introBody
            subHeading
            bullets { item }
            outroBody
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
  fragment BulletsWithImageService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_BulletsWithImage {
        fieldGroupName
        layoutBulletsWithImage {
          layoutContent {
            heading
            introBody
            subHeading
            bullets { item }
            outroBody
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
  fragment BulletsWithImageProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_BulletsWithImage {
        fieldGroupName
        layoutBulletsWithImage {
          layoutContent {
            heading
            introBody
            subHeading
            bullets { item }
            outroBody
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
