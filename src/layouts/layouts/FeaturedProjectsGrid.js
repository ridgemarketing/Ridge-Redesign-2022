import React, { useEffect, useState, useCallback, useContext } from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { ThemeContext } from "../../static/theme"
import { graphql } from "gatsby"
import LightBox from "../../components/global/Lightbox"
import PortfolioNav from "../../components/PortfolioNav"

const FeaturedProjectsGrid = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

    const context = useContext(ThemeContext);

    const [toRender, setRendering] = useState(false);
    const [websites, setWebsites] = useState([]);
    const [brandings, setBrandings] = useState([]);
    const [videos, setVideos] = useState([]);
    const [interactives, setInteractives] = useState([]);

    const url = new URLSearchParams(props.layoutData.location.search);
    const parameter1 = url.get("type");

    useEffect(() => {
      
        content.websiteProjects.forEach(project => {
          websites.push(project.portfolioProject.websites);
        })
     
        content.brandingProjects.forEach(project => {
          brandings.push(project.portfolioProject.branding);
        })
      
        content.videoProjects.forEach(project => {
          videos.push(project.portfolioProject.video);
        })
      
        content.interactiveProjects.forEach(project => {
          interactives.push(project.portfolioProject.interactive);
        })
      

      return () => handleRendering(context.filterState);
    }, []);

    useEffect(() => {
      if (toRender === false) {
        handleRendering(context.filterState);
      }
    });

    useEffect(() => {
      handleRendering(context.filterState);
    }, [context.filterState])

    const handleRendering = (filter) => {
      // console.log(filter, context.filterState);
      switch(filter) {
        case "Websites":
          setRendering(websites);
          break;
        case "Branding":
          setRendering(brandings);
          break;
        case "Video":
          setRendering(videos);
          break;
        case "Interactive":
          setRendering(interactives);
          break;
        default:
          setRendering(websites);
          break;
      }
      return;
    }

    const handleFilterChange = useCallback(filter => {
      // console.log(filter, context.filterState);
      context.updateFilterState(filter);
      switch(filter) {
        case "Websites":
          setRendering(websites);
          break;
        case "Branding":
          setRendering(brandings);
          break;
        case "Video":
          setRendering(videos);
          break;
        case "Interactive":
          setRendering(interactives);
          break;
        default:
          setRendering(websites);
          break;
      }
      return;
    }, [toRender])


    useEffect(() => {
      if(parameter1){
        if(parameter1 == 'video'){
          handleFilterChange('Video');
        }
        if(parameter1 == 'websites'){
          handleFilterChange('Websites');
        }
        if(parameter1 == 'branding'){
          handleFilterChange('Branding');
        }
        if(parameter1 == 'interactive'){
          handleFilterChange('Interactive');
        }
      }
    }, [])

    return(
      <>
        <PortfolioNav setFilter={handleFilterChange} />

        <Section settings={settings} classes={"bg-[#1C1C1C]/[0.9]"}>
          <Container container={'default'}>
                  <div className={'md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-x-4 xl:gap-y-8 py-16'}>
                    {toRender && toRender.map((block, index) => {
                      const video = (block.videoUrl && block.videoUrl !== null) ? block.videoUrl : false ;
                      const images = (block.videoUrl && block.videoUrl !== null) ? block.thumbnailImage : block.lightboxImages;
                      if (block.videoUrl !== null && block.lightboxImages !== null) {
                        return (
                            <div className={`relative my-10 md:my-0 ${context.filterState == 'Video'&& 'h-min'}`}>
                                <LightBox key={`FeaturedProjectItem__${block.guid}__${index}`} images={images} title={block.title} typeOfProject={context.filterState} caption={block.caption} link={block.websiteLink} video={video} />
                            </div>
                        )
                      }
                      return(<></>)
                    })}
                  </div>
          </Container>
        </Section>
      </>
    )
}

export default FeaturedProjectsGrid

