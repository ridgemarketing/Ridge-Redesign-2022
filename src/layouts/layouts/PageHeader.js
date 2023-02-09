import React from "react"
import { Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"

const PageHeader = (props) => {
    const content       = props.layoutData.layoutContent;
    const settings      = props.layoutData.layoutSettings;
    const image         = content.backgroundImage ? getImage(content.backgroundImage.localFile) : false;
    let noBox, noSpace;
    if (content.heading || content.subheading || content.eyebrow){
      noBox             = `absolute`;
      noSpace           = ``;
    }else{
      noBox             = `relative`;
      noSpace           = `hidden`; 
    }
    const width = (settings.containerWidth === "default") ? 'lg:w-4/6' : 'lg:w-4/5';

    return (
        <section className={`relative`}>
          {image && 
            <GatsbyImage className={`${noBox} top-0 left-0 w-full h-[580px] object-cover`} image={image} />
          }
          <div className={`absolute bottom-0 left-0 w-full h-16 bg-white ${noSpace}`}></div>
          <div className={``}> 
            <Container container={settings.containerWidth} classes={`${noSpace} pt-[500px] xl:pt-96 ${settings.classes && settings.classes !== null ? settings.classes : ''}`}>
            {content.heading &&
              <div className={`bg-black text-white py-12 px-6 lg:px-12 xl:pt-14 xl:pb-12 xl:pl-20 xl:pr-16 ${width}`} style={{maxWidth:content.maxWidth}}>
                {content.eyebrow &&
                  <span className={`block mb-8 ${theme.text.H4}`}>
                    {content.eyebrow}
                  </span>
                }
                {(content.heading || content.subheading) &&
                  <h1 className={`flex flex-col ${content.reverseHeading ? `flex-col-reverse` : ``}`}>
                    {content.heading && 
                      <span dangerouslySetInnerHTML={{__html: Parser(content.heading)}} className={`block ${theme.text.HERO}`}></span>
                    }
                    {content.subheading && 
                      <span className={`block ${theme.text.H1_LTE}`} style={{fontSize: content.subheadingFontSize ? content.subheadingFontSize : ``}}>
                        {content.subheading}
                      </span>
                    }
                  </h1>
                }
              </div>
            } 
            </Container>
          </div>
        </section>
    )
}

export default PageHeader;

export const query = graphql`
  fragment PageHeader on WpPage {
    pageHeader {
      pageHeader {
        layoutContent {
          backgroundImage {
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
            sourceUrl
          }
          eyebrow
          heading
          maxWidth
          reverseHeading
          subheading
          subheadingFontSize
        }
        layoutSettings {
          anchorId
          backgroundColor
          classes
          id
          padding {
            bottom
            top
          }
          containerWidth
        }
      }
    }
  }
`