import React, { useRef } from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby"
import { theme } from '../../static/theme'

const FullWidthImage = (props) => {
    const content       = props.layoutData.layoutContent;
    const settings      = props.layoutData.layoutSettings;
    let desktopImage;
    if (content.image && content.image.localFile) {
      desktopImage = content.image.localFile.childImageSharp.gatsbyImageData;
    }
    const mobileImage = (content.mobileImage) ? content.mobileImage.localFile.childImageSharp.gatsbyImageData : false;
    const image         = (mobileImage) 
      ? 
          <>
            <div className={`md:hidden`}>
              <GatsbyImage  image={mobileImage} alt={content.mobileImage.altText || ""} />
            </div>
            <div className={`hidden md:block text-center`}>
              <GatsbyImage className={content.imageClasses} image={desktopImage} alt={content.image.altText || ""} />
            </div>
          </>
      :
          <GatsbyImage image={desktopImage} alt={(content.image && content.image.altText) || ""} />;    
    
    const overlap           = content.imageOverlap;
    const overlapImageClass = overlap ? `z-10 relative ` : ` `;
    const overlapSection    = overlap ? `block w-full relative` : `hidden invisible`;
    const overlapBkg        = content.backgroundColor;
    const overlapImage      = useRef(null);
    const overlapDiv        = useRef(null);
    
    const splitMargins = () => {
      function setBkg () {
        if (overlapDiv.current) {
          overlapDiv.current.style.marginTop  = `-${overlapImage.current.clientHeight/2}px`;
          overlapDiv.current.style.height     = `${overlapImage.current.clientHeight/1.5}px`;   
        }
      }
      setBkg()
      
      function handleResize() {
        if (overlapDiv.current) {
          overlapDiv.current.style.marginTop  = `-${overlapImage.current.clientHeight/2}px`;
          overlapDiv.current.style.height     = `${overlapImage.current.clientHeight/1.5}px`;
        }
      }

      if (typeof window !== 'undefined') {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }
      
    }

    splitMargins()

    let textCenter = false;
    if( ( settings.classes = 'text-center' ) ){
      textCenter = true;
    }

    return (
      <>
        <Section settings={settings}>
            <Container container={settings.containerWidth}>
                { (content.heading && textCenter == false) && 
                  <p className={`${theme.text.H2} pb-8 text-center lg:text-left`}>{content.heading}</p>
                }
                { (content.heading && textCenter == true) && 
                  <p className={`${theme.text.H2} pb-8 text-center`}>{content.heading}</p>
                }
                <div ref={overlapImage} className={`mx-auto ${overlapImageClass}`}> 
                    {image}
                </div>
            </Container>
        </Section>
        <div ref={overlapDiv} className={`${overlapSection} bg-${theme.backgroundColor[overlapBkg]}`}></div>
      </> 
    )
}
export default FullWidthImage

export const query = graphql`
  fragment FullWidthImagePage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_FullWidthImage {
        fieldGroupName
        layoutFullWidthImage {
          layoutContent {
            heading
            imageOverlap
            imageClasses
            backgroundColor
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              altText
            }
            mobileImage {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              altText
            }
          }
          layoutSettings {
            containerWidth
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
  fragment FullWidthImageService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_FullWidthImage {
        fieldGroupName
        layoutFullWidthImage {
          layoutContent {
            heading
            imageOverlap
            imageClasses
            backgroundColor
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              altText
            }
            mobileImage {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              altText
            }
          }
          layoutSettings {
            containerWidth
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
  fragment FullWidthImageProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_FullWidthImage {
        fieldGroupName
        layoutFullWidthImage {
          layoutContent {
            heading
            imageOverlap
            imageClasses
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              altText
            }
            mobileImage {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              altText
            }
          }
          layoutSettings {
            containerWidth
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