export const pageQuery = graphql`
  fragment FeaturedProjectsGridPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_FeaturedProjectsGrid {
      fieldGroupName
      layoutFeaturedProjectsGrid {
        layoutContent {
            websiteProjects{
              ...on WpPortfolioProject {
                guid
                title
                portfolioProject {
                  websites {
                    title
                    caption
                    lightboxImages {
                      fieldGroupName
                      text
                      image {
                        publicUrl
                        localFile {
                          childImageSharp {
                            gatsbyImageData
                          }
                        }
                      }
                    }
                    websiteLink
                  }                   
                }
              }
            }
            brandingProjects{
              ...on WpPortfolioProject {
                guid
                title
                portfolioProject {
                  branding {
                    title
                    caption
                    lightboxImages {
                      fieldGroupName
                      text
                      image {
                        publicUrl
                        localFile {
                          childImageSharp {
                            gatsbyImageData
                          }
                        }
                      }
                    }
                    websiteLink
                  }                   
                }
              }
            }
            videoProjects{
              ...on WpPortfolioProject {
                guid
                title
                portfolioProject {
                  video {
                    title
                    caption
                    thumbnailImage {
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                      sourceUrl
                    }
                    websiteLink
                    videoUrl
                  }                   
                }
              }
            }
            interactiveProjects{
              ...on WpPortfolioProject {
                guid
                title
                portfolioProject {
                  interactive {
                    title
                    caption
                    thumbnailImage {
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                      sourceUrl
                    }
                    websiteLink
                    videoUrl
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
          containerWidth
        }
      }      
    }
  }
`

export const serviceQuery = graphql`
  fragment FeaturedProjectsGridService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_FeaturedProjectsGrid {
      fieldGroupName
      layoutFeaturedProjectsGrid {
        layoutContent {
            websiteProjects{
              ...on WpPortfolioProject {
                guid
                title
                portfolioProject {
                  websites {
                    title
                    caption
                    lightboxImages {
                      fieldGroupName
                      text
                      image {
                        publicUrl
                        localFile {
                          childImageSharp {
                            gatsbyImageData
                          }
                        }
                      }
                    }
                    websiteLink
                  }                   
                }
              }
            }
            brandingProjects{
              ...on WpPortfolioProject {
                guid
                title
                portfolioProject {
                  branding {
                    title
                    caption
                    lightboxImages {
                      fieldGroupName
                      text
                      image {
                        publicUrl
                        localFile {
                          childImageSharp {
                            gatsbyImageData
                          }
                        }
                      }
                    }
                    websiteLink
                  }                   
                }
              }
            }
            videoProjects{
              ...on WpPortfolioProject {
                guid
                title
                portfolioProject {
                  video {
                    title
                    caption
                    thumbnailImage {
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                      sourceUrl
                    }
                    websiteLink
                    videoUrl
                  }                   
                }
              }
            }
            interactiveProjects{
              ...on WpPortfolioProject {
                guid
                title
                portfolioProject {
                  interactive {
                    title
                    caption
                    thumbnailImage {
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                      sourceUrl
                    }
                    websiteLink
                    videoUrl
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
          containerWidth
        }
      }  
      }
  }
`

export const projectQuery = graphql`
  fragment FeaturedProjectsGridProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_FeaturedProjectsGrid {
      fieldGroupName
      layoutFeaturedProjectsGrid {
        layoutContent {
            websiteProjects{
              ...on WpPortfolioProject {
                guid
                title
                portfolioProject {
                  websites {
                    title
                    caption
                    lightboxImages {
                      fieldGroupName
                      text
                      image {
                        publicUrl
                        localFile {
                          childImageSharp {
                            gatsbyImageData
                          }
                        }
                      }
                    }
                    websiteLink
                  }                   
                }
              }
            }
            brandingProjects{
              ...on WpPortfolioProject {
                guid
                title
                portfolioProject {
                  branding {
                    title
                    caption
                    lightboxImages {
                      fieldGroupName
                      text
                      image {
                        publicUrl
                        localFile {
                          childImageSharp {
                            gatsbyImageData
                          }
                        }
                      }
                    }
                    websiteLink
                  }                   
                }
              }
            }
            videoProjects{
              ...on WpPortfolioProject {
                guid
                title
                portfolioProject {
                  video {
                    title
                    caption
                    thumbnailImage {
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                      sourceUrl
                    }
                    websiteLink
                    videoUrl
                  }                   
                }
              }
            }
            interactiveProjects{
              ...on WpPortfolioProject {
                guid
                title
                portfolioProject {
                  interactive {
                    title
                    caption
                    thumbnailImage {
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                      sourceUrl
                    }
                    websiteLink
                    videoUrl
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
          containerWidth
        }
      }  
      }
  }
`

