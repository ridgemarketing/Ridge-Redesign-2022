import React from "react" 
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers'
import Buttons from '../../components/global/Buttons'
import Parser from '../../components/global/Parser'
import { motion } from "framer-motion"

const LogoCloud = props => {

  const content   = props.layoutData.layoutContent;
  const settings  = props.layoutData.layoutSettings;

  let heading     = '';
  let body        = '';
  if(content.heading){
    heading = Parser(content.heading);
  }
  if(content.body){
    body = Parser(content.body);
  }

  const containerVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.4
      }
    }
  };
  const variantItems = {
    hidden: {
      opacity: 0,
      scale: 0.3
    },
    visible: {
      opacity: 1,
      scale: [0.3, 1]
    }
  };

    return(
        <Section settings={ settings }>
            <Container>
                {content.heading &&
                    <h2 className={`${theme.text['H2']} text-center`} dangerouslySetInnerHTML={{__html: heading}}></h2>
                }
                {content.body &&
                    <p className={`${theme.text.P_STD} text-center my-4`} dangerouslySetInnerHTML={{__html: body}}></p>
                }
                  <motion.div 
                  className={"mt-12 flex w-full flex-wrap justify-center items-center lg:justify-around gap-y-10 md:gap-y-16 gap-x-10 sm:gap-x-12 md:gap-x-20 lg:gap-x-6"}
                  variants={containerVariant}
                  initial="hidden"
                  whileInView="visible"
                  >
                    {content.logos.map((logo, index) => {
                      const image = (logo.image.localFile.ext === ".svg") 
                      ? <img key={logo.image.sourceUrl} className={`w-full object-contain`} src={logo.image.sourceUrl} alt={logo.image.altText}/>
                      : <GatsbyImage key={logo.image.sourceUrl} className={`w-full`} objectFit="contain" image={logo.image.localFile.childImageSharp.gatsbyImageData} alt={logo.image.altText} /> ;
                      return(
                        <motion.div key={`LogoCloudItem__${image.id}__${index}`} variants={variantItems} className={"w-[24%] lg:w-[15%] h-full"}>
                          {image}                        
                        </motion.div>
                      )
                    })}
                  </motion.div>
                {content.componentButton && content.componentButton.link &&
                <div className='text-center my-12'>
                  <Buttons 
                    content={content.componentButton} 
                    sectionBackground={settings.backgroundColor}/>
                </div>
                }
            </Container>
        </Section>
    )
}
export default LogoCloud


export const query = graphql`
  fragment LogoCloudPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_LogoCloud {
        fieldGroupName
        layoutLogoCloud {
          layoutContent {
            body
            heading
            logos {
              image {
                id
                sourceUrl
                altText
                localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            componentButton {
              fieldGroupName
              colors {
                fieldGroupName
                resting
              }
              link {
                url
                title
                target
              }
              style
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
  fragment LogoCloudService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_LogoCloud {
        fieldGroupName
        layoutLogoCloud {
          layoutContent {
            body
            heading
            logos {
              image {
                id
                sourceUrl
                altText
                localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            componentButton {
              fieldGroupName
              colors {
                fieldGroupName
                resting
              }
              link {
                url
                title
                target
              }
              style
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

export const projectQuery = graphql`
  fragment LogoCloudProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_LogoCloud {
        fieldGroupName
        layoutLogoCloud {
          layoutContent {
            body
            heading
            logos {
              image {
                id
                sourceUrl
                altText
                localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            componentButton {
              fieldGroupName
              colors {
                fieldGroupName
                resting
              }
              link {
                url
                title
                target
              }
              style
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

export const landerQuery = graphql`
  fragment LogoCloudLander on WpLander_Flexiblelayouts_Layouts {
    ... on WpLander_Flexiblelayouts_Layouts_LogoCloud {
        fieldGroupName
        layoutLogoCloud {
          layoutContent {
            body
            heading
            logos {
              image {
                id
                sourceUrl
                altText
                localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            componentButton {
              fieldGroupName
              colors {
                fieldGroupName
                resting
              }
              link {
                url
                title
                target
              }
              style
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