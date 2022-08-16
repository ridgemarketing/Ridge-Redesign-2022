import React, {useContext, useEffect} from "react"
import { Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme, ThemeContext } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"

const ProjectHeader = (props) => {
    const content       = props.content.projectHeader;
    const info          = props.info;
    console.log(info);

    const logo          = (info.logos.light.localFile.ext === `.svg`) 
    ? <img className={''} src={info.logos.light.sourceUrl} alt={info.logos.light.altText} />
    : <GatsbyImage 
        image={info.logos.light.localFile.childImageSharp.gatsbyImageData} 
        alt={info.logos.light.altText} 
        className={``} 
        objectFit={'contain'}/> ;

    const bgImage       = content.backgroundImage ? getImage(content.backgroundImage.localFile) : false;
    const featuredImage = content.featuredImage   ? getImage(content.featuredImage.localFile)   : false;
    const imageOverhang = content.imageOverhang   ? getImage(content.imageOverhang.localFile)   : false;

    const heading       = Parser(content.heading);
    const body          = Parser(content.body);

    let top             = `top-0`

    if (featuredImage) {
        top = `top-96`
    }

    const context = useContext(ThemeContext)



    useEffect(() => {    
      return () => {
        if (info.accentColor) {
            context.updateAccentFunction(info.accentColor)
        }
      };
    }, [info.accentColor, context]); 

    return (
      <section className={`relative text-white`}>
          {content.backgroundColor &&
              <div className={`absolute ${top} bottom-80 left-0 w-full h-full max-h-[calc(100%-44rem)] object-cover`} style={{backgroundColor: content.backgroundColor}}></div>
          }
          {bgImage && 
              <GatsbyImage className={`absolute ${top} bottom-80 left-0 w-full h-full max-h-[calc(100%-44rem)] object-cover`} image={bgImage} />
          }
          
          {featuredImage && 
              <Container classes={``}>
                  <div className={`mt-8`}>
                      <GatsbyImage className={``} image={featuredImage} />
                  </div>
              </Container>
          }

          
          <Container size={`slim`} classes={`pt-20 pb-44`}>
              <div className={`max-w-[400px] mb-16`}>
                  {logo}
              </div>

              <div className={`lg:flex`}>
                  <div className={`lg:w-3/4`}>
                      <h1 dangerouslySetInnerHTML={{__html: heading}} className={`${theme.text.H1_STD}`}></h1>
                      <p dangerouslySetInnerHTML={{__html:body}} className={`${theme.text.P_STD}`}></p>
                  </div>
                  <div className={``}>
                      {info.websites && 
                          <div>
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
                              <p></p>
                              <ul>
                                  {info.services.map(service => {
                                      return (<li><a href=""></a></li>)
                                  })}
                              </ul>
                          </div>
                      }
                  </div>
              </div>
          </Container>
          <Container size={`slim`}>
              {imageOverhang && 
                      <GatsbyImage className={``} image={imageOverhang} />
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
        }
      }
    projectInformation {
        accentColor
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