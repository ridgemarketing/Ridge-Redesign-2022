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

  console.log('contact four square',content);

    return(
      <>
        <Section settings={settings}>
          <Container classes={`flex`}>
            <div className={`lg:w-1/2`}>
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
        <div className="flex">
          <div className={`lg:w-3/5 lg:-mt-36 `}>
            <GatsbyImage className={`w-full lg:h-[800px] object-cover`} image={content.componentFlexibleMedia.image.localFile.childImageSharp.gatsbyImageData || ` `} alt={` `}/>
          </div>
          <section className="bg-rm-black lg:w-2/5 lg:pr-[15%] lg:pl-[5%] lg:-mt-14 flex items-center">
            <div className={``}>
              {iconsHeader &&
                <h3 className={`${theme.text.H2} text-rm-white lg:mb-10`}>{iconsHeader}</h3>
              }
              {iconsAndInfo &&
                <address className={`not-italic`}>
                  {iconsAndInfo.map((block) => {
                      return(
                          <div className={`block mb-10 last-of-type:mb-0`}>
                              {/* <GatsbyImage image={block.icon.localFile.childImageSharp.gatsbyImageData || ` `} alt={``} /> */}
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
                localFile {
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