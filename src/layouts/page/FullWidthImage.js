import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby"
import { theme } from '../../static/theme'

const FullWidthImage = (props) => {
    console.log('image layout', props);
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const desktopImage = getImage(content.componentFlexibleMedia.image.localFile);
    //const mobileImage = getImage(content.responsiveImages.mobile);
    const mobileImage = getImage(content.componentFlexibleMedia.image.localFile);
    console.log(desktopImage);
    const image = mobileImage 
        ? 
            <>
            <GatsbyImage className={`md:hidden`} image={mobileImage} alt={content.componentFlexibleMedia.imageAlt} />
            <GatsbyImage className={`hidden md:block`} image={desktopImage} alt={content.componentFlexibleMedia.imageAlt} />
            </>
        :
            <GatsbyImage image={desktopImage} alt={content.componentFlexibleMedia.imageAlt} />;    
    
      const overlap           = content.imageOverlap;
      
      const overlapImageClass = overlap === false ? ` ` : `-mb-[50px] md:-mb-[225px] lg:-mb-[350px] z-10 relative `;
      const overlapSection    = overlap === false ? `hidden` : `block w-full h-[50px] md:h-[225px] lg:h-[500px] relative`;
      const overlapBkg        = content.backgroundColor;
      
      console.log('overlap', content, settings);

    return (
      <>
        <Section settings={settings}>
            <Container>
                <div className={`max-w-[1120px] mx-auto ${overlapImageClass}`}> 
                    {image}
                </div>
            </Container>
        </Section>
        <div className={`${overlapSection} bg-${theme.backgroundColor[overlapBkg]}`}></div>
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
            componentFlexibleMedia {
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: DOMINANT_COLOR)
                  }
                }
              }
              imageAlt
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
  fragment FullWidthImageService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_FullWidthImage {
        fieldGroupName
        layoutFullWidthImage {
          layoutContent {
            imageOverlap
            backgroundColor
            componentFlexibleMedia {
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: DOMINANT_COLOR)
                  }
                }
              }
              imageAlt
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