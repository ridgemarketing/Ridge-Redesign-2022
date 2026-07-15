import React, { useState, useRef, useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Section, Container } from "../../components/global/Wrappers"
import Parser from "../../components/global/Parser"
import { theme } from "../../static/theme"

const CaseStudies = (props) => {
    const content   = props.layoutData.layoutContent || {}
    const settings  = props.layoutData.layoutSettings || {}
    const heading   = content.heading ?? false
    const body      = content.body    ?? false
    const items     = content.items   ?? []

    const [slide, setSlide]                     = useState(0)
    const [slideInteraction, setInteraction]    = useState(false)
    const [isVisible, setIsVisible]             = useState(false)
    const carouselRef                           = useRef(null)
    const activeVideo                           = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting)
        )
        if (carouselRef.current) observer.observe(carouselRef.current)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (activeVideo.current) {
            activeVideo.current.play().catch(() => {})
        }
    }, [slide])

    useEffect(() => {
        const interval = setInterval(() => {
            if (isVisible && !slideInteraction) {
                setSlide(i => (i === items.length - 1) ? 0 : i + 1)
            }
        }, 6000)
        return () => clearInterval(interval)
    })

    const nextSlide = () => {
        setInteraction(true)
        setSlide(i => (i === items.length - 1) ? 0 : i + 1)
    }

    const prevSlide = () => {
        setInteraction(true)
        setSlide(i => (i === 0) ? items.length - 1 : i - 1)
    }

    if (!items.length) {
        return null
    }

    const current       = items[slide]
    const renderImage   = current.image
        ? current?.image?.localFile?.childImageSharp?.gatsbyImageData
            ?  <>
                {current?.mobileImage &&
                    <GatsbyImage
                        image={current.mobileImage.localFile.childImageSharp.gatsbyImageData}
                        alt={current.mobileImage.altText || ''}
                        className="w-full h-full aspect-video xl:!hidden"
                        objectFit="contain"
                    />
                }
                <GatsbyImage
                    image={current.image.localFile.childImageSharp.gatsbyImageData}
                    alt={current.image.altText || ''}
                    className={`w-full h-full aspect-video ${current?.mobileImage ?? 'hidden xl:!block'}`}
                    objectFit="contain"
                />
              </>
            : current.image.sourceUrl
                ? <img src={current.image.sourceUrl} alt={current.image.altText || ''} className="w-full h-full object-cover" />
                : null
        : null

    const renderVideo = current.video?.mediaItemUrl
        ? <video key={current.video.mediaItemUrl} ref={activeVideo} autoPlay muted playsInline loop className="w-full h-full aspect-video">
               <source src={current.video.mediaItemUrl} type={current.video.mimeType} />
          </video>
        : null

    return (
        <Section settings={settings}>

            {(heading || body) && (
                <Container container={settings.containerWidth} classes="mb-12 lg:mb-20 text-center">
                    {heading &&
                        <h2 className={`${theme.text.H5} text-black`}>{heading}</h2>
                    }
                    {body &&
                        <div
                            dangerouslySetInnerHTML={{ __html: Parser(body) }}
                            className={`${theme.text.H4_LTE} !text-[21px] !leading-[28px] md:!text-[26px] md:!leading-[36px] text-black mt-4 max-w-[800px] mx-auto`}
                        />
                    }
                </Container>
            )}

            <div ref={carouselRef} className="flex flex-col xl:flex-row xl:mr-[calc((100%-1224px)/2)] max-w-[2000px] 3xl:mx-auto items-center justify-start">

                <div className="w-full xl:w-[55%] xlz:w-[65%] xlz:max-w-[945px] aspect-video overflow-hidden shrink-0">
                    {current.mediaType === 'image' ? (renderImage) : (renderVideo)}
                </div>

                <div className="w-full xl:w-[45%] xlz:w-[35%] flex flex-col justify-center gap-10 px-8 md:px-14 xl:pl-20 xl:pr-0 py-12 xl:py-0 text-center md:text-left items-center md:items-start">

                    <div className="flex flex-col gap-6">
                        {current.heading &&
                            <h3 className="font-stratos font-normal text-[34px] leading-[38px] md:text-[2.875rem] md:leading-[1.2] text-black">
                                {current.heading}
                            </h3>
                        }
                        {current.body &&
                            <div
                                dangerouslySetInnerHTML={{ __html: Parser(current.body) }}
                                className={`${theme.text.P_STD} !leading-[2rem] text-black`}
                            />
                        }
                        {current.tools &&
                            <p className={`${theme.text.FOOTER} text-black`}>
                                <strong>Tools:</strong> <span>{current.tools}</span>
                            </p>
                        }
                    </div>

                    {items.length > 1 &&
                        <div className="flex items-center bg-rm-pale-grey w-[138px] h-[68px]">
                            <button
                                onClick={prevSlide}
                                aria-label="Previous case study"
                                className="flex items-center justify-center w-[46px] h-full shrink-0 transition-opacity hover:opacity-60"
                            >
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
                                    <path d="M9 1L1 9L9 17" stroke="#474848" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <span className={`${theme.text.FOOTER} text-black text-center flex-1`}>
                                {slide + 1} / {items.length}
                            </span>
                            <button
                                onClick={nextSlide}
                                aria-label="Next case study"
                                className="flex items-center justify-center w-[46px] h-full shrink-0 transition-opacity hover:opacity-60"
                            >
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
                                    <path d="M1 1L9 9L1 17" stroke="#474848" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    }

                </div>
            </div>

        </Section>
    )
}

export default CaseStudies


export const query = graphql`
  fragment CaseStudiesPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_CaseStudies {
      fieldGroupName
      layoutCaseStudies {
        layoutContent {
          heading
          body
          items {
            heading
            body
            tools
            mediaType
            video {
              mediaDetails { file height width }
              mimeType
              mediaItemUrl
            }
            image {
              altText
              sourceUrl
              localFile { ext childImageSharp { gatsbyImageData } }
            }
            mobileImage {
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
  fragment CaseStudiesService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_CaseStudies {
      fieldGroupName
      layoutCaseStudies {
        layoutContent {
          heading
          body
          items {
            heading
            body
            tools
            mediaType
            video {
              mediaDetails { file height width }
              mimeType
              mediaItemUrl
            }
            image {
              altText
              sourceUrl
              localFile { ext childImageSharp { gatsbyImageData } }
            }
            mobileImage {
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
  fragment CaseStudiesProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_CaseStudies {
      fieldGroupName
      layoutCaseStudies {
        layoutContent {
          heading
          body
          items {
            heading
            body
            tools
            mediaType
            video {
              mediaDetails { file height width }
              mimeType
              mediaItemUrl
            }
            image {
              altText
              sourceUrl
              localFile { ext childImageSharp { gatsbyImageData } }
            }
            mobileImage {
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
