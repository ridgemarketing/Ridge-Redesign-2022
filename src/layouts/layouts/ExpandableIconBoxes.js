import React, { useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import Parser from "../../components/global/Parser"

const ExpandableIconBox = ({ box, idx, textColor }) => {
    const [expanded, setExpanded] = useState(false)

    const heading      = box.heading      ?? false
    const body         = box.body         ?? false
    const expandedBody = box.expandedBody ?? false
    const icon         = box.image        ?? false

    let renderIcon = null
    if (icon) {
        renderIcon = (icon.localFile?.ext === '.svg')
            ? <img src={icon.sourceUrl} alt={icon.altText || ''} className="w-auto h-[55px] object-contain" />
            : icon.localFile?.childImageSharp?.gatsbyImageData
                ? <GatsbyImage
                    image={icon.localFile.childImageSharp.gatsbyImageData}
                    alt={icon.altText || ''}
                    className="w-auto h-[55px]"
                    objectFit="contain" />
                : null
    }

    return (
        <div key={`ExpandableIconBox__${idx}`} className="flex gap-5 items-start">
            {renderIcon &&
                <div className="w-[60px] shrink-0">
                    {renderIcon}
                </div>
            }
            <div className="flex flex-col gap-6 flex-1 min-w-0">
                {heading &&
                    <h3 className={`font-basic-sans font-semibold text-[26px] leading-[32px] ${textColor}`}>
                        {heading}
                    </h3>
                }
                {body &&
                    <p
                        dangerouslySetInnerHTML={{ __html: Parser(body) }}
                        className={`font-basic-sans font-normal text-[18px] leading-[26px] ${textColor}`}
                    />
                }
                {expandedBody && expanded &&
                    <div
                        dangerouslySetInnerHTML={{ __html: Parser(expandedBody) }}
                        className={`font-basic-sans font-normal text-[18px] leading-[26px] ${textColor} [&_p]:mb-4 [&_p:last-child]:mb-0 [&_a]:underline [&_strong]:font-bold`}
                    />
                }
                {expandedBody &&
                    <button
                        type="button"
                        onClick={() => setExpanded(!expanded)}
                        aria-expanded={expanded}
                        className={`${theme.text_links.BASE_STYLING} ${theme.text_links.STD}  text-[#A9CF38] uppercase font-stratos text-[21px] leading-[28px] inline-flex items-center gap-2 self-start cursor-pointer`}
                    >
                        {expanded ? 'Read Less – ' : 'Read More + '}
                    </button>
                }
            </div>
        </div>
    )
}

const ExpandableIconBoxes = (props) => {
    const content   = props.layoutData.layoutContent
    const settings  = props.layoutData.layoutSettings

    const heading   = content.heading   ?? false
    const introBody = content.introBody ?? false
    const columns   = Number(content.columns) || 2
    const boxes     = content.boxes     ?? []

    const textColor = settings.backgroundColor === 'black' ? 'text-white' : 'text-black'

    const gridCols = columns === 3
        ? 'md:grid-cols-2 xl:grid-cols-3'
        : 'md:grid-cols-2'

    return (
        <Section settings={settings}>
            <Container container={settings.containerWidth}>
                <div className="flex flex-col gap-10 lg:gap-[43px] items-center">

                    {(heading || introBody) &&
                        <div className="flex flex-col gap-6 text-center max-w-[1122px]">
                            {heading &&
                                <h2 className={`font-stratos font-semibold uppercase text-[40px] md:text-[50px] leading-[0.995] ${textColor}`}>
                                    {heading}
                                </h2>
                            }
                            {introBody &&
                                <div
                                    dangerouslySetInnerHTML={{ __html: Parser(introBody) }}
                                    className={`font-basic-sans font-light text-[21px] leading-[28px] ${textColor} [&_p]:mb-4 [&_p:last-child]:mb-0 [&_a]:underline [&_strong]:font-bold`}
                                />
                            }
                        </div>
                    }

                    {boxes.length > 0 &&
                        <div className={`grid grid-cols-1 ${gridCols} gap-x-12 gap-y-16 lg:gap-x-[46px] lg:gap-y-[97px] w-full items-start`}>
                            {boxes.map((box, idx) => (
                                <ExpandableIconBox key={idx} box={box} idx={idx} textColor={textColor} />
                            ))}
                        </div>
                    }

                </div>
            </Container>
        </Section>
    )
}

export default ExpandableIconBoxes


export const query = graphql`
  fragment ExpandableIconBoxesPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_ExpandableIconBoxes {
        fieldGroupName
        layoutExpandableIconBoxes {
          layoutContent {
            heading
            introBody
            columns
            boxes {
              heading
              body
              expandedBody
              image {
                altText
                sourceUrl
                localFile {
                  ext
                  childImageSharp { gatsbyImageData }
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
  fragment ExpandableIconBoxesService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_ExpandableIconBoxes {
        fieldGroupName
        layoutExpandableIconBoxes {
          layoutContent {
            heading
            introBody
            columns
            boxes {
              heading
              body
              expandedBody
              image {
                altText
                sourceUrl
                localFile {
                  ext
                  childImageSharp { gatsbyImageData }
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
  fragment ExpandableIconBoxesProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_ExpandableIconBoxes {
        fieldGroupName
        layoutExpandableIconBoxes {
          layoutContent {
            heading
            introBody
            columns
            boxes {
              heading
              body
              expandedBody
              image {
                altText
                sourceUrl
                localFile {
                  ext
                  childImageSharp { gatsbyImageData }
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
