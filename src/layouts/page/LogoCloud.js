import React from "react" 
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import Parser from '../../components/global/Parser'

const LogoCloud = props => {

  const content = props.layoutData.layoutContent;
  const settings = props.layoutData.layoutSettings;
  console.log(content.logos);

  const heading = Parser(content.heading);
  const body = Parser(content.body);

    return(
        <Section settings={ settings }>
            <Container>
                {content.heading &&
                    <h2 className={`${theme.text['H2']} text-center`} dangerouslySetInnerHTML={{__html: heading}}></h2>
                }
                {content.body &&
                    <p className={`theme.text['P_STD']} text-center my-4`} dangerouslySetInnerHTML={{__html: body}}></p>
                }
                <div className="mt-12 flex w-full flex-wrap justify-center lg:justify-around gap-y-10 md:gap-y-16 gap-x-10 sm:gap-x-12 md:gap-x-20 lg:gap-x-6">
                    {content.logos.map(logo => {
                      const image = (logo.image.localFile.ext === ".svg") 
                      ? <img className={`w-[24%] lg:w-[14%] object-contain`} src={logo.image.sourceUrl} />
                      : <GatsbyImage className={`w-[24%] lg:w-[14%]`} objectFit="contain" image={logo.image.localFile.childImageSharp.gatsbyImageData} /> ;
                      return(
                        image
                      )
                    })}
                </div> 
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