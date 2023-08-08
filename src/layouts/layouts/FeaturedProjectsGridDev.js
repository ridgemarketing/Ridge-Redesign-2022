import React, { useEffect, useState, useCallback, useContext } from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { ThemeContext } from "../../static/theme"
import { graphql } from "gatsby"
import LightBox from "../../components/global/Lightbox"
import PortfolioNav from "../../components/PortfolioNav"
import { GatsbyImage } from "gatsby-plugin-image"
import FlexibleLink from "../../components/global/FlexibleLink"
import { theme } from "../../static/theme"

const WebsiteBrandingBlock = ({block, index, contactLink, currentContext}) => {

  let largeImageLightbox;
  let smallImageTopLightbox;
  let smallImageBottomLightbox;
  const video = false;

  if(block.group.largeImage.lightboxImages){
    largeImageLightbox = block.group.largeImage.lightboxImages;
  }
  if(block.group.smallImageTop.lightboxImages){
    smallImageTopLightbox = block.group.smallImageTop.lightboxImages;
  }
  if(block.group.smallImageBottom.lightboxImages){
    smallImageBottomLightbox = block.group.smallImageBottom.lightboxImages;
  }

  let sidePin = 'center';
  if(block.group.largeImage.desktopImageSidePin == 'Center'){
      sidePin = 'center'
  }
  if(block.group.largeImage.desktopImageSidePin == 'Left'){
    sidePin = 'left'
  }
  if(block.group.largeImage.desktopImageSidePin == 'Right'){
    sidePin = 'right'
  }

  let rowReverse = false;
  function isEvenOrOdd (number) {
    if (Math.floor(number / 2) * 2 !== number ){
      rowReverse = true;
    }
  }
  isEvenOrOdd(index);

  return( 
    <>                                                                            
        <div className={`flex md:hidden xl:flex flex-col md:flex-row ${rowReverse == true && 'xl:flex-row-reverse'} w-full h-min xl:h-[700px] overflow-hidden max-w-[1250px] ml-auto mr-auto `} >
            <div className={`relative flex flex-col w-full md:w-1/3 xl:flex-row xl:w-[calc(100%-350px)] xl:h-[700px]`}>

              {block.group.largeImage.mobileImage&& 
                <>
                  <div className="block xl:hidden">
                    <GatsbyImage 
                          image={block.group.largeImage.mobileImage.localFile.childImageSharp.gatsbyImageData} 
                          alt={``} objectPosition={`${sidePin}`}
                          className={`w-full h-[100vw] xl:h-[700px] z-0 border-solid border-black border-[9px]`} />
                  </div>
                  <div className="hidden xl:block">
                    <GatsbyImage 
                          image={block.group.largeImage.image.localFile.childImageSharp.gatsbyImageData} 
                          alt={``} objectPosition={`${sidePin}`}
                          className={`w-full h-[100vw] xl:h-[700px] z-0 border-solid border-black border-[9px]`} />
                  </div>
                </>  
              }

              {block.group.largeImage.image && !block.group.largeImage.mobileImage && 
                <GatsbyImage 
                    image={block.group.largeImage.image.localFile.childImageSharp.gatsbyImageData} 
                    alt={``} objectPosition={`${sidePin}`}
                    className={`w-full h-[100vw] xl:h-[700px] z-0 border-solid border-black border-[9px]`} />
              }

              {currentContext === 'Branding' && largeImageLightbox &&
                  <LightBox 
                      key={`FeaturedProjectItem__${currentContext}__${index}`} 
                      images={largeImageLightbox} 
                      title={block.group.largeImage.title} 
                      // caption={block.group.title}
                      typeOfProject={currentContext}
                      //link={block.group.title}
                      video={video}
                      noThumb={true}
                    />  
              }

              {currentContext !== 'Branding' && 
                <>
                  {/* rollover desktop */}
                  <div className="hidden lg:flex flex-col justify-center items-center absolute opacity-0 hover:opacity-100 bg-opacity-80 backdrop-blur-sm bg-white w-[calc(100%-18px)] h-[calc(100%-18px)] top-[9px] left-[9px] transition-opacity duration-500">
                    <h2 className="text-rm-black font-stratos uppercase text-[1.75rem] leading-6 font-bold mb-[45px]">{block.group.largeImage.title}</h2>
                    {block.group.largeImage.link.url &&
                        <FlexibleLink classes={`${theme.button['BASE_STYLING']} ${theme.button['SOLID_GREEN_HOVER_DARK']} `} link={block.group.largeImage.link}/>
                    }
                  </div>

                  {/* text link mobile */}
                  <div className="block lg:hidden bg-black p-6 lg:absolute bottom-4 left-4 lg:max-w-[350px]">
                    <h2 className="text-white font-stratos uppercase text-[1.75rem] leading-6 font-bold mb-2">{block.group.largeImage.title}</h2>
                    {block.group.largeImage.link.url &&
                        <FlexibleLink classes={`text-[18px] text-rm-green font-stratos-lights uppercase w-max ${theme.text_links['BASE_STYLING']} ${theme.text_links['STD']} ${theme.text_links['FWD_BASE']} ${theme.text_links['ARW_FWD_GREEN']} ${theme.text_links['HOVER_ARW_FWD_GREEN']} ${theme.text_links['HOVER_GREEN']}`} link={block.group.largeImage.link}/>
                    }
                  </div>
                </>
              } 

            </div>
            <div className={`relative flex flex-col md:flex-row xl:flex-col w-full md:w-2/3 xl:w-[350px] xl:h-[700px]`}>
                {block.group.smallImageTop.image &&
                    <div className="relative">

                        {block.group.smallImageTop.mobileImage&& 
                            <GatsbyImage 
                                image={block.group.smallImageTop.mobileImage.localFile.childImageSharp.gatsbyImageData} 
                                alt={``} 
                                className={`w-full h-[100vw] xl:h-[350px] xl:w-[350px] z-0 border-solid border-black border-[9px]`} />
                        }
                        {!block.group.smallImageTop.mobileImage&& 
                            <GatsbyImage 
                                image={block.group.smallImageTop.image.localFile.childImageSharp.gatsbyImageData} 
                                alt={``} 
                                className={`w-full h-[100vw] xl:h-[350px] xl:w-[350px] z-0 border-solid border-black border-[9px]`} />
                        }

                        {currentContext === 'Branding' && smallImageTopLightbox &&
                            <LightBox 
                                key={`FeaturedProjectItem__${currentContext}__${index}`} 
                                images={smallImageTopLightbox} 
                                title={block.group.smallImageTop.title} 
                                //caption={block.group.smallImageTop.title}
                                typeOfProject={currentContext}
                                //link={block.group.title}
                                video={video}
                              />  
                        }

                        {currentContext !== 'Branding' && 
                          <>
                            {block.group.smallImageTop.link.url && block.group.smallImageTop.title &&
                              <>
                                {/* rollover desktop */}
                                <div className="hidden lg:flex flex-col justify-center items-center absolute opacity-0 hover:opacity-100 bg-opacity-80 backdrop-blur-sm bg-white w-[calc(100%-18px)] h-[calc(100%-18px)] top-[9px] left-[9px] transition-opacity duration-500">
                                  <h2 className="text-rm-black font-stratos uppercase text-[1.75rem] leading-6 font-bold mb-[45px]">{block.group.smallImageTop.title}</h2>
                                    {block.group.smallImageTop.link &&
                                        <FlexibleLink classes={`${theme.button['BASE_STYLING']} ${theme.button['SOLID_GREEN_HOVER_DARK']} `} link={block.group.smallImageTop.link}/>
                                    }
                                </div>
                                
                                {/* text link mobile */}
                                <div className="block lg:hidden bg-black p-6 lg:absolute bottom-4 left-4 lg:max-w-[350px]">
                                    <h2 className="text-white font-stratos uppercase text-[1.75rem] leading-6 font-bold mb-2">{block.group.smallImageTop.title}</h2>
                                      <FlexibleLink classes={`text-[18px] text-rm-green font-stratos-lights uppercase w-max ${theme.text_links['BASE_STYLING']} ${theme.text_links['STD']} ${theme.text_links['FWD_BASE']} ${theme.text_links['ARW_FWD_GREEN']} ${theme.text_links['HOVER_ARW_FWD_GREEN']} ${theme.text_links['HOVER_GREEN']}`} 
                                      link={block.group.smallImageTop.link} />
                                </div>
                              </>
                            }
                          </>
                        }
                    </div>
                  }
                  {block.group.smallImageBottom.image &&
                    <div className="relative">

                        {block.group.smallImageBottom.mobileImage&& 
                            <GatsbyImage 
                              image={block.group.smallImageBottom.mobileImage.localFile.childImageSharp.gatsbyImageData} 
                              alt={``} 
                              className={`w-full h-[100vw] xl:h-[350px] xl:w-[350px] z-0 border-solid border-black border-[9px]`} />
                        }
                        {!block.group.smallImageBottom.mobileImage&& 
                            <GatsbyImage 
                                image={block.group.smallImageBottom.image.localFile.childImageSharp.gatsbyImageData} 
                                alt={``} 
                                className={`w-full h-[100vw] xl:h-[350px] xl:w-[350px] z-0 border-solid border-black border-[9px]`} />
                        }

                        {currentContext === 'Branding' && smallImageBottomLightbox &&
                            <LightBox 
                                key={`FeaturedProjectItem__${currentContext}__${index}`} 
                                images={smallImageBottomLightbox} 
                                title={block.group.smallImageBottom.title} 
                                typeOfProject={currentContext}
                                video={video}
                              />  
                        }

                        {currentContext !== 'Branding' && 
                          <>
                            {block.group.smallImageBottom.link.url && block.group.smallImageBottom.title &&
                              <>
                                {/* rollover desktop */}
                                <div className="hidden lg:flex flex-col justify-center items-center absolute opacity-0 hover:opacity-100 bg-opacity-80 backdrop-blur-sm bg-white w-[calc(100%-18px)] h-[calc(100%-18px)] top-[9px] left-[9px] transition-opacity duration-500">
                                  <h2 className="text-rm-black font-stratos uppercase text-[1.75rem] leading-6 font-bold mb-[45px]">{block.group.smallImageBottom.title}</h2>
                                    {block.group.smallImageBottom.link &&
                                        <FlexibleLink classes={`${theme.button['BASE_STYLING']} ${theme.button['SOLID_GREEN_HOVER_DARK']} `} link={block.group.smallImageBottom.link}/>
                                    }
                                </div>
                                
                                {/* text link mobile */}
                                <div className="block lg:hidden bg-black p-6 lg:absolute bottom-4 left-4 lg:max-w-[350px]">
                                    <h2 className="text-white font-stratos uppercase text-[1.75rem] leading-6 font-bold mb-2">{block.group.smallImageBottom.title}</h2>
                                      <FlexibleLink classes={`text-[18px] text-rm-green font-stratos-lights uppercase w-max ${theme.text_links['BASE_STYLING']} ${theme.text_links['STD']} ${theme.text_links['FWD_BASE']} ${theme.text_links['ARW_FWD_GREEN']} ${theme.text_links['HOVER_ARW_FWD_GREEN']} ${theme.text_links['HOVER_GREEN']}`} 
                                      link={block.group.smallImageBottom.link} />
                                </div>
                              </>
                            }
                          </>
                        }

                    </div>    
                  }
                  {!block.group.smallImageBottom.image &&

                    <div className="relative hidden xl:flex flex-col items-center justify-center bg-[#24B6BF] xl:h-[350px] border-solid border-black border-[9px]">
                      <h2 className="text-white text-center font-stratos uppercase text-[1.75rem] leading-6 font-bold mb-2">Want to See your new site here?</h2>
                      <FlexibleLink
                          link={contactLink}
                          classes={theme.button.BASE_STYLING + theme.text_links.STD + theme.button.SOLID_BLACK_HOVER_DARK + ' text-[18px] relative z-0'}
                          />
                    </div>    
                  }
            </div> 
      </div>
      {/* Two Col */}
        {block.group.largeImage.image && !block.group.largeImage.mobileImage &&
          <div className={`relative hidden md:block xl:hidden max-w-[50%] no-mobile-image`}>

              <GatsbyImage 
                image={block.group.largeImage.image.localFile.childImageSharp.gatsbyImageData} 
                alt={``} objectPosition={`${sidePin}`}
                className={`w-full z-0 h-[calc(50vw)]`} />

              {currentContext === 'Branding' && largeImageLightbox &&
                <LightBox 
                    key={`FeaturedProjectItem__${currentContext}__${index}`} 
                    images={largeImageLightbox} 
                    title={block.group.largeImage.title} 
                    typeOfProject={currentContext}
                    video={video}
                    noThumb={true}
                  />  
              }

              {currentContext !== 'Branding' && 
                <>
                  {block.group.largeImage.link.url &&
                      <div className="bg-black p-6">
                        <h2 className="text-white font-stratos uppercase text-[1.75rem] leading-6 font-bold mb-2">{block.group.largeImage.title}</h2>
                        <FlexibleLink classes={`text-[18px] text-rm-green font-stratos-lights uppercase w-max ${theme.text_links['BASE_STYLING']} ${theme.text_links['STD']} ${theme.text_links['FWD_BASE']} ${theme.text_links['ARW_FWD_GREEN']} ${theme.text_links['HOVER_ARW_FWD_GREEN']} ${theme.text_links['HOVER_GREEN']}`} link={block.group.largeImage.link} />
                      </div>
                  }
                </>
              }

          </div>
        }
        {block.group.largeImage.mobileImage &&
          <div className={`relative hidden md:block xl:hidden max-w-[50%] mobile-image`}>

              <GatsbyImage 
                image={block.group.largeImage.mobileImage.localFile.childImageSharp.gatsbyImageData} 
                alt={``} objectPosition={`${sidePin}`}
                className={`w-full z-0 h-[calc(50vw)]`} />

              {currentContext === 'Branding' && largeImageLightbox &&
                <LightBox 
                    key={`FeaturedProjectItem__${currentContext}__${index}`} 
                    images={largeImageLightbox} 
                    title={block.group.largeImage.title} 
                    typeOfProject={currentContext}
                    video={video}
                    noThumb={true}
                  />  
              }

              {currentContext !== 'Branding' && 
                <>
                  {block.group.largeImage.link.url &&
                      <div className="bg-black p-6">
                        <h2 className="text-white font-stratos uppercase text-[1.75rem] leading-6 font-bold mb-2">{block.group.largeImage.title}</h2>
                        <FlexibleLink classes={`text-[18px] text-rm-green font-stratos-lights uppercase w-max ${theme.text_links['BASE_STYLING']} ${theme.text_links['STD']} ${theme.text_links['FWD_BASE']} ${theme.text_links['ARW_FWD_GREEN']} ${theme.text_links['HOVER_ARW_FWD_GREEN']} ${theme.text_links['HOVER_GREEN']}`} link={block.group.largeImage.link} />
                      </div>
                  }
                </>
              }

          </div>
        }
        {block.group.smallImageTop.image && !block.group.smallImageTop.mobileImage &&
          <div className="relative hidden md:block xl:hidden max-w-[50%]"> 

            <GatsbyImage 
                image={block.group.smallImageTop.image.localFile.childImageSharp.gatsbyImageData} 
                alt={``} 
                className={`w-full h-[calc(50vw)] z-0`} />

            {currentContext === 'Branding' && smallImageTopLightbox &&
                <LightBox 
                    key={`FeaturedProjectItem__${currentContext}__${index}`} 
                    images={smallImageTopLightbox} 
                    title={block.group.smallImageTop.title} 
                    typeOfProject={currentContext}
                    video={video}
                  />  
              }

            {currentContext !== 'Branding' && 
              <>
                {block.group.smallImageTop.link.url && block.group.smallImageTop.title &&
                  <div className="bg-black p-6">
                      <h2 className="text-white font-stratos uppercase text-[1.75rem] leading-6 font-bold mb-2">{block.group.smallImageTop.title}</h2>
                        <FlexibleLink classes={`text-[18px] text-rm-green font-stratos-lights uppercase w-max ${theme.text_links['BASE_STYLING']} ${theme.text_links['STD']} ${theme.text_links['FWD_BASE']} ${theme.text_links['ARW_FWD_GREEN']} ${theme.text_links['HOVER_ARW_FWD_GREEN']} ${theme.text_links['HOVER_GREEN']}`} link={block.group.smallImageTop.link} />
                  </div>
                }
                </>
            }

          </div>
        }
        {block.group.smallImageTop.mobileImage &&
          <div className="relative hidden md:block xl:hidden max-w-[50%]"> 

            <GatsbyImage 
                image={block.group.smallImageTop.mobileImage.localFile.childImageSharp.gatsbyImageData} 
                alt={``} 
                className={`w-full h-[calc(50vw)] z-0`} />

            {currentContext === 'Branding' && smallImageTopLightbox &&
                <LightBox 
                    key={`FeaturedProjectItem__${currentContext}__${index}`} 
                    images={smallImageTopLightbox} 
                    title={block.group.smallImageTop.title} 
                    typeOfProject={currentContext}
                    video={video}
                  />  
              }

            {currentContext !== 'Branding' && 
              <>
                {block.group.smallImageTop.link.url && block.group.smallImageTop.title &&
                  <div className="bg-black p-6">
                      <h2 className="text-white font-stratos uppercase text-[1.75rem] leading-6 font-bold mb-2">{block.group.smallImageTop.title}</h2>
                        <FlexibleLink classes={`text-[18px] text-rm-green font-stratos-lights uppercase w-max ${theme.text_links['BASE_STYLING']} ${theme.text_links['STD']} ${theme.text_links['FWD_BASE']} ${theme.text_links['ARW_FWD_GREEN']} ${theme.text_links['HOVER_ARW_FWD_GREEN']} ${theme.text_links['HOVER_GREEN']}`} link={block.group.smallImageTop.link} />
                  </div>
                }
                </>
            }

          </div>
        }
        {block.group.smallImageBottom.image && !block.group.smallImageBottom.mobileImage &&
          <div className="relative hidden md:block xl:hidden max-w-[50%]">

              <GatsbyImage 
                  image={block.group.smallImageBottom.image.localFile.childImageSharp.gatsbyImageData} 
                  alt={``} 
                  className={`w-full h-[calc(50vw)] z-0`} />


              {currentContext === 'Branding' && smallImageBottomLightbox &&
                <LightBox 
                    key={`FeaturedProjectItem__${currentContext}__${index}`} 
                    images={smallImageBottomLightbox} 
                    title={block.group.smallImageBottom.title} 
                    //caption={block.group.smallImageTop.title}
                    typeOfProject={currentContext}
                    //link={block.group.title}
                    video={video}
                  />  
              }

              {currentContext !== 'Branding' && 
                <>
                  {block.group.smallImageBottom.link.url && block.group.smallImageBottom.title &&
                    <div className="bg-black p-6">
                      <h2 className="text-white font-stratos uppercase text-[1.75rem] leading-6 font-bold mb-2">{block.group.smallImageBottom.title}</h2>
                      <FlexibleLink classes={`text-[18px] text-rm-green font-stratos-lights uppercase w-max ${theme.text_links['BASE_STYLING']} ${theme.text_links['STD']} ${theme.text_links['FWD_BASE']} ${theme.text_links['ARW_FWD_GREEN']} ${theme.text_links['HOVER_ARW_FWD_GREEN']} ${theme.text_links['HOVER_GREEN']}`} link={block.group.smallImageBottom.link} />
                  </div>
                  }
                </>
              }

          </div>    
        }
        {block.group.smallImageBottom.mobileImage&&
          <div className="relative hidden md:block xl:hidden max-w-[50%]">

              <GatsbyImage 
                  image={block.group.smallImageBottom.mobileImage.localFile.childImageSharp.gatsbyImageData} 
                  alt={``} 
                  className={`w-full h-[calc(50vw)] z-0`} />


              {currentContext === 'Branding' && smallImageBottomLightbox &&
                <LightBox 
                    key={`FeaturedProjectItem__${currentContext}__${index}`} 
                    images={smallImageBottomLightbox} 
                    title={block.group.smallImageBottom.title} 
                    //caption={block.group.smallImageTop.title}
                    typeOfProject={currentContext}
                    //link={block.group.title}
                    video={video}
                  />  
              }

              {currentContext !== 'Branding' && 
                <>
                  {block.group.smallImageBottom.link.url && block.group.smallImageBottom.title &&
                    <div className="bg-black p-6">
                      <h2 className="text-white font-stratos uppercase text-[1.75rem] leading-6 font-bold mb-2">{block.group.smallImageBottom.title}</h2>
                      <FlexibleLink classes={`text-[18px] text-rm-green font-stratos-lights uppercase w-max ${theme.text_links['BASE_STYLING']} ${theme.text_links['STD']} ${theme.text_links['FWD_BASE']} ${theme.text_links['ARW_FWD_GREEN']} ${theme.text_links['HOVER_ARW_FWD_GREEN']} ${theme.text_links['HOVER_GREEN']}`} link={block.group.smallImageBottom.link} />
                  </div>
                  }
                </>
              }

          </div>    
        }
    </>
    )
}

