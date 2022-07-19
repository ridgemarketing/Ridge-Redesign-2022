import React from "react"
import { graphql } from "gatsby"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import Parser from "../../components/global/Parser.js"
import FormWrapper from "../../components/global/FormWrapper"
import { GatsbyImage } from "gatsby-plugin-image"

const ContactFourSquare = (props) => {
  const content       = props.layoutData.layoutContent;
  const settings      = props.layoutData.layoutSettings;
  
  const iconsAndInfo  = content.contactInfo.iconsAndInfo;
  const iconsHeader   = content.contactInfo.heading;
  let image           = '';

  console.log('contact four square',content);

    return(
      <>
        <Section settings={settings}>
          <Container classes={`flex flex-col xl:flex-row`}>
            <div className={`w-full xl:w-1/2`}>
              {content.heading &&
                <h1 className={`${theme.text.H1_STD}`} dangerouslySetInnerHTML={{__html: Parser(content.heading)}}></h1>
              }
              {content.body &&
                <p className={`${theme.text.P_STD} mt-5`}>{content.body}</p>
              }
            </div>
            <FormWrapper
                heading     = {content.formHeading}
                formSize    = {`HALF`}
                formBkg     = {'white'}
                dropShadow  = {true}
              />
          </Container>
        </Section>
        <div className="flex flex-col xl:flex-row">
          <div className={`w-full xl:w-3/5 -mt-10 xl:-mt-36 bg-rm-black`}>
            <GatsbyImage className={`w-full md:w-3/4 lg:w-full md:mx-auto lg:mx-0 md:block lg:h-[800px] object-cover`} image={content.componentFlexibleMedia.image.localFile.childImageSharp.gatsbyImageData || ` `} alt={` `}/>
          </div>
          <section className="bg-rm-black xl:w-2/5 xl:pr-[15%] xl:pl-[5%] xl:-mt-14 flex items-center">
            <div className={`mt-14 mx-auto block xl:mx-0 xl:mt-0`}>
              {iconsHeader &&
                <h3 className={`${theme.text.H2} text-center w-3/4 mx-auto block mb-10 xl:mx-0 xl:w-full lg:text-left text-rm-white`}>{iconsHeader}</h3>
              }
              {iconsAndInfo &&
                <address className={`not-italic mx-3 lg:mx-0`}>
                  {iconsAndInfo.map((block) => {
                      if(block.icon){
                        if( block.icon.localFile.ext === `.svg`){
                            image = <img className="h-[25px] w-[25px] min-w-[25px] mr-3" src={block.icon.sourceUrl}/>
                        }else{
                            image = <GatsbyImage className="h-[25px] w-[25px] min-w-[25px] mr-3" objectFit="contain" image={block.icon.localFile.childImageSharp.gatsbyImageData} alt={' '}/>;
                        }
                      }
                      return(
                          <div className={`flex mb-10 last-of-type:mb-0`}>
                             {image}
                            <p className={`${theme.text.H4} text-rm-white`} dangerouslySetInnerHTML={{__html:block.info}}></p>
                          </div>
                      ) 
                    })
                  }
                </address>
              }
            </div>
          </section>
        </div>
      </>
    )
}

export default ContactFourSquare

export const query = graphql`
fragment ContactFourSquare on WpPage_Flexiblelayouts_Layouts {
  ... on WpPage_Flexiblelayouts_Layouts_ContactFourSquare{
      fieldGroupName
      layoutContactFourSquare {
        layoutSettings {
          id
          fieldGroupName
          classes
          backgroundColor
          anchorId
          padding {
            bottom
            fieldGroupName
            top
          }
        }
        layoutContent {
          body
          heading
          formHeading
          
          componentFlexibleMedia {
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }

          contactInfo {
            heading
            iconsAndInfo {
              info
              icon {
                sourceUrl
                localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
}
`