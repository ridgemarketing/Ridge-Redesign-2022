import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide"
import { Section, Container } from "../../components/global/Wrappers"
import Link from "../../components/global/FlexibleLink"
import { theme } from "../../static/theme"

const Chevron = ({ className }) => (
    <svg className={className} width="14" height="24" viewBox="0 0 14 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 12L12 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const renderImage = (image) => {
    if (!image) return null
    return (image.localFile?.ext === '.svg')
        ? <img src={image.sourceUrl} alt={image.altText || ''} className="w-full h-full object-cover" />
        : image.localFile?.childImageSharp?.gatsbyImageData
            ? <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText || ''} className="w-full h-full" objectFit="cover" />
            : null
}

const FeaturedCampaigns = (props) => {

    const content             = props.layoutData.layoutContent
    const settings            = props.layoutData.layoutSettings
    const campaigns           = content.campaigns ?? []
    const halfBackground      = content.halfBackground ?? false
    const halfBackgroundColor = content.halfBackgroundColor ?? false
    const hasMultiple         = campaigns.length > 1

    const linkClasses = `${theme.text_links.BASE_STYLING} ${theme.text_links.FWD_BASE} ${theme.text_links.STD} ${theme.text_links.HOVER_GREEN} ${theme.text_links.ARW_FWD_BLACK} ${theme.text_links.HOVER_ARW_FWD_GREEN} text-black`

    return (
        <Section settings={settings}>
            {halfBackground && halfBackgroundColor &&
                <div className={`absolute top-0 left-0 h-1/2 w-full bg-${halfBackgroundColor}`}></div>
            }
            <Container container={settings.containerWidth}>
                {campaigns.length > 0 &&
                    <div className="relative bg-white rounded-[25px] shadow-[0_0_20px_0_rgba(0,0,0,0.2)] p-5 md:p-8 xl:p-[30px]">
                        <Splide
                            hasTrack={false}
                            options={{
                                type       : hasMultiple ? 'loop' : 'slide',
                                perPage    : 1,
                                perMove    : 1,
                                arrows     : hasMultiple,
                                pagination : false,
                                drag       : hasMultiple,
                                speed      : 600,
                            }}
                        >
                            <SplideTrack>
                                {campaigns.map((campaign, index) => (
                                    <SplideSlide key={`campaign__${index}`}>
                                        <div className="flex flex-col lg:flex-row gap-8 xl:gap-16 items-stretch">
                                            <div className="lg:w-1/2 shrink-0 rounded-[16px] overflow-hidden aspect-[500/327]">
                                                {renderImage(campaign.image)}
                                            </div>
                                            <div className="lg:w-1/2 flex flex-col justify-center pb-14 lg:pb-0 lg:pr-6">
                                                {campaign.eyebrow &&
                                                    <p className={`${theme.text.P_STD} text-black mb-3`}>{campaign.eyebrow}</p>
                                                }
                                                {campaign.heading &&
                                                    <h3 className={`${theme.text.H5} text-black`}>{campaign.heading}</h3>
                                                }
                                                {campaign.link?.url &&
                                                    <div className="mt-8">
                                                        <Link link={campaign.link} classes={linkClasses} />
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </SplideSlide>
                                ))}
                            </SplideTrack>

                            {hasMultiple &&
                                <div className="splide__arrows absolute bottom-5 right-5 md:bottom-8 md:right-8 xl:bottom-[30px] xl:right-[30px] flex gap-3">
                                    <button className="splide__arrow splide__arrow--prev !static !transform-none w-[58px] h-[57px] flex items-center justify-center bg-rm-pale-grey text-black hover:text-rm-green transition-colors !opacity-100" aria-label="Previous campaign">
                                        <Chevron className="w-[14px] h-[24px]" />
                                    </button>
                                    <button className="splide__arrow splide__arrow--next !static !transform-none w-[58px] h-[57px] flex items-center justify-center bg-rm-pale-grey text-black hover:text-rm-green transition-colors !opacity-100" aria-label="Next campaign">
                                        <Chevron className="w-[14px] h-[24px] rotate-180" />
                                    </button>
                                </div>
                            }
                        </Splide>
                    </div>
                }
            </Container>
        </Section>
    )
}

export default FeaturedCampaigns


export const query = graphql`
  fragment FeaturedCampaignsPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_FeaturedCampaigns {
      fieldGroupName
      layoutFeaturedCampaigns {
        layoutContent {
          campaigns {
            eyebrow
            heading
            link {
              url
              title
              target
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
          halfBackground
          halfBackgroundColor
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
  fragment FeaturedCampaignsService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_FeaturedCampaigns {
      fieldGroupName
      layoutFeaturedCampaigns {
        layoutContent {
          campaigns {
            eyebrow
            heading
            link {
              url
              title
              target
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
          halfBackground
          halfBackgroundColor
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
  fragment FeaturedCampaignsProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_FeaturedCampaigns {
      fieldGroupName
      layoutFeaturedCampaigns {
        layoutContent {
          campaigns {
            eyebrow
            heading
            link {
              url
              title
              target
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
          halfBackground
          halfBackgroundColor
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
