import React, { useEffect, useState, useCallback, useContext } from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { ThemeContext } from "../../static/theme"
import { graphql } from "gatsby"
import LightBox from "../../components/global/Lightbox"
import PortfolioNav from "../../components/PortfolioNav"
import { GatsbyImage } from "gatsby-plugin-image"
import FlexibleLink from "../../components/global/FlexibleLink"

const FeaturedProjectsGridDev = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

    // console.log(content);

    const context = useContext(ThemeContext);

    const [toRender, setRendering] = useState(false);
    const [websites, setWebsites] = useState([]);
    const [brandings, setBrandings] = useState([]);
    const [videos, setVideos] = useState([]);
    const [interactives, setInteractives] = useState([]);

    const url = new URLSearchParams(props.layoutData.location.search);
    const parameter1 = url.get("type");
    //?type=video

    useEffect(() => {

      
        // content.websiteProjects.forEach(project => {
        //   websites.push(project.websiteProject);
        // })

        for( var i =0; i < content.websiteProjects.length; i++){
          websites.push(content.websiteProjects[i]);
        }
        // console.log(websites);


        // content.brandingProjects.forEach(project => {
        //   brandings.push(project.portfolioProject.branding);
        // })
      
        // content.videoProjects.forEach(project => {
        //   videos.push(project.portfolioProject.video);
        // })
      
        // content.interactiveProjects.forEach(project => {
        //   interactives.push(project.portfolioProject.interactive);
        // })
      

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


    let containerGrid = 'default';
    if(context.filterState == 'Websites' || context.filterState == 'websites'){
        containerGrid = 'none';
    }


    return(
      <>
        <PortfolioNav setFilter={handleFilterChange} />

        <Section settings={settings} classes={`${context.filterState === 'Websites' && `bg-black`} ${context.filterState !== 'Websites' && `bg-[#1C1C1C]/[0.9]`} overflow-hidden`}>
          <Container container={containerGrid}>
            <>
              {context.filterState === 'Websites' &&
              
                  <div className={``}>
                        {websites && websites.map((block, index) => {
                            //console.log(block);
                            return( 
                                <div className={`flex flex-col lg:flex-row lg:even:flex-row-reverse w-full lg:min-h-[750px] lg:max-h-[750px] 2xl:min-h-[1080px] 2xl:max-h-[1080px] items-center overflow-hidden max-w-[1920px] ml-auto mr-auto `} >
                                     <div className={`relative flex w-full lg:w-2/3 lg:min-h-[750px] lg:max-h-[750px] 2xl:min-h-[1080px] 2xl:max-h-[1080px]`}>
                                      {block.group.largeImage.image &&
                                        <GatsbyImage 
                                            image={block.group.largeImage.image.localFile.childImageSharp.gatsbyImageData} 
                                            alt={``} 
                                            className={`w-full z-0`} />
                                      }
                                      <div className="bg-black p-8 absolute bottom-4 left-4 lg:max-w-[350px]">
                                        <h2 className="text-white font-stratos uppercase text-[2.5rem] leading-10 font-bold mb-5">{block.group.largeImage.title}</h2>
                                        {block.group.largeImage.link.url &&
                                          <FlexibleLink classes={`text-rm-green font-stratos-lights uppercase w-max`} link={block.group.largeImage.link} />
                                        }
                                      </div>
                                    </div>
                                    <div className={`relative flex flex-col w-full lg:w-1/3 lg:min-h-[750px] lg:max-h-[750px] 2xl:min-h-[1080px] 2xl:max-h-[1080px]`}>
                                        {block.group.smallImageTop.image &&
                                            <div className="relative">
                                              <GatsbyImage 
                                                  image={block.group.smallImageTop.image.localFile.childImageSharp.gatsbyImageData} 
                                                  alt={``} 
                                                  className={`w-full lg:h-[375px] 2xl:h-[540px] z-0`} />
                                                  {block.group.smallImageTop.link.url && block.group.smallImageTop.title &&
                                                    <div className="bg-black p-8 absolute bottom-4 left-4 lg:max-w-[350px]">
                                                        <h2 className="text-white font-stratos uppercase text-[2.5rem] leading-10 font-bold mb-5">{block.group.smallImageTop.title}</h2>
                                                          <FlexibleLink classes={`text-rm-green font-stratos-lights uppercase w-max`} link={block.group.smallImageTop.link} />
                                                    </div>
                                                  }
                                            </div>
                                          }
                                          {block.group.smallImageBottom.image &&
                                            <div className="relative">
                                              <GatsbyImage 
                                                  image={block.group.smallImageBottom.image.localFile.childImageSharp.gatsbyImageData} 
                                                  alt={``} 
                                                  className={`w-full lg:h-[375px] 2xl:h-[540px] z-0`} />
                                                  {block.group.smallImageBottom.link.url && block.group.smallImageBottom.title &&
                                                    <div className="bg-black p-8 absolute bottom-4 left-4 lg:max-w-[350px]">
                                                      <h2 className="text-white font-stratos uppercase text-[2.5rem] leading-10 font-bold mb-5">{block.group.smallImageBottom.title}</h2>
                                                      <FlexibleLink classes={`text-rm-green font-stratos-lights uppercase w-max`} link={block.group.smallImageBottom.link} />
                                                  </div>
                                                  }
                                            </div>    
                                          }
                                      </div> 
                                </div>
                              )
                        })}
                  </div>
              }
              {context.filterState !== 'Websites' &&
                <div className={`md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-x-4 xl:gap-y-8 py-16`}>
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
              }
            </>
          </Container>
        </Section>
      </>
    )
}

export default FeaturedProjectsGridDev

export const pageQuery = graphql`
  fragment FeaturedProjectsGridPageDev on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_FeaturedProjectsGridDev {
      fieldGroupName
      layoutFeaturedProjectsGridDev {
        layoutContent {
            websiteProjects{
              group {
                largeImage {
                  image {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  title
                  link {
                    url
                    title
                    target
                  }
                }
                smallImageBottom {
                  title
                  link {
                    target
                    title
                    url
                  }
                  image {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
                smallImageTop {
                  title
                  link {
                    target
                    title
                    url
                  }
                  image {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
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
