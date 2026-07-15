import React, { useEffect, useRef } from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"
import Buttons from "../../components/global/Buttons"

const FullWidthVideoText = (props) => {

  const content   = props.layoutData.layoutContent || {};
  const settings  = props.layoutData.layoutSettings || {};
  let headerClasses;
  let mediaWrapperClasses;
  let textColor;

  if (settings.backgroundColor === 'black') {
    textColor = 'text-white';
  }

  if (content.alignment === 'overlap') {
    headerClasses       = 'z-20 relative';
    mediaWrapperClasses = 'relative bottom-6 z-10';
  } else {
    headerClasses       = '';
    mediaWrapperClasses = 'mt-10';
  }

  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.play().catch(() => {})
        } else {
          entry.target.pause()
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.5 }
    )

    if (videoRef.current) observer.observe(videoRef.current)

    return () => observer.disconnect()
  }, [content.video])

    return (
      <Section settings={settings}>
        <Container container={settings.containerWidth}>
          <div className={`${settings?.classes?.includes('text-left') ? 'text-left' : 'text-center'}`}>
            {content.heading &&
              <h2 dangerouslySetInnerHTML={{__html: Parser(content.heading)}} className={`${theme.text.H2} ${headerClasses} ${textColor} max-w-[1120px] mx-auto `}></h2>
            }

            {content.alignment !== 'overlap' && content.body &&
              <p dangerouslySetInnerHTML={{__html: Parser(content.body)}} className={`mt-6 ${theme.text.P_STD} max-w-[1120px] mx-auto ${textColor}`}></p>
            }

            {content.video?.mediaItemUrl &&
              <div className={`mx-auto max-w-[1120px] bg-white shadow-lg rounded-2xl ${content.alignment === 'overlapBottom' ? 'z-20 relative' : ''} ${mediaWrapperClasses}`}>
                <video ref={videoRef} className="w-full mx-auto rounded-2xl" controls={false} muted loop playsInline autoPlay>
                  <source src={content.video.mediaItemUrl} type={content.video.mimeType} />
                </video>
              </div>
            }

            {content.alignment === 'overlap' && content.intro &&
              <p dangerouslySetInnerHTML={{__html: Parser(content.intro)}} className={`text-left mt-8 ${theme.text.H4_LTE} ${textColor}`}></p>
            }

            {content.alignment === 'overlap' && content.body &&
              <p dangerouslySetInnerHTML={{__html: Parser(content.body)}} className={`text-left mt-8 ${theme.text.P_STD} ${textColor}`}></p>
            }

            {content?.componentButton?.link &&
              <div className={`text-center pt-4 mt-10`}>
                  <Buttons content={content.componentButton} sectionBackground={settings.backgroundColor}/>
              </div>
            }

          </div>
        </Container>
        {content.alignment === 'overlapBottom' &&
          <div className={`bg-white absolute bottom-0 w-full h-[150px]`}></div>
        }
      </Section>
    )
}

export default FullWidthVideoText


export const query = graphql`
  fragment FullWidthVideoTextPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_FullWidthVideoText {
        fieldGroupName
        layoutFullWidthVideoText {
          layoutContent {
            alignment
            body
            heading
            intro
            componentButton {
              link { target title url }
              colors { resting }
              style
            }
            video {
              mimeType
              mediaItemUrl
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
  fragment FullWidthVideoTextService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_FullWidthVideoText {
        fieldGroupName
        layoutFullWidthVideoText {
          layoutContent {
            alignment
            body
            heading
            intro
            componentButton {
              link { target title url }
              colors { resting }
              style
            }
            video {
              mimeType
              mediaItemUrl
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
  fragment FullWidthVideoTextProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_FullWidthVideoText {
        fieldGroupName
        layoutFullWidthVideoText {
          layoutContent {
            alignment
            body
            heading
            intro
            componentButton {
              link { target title url }
              colors { resting }
              style
            }
            video {
              mimeType
              mediaItemUrl
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
