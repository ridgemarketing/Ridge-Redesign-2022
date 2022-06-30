import React from "react" 
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import Parser from '../../components/global/Parser'

const LogoCloud = props => {

  const content = props.layoutData.layoutContent;
  const settings = props.layoutData.layoutSettings;

  console.log(content);

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
                <div className="mt-12 flex w-full flex-wrap justify-around gap-y-16">
                    {content.logos.map(logo => {
                      const image = getImage(logo.image.localFile.childImageSharp.gatsbyImageData);
                      return(
                        <GatsbyImage 
                            image={ image } 
                            alt={ logo.alt } 
                            className={ `w-full md:w-[31%] lg:w-[12%] ` } 
                            objectFit="contain"
                        />
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
                localFile {
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