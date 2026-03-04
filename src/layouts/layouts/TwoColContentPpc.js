import React, { useEffect, useRef } from "react"
import { graphql } from "gatsby"
import { Section, Container } from "../../components/global/Wrappers"
import Parser from "../../components/global/Parser"
import { theme } from "../../static/theme"

const ArrowIcon = () => (
    <svg className="w-[20px] shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#A9CF38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const TwoColContentPpc = (props) => {
    const content   = props.layoutData.layoutContent
    const settings  = props.layoutData.layoutSettings
    const videoText = content?.videoText ?? false
    const checklist = content?.checklist ?? false
    const listItems = checklist?.list || []

    const video = useRef(null)

    useEffect(() => {
        if (!video.current) return
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.play()
            })
        })
        observer.observe(video.current)
        return () => observer.disconnect()
    }, [])

    return (
        // classes="pt-[60px] pb-[160px]"
        <Section settings={settings}>
            <Container classes="flex flex-col xl:flex-row gap-8 flex-nowrap justify-center items-center xl:p-0 pb-20 xl:pb-20">
                <div className="flex flex-col gap-6 flex-1">
                    {videoText?.heading &&
                        <h2
                            dangerouslySetInnerHTML={{__html: Parser(videoText.heading)}}
                            className={`text-center xl:text-left max-w-[750px] mx-auto xl:max-w-full font-stratos uppercase text-40px leading-44px font-normal ${settings?.backgroundColor === 'black' ? 'text-rm-white' : 'text-black'}`}
                        />
                    }
                    {videoText?.body &&
                        <p
                            dangerouslySetInnerHTML={{__html: Parser(videoText.body)}}
                            className={`text-center xl:text-left ${theme.text.H4_LTE} ${settings?.backgroundColor === 'black' ? 'text-rm-white' : 'text-rm-grey'}`}
                        />
                    }
                    {listItems.length > 0 &&
                        <div className="flex flex-col sm:flex-row gap-x-12 gap-y-0 mt-2 justify-center xl:justify-start">
                            <ul className="flex flex-col">
                                {listItems.map((item, key) => (
                                    <li key={key} className="flex items-center gap-3 mb-4 font-basic-sans font-semibold text-[26px] leading-[30px]">
                                        <ArrowIcon />
                                        <span className={settings?.backgroundColor === 'black' ? 'text-rm-white' : 'text-black'}>{item.item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                </div>
                {videoText?.video?.mediaItemUrl &&
                    <div className="relative max-w-[630px] xl:w-1/2">
                        <video ref={video} className="aspect-video rounded-3xl flex-1 w-full" autoPlay={false} muted={true} controls={false} loop={true}>
                            <source src={videoText.video.mediaItemUrl} type={videoText.video.mimeType} />
                        </video>
                    </div>
                }
            </Container>
            {checklist?.heading &&
                <Container classes="pt-5 md:pt-[60px] flex flex-col gap-12">
                    <h2
                        dangerouslySetInnerHTML={{__html: Parser(checklist.heading)}}
                        className={`text-[2rem] leading-[2.2rem] font-semibold font-stratos uppercase text-center ${settings?.backgroundColor === 'black' ? 'text-rm-white' : 'text-black'}`}
                    />
                </Container>
            }
        </Section>
    )
}

export default TwoColContentPpc

export const pageQuery = graphql`
  fragment TwoColContentPpcPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_TwoColumnContentPpc {
      fieldGroupName
      layoutTwoColumnContentPpc {
        layoutContent {
          videoText {
            heading
            body
            video {
              mediaItemUrl
              mimeType
            }
          }
          checklist {
            heading
            list {
              item
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
  fragment TwoColContentPpcProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_TwoColumnContentPpc {
      fieldGroupName
      layoutTwoColumnContentPpc {
        layoutContent {
          videoText {
            heading
            body
            video {
              mediaItemUrl
              mimeType
            }
          }
          checklist {
            heading
            list {
              item
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

export const serviceQuery = graphql`
  fragment TwoColContentPpcService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_TwoColumnContentPpc {
      fieldGroupName
      layoutTwoColumnContentPpc {
        layoutContent {
          videoText {
            heading
            body
            video {
              mediaItemUrl
              mimeType
            }
          }
          checklist {
            heading
            list {
              item
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
  fragment TwoColContentPpcLander on WpLander_Flexiblelayouts_Layouts {
    ... on WpLander_Flexiblelayouts_Layouts_TwoColumnContentPpc {
      fieldGroupName
      layoutTwoColumnContentPpc {
        layoutContent {
          videoText {
            heading
            body
            video {
              mediaItemUrl
              mimeType
            }
          }
          checklist {
            heading
            list {
              item
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
