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
    const video         = content.backgroundVideo ? content.backgroundVideo : false;
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
            <GatsbyImage imgStyle={{objectPosition: `${content.objectPosition} center`}} className={`${noBox} top-0 left-0 w-full h-[400px] lg:h-[580px] object-cover`} image={image} alt={``} />
          }

          {video &&
            <video playsInline autoPlay="1" muted loop="loop" src={video} className={'absolute object-cover object-center w-full h-full'} type="video/mp4"></video>
          }
          <div className={`absolute bottom-0 left-0 w-full h-16 bg-white ${noSpace}`}></div>
          <div className={``}> 
            <Container container={settings.containerWidth} classes={`${noSpace} pt-[320px] lg:pt-[500px] xl:pt-96 ${settings.classes && settings.classes !== null ? settings.classes : ''}`}>
            {content.heading &&
              <div className={`bg-black text-white py-12 px-6 lg:px-12 xl:pt-14 xl:pb-12 xl:pl-20 xl:pr-16 ${width} ${content.maxWidth ? `xl:w-auto` : ``}`} style={{maxWidth:content.maxWidth}}>
                {content.eyebrow &&
                  <span className={`block mb-8 ${theme.text.H4}`}>
                    {content.eyebrow}
                  </span>
                }
                {(content.heading || content.subheading) &&
                  <h2 className={`flex flex-col ${content.reverseHeading ? `flex-col-reverse` : ``}`}>
                    {content.heading && 
                      <span dangerouslySetInnerHTML={{__html: Parser(content.heading)}} className={`block ${theme.text.PAGE_HEADER}`}></span>
                    }
                    {content.subheading && 
                      <span className={`block ${theme.text.H1_LTE}`} style={{fontSize: content.subheadingFontSize ? content.subheadingFontSize : ``}}>
                        {content.subheading}
                      </span>
                    }
                  </h2>
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
                gatsbyImageData (
                  quality: 100
                  placeholder: DOMINANT_COLOR
                  layout: FULL_WIDTH
                )
              }
            }
            sourceUrl
          }
          objectPosition
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

export const landerQuery = graphql`
  fragment PageHeaderLander on WpLander {
    pageHeader {
      pageHeader {
        layoutContent {
          backgroundVideo
          backgroundImage {
            title
            localFile {
              childImageSharp {
                gatsbyImageData (
                  quality: 100
                  placeholder: DOMINANT_COLOR
                  layout: FULL_WIDTH
                )
              }
            }
            sourceUrl
          }
          objectPosition
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