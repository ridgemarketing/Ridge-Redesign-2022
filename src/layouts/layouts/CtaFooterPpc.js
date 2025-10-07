import React, { useState } from "react"
import { theme } from '../../static/theme'

import { Container, Section } from '../../components/global/Wrappers.js'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"

const CtaFooterPpc = (props) => {

    const content   = props.layoutData.layoutContent;
    const settings  = props.layoutData.layoutSettings;
    const image = content.image?.localFile
    ? (content.image.localFile.ext === ".svg"
        ? <img className="w-full object-contain" src={content.image.sourceUrl} alt={content.image?.altText || ""} />
        : <GatsbyImage className="w-full" objectFit="contain" image={getImage(content.image.localFile)} alt={content.image?.altText || ""} />
      )
    : null;

    return(
      <section className={`-mt-px pt-24 px-0 bg-rm-aqua overflow-hidden`}> 
        <Container container={`slim`}>
        <div className={`flex flex-col-reverse lg:grid lg:gap-10 ${image ? "lg:grid-cols-10" : "lg:grid-cols-7"}`}>
          {image && (
            <div className="lg:col-span-3 relative">
              <div className="hidden lg:block lg:absolute -bottom-4 left-0 w-full h-auto">
                {image}
              </div>
            </div>
          )}

          <div className={`${image ? "lg:col-span-7" : "lg:col-span-7 lg:col-start-1"} pb-28`}>
            {content.heading && (
              <h2 className={`${theme.text.HERO} text-white`}>{content.heading}</h2>
            )}

            {content.link?.url && (
              <Link
                to={content.link.url}
                className={`mx-auto mt-8 lg:mx-0 text-white border-2 border-white py-3 px-16 !inline-flex ${theme.text_links.BASE_STYLING} ${theme.text_links.FWD_BASE} ${theme.text_links.STD} !text-[1.75rem] !leading-[1.12] !px-9 ${theme.text_links.ARW_FWD_WHITE} ${theme.text_links.HOVER_ARW_FWD_BLACK} hover:bg-white hover:text-rm-black`}
              >
                {content.link.title}
              </Link>
            )}
          </div>
        </div>

        </Container>
      </section>
    )
}

export default CtaFooterPpc

export const query = graphql`
fragment CtaFooterPpcPage on WpPage_Flexiblelayouts_Layouts {
  ... on WpPage_Flexiblelayouts_Layouts_CtaFooterPpc {
      fieldGroupName
      layoutCtaFooterPpc {
        layoutContent {
          link {
            target
            title
            url
          }
          heading
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
  fragment CtaFooterPpcService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_CtaFooterPpc {
        fieldGroupName
        layoutCtaFooterPpc {
          layoutContent {
            link {
              target
              title
              url
            }
            heading
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
  fragment CtaFooterPpcProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_CtaFooterPpc {
        fieldGroupName
        layoutCtaFooterPpc {
          layoutContent {
            link {
              target
              title
              url
            }
            heading
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

  export const landerQuery = graphql`
  fragment CtaFooterPpcLander on WpLander_Flexiblelayouts_Layouts {
    ... on WpLander_Flexiblelayouts_Layouts_CtaFooterPpc {
        fieldGroupName
        layoutCtaFooterPpc {
          layoutContent {
            link {
              target
              title
              url
            }
            heading
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