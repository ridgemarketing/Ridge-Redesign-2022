import React, { useRef, useLayoutEffect } from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby"
import { theme } from '../../static/theme'

const FullWidthImage = (props) => {
    const content       = props.layoutData.layoutContent;
    const settings      = props.layoutData.layoutSettings;
    const desktopImage  = content.image.localFile.childImageSharp.gatsbyImageData;
    let mobileImage     = ``;
    if(content.mobileImage){
       mobileImage   = content.mobileImage.localFile.childImageSharp.gatsbyImageData;
    }
    const image         = mobileImage 
        ? 
            <>
            <GatsbyImage className={`md:hidden`} image={mobileImage} alt={content.mobileImage.altText} />
            <GatsbyImage className={`hidden md:block`} image={desktopImage} alt={content.image.altText} />
            </>
        :
            <GatsbyImage image={desktopImage} alt={content.image.altText} />;    
    
    const overlap           = content.imageOverlap;
    const overlapImageClass = overlap === false ? ` ` : `z-10 relative `;
    const overlapSection    = overlap === false ? `hidden invisible` : `block w-full relative`;
    const overlapBkg        = content.backgroundColor;
    const overlapImage      = useRef(null);
    const overlapDiv        = useRef(null);

    useLayoutEffect( () => {
      if(overlap){
        function windowLoads() {
          overlapDiv.current.style.marginTop  = `-${overlapImage.current.clientHeight/2}px`;
          overlapDiv.current.style.height     = `${overlapImage.current.clientHeight/1.5}px`;
        }
        window.addEventListener('load', windowLoads);
        windowLoads();

        function windowResizes() {
          overlapDiv.current.style.marginTop  = `-${overlapImage.current.clientHeight/2}px`;
          overlapDiv.current.style.height     = `${overlapImage.current.clientHeight/1.5}px`;
        }
        window.addEventListener('resize', windowResizes);
        windowResizes();
        return (window.removeEventListener('resize', windowResizes), window.removeEventListener('onload', windowResizes));
      }
    });

    return (
      <>
        <Section settings={settings}>
            <Container container={settings.containerWidth}>
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
            imageOverlap
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
            imageOverlap
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