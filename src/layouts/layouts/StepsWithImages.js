import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import Parser from "../../components/global/Parser"
import Buttons from "../../components/global/Buttons"

const OverlapCard = ({ card, container, padding }) => {
    const body            = card?.body            ?? false
    const componentButton = card?.componentButton ?? false
    const image           = card?.image           ?? false
    const imagePosition   = card?.imagePosition   ?? 'left'


    const halfBackground         = card?.halfBackground         ?? false
    const halfBackgroundColor    = card?.halfBackgroundColor    ?? 'rm-pale-grey'
    const halfBackgroundPosition = card?.halfBackgroundPosition ?? 'top'

    if (!body && !image && !componentButton?.link?.url) return null

    let renderImage = null
    if (image) {
        renderImage = (image.localFile?.ext === '.svg')
            ? <img src={image.sourceUrl} alt={image.altText || ''} className="w-full h-full object-cover " />
            : image.localFile?.childImageSharp?.gatsbyImageData
                ? <GatsbyImage
                    image={image.localFile.childImageSharp.gatsbyImageData}
                    alt={image.altText || ''}
                    className="w-full h-full "
                    objectFit="cover" />
                : null
    }

    return (<>
     {halfBackground &&
        <div
            aria-hidden="true"
            className={` ${theme.paddingTop[`${padding}`] } absolute left-0 w-full pointer-events-none bg-${halfBackgroundColor} ${halfBackgroundPosition === 'bottom' ? 'bottom-0' : 'top-0'}`}
        />
      }
    <div className="relative">
        {halfBackground &&
          <div
              aria-hidden="true"
              className={`absolute left-0 w-full h-1/2 pointer-events-none bg-${halfBackgroundColor} ${halfBackgroundPosition === 'bottom' ? 'bottom-0' : 'top-0'}`}
          />
        }
        <Container container={container}>
          <div className="relative bg-rm-white rounded-[20px] shadow-[0_0_5px_0_rgba(0,0,0,0.1)] flex flex-col xl:flex-row gap-8 xl:gap-[26px] items-center p-8 md:p-12 xl:p-[80px] mb-12 lg:mb-[59px] max-w-[750px] xl:max-w-full mx-auto">
              {renderImage &&
                  <div className={`w-full xl:w-1/2 xl:max-w-[465px] aspect-[465/343] overflow-hidden  ${imagePosition === 'right' ? 'xl:order-2' : ''}`}>
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
    </div>
    </>)
}

const StepsWithImages = (props) => {
    const content            = props.layoutData.layoutContent
    const settings           = props.layoutData.layoutSettings

    const heading            = content.heading            ?? false
    const intro              = content.intro              ?? false
    const stepRows           = content.stepRows           ?? []
    const backgroundGradient = content.backgroundGradient ?? false
    const card               = content.card               ?? false

    let stepCounter = 0

    return (
        <Section settings={settings}>
            {backgroundGradient && <>
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none bg-[#f3f1ee]"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none -scale-y-100"
                    style={{ backgroundImage: 'linear-gradient(120.76deg, rgba(0,171,182,0) 74.15%, rgba(0,171,182,0.6) 163.32%)' }}
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none -scale-y-100"
                    style={{ backgroundImage: 'linear-gradient(321deg, rgba(0,171,182,0) 74.15%, rgba(0,171,182,0.6) 163.32%)' }}
                />
            </>}


            {card && <OverlapCard card={card} container={settings.containerWidth} padding={settings.padding.top} />}

            <Container container={settings.containerWidth}>
                <div className="relative flex flex-col gap-12 lg:gap-[59px]">

                    {(heading || intro) &&
                        <div className="flex flex-col gap-6 lg:gap-[34px]">
                            {heading &&
                                <h2 className="font-stratos font-semibold uppercase text-[40px] md:text-[50px] leading-[0.995] text-black">
                                    {heading}
                                </h2>
                            }
                            {intro &&
                                <p
                                    dangerouslySetInnerHTML={{ __html: Parser(intro) }}
                                    className="font-basic-sans font-light text-[21px] leading-[28px] text-black"
                                />
                            }
                        </div>
                    }

                    {stepRows.length > 0 &&
                        <div className="flex flex-col gap-12 lg:gap-[59px]">
                            {stepRows.map((row, rowIdx) => {
                                const imageOnLeft = rowIdx % 2 === 1
                                const rowImage    = row.image
                                const steps       = row.steps || []

                                let renderImage = null
                                if (rowImage) {
                                    renderImage = (rowImage.localFile?.ext === '.svg')
                                        ? <img src={rowImage.sourceUrl} alt={rowImage.altText || ''} className="w-full h-full object-contain rounded-[20px]" />
                                        : rowImage.localFile?.childImageSharp?.gatsbyImageData
                                            ? <GatsbyImage
                                                image={rowImage.localFile.childImageSharp.gatsbyImageData}
                                                alt={rowImage.altText || ''}
                                                className="w-full h-full rounded-[20px]"
                                                objectFit="contain" />
                                            : null
                                }

                                return (
                                    <div
                                        key={`StepsWithImagesRow__${rowIdx}`}
                                        className="flex flex-col lg:flex-row gap-8 lg:gap-[26px] items-start"
                                    >
                                        {renderImage &&
                                            <div className={`w-full lg:min-w-[485px] sm:max-w-[485px] overflow-hidden rounded-[20px] lg:self-center ${imageOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                                                {renderImage}
                                            </div>
                                        }

                                        <div className={`flex flex-col gap-8 lg:gap-[31px] ${imageOnLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                                            {steps.map((step, stepIdx) => {
                                                stepCounter += 1
                                                return (
                                                    <div key={`StepsWithImagesStep__${rowIdx}__${stepIdx}`} className="flex flex-col gap-4">
                                                        <div className="flex items-center gap-3 lg:gap-[13px]">
                                                            <span className={`${theme.text.CIRCLE_NUM} w-[55px] h-[55px] shrink-0 text-rm-green border-rm-green`}>
                                                                {stepCounter}
                                                            </span>
                                                            {step.heading &&
                                                                <h3 className="font-basic-sans font-bold text-[21px] leading-[28px] text-black">
                                                                    {step.heading}
                                                                </h3>
                                                            }
                                                        </div>
                                                        {step.body &&
                                                            <div
                                                                dangerouslySetInnerHTML={{ __html: Parser(step.body) }}
                                                                className="font-basic-sans font-light text-[21px] leading-[28px] text-black [&_p]:mb-4 [&_a]:underline [&_strong]:font-bold"
                                                            />
                                                        }
                                                        {step.componentButton?.link?.url &&
                                                            <div className="mt-2">
                                                                <Buttons content={step.componentButton} sectionBackground={settings.backgroundColor || 'white'} />
                                                            </div>
                                                        }
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    }

                </div>
            </Container>
        </Section>
    )
}

export default StepsWithImages


export const query = graphql`
  fragment StepsWithImagesPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_StepsWithImages {
        fieldGroupName
        layoutStepsWithImages {
          layoutContent {
            heading
            intro
            backgroundGradient
            card {
              body
              imagePosition
              halfBackground
              halfBackgroundColor
              halfBackgroundPosition
              image {
                altText
                sourceUrl
                localFile {
                  ext
                  childImageSharp { gatsbyImageData }
                }
              }
              componentButton {
                fieldGroupName
                colors { fieldGroupName resting }
                link { url title target }
                style
              }
            }
            stepRows {
              image {
                altText
                sourceUrl
                localFile {
                  ext
                  childImageSharp { gatsbyImageData }
                }
              }
              steps {
                heading
                body
                componentButton {
                  fieldGroupName
                  colors { fieldGroupName resting }
                  link { url title target }
                  style
                }
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
  fragment StepsWithImagesService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_StepsWithImages {
        fieldGroupName
        layoutStepsWithImages {
          layoutContent {
            heading
            intro
            backgroundGradient
            card {
              body
              imagePosition
              halfBackground
              halfBackgroundColor
              halfBackgroundPosition
              image {
                altText
                sourceUrl
                localFile {
                  ext
                  childImageSharp { gatsbyImageData }
                }
              }
              componentButton {
                fieldGroupName
                colors { fieldGroupName resting }
                link { url title target }
                style
              }
            }
            stepRows {
              image {
                altText
                sourceUrl
                localFile {
                  ext
                  childImageSharp { gatsbyImageData }
                }
              }
              steps {
                heading
                body
                componentButton {
                  fieldGroupName
                  colors { fieldGroupName resting }
                  link { url title target }
                  style
                }
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
  fragment StepsWithImagesProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_StepsWithImages {
        fieldGroupName
        layoutStepsWithImages {
          layoutContent {
            heading
            intro
            backgroundGradient
            card {
              body
              imagePosition
              halfBackground
              halfBackgroundColor
              halfBackgroundPosition
              image {
                altText
                sourceUrl
                localFile {
                  ext
                  childImageSharp { gatsbyImageData }
                }
              }
              componentButton {
                fieldGroupName
                colors { fieldGroupName resting }
                link { url title target }
                style
              }
            }
            stepRows {
              image {
                altText
                sourceUrl
                localFile {
                  ext
                  childImageSharp { gatsbyImageData }
                }
              }
              steps {
                heading
                body
                componentButton {
                  fieldGroupName
                  colors { fieldGroupName resting }
                  link { url title target }
                  style
                }
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