const FeaturedProjectsGridDev = (props) => {
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
    const contactLink = {
      target: "",
      title: "Let's Talk",
      url: "/contact/"
    }
    //?type=video

    useEffect(() => {

      
        content.websiteProjects.forEach(project => {
          websites.push(project);
        })

        content.brandingProjects.forEach(project => {
          brandings.push(project);
        })

        content.videoProjects.forEach(project => {
          videos.push(project);
        })
      
        content.interactiveProjects.forEach(project => {
          interactives.push(project);
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


    useEffect(() => {
      if(parameter1){
        if(parameter1 == 'video' || parameter1 == 'videos'){
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
    if(context.filterState == 'Websites' || context.filterState == 'Branding'){
        containerGrid = 'none';
    }


    return(
      <>
        <PortfolioNav setFilter={handleFilterChange} />

        <Section settings={settings} classes={`${context.filterState === 'Websites' && `bg-black`} ${context.filterState !== 'Websites' &&  `bg-[#1C1C1C]/[0.9]`} overflow-hidden`}>
          <Container container={containerGrid}>
            <>
                  {context.filterState === 'Websites' &&
                      <div className={`md:flex flex-wrap`}>
                          {websites && websites.map((block, index) => {
                              return(
                                <WebsiteBrandingBlock contactLink={contactLink} block={block} index={index} />
                              )
                          })}
                    </div>
              }
              {context.filterState === 'Branding' &&
                      <div className={`md:flex flex-wrap`}>
                          {brandings && brandings.map((block, index) => {
                              return( 
                                <WebsiteBrandingBlock contactLink={contactLink} block={block} index={index} currentContext={context.filterState} />
                                )
                          })}
                    </div>
              }
              {context.filterState == 'Video'  && 
                <div>
                    {videos && videos.map( (block) => {
                      var videoContent = block.category;
                        return(
                          <div className="py-16">
                            {videoContent.title &&
                                <h2 className={`${theme.text.H2} text-center pb-4 lg:pb-8`}>
                                  {videoContent.title}
                                </h2>
                            }

                            <div className={`md:grid md:grid-cols-2 md:gap-6`}>
                              {videoContent.videos.map( (vidGrid, index) =>{
                                 if (vidGrid.group.videoUrl !== null && vidGrid.group.image !== null) {
                                  return(
                                    <div className={`relative my-10 md:my-0 ${context.filterState == 'Video'&& 'h-min'}`}>
                                      
                                        <LightBox 
                                            key={`FeaturedProjectItem__${context.filterState}__${index}`} 
                                            images={vidGrid.group.image} 
                                            title={vidGrid.group.title} 
                                            caption={vidGrid.group.subtitle}
                                            typeOfProject={context.filterState} 
                                            link={vidGrid.group.website}
                                            video={vidGrid.group.videoUrl}
                                            />
                                    </div>
                                  )
                                }
                              })}
                            </div>
                          </div>
                        )
                    
                    })}
                </div>
              }
              {context.filterState == 'Interactive' &&
                <div>
                    {interactives && interactives.map( (block) => {
                      var interactiveContent = block.category;
                        
                        return(
                          <div className="py-16">
                            {interactiveContent.title &&
                                <h2 className={`${theme.text.H2} text-center pb-4 lg:pb-8`}>
                                  {interactiveContent.title}
                                </h2>
                            }

                            <div className={`md:grid md:grid-cols-2 md:gap-6`}>
                              {interactiveContent.videos.map( (interactiveGrid, index) =>{
                                 if (interactiveGrid.group.videoUrl !== null && interactiveGrid.group.image !== null) {
                                  return(
                                    <div className={`relative my-10 md:my-0 ${context.filterState == 'Video'&& 'h-min'}`}>
                                        <LightBox 
                                            key={`FeaturedProjectItem__${context.filterState}__${index}`} 
                                            images={interactiveGrid.group.image} 
                                            title={interactiveGrid.group.title} 
                                            caption={interactiveGrid.group.subtitle}
                                            typeOfProject={'Video'} //switches to 16:9, bc video tab was set to 16:9 first
                                            link={interactiveGrid.group.website}
                                            video={interactiveGrid.group.videoUrl}
                                            />
                                    </div>
                                  )
                                }
                              })}
                            </div>
                          </div>
                        )
                    
                    })}
                </div>
              }


              {/* {context.filterState !== 'Websites' && context.filterState !== 'Branding' && context.filterState !== 'Video' && context.filterState !== 'Interactive' &&
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
              } */}


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
                  mobileImage {
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
                  desktopImageSidePin
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
              group {
                largeImage {
                  image {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  mobileImage {
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

                  lightboxImages {
                    image {
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
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
                  lightboxImages {
                    image {
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
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
                  lightboxImages {
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
            }


            videoProjects {
              category {
                title
                videos {
                  group {
                    title
                    subtitle
                    videoUrl
                    website
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
            }

            interactiveProjects{
              category {
                title
                videos {
                  group {
                    title
                    subtitle
                    videoUrl
                    website
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
