import React, {useEffect, useRef} from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"
import Buttons from "../../components/global/Buttons"

const FullWidthImageVideoText = (props) => {

  const content       = props.layoutData.layoutContent || {};
  const settings      = props.layoutData.layoutSettings || {};
  let headerClasses;
  let imageWrapperClasses;
  let imageClasses    ='';
  let mobile;
  let textColor;
  // console.log(settings);

  if (settings.backgroundColor === 'black') {
    textColor = 'text-white';
  }

  if (content.mobile) {
    imageClasses += 'hidden md:block';
  }

  if (content.image) {
    var image = (content.image.localFile.ext === ".svg") 
    ? <img className={`mx-auto ${imageClasses}`} src={content.image.sourceUrl} alt={content.image.altText}/>
    : <GatsbyImage 
        image     ={content.image.localFile.childImageSharp.gatsbyImageData} 
        alt       ={content.image.altText} 
        className ={`${imageClasses}`} 
        objectFit ={'contain'}/> ;
  }

  if (content.alignment === 'overlap') {
    headerClasses       = 'z-20 relative';
    imageWrapperClasses = 'relative bottom-6 z-10';
  } else {
    headerClasses       = '';
    imageWrapperClasses = 'my-10';
  }


  const mobileVideo  = useRef(null)
  
  useEffect( () => {
     const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            entry.target.play()
        }
      },
      {
        root        : null,
        rootMargin  : '0px',
        threshold   : 0.5,
      }
    )

    if (mobileVideo.current) {
      observer.observe(mobileVideo.current)
    }

    return () => {
      if (mobileVideo.current) {
        observer.unobserve(mobileVideo.current)
      }
      observer.disconnect()
    }
  }, [content.mobile])

    return (
      <Section settings={settings}>
        <Container container={settings.containerWidth}>
          <div className={`${settings?.classes?.includes('text-left') ? 'text-left' : 'text-center'}`}>
            {content.heading && 
              <h2 dangerouslySetInnerHTML={{__html: Parser(content.heading)}} className={`${theme.text.H2} ${headerClasses} ${textColor} max-w-[1120px] mx-auto `}></h2>
            }

            {content.alignment !== 'overlap' && content.intro &&  
              <p dangerouslySetInnerHTML={{__html: Parser(content.intro)}} className={`mt-8 ${theme.text.P_STD} ${textColor}`}></p> 
            }

            {image &&
              <div className={`mx-auto max-w-[1120px] ${content.alignment === 'overlapBottom' ? 'z-20 relative' : ''} ${imageWrapperClasses}`}>
                <div className={imageClasses}>{image}</div>
              </div>
            }

            {content.mobile &&
              <video ref={mobileVideo} className="md:hidden block mx-auto" controls={false} muted loop={true}>
                  <source src={content.mobile.mediaItemUrl} type={content.mobile.mimeType} />
              </video>
            }

            {content.columns &&
              <div className="flex flex-col md:flex-row md:text-left md:gap-12 px-4"> 
                {content.columns.map(el => {
                  return  <p dangerouslySetInnerHTML={{__html: Parser(el.column)}} className={`mt-6 ${theme.text.P_STD} max-w-[1120px] mx-auto ${textColor}`}></p> 
                })}
              </div>
            }

            {content.alignment !== 'overlap' && content.body && 
              <p dangerouslySetInnerHTML={{__html: Parser(content.body)}} className={`mt-10 ${theme.text.P_STD} max-w-[1120px] mx-auto ${textColor}`}></p> 
            }


            {content.alignment === 'overlap' && content.intro &&  
              <p dangerouslySetInnerHTML={{__html: Parser(content.intro)}} className={`text-left mt-8 ${theme.text.H4_LTE} ${textColor}`}></p> 
            }
            
            {content.alignment == 'overlap' && content.body &&  
              <p dangerouslySetInnerHTML={{__html: Parser(content.body)}} className={`text-left mt-10 ${theme.text.P_STD} ${textColor}`}></p> 
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

export default FullWidthImageVideoText


export const query = graphql`
  fragment FullWidthImageVideoTextPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_FullWidthImageVideoText {
        fieldGroupName
        layoutFullWidthImageVideoText {
          layoutContent {
            alignment
            body
            heading
            intro
            columns{
              column
            }
            componentButton {
              link {
                target
                title
                url
              }
              colors {
                resting
              }
              style
            }
            image {
              localFile {
                ext
                childImageSharp {
                  gatsbyImageData
                }
              }
              altText
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
            containerWidth
          }
        }
      }
  }
`
export const serviceQuery = graphql`
  fragment FullWidthImageVideoTextService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_FullWidthImageVideoText {
        fieldGroupName
        layoutFullWidthImageVideoText {
          layoutContent {
            alignment
            body
            heading
            intro
            columns{
              column
            }
            componentButton {
              link {
                target
                title
                url
              }
              colors {
                resting
              }
              style
            }
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
            mobile {
                mimeType
                mediaItemUrl
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
            containerWidth
          }
        }
      }
  }
`

export const projectQuery = graphql`
  fragment FullWidthImageVideoTextProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_FullWidthImageVideoText {
        fieldGroupName
        layoutFullWidthImageVideoText {
          layoutContent {
            alignment
            body
            heading
            intro
            columns{
              column
            }
            componentButton {
              link {
                target
                title
                url
              }
              colors {
                resting
              }
              style
            }
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
            mobile {
                mimeType
                mediaItemUrl
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
            containerWidth
          }
        }
      }
  }
`