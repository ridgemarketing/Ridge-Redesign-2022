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
                                            <div className="lg:w-1/2 flex flex-col justify-center pb-20 md:pb-14 lg:pb-0 lg:pr-6">
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
                                <div className="splide__arrows absolute bottom-5 right-5 md:bottom-8 md:right-8 xl:bottom-0 xl:right-[30px] flex">
                                    <button className="splide__arrow splide__arrow--prev !rounded-none !static !transform-none !w-[58px] !h-[57px] flex items-center justify-center duration-300 ease-out !bg-rm-pale-grey text-black hover:!bg-black hover:!text-rm-pale-grey focus:!bg-black focus:!text-rm-pale-grey transition-colors !opacity-100" aria-label="Previous campaign">
                                      <svg className="min-h-[35px]" width="19" height="35" viewBox="0 0 19 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.839844 34.5898C1.23047 34.9805 1.77734 34.9805 2.16797 34.5898L18.6523 18.1055C19.043 17.7148 19.043 17.168 18.6523 16.7773L2.16797 0.292969C1.77734 -0.0976562 1.23047 -0.0976562 0.839844 0.292969L0.292969 0.839844C-0.0976562 1.23047 -0.0976562 1.77734 0.292969 2.16797L15.5273 17.4023L0.292969 32.7148C-0.0976562 33.1055 -0.0976562 33.6523 0.292969 34.043L0.839844 34.5898Z" fill="currentColor"/>
                                      </svg>
                                    </button>
                                    <button className="splide__arrow splide__arrow--next !rounded-none !static !transform-none !w-[58px] !h-[57px] flex items-center justify-center duration-300 ease-out !bg-rm-pale-grey text-black hover:!bg-black hover:!text-rm-pale-grey focus:!bg-black focus:!text-rm-pale-grey transition-colors !opacity-100" aria-label="Next campaign">
                                         <svg className="rotate-180 min-h-[35px]" width="19" height="35" viewBox="0 0 19 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M18.1055 34.5898C17.7148 34.9805 17.168 34.9805 16.7773 34.5898L0.292969 18.1055C-0.0976562 17.7148 -0.0976562 17.168 0.292969 16.7773L16.7773 0.292969C17.168 -0.0976562 17.7148 -0.0976562 18.1055 0.292969L18.6523 0.839844C19.043 1.23047 19.043 1.77734 18.6523 2.16797L3.41797 17.4023L18.6523 32.7148C19.043 33.1055 19.043 33.6523 18.6523 34.043L18.1055 34.5898Z" fill="currentColor"/>
                                        </svg>
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
