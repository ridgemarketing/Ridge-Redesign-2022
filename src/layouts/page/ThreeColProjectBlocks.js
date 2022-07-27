import React from "react" 
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import { graphql, useStaticQuery } from "gatsby"
import Buttons from "../../components/global/Buttons"

const ThreeColProjectBlocks = (props) => {

    const content       = props.layoutData.layoutContent;
    const settings      = props.layoutData.layoutSettings;

    let transparent     = 'transparent';

    console.log('three col project blocks', content);

    const textColor     = settings.backgroundColor === 'black' ? 'white' : 'black'; 
    
    return(
        <Section settings={ settings } transparent = { transparent }>
            <Container>
                {content.topHeading &&
                  <h2 className={`${theme.text.H2} text-center text-rm-white`} style={{marginTop:'-15vh', paddingBottom:'5vh'}}> 
                      { content.topHeading }
                  </h2>
                }
                <div className="flex w-full flex-wrap justify-between">
                    {content.projects.map(block => {
                        const image = getImage(block.projectInformation.images.servicesFeatureScreens.localFile.childImageSharp.gatsbyImageData);
                        return (
                          <div className="flex flex-col justify-center items-center w-full md:w-[48%] lg:w-[31%] mb-12">
                              <GatsbyImage  image={image}  alt={` `} className={ `object-cover w-full ` } /> 
                              <Link className={ theme.text_links.BASE_STYLING + theme.text_links.STD + theme.text_links.FWD_BASE + theme.text_links.ARW_FWD_BLACK + 'mt-3' } to={ block.uri }>
                                  { block.title }
                              </Link>
                          </div>
                        ) 
                    })}
                </div> 

                {content.bottomHeading &&
                  <h2 className={`${theme.text.H5} text-center text-rm-${textColor}`}> 
                      { content.bottomHeading }
                  </h2>
                }
                {content.componentButton &&
                  <div className="text-center mt-10">
                    <Buttons content={content.componentButton} sectionBackground={settings.backgroundColor}/>
                  </div>
                }
            </Container>
        </Section>
    )
}
export default ThreeColProjectBlocks;



export const query = graphql`
  fragment ThreeColProjectBlocksPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_ThreeColProjectBlocks {
        fieldGroupName
        layoutThreeColProjectBlocks {
          layoutContent {
            topHeading
            bottomHeading
            projects {
              ... on WpProject {
                title
                uri
                projectInformation {
                  images {
                    servicesFeatureScreens {
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
            componentButton {
              colors {
                resting
              }
              link {
                target
                title
                url
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
  fragment ThreeColProjectBlocksService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_ThreeColProjectBlocks {
        fieldGroupName
        layoutThreeColProjectBlocks {
          layoutContent {
            topHeading
            bottomHeading
            projects {
              ... on WpProject {
                title
                uri
                projectInformation {
                  images {
                    servicesFeatureScreens {
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
            componentButton {
              colors {
                resting
              }
              link {
                target
                title
                url
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
  fragment ThreeColProjectBlocksProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_ThreeColProjectBlocks {
        fieldGroupName
        layoutThreeColProjectBlocks {
          layoutContent {
            topHeading
            bottomHeading
            projects {
              ... on WpProject {
                title
                uri
                projectInformation {
                  images {
                    servicesFeatureScreens {
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
            componentButton {
              colors {
                resting
              }
              link {
                target
                title
                url
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
