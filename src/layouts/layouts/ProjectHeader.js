import React, {useContext, useEffect, useState, useRef } from "react"
import { Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme, ThemeContext } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"

const ProjectHeader = (props) => {
    const content       = props.content.projectHeader;
    const info          = props.info;
    const [imageHeight, setImageHeight] = useState(0);
    const [maxHeight, setMaxHeight] = useState(0);
    const ref = useRef();
    let logo;
    // if (content.videoOverhang) console.log(content.videoOverhang);

    // const logo          = (info.logos.light.localFile != null) && (info.logos.light.localFile.ext === `.svg`) 
    // ? <img className={''} src={info.logos.light.sourceUrl} alt={info.logos.light.altText} />
    // : <GatsbyImage 
    //     image={info.logos.light.localFile.childImageSharp.gatsbyImageData} 
    //     alt={info.logos.light.altText} 
    //     className={``} 
    //     objectFit={'contain'}/> ;
    if (info.logos && info.logos.light && info.logos.light.localFile) {
      logo = (info.logos.light.localFile.ext === `.svg`) 
      ? <img className={''} src={info.logos.light.sourceUrl} alt={info.logos.light.altText} />
      : <GatsbyImage 
      image={info.logos.light.localFile.childImageSharp.gatsbyImageData} 
      alt={info.logos.light.altText} 
      className={``} 
      objectFit={'contain'}/>
    }

    const bgImage       = content.backgroundImage ? getImage(content.backgroundImage.localFile) : false;
    const featuredImage = content.featuredImage   ? getImage(content.featuredImage.localFile)   : false;
    const imageOverhang = content.imageOverhang   ? getImage(content.imageOverhang.localFile)   : false;
    const videoOverhang = content.videoOverhang   ? content.videoOverhang : false;


    const setVideo = () => {
      setImageHeight(ref.current.clientHeight);
    }
    useEffect(() => {
      function handleResize() {
          setImageHeight(ref.current.clientHeight);
      }

      setTimeout(function() {
        console.log(ref.current.clientHeight);
          setImageHeight(ref.current ? ref.current.clientHeight : 0 );
      }, 0)

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  })

  useEffect(() => {
    setMaxHeight((imageHeight / 2) + 224);
  }, [imageHeight]);

    const heading       = Parser(content.heading);
    let body            = '';
    if(content.body){
      body          = Parser(content.body);
    }
    let top             = `top-0`

    if (featuredImage) {
        top             = `top-56 lg:top-96`
    }

    const context = useContext(ThemeContext);

    useEffect(() => {
      if (info.accentColor) {
          context.updateAccentFunction(info.accentColor)
      }
      if (info.secondaryAccent) {
        context.updateSecondaryFunction(info.secondaryAccent)
      }
    }, []);

    useEffect(() => {
      if (info.accentColor) {
        context.updateAccentFunction(info.accentColor)
      }
    }, [])

    let topColor  = false;
    if(featuredImage){}else{
      topColor    = true;
    }

    return (
      <section className={`relative text-${content.textTheme}`} style={{backgroundColor: topColor ? content.backgroundColor : 'transparent'}}>
          {content.backgroundColor &&
              <div className={`absolute ${top} bottom-80 left-0 w-full h-full object-cover`} style={{backgroundColor: content.backgroundColor, maxHeight: `calc(100% - ${maxHeight}px)`}}></div>
          }
          {bgImage && 
              <GatsbyImage style={{maxHeight: `calc(100% - ${maxHeight}px)`}} className={`absolute ${top} bottom-80 left-0 w-full h-full object-cover`} image={bgImage} />
          }
          
          {featuredImage && 
              <Container container={'none'} classes={'md:container'}>
                  <div className={`mt-8`}>
                      <GatsbyImage className={``} image={featuredImage} />
                  </div>
              </Container>
          }

          <Container size={`slim`} classes={`pt-20 pb-14 md:pb-20 xl:pb-44`}>
              <div className={`max-w-[400px] mb-16`}>
                  {logo}
              </div>

              <div className={`xl:flex`}>
                  <div className={`xl:w-3/4`}>
                      <h1 dangerouslySetInnerHTML={{__html: heading}} className={`${theme.text.H1_STD}`}></h1>
                      <p dangerouslySetInnerHTML={{__html: body}} className={`${theme.text.P_STD} mt-8`}></p>
                  </div>
                  <div className={`mt-9 xl:pl-10 md:grid md:grid-cols-2 md:w-8/12 xl:block xl:w-auto`}>
                      {info.websites && 
                          <div className={'pb-8'}>
                              <p className={`${theme.text.P_BLD}`}>Website</p>
                              <ul>
                                  {info.websites.map(website => {
                                  return <li><a href={website.url}>{website.url.replace('https://', '')}</a></li>
                                  })}
                              </ul>
                          </div>
                      }
                      {info.services && 
                          <div>
                              <p className={`${theme.text.P_BLD}`}>Services Provided</p>
                              <ul>
                                  {info.services.map(service => {
                                      return (<li><a href={service.service.link}>{service.titleOverride}</a></li>)
                                  })}
                              </ul>
                          </div>
                      }
                  </div>
              </div>
          </Container>

          <Container size={`slim`} classes={'helloClass'}> 
            {videoOverhang && 
            <div ref={ref}>
              <video preload="metadata" controls src={videoOverhang} onLoadedData={() => setVideo()} />
            </div>
            }
            {!videoOverhang && imageOverhang && 
                    <div ref={ref}>
                      <GatsbyImage className={``} image={imageOverhang} />
                    </div>
            }
          </Container>
      </section>
    )
}

export default ProjectHeader;

export const query = graphql`
  fragment ProjectHeader on WpProject {
    projectHeader {
        projectHeader {
          backgroundColor
          textTheme
          body
          heading
          backgroundImage {
            sourceUrl
            localFile {
              ext
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          featuredImage {
            sourceUrl
            localFile {
              ext
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          imageOverhang {
            sourceUrl
            localFile {
              ext
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          videoOverhang
        }
      }
    projectInformation {
        accentColor
        secondaryAccent
        logos {
          light {
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
        services {
            service {
                ... on WpService {
                    link
                    id
                }
            }
            titleOverride
        }
        
        websites {
            url
        }
    }
  }
`