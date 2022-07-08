import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby"

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
            <GatsbyImage className={'md:hidden'} image={mobileImage} alt={content.componentFlexibleMedia.imageAlt} />
            <GatsbyImage className={'hidden md:block'} image={desktopImage} alt={content.componentFlexibleMedia.imageAlt} />
            </>
        :
            <GatsbyImage image={desktopImage} alt={content.componentFlexibleMedia.imageAlt} />;    
    

    return (
        <Section settings={settings}>
            <Container>
                <div className={'max-w-[1120px] mx-auto'}> 
                    {image}
                </div>
            </Container>
        </Section>
    )
}

export default FullWidthImage


export const query = graphql`
  fragment FullWidthImagePage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_FullWidthImage {
        fieldGroupName
        layoutFullWidthImage {
          layoutContent {
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