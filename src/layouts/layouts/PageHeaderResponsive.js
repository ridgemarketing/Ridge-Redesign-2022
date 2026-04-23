import React, { useRef } from "react"
import { Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion"

const PageHeaderResponsive = (props) => {
    const content       = props.layoutData.layoutContent;
    const settings      = props.layoutData.layoutSettings;
    const image         = content.backgroundImage ? getImage(content.backgroundImage.localFile) : false;
    const imageLarge    = content.backgroundImageLarge ? getImage(content.backgroundImageLarge.localFile) : false;
    const imageTablet   = content.backgroundImageTablet ? getImage(content.backgroundImageTablet.localFile) : false;
    const imageMobile   = content.backgroundImageMobile ? getImage(content.backgroundImageMobile.localFile) : false;
    const video         = content.backgroundVideo ? content.backgroundVideo : false;
    
    let noBox, noSpace;

    if (content.heading || content.subheading || content.eyebrow) {
      noBox             = `absolute`;
      noSpace           = ``;
    } else {
      noBox             = `relative`;
      noSpace           = `hidden`;
    }

    const width = (settings.containerWidth === "default") ? 'lg:w-4/6' : 'lg:w-4/5';
    const boxAlignment = content.boxAlignment === 'centered' ? 'mx-auto' : '';

    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
    })
    const parallaxY = useTransform(scrollYProgress, [0, 1], ["30%", "0%"])

    return (<>
        <section ref={sectionRef} className={`relative overflow-hidden min-h-[400px] lg:min-h-[580px]`}>

          {/* <motion.div
            style={{ y: parallaxY, scale: 1 }}
            className={noBox === 'absolute' ? 'absolute inset-0' : 'relative w-full h-[400px] lg:h-[580px]'}
          > */}
            {imageLarge &&
              <GatsbyImage
                imgStyle={{objectPosition: `${content.objectPosition} center`}}
                className={`absolute top-0 left-0 w-full h-full object-cover hidden xl:block`}
                image={imageLarge}
                alt={``}
              />
            }
            {image &&
              <GatsbyImage
                imgStyle={{objectPosition: `${content.objectPosition} center`}}
                className={`absolute -top-[40px] left-0 w-full h-full object-cover ${imageMobile || imageTablet ? 'hidden md:block' : ''} ${imageTablet ? 'md:hidden lg:block' : ''} ${imageLarge ? 'xl:hidden' : ''}`}
                image={image}
                alt={``}
              />
            }
            {imageTablet &&
              <GatsbyImage
                imgStyle={{objectPosition: `${content.objectPosition} center`}}
                className={`absolute -top-[40px] left-0 w-full h-full object-cover hidden md:block lg:hidden`}
                image={imageTablet}
                alt={``}
              />
            }
            {imageMobile &&
              <GatsbyImage
                imgStyle={{objectPosition: `${content.objectPosition} center`}}
                className={`absolute -top-[40px] left-0 w-full h-full object-cover md:hidden`}
                image={imageMobile}
                alt={``}
              />
            }
            {video &&
              <video playsInline autoPlay="1" muted loop="loop" src={video} className={'absolute top-0 left-0 object-cover object-center w-full h-full'} type="video/mp4" />
            }
          {/* </motion.div> */}
          <div className={`absolute bottom-0 left-0 w-full h-16 bg-white hidden md:block ${noSpace}`}></div>
          <div className={`hidden md:block`}>
            <Container container={settings.containerWidth} classes={`${noSpace} pt-[320px] lg:pt-[500px] ${content.boxAlignment === 'centered' ? ' xl:pt-[27rem] ' : ' xl:pt-96 ' }  ${settings.classes && settings.classes !== null ? settings.classes : ''}`}>
            {content.heading &&
              <div className={`bg-black text-white py-12 xl:pt-14  ${content.boxAlignment === 'centered' ? 'px-2 max-w-[500px] lg:max-w-[855px] xl:p-14' : `px-6 lg:px-12 xl:pl-20 xl:pr-16 xl:pb-12 ${width}`} ${content.maxWidth ? `xl:w-auto` : ``} ${boxAlignment}`} style={{maxWidth:content.maxWidth}}>
                {content.eyebrow &&
                  <span className={`block mb-8 ${theme.text.H4}`}>
                    {content.eyebrow}
                  </span>
                }
                {(content.heading || content.subheading) &&
                  <h1 className={`flex flex-col ${content.reverseHeading ? `flex-col-reverse` : ``}`}>
                    {content.heading &&
                      <span dangerouslySetInnerHTML={{__html: Parser(content.heading)}} className={`block text-[60px] leading-[3.73125rem] ${content.boxAlignment === 'centered' ? `text-center font-stratos uppercase font-bold lg:text-[6.25rem] lg:leading-[6.25rem]` : `${theme.text.PAGE_HEADER}`}`}></span>
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
        <div className={`md:hidden`}>
          <Container container={settings.containerWidth} classes={`${noSpace} -mt-20 md:mt-0 ${content.boxAlignment === 'centered' ? ' xl:pt-[27rem] ' : ' xl:pt-96 ' }  ${settings.classes && settings.classes !== null ? settings.classes : ''}`}>
          {content.heading &&
            <div className={`bg-black text-white py-12 xl:pt-14  ${content.boxAlignment === 'centered' ? 'px-2 max-w-[500px] lg:max-w-[855px] xl:p-14' : `px-6 lg:px-12 xl:pl-20 xl:pr-16 xl:pb-12 ${width}`} ${content.maxWidth ? `xl:w-auto` : ``} ${boxAlignment}`} style={{maxWidth:content.maxWidth}}>
              {content.eyebrow &&
                <span className={`block mb-8 ${theme.text.H4}`}>
                  {content.eyebrow}
                </span>
              }
              {(content.heading || content.subheading) &&
                <h1 className={`flex flex-col ${content.reverseHeading ? `flex-col-reverse` : ``}`}>
                  {content.heading &&
                    <span dangerouslySetInnerHTML={{__html: Parser(content.heading)}} className={`block text-[60px] leading-[3.73125rem] ${content.boxAlignment === 'centered' ? `text-center font-stratos uppercase font-bold lg:text-[6.25rem] lg:leading-[6.25rem]` : `${theme.text.PAGE_HEADER}`}`}></span>
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
    </>)
}

export default PageHeaderResponsive;

export const query = graphql`
  fragment PageHeaderResponsive on WpPage {
    pageHeaderResponsive {
      pageHeaderResponsive {
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
          backgroundImageLarge {
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
          backgroundImageTablet {
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
          backgroundImageMobile {
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
          boxAlignment
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
  fragment PageHeaderResponsiveLander on WpLander {
    pageHeaderResponsive {
      pageHeaderResponsive {
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
          backgroundImageLarge {
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
          backgroundImageTablet {
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
          backgroundImageMobile {
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
          boxAlignment
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
