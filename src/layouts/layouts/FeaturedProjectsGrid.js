import React, { useEffect, useState, useCallback, useContext } from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { theme, ThemeContext } from "../../static/theme"
import { graphql } from "gatsby"
import LightBox from "../../components/global/Lightbox.js"
import PortfolioNav from "../../components/PortfolioNav"

const FeaturedProjectsGrid = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const projects = content.projects;

    const context = useContext(ThemeContext);

    const [toRender, setRendering] = useState(false);
    const [websites, setWebsites] = useState([]);
    const [brandings, setBrandings] = useState([]);
    const [videos, setVideos] = useState([]);
    const [interactives, setInteractives] = useState([]);

    useEffect(() => {
      { content.websiteProjects && 
        content.websiteProjects.map(project => {
          websites.push(project.portfolioProject.websites);
        })
      }
      { content.brandingProjects &&
        content.brandingProjects.map(project => {
          brandings.push(project.portfolioProject.branding);
        })
      }
      { content.videoProjects &&
        content.videoProjects.map(project => {
          videos.push(project.portfolioProject.video);
        })
      }
      {content.interactiveProjects && 
        content.interactiveProjects.map(project => {
          interactives.push(project.portfolioProject.interactive);
        })
      }

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

    return(
      <>
        <PortfolioNav setFilter={handleFilterChange} />

        <Section settings={settings} classes={"bg-[#1C1C1C]/[0.9]"}>
          <Container container={'default'}>
                  <div className={'md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-x-4 xl:gap-y-8 py-16'}>
                    {toRender && toRender.map(block => {
                      const video = (block.videoUrl && block.videoUrl !== null) ? block.videoUrl : false;
                      const images = (block.videoUrl && block.videoUrl !== null) ? block.thumbnailImage : block.lightboxImages;
                      if (block.videoUrl !== null && block.lightboxImages !== null) {
                        return (
                            <div className={'relative my-10 md:my-0'}>
                                <LightBox images={images} title={block.title} caption={block.caption} link={block.websiteLink} video={video} />
                            </div>
                        )
                      }
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
                      }
                    }
                    websiteLink
                  }                   
                }
              }
            }
            brandingProjects{
              ...on WpPortfolioProject {
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
                      }
                    }
                    websiteLink
                  }                   
                }
              }
            }
            videoProjects{
              ...on WpPortfolioProject {
                title
                portfolioProject {
                  video {
                    title
                    caption
                    thumbnailImage {
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
                title
                portfolioProject {
                  interactive {
                    title
                    caption
                    thumbnailImage {
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
                      }
                    }
                    websiteLink
                  }                   
                }
              }
            }
            brandingProjects{
              ...on WpPortfolioProject {
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
                      }
                    }
                    websiteLink
                  }                   
                }
              }
            }
            videoProjects{
              ...on WpPortfolioProject {
                title
                portfolioProject {
                  video {
                    title
                    caption
                    thumbnailImage {
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
                title
                portfolioProject {
                  interactive {
                    title
                    caption
                    thumbnailImage {
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
                      }
                    }
                    websiteLink
                  }                   
                }
              }
            }
            brandingProjects{
              ...on WpPortfolioProject {
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
                      }
                    }
                    websiteLink
                  }                   
                }
              }
            }
            videoProjects{
              ...on WpPortfolioProject {
                title
                portfolioProject {
                  video {
                    title
                    caption
                    thumbnailImage {
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
                title
                portfolioProject {
                  interactive {
                    title
                    caption
                    thumbnailImage {
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

