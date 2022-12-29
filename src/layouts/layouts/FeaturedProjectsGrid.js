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
      if (toRender === false) {
        projects.map(project => {
          websites.push(project.portfolioProject.websites);
          brandings.push(project.portfolioProject.branding);
          videos.push(project.portfolioProject.video);
          interactives.push(project.portfolioProject.interactive);
        });
      }

      return () => handleRendering(context.filterState);
    }, []);

    useEffect(() => {
      if (toRender === false) {
        handleRendering(context.filterState);
      }
    });

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
                  <div className={'md:grid md:grid-cols-2 xl:grid-cols-3 xl:gap-x-4 xl:gap-y-8 py-16'}>
                    {toRender && toRender.map(block => {
                      if (block.lightboxImages !== null) {
                        return (
                            <div className={'relative'}>
                                <LightBox images={block.lightboxImages} title={block.title} caption={block.caption} link={block.websiteLink} />
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
            projects{
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
                  video {
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
                  interactive {
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
            projects{
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
                  video {
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
                  interactive {
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
            projects{
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
                  video {
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
                  interactive {
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

