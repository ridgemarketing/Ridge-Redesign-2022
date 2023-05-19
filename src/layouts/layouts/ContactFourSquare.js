import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import Parser from "../../components/global/Parser.js"
import { GatsbyImage } from "gatsby-plugin-image"
import { FormSpreeForm } from "../../components/global/FormSpreeForm.js"
import { TextArea, Input } from "../../components/global/FormFields.js"
import { FormContacPage } from "../../components/global/Forms.js"

const ContactFourSquare = (props) => {
  const content       = props.layoutData.layoutContent;
  const settings      = props.layoutData.layoutSettings;

  const formId                = `mdovyzbl`


  const globalContact = useStaticQuery( graphql`
  query GetGlobalContact {
      allWp{
          nodes{
            globalSettings{
              globalSettings{
                contact{
                  address{
                    address
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
                  phone{
                    phone {
                      target
                      title
                      url
                    }
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
  }
  `);
  const globalContent = globalContact.allWp.nodes[0].globalSettings.globalSettings.contact;
  const iconsHeader   = content.contactInfo.heading;
  const [formState, setFormState] = useState({})

  const checkImg = function(img){
    if (img.localFile.ext === `.svg`) {
        return(<img className="h-[25px] w-[25px] min-w-[25px] mr-3" src={img.sourceUrl} alt={``} />)
    }else{ 
        return(<GatsbyImage className="h-[25px] w-[25px] min-w-[25px] mr-3" objectFit="contain" image={img.localFile.childImageSharp.gatsbyImageData} alt={' '}/>)
    }
  }

  let addressIcon = checkImg(globalContent.address.icon);
  let phoneIcon   = checkImg(globalContent.phone.icon);

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
            <div className={` mt-10 xl:mt-0 xl:ml-4 xl:w-[50%] xl:max-w-[800px]`}>
              <h2 className={`${theme.text.H5} mb-6`}>{content.formHeading}</h2>
              <div className={`shadow-block pt-10 px-10 pb-12 bg-white`}>
                  <FormContacPage formId={formId} classes={`bg-white text-rm-black`} submitLabel={`Submit`} />
              </div>
            </div>
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
              <address className={`not-italic mx-3 lg:mx-0`}>
                    <div className={`flex mb-10 last-of-type:mb-0`}>
                      {addressIcon}
                      <p className={`${theme.text.H4} text-rm-white`} dangerouslySetInnerHTML={{__html:globalContent.address.address}}></p>
                    </div>
                    <div className={`flex mb-10 last-of-type:mb-0`}>
                      {phoneIcon}
                      <a href={globalContent.phone.phone.url} className={`${theme.text.H4} text-rm-white`}>{globalContent.phone.phone.title}</a>
                    </div>
              </address>
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
          }
        }
      }
    }
}
`