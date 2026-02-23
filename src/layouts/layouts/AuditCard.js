import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Section, Container } from "../../components/global/Wrappers"
import Parser from "../../components/global/Parser"
import Buttons from "../../components/global/Buttons"
import { theme } from "../../static/theme"

const AuditCard = (props) => {
    const content             = props.layoutData.layoutContent
    const settings            = props.layoutData.layoutSettings

    const heading             = content.heading      ?? false
    const subHeading          = content.subHeading   ?? false
    const body                = content.body         ?? false
    const list                = content.list         ?? false
    const componentButton     = content.componentButton ?? false
    const image               = content.image        ?? false
    const halfBackground      = content.halfBackground ?? false
    const halfBackgroundColor = content.halfBackgroundColor ?? false

    let renderImage
    if (image) {
        renderImage = (image.localFile?.ext === '.svg')
            ? <img src={image.sourceUrl} alt={image.altText || ''} className="w-full rounded-xl object-contain" />
            : image.localFile?.childImageSharp?.gatsbyImageData
                ? <GatsbyImage
                    image={image.localFile.childImageSharp.gatsbyImageData}
                    alt={image.altText || ''}
                    className="w-full rounded-xl"
                    objectFit="contain" />
                : null
    }

    return (
        <Section settings={settings}>
            {halfBackground && halfBackgroundColor &&
              <div className={`absolute top-0 left-0 h-1/2 w-full bg-${halfBackgroundColor}`}></div>
            }
            <Container container="default">
                <div className="bg-[#F3F1EE] rounded-[21px] overflow-hidden flex flex-col xl:flex-row gap-8 xl:gap-12 p-8 md:p-12 xl:p-16">

                    <div className="flex flex-col gap-5 xl:w-1/2">
                        {heading &&
                            <h2
                                dangerouslySetInnerHTML={{ __html: Parser(heading) }}
                                className={`${theme.text.H5} text-black`}
                            />
                        }
                        {subHeading &&
                            <p
                                dangerouslySetInnerHTML={{ __html: Parser(subHeading) }}
                                className={`${theme.text.H4} text-black mb-8`}
                            />
                        }
                        {body &&
                            <div
                                dangerouslySetInnerHTML={{ __html: Parser(body) }}
                                className={`${theme.text.H4_LTE} text-black max-w-[535px]`}
                            />
                        }
                        {list && list.length > 0 &&
                            <ul className="flex flex-col gap-4 mt-2">
                                {list.map((item, index) => (
                                    <li key={index} className="flex items-baseline gap-3 font-basic-sans font-semibold text-[26px] leading-[1.4]">
                                        <svg className="w-[24px] shrink-0" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#1F9DA5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <span className="text-black">{item.item}</span>
                                    </li>
                                ))}
                            </ul>
                        }
                        {componentButton?.link?.url &&
                            <div className="mt-4">
                                <Buttons content={componentButton} sectionBackground="paleTeal" />
                            </div>
                        }
                    </div>

                    {renderImage &&
                        <div className="xl:w-1/2 flex items-center justify-center">
                            {renderImage}
                        </div>
                    }

                </div>
            </Container>
        </Section>
    )
}

export default AuditCard

export const query = graphql`
  fragment AuditCardPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_AuditCard {
      fieldGroupName
      layoutAuditCard {
        layoutContent {
          heading
          subHeading
          body
          list { item }
          componentButton {
            style
            link { target title url }
            colors { resting }
          }
          image {
            altText
            sourceUrl
            localFile {
              ext
              childImageSharp { gatsbyImageData }
            }
          }
          halfBackground
          halfBackgroundColor
        }
        layoutSettings {
          padding { bottom top }
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
  fragment AuditCardService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_AuditCard {
      fieldGroupName
      layoutAuditCard {
        layoutContent {
          heading
          subHeading
          body
          list { item }
          componentButton {
            style
            link { target title url }
            colors { resting }
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
        }
      }
    }
  }
`

export const projectQuery = graphql`
  fragment AuditCardProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_AuditCard {
      fieldGroupName
      layoutAuditCard {
        layoutContent {
          heading
          subHeading
          body
          list { item }
          componentButton {
            style
            link { target title url }
            colors { resting }
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
        }
      }
    }
  }
`

export const landerQuery = graphql`
  fragment AuditCardLander on WpLander_Flexiblelayouts_Layouts {
    ... on WpLander_Flexiblelayouts_Layouts_AuditCard {
      fieldGroupName
      layoutAuditCard {
        layoutContent {
          heading
          subHeading
          body
          list { item }
          componentButton {
            style
            link { target title url }
            colors { resting }
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
        }
      }
    }
  }
`
