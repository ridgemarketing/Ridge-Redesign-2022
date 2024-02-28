import React from "react" 
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers'
import { graphql } from "gatsby"
import Buttons from "../../components/global/Buttons"
import ShadowBox from "../../components/global/Shadowbox"
import Parser from "../../components/global/Parser"

const ProjectBlocks = (props) => {

    const content         = props.layoutData.layoutContent;
    const settings        = props.layoutData.layoutSettings;

    let transparent       = 'transparent';
    const textColor       = settings.backgroundColor === 'black' ? 'white' : 'black'; 

    const cols = content.columns === 3 ? 'lg:w-[31%]' : 'md:h-[360px]';

    const shadowboxToggle = content.shadowbox;

    if(shadowboxToggle){
      settings.position = ' ';
    }

    return(
        <Section settings={ settings } transparent = { transparent }>
            <Container>
              <div className={`relative ${(!content.topHeading && content.overlap) && `-top-8 -mb-8`}`}>
              {content.topHeading &&
                  <h2 dangerouslySetInnerHTML={{__html: Parser(content.topHeading)}} className={`${theme.text.H2} text-center ${textColor}`} style={{marginTop: content.overlap ? '-20vh' : '0', paddingBottom: content.overlap ? '5vh' : '5rem'}}></h2>
                }
                {content.projects &&
                  <div className={`flex w-full flex-wrap justify-between`}>
                    {content.projects.map((block, index) => {
                        let image = '';
                          
                        if(content.columns === 3){
                          if(shadowboxToggle){
                              if(block.projectInformation.images.shadowBoxImages){
                                return(
                                  <div key={`ProjectBlocksItem_Shadow__${block.guid}__${index}`} className={`flex flex-col justify-center items-center w-full md:w-[48%] ${cols} mb-12`}>
                                    <ShadowBox images={block.projectInformation.images.shadowBoxImages} />
                                  </div>)
                              }

                              return (<></>)
                          }else{
                            if(block.projectInformation.images.servicesFeatureScreens){
                              image = block.projectInformation.images.servicesFeatureScreens.localFile.childImageSharp.gatsbyImageData;

                              return (
                                <div key={`ProjectBlocksItem_Features__${block.guid}__${index}`} className={`flex flex-col justify-center items-center w-full md:w-[48%] ${cols} mb-12`}>
                                    <GatsbyImage image={image} alt={block.title} className={`object-cover w-full`}/> 
                                    <Link className={ theme.text_links.BASE_STYLING + theme.text_links.STD + theme.text_links.FWD_BASE + theme.text_links.ARW_FWD_BLACK + theme.text_links.HOVER_GREEN + theme.text_links.HOVER_ARW_FWD_GREEN + ' mt-3'} to={block.uri}>
                                        { block.title }
                                    </Link>
                                </div>
                              ) 
                            } else {
                              return (<></>)
                            }
                          }
                        }else{
                          if(block.projectInformation.images.projectIndexGrid){

                            image = block.projectInformation.images.projectIndexGrid.localFile.childImageSharp.gatsbyImageData;
                            let logo = '';
                            const logoClasses = 'w-3/4 xl:w-3/5 mb-8 block h-auto -translate-y-5 group-hover:translate-y-0 focus-within:translate-y-0 focus:translate-y-0 opacity-0 group-hover:opacity-100 focus-within:opacity-100 cursor-pointer z-20 transition-all duration-300 ease-out';

                            if(block.projectInformation.logos){

                              if (block.projectInformation.logos.dark.localFile.ext === `.svg`) {
                                logo = <img className={logoClasses} alt={`${block.title} logo`} src={block.projectInformation.logos.dark.sourceUrl} />
                              }else{
                                logo = <GatsbyImage image={block.projectInformation.logos.dark.localFile.childImageSharp.gatsbyImageData} alt={`${block.title} logo`} className={logoClasses} />
                              }

                            }
                            
                            return (
                              <div key={`ProjectBlocksItem_Grid__${block.guid}__${index}`} className={`flex flex-col justify-center items-center w-full md:w-[49%] ${cols} mb-12`}>
                                  <div className={`mt-3 h-full w-full relative group`}>
                                    <div className="w-full h-full flex flex-col justify-center items-center absolute top-0 left-0">
                                        {logo && logo}
                                        <a href={block.uri} className={`${theme.button.BASE_STYLING} ${theme.button.SOLID_GREEN_HOVER_LIGHT} -translate-y-5 group-hover:translate-y-0 focus-within:translate-y-0 focus:translate-y-0 opacity-0 group-hover:opacity-100 focus-within:opacity-100 cursor-pointer min-w-max h-min z-20 transition-all duration-300 ease-out `}>CASE STUDY</a>
                                        <div className="w-full h-[0%] bg-rm-black opacity-80 z-10 absolute top-0 left-0 group-hover:h-[100%] focus-within:h-[100%] transition-all duration-300 ease-out"></div>
                                    </div>
                                    <GatsbyImage image={image} alt={``} className={`object-cover w-full h-full`}/> 
                                  </div>
                              </div>
                            ) 
                          } else {
                            return (<></>)
                          }
                        }
                    })}
                </div> 
                }
                {content.bottomHeading &&
                  <h2 className={`${theme.text.H5} text-center text-rm-${textColor}`}> 
                      { content.bottomHeading }
                  </h2>
                }
                {content.componentButton && content.componentButton.link &&
                  <div className="text-center mt-10">
                    <Buttons content={content.componentButton} sectionBackground={settings.backgroundColor}/>
                  </div>
                }
              </div>
            </Container>
        </Section>
    )
}
export default ProjectBlocks;

export const query = graphql`
  fragment ProjectBlocksPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_ProjectBlocks {
        fieldGroupName
        layoutProjectBlocks {
          layoutContent {
            topHeading
            overlap
            columns
            bottomHeading
            projects {
              ... on WpProject {
                guid
                title
                uri
                projectInformation {
                  logos {
                    dark {
                      localFile {
                        ext
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                      sourceUrl
                      altText
                    }
                  }
                  images {
                    projectIndexGrid {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                    servicesFeatureScreens {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                    shadowBoxImages {
                      shadowBoxText
                      shadowBoxImage {
                        sourceUrl
                        altText
                      }
                    }
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
  fragment ProjectBlocksService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_ProjectBlocks {
        fieldGroupName
        layoutProjectBlocks {
          layoutContent {
            topHeading
            bottomHeading
            overlap
            columns
            projects {
              ... on WpProject {
                guid
                title
                uri
                projectInformation {
                  images {
                    servicesFeatureScreens {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                    shadowBoxImages {
                      shadowBoxText
                      shadowBoxImage {
                        sourceUrl
                        altText
                      }
                    }
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
export const projectQuery = graphql`
  fragment ProjectBlocksProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_ProjectBlocks {
        fieldGroupName
        layoutProjectBlocks {
          layoutContent {
            topHeading
            bottomHeading
            overlap
            columns
            projects {
              ... on WpProject {
                guid
                title
                uri
                projectInformation {
                  images {
                    servicesFeatureScreens {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                    shadowBoxImages {
                      shadowBoxText
                      shadowBoxImage {
                        sourceUrl
                        altText
                      }
                    }
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
