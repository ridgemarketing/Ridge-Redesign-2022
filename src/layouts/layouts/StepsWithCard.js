import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"

const StepsWithCard = (props) => {

    const content  = props.layoutData.layoutContent
    const settings = props.layoutData.layoutSettings
    const steps    = content?.steps || []
    const card     = content?.card

    const textColor = settings.backgroundColor === 'black' ? 'text-rm-white' : 'text-rm-black'

    return (
        <Section settings={settings}>
            <Container container={settings.containerWidth}>
                <div className="flex flex-col gap-12 lg:gap-[50px] items-center">

                    {steps.length > 0 &&
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-[31px] w-full">
                            {steps.map((step, idx) => (
                                <div key={`StepsWithCardStep__${idx}`} className="flex flex-col gap-[18px] items-start">
                                    <span className={`${theme.text.CIRCLE_NUM} w-[55px] h-[55px] text-rm-green border-rm-green`}>
                                        {idx + 1}
                                    </span>
                                    {step.heading &&
                                        <h3 className={`font-basic-sans font-bold text-[21px] leading-[28px] ${textColor}`}>
                                            {step.heading}
                                        </h3>
                                    }
                                    {step.body &&
                                        <div
                                            dangerouslySetInnerHTML={{ __html: Parser(step.body) }}
                                            className={`font-basic-sans font-light text-[21px] leading-[28px] ${textColor} [&_a]:underline`}
                                        />
                                    }
                                </div>
                            ))}
                        </div>
                    }

                    {(card?.heading || card?.body || card?.image || card?.imageMobile) &&
                        <div className="bg-[#1F9DA5] rounded-[20px] overflow-hidden w-full grid grid-cols-1 lg:grid-cols-[1fr_302px] items-stretch max-w-[750px] lg:max-w-full mx-auto">
                            <div className="flex flex-col gap-1.5 p-8 lg:pl-[58px] lg:pr-12 lg:py-12 text-rm-white">
                                {card.heading &&
                                    <h3 className="font-basic-sans font-semibold text-[28px] md:text-[34px] leading-tight">
                                        {card.heading}
                                    </h3>
                                }
                                {card.body &&
                                    <div
                                        dangerouslySetInnerHTML={{ __html: Parser(card.body) }}
                                        className="font-basic-sans font-light text-[21px] leading-[28px] [&_p]:mb-4 [&_a]:underline [&_strong]:font-bold max-w-[750px]"
                                    />
                                }
                            </div>
                            {card.imageMobile && (
                                <div className="lg:hidden">
                                    {card.imageMobile.localFile?.childImageSharp?.gatsbyImageData
                                        ? <GatsbyImage
                                            image={card.imageMobile.localFile.childImageSharp.gatsbyImageData}
                                            alt={card.imageMobile.altText || ''}
                                            className="w-full h-full min-h-[260px]"
                                            objectFit="cover" />
                                        : card.imageMobile.sourceUrl &&
                                            <img
                                                src={card.imageMobile.sourceUrl}
                                                alt={card.imageMobile.altText || ''}
                                                className="w-full h-full min-h-[260px] object-cover" />
                                    }
                                </div>
                            )}
                            {card.image && (
                                <div className={`${card.imageMobile ? 'hidden lg:block' : ''}`}>
                                    {card.image.localFile?.childImageSharp?.gatsbyImageData
                                        ? <GatsbyImage
                                            image={card.image.localFile.childImageSharp.gatsbyImageData}
                                            alt={card.image.altText || ''}
                                            className="w-full h-full min-h-[260px] lg:min-h-full"
                                            objectFit="cover" />
                                        : card.image.sourceUrl &&
                                            <img
                                                src={card.image.sourceUrl}
                                                alt={card.image.altText || ''}
                                                className="w-full h-full min-h-[260px] lg:min-h-full object-cover" />
                                    }
                                </div>
                            )}
                        </div>
                    }

                </div>
            </Container>
        </Section>
    )
}

export default StepsWithCard


export const query = graphql`
  fragment StepsWithCardPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_StepsWithCard {
        fieldGroupName
        layoutStepsWithCard {
          layoutContent {
            steps {
              heading
              body
            }
            card {
              heading
              body
              image {
                localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                altText
                sourceUrl
              }
              imageMobile {
                localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                altText
                sourceUrl
              }
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
            containerWidth
          }
        }
      }
  }
`

export const serviceQuery = graphql`
  fragment StepsWithCardService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_StepsWithCard {
        fieldGroupName
        layoutStepsWithCard {
          layoutContent {
            steps {
              heading
              body
            }
            card {
              heading
              body
              image {
                localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                altText
                sourceUrl
              }
              imageMobile {
                localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                altText
                sourceUrl
              }
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
            containerWidth
          }
        }
      }
  }
`

export const projectQuery = graphql`
  fragment StepsWithCardProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_StepsWithCard {
        fieldGroupName
        layoutStepsWithCard {
          layoutContent {
            steps {
              heading
              body
            }
            card {
              heading
              body
              image {
                localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                altText
                sourceUrl
              }
              imageMobile {
                localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                altText
                sourceUrl
              }
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
            containerWidth
          }
        }
      }
  }
`
