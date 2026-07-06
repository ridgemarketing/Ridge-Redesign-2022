import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"
import { Section, Container } from "../../components/global/Wrappers"
import Parser from "../../components/global/Parser"
import { theme } from "../../static/theme"

const LogoCarousel = (props) => {

    const content  = props.layoutData.layoutContent
    const settings = props.layoutData.layoutSettings
    const logos    = content.logos ?? []

    return (
        <Section settings={settings}>
            <Container>
                {content.heading &&
                    <h2
                        className={`${theme.text.H2} text-black text-center`}
                        dangerouslySetInnerHTML={{ __html: Parser(content.heading) }}
                    ></h2>
                }
                {content.body &&
                    <p
                        className={`${theme.text.P_STD} text-black text-center max-w-[1135px] mx-auto mt-5`}
                        dangerouslySetInnerHTML={{ __html: Parser(content.body) }}
                    ></p>
                }
          

            {logos.length > 0 &&
                <div className="relative mt-12 overflow-hidden">
                    <Splide
                        extensions={{ AutoScroll }}
                        options={{
                            type       : 'loop',
                            autoWidth  : true,
                            gap        : '1.5rem',
                            drag       : 'free',
                            focus      : 'center',
                            arrows     : false,
                            pagination : false,
                            perMove    : 1,
                            autoScroll : {
                                pauseOnHover: false,
                                pauseOnFocus: false,
                                rewind      : true,
                                speed       : 0.6,
                            },
                        }}
                    >
                        {logos.map((logo, index) => {
                            const image = logo.image
                            if (!image) return null
                            const rendered = (image.localFile?.ext === '.svg')
                                ? <img src={image.sourceUrl} alt={image.altText || ''} className="max-h-[70px] w-auto max-w-[160px] object-contain" />
                                : image.localFile?.childImageSharp?.gatsbyImageData
                                    ? <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText || ''} className="max-h-[70px] max-w-[160px]" objectFit="contain" />
                                    : null
                            return (
                                <SplideSlide key={`logo__${index}`}>
                                    <div className="py-6">
                                        <div className="bg-white rounded-[25px] shadow-[0_0_20px_0_rgba(0,0,0,0.2)] w-[225px] h-[125px] flex items-center justify-center px-8">
                                            {rendered}
                                        </div>
                                    </div>
                                </SplideSlide>
                            )
                        })}
                    </Splide>

                    {/* Edge fades */}
                    <div aria-hidden={true} className="pointer-events-none absolute left-0 top-0 h-full w-[100px] md:w-[200px] z-10 bg-gradient-to-r from-white to-transparent"></div>
                    <div aria-hidden={true} className="pointer-events-none absolute right-0 top-0 h-full w-[100px] md:w-[200px] z-10 bg-gradient-to-l from-white to-transparent"></div>
                </div>
            }
            </Container>
        </Section>
    )
}

export default LogoCarousel


export const query = graphql`
  fragment LogoCarouselPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_LogoCarousel {
      fieldGroupName
      layoutLogoCarousel {
        layoutContent {
          heading
          body
          logos {
            image {
              altText
              sourceUrl
              localFile { ext childImageSharp { gatsbyImageData } }
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
  fragment LogoCarouselService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_LogoCarousel {
      fieldGroupName
      layoutLogoCarousel {
        layoutContent {
          heading
          body
          logos {
            image {
              altText
              sourceUrl
              localFile { ext childImageSharp { gatsbyImageData } }
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
  fragment LogoCarouselProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_LogoCarousel {
      fieldGroupName
      layoutLogoCarousel {
        layoutContent {
          heading
          body
          logos {
            image {
              altText
              sourceUrl
              localFile { ext childImageSharp { gatsbyImageData } }
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
