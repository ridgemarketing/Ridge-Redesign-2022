import React, { useContext, useEffect, useRef } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import FlexibleLayouts from "../layouts/FlexibleLayouts"
import { Container, Section } from '../components/global/Wrappers'
import { theme, ThemeContext } from '../static/theme'
import Buttons from '../components/global/Buttons'
import Parser from '../components/global/Parser'

export const Head = ({data}) => (
  <>
    <title>{data.wpService.seo.title}</title>
    <link rel="icon" type="image/x-icon" href={data.allWp.nodes[0].globalSettings.globalSettings.logos.favicon.sourceUrl}></link>

    <meta name="description" content={data.wpService.metaDesc} />
    <meta name="title" content={data.wpService.seo.title}/>
    <meta name="pageType" content={data.wpService.seo.schema.pageType}/>
    <meta name="keywords" content={data.wpService.seo.metaKeywords}/>
    <meta name="author" content={data.wpService.seo.opengraphAuthor}/>

    {data.wpService.seo.metaRobotsNoindex === 'noindex' &&
      <>
      <meta name="robots" content="noindex" />
      <meta name="googlebot-news" content="noindex" />
      </>
    }
    {data.wpService.seo.metaRobotsNoFollow === 'nofollow' &&
       <meta name="robots" content={data.wpService.seo.metaRobotsNoFollow} />
    }

    <meta property="og:type" content={data.wpService.seo.opengraphType}/>
    <meta property="og:author" content={data.wpService.seo.opengraphAuthor}/>
    <meta property="og:url" content={data.wpService.seo.opengraphUrl}/>
    <meta property="og:title" content={data.wpService.seo.opengraphTitle}/>
    <meta property="og:description" content={data.wpService.seo.opengraphDescription}/>
    {data.wpService.seo.opengraphImage &&
      <meta property="og:image" content={data.wpService.seo.opengraphImage.sourceUrl}/>
    }

    <meta property="twitter:card" content="summary_large_image"/>
    <meta property="twitter:url" content={data.wpService.seo.opengraphUrl}/>
    <meta property="twitter:title" content={data.wpService.seo.twitterTitle}/>
    <meta property="twitter:description" content={data.wpService.seo.twitterDescription}/>
    {data.wpService.seo.twitterImage &&
      <meta property="twitter:image" content={data.wpService.seo.twitterImage.sourceUrl}/>
    }
    {data.wpService.seo.fullHead}
  </>
)

const WpService = ({ data }) =>{
  
  const settings  = data.wpService.servicesHeader.serviceHeader.layoutSettings;
  const content   = data.wpService.servicesHeader.serviceHeader.layoutContent;
  const context   = useRef(useContext(ThemeContext));

  useEffect(() => {
    context.current.updateHeaderBkgcolor('white');
  },[])

 
  let headerBodyContent = content.bodyContent;
  let floatP = [];
  let visibility  = 'hidden invisible';

  if(content.intextFloatedImage){
    for(let i =0; i < headerBodyContent.length; i++){
        if(headerBodyContent[i].textSize === "standard"){
          floatP.push(headerBodyContent[i]);
        }
    }
    visibility = 'inline-block';
  }

  return (
    <>
      <Section settings={settings}>
        <Container>
          {content.eyebrow &&
            <h1 className={theme.text.H4 + 'block mb-4'}>
              {content.eyebrow}
            </h1>
          }
          {content.heading.green && content.heading.black && 
            <h2 className={"font-stratos uppercase font-bold text-50px sm:text-60px lg:text-100px leading-[3rem] lg:leading-H1 mb-9"}>
                <span className="text-rm-green lg:block">
                  {content.heading.green + " "}
                </span>
                <span className="text-rm-black">
                  {content.heading.black}
                </span>
            </h2>
          }
          {content.bodyContent && content.bodyContent.map((key) => {
            if (floatP.length < 1 || key.textSize === "large") {
              const textSize = key.textSize === 'large' ? 'H4_LTE' : 'P_STD';  
              return(
                    <p dangerouslySetInnerHTML={{__html: Parser(key.body)}} className={theme.text[textSize] + 'mb-9' } key={key.body}></p>
              )
            }
            return (<></>)
          })}
          
            <div className={visibility + ` lg:w-3/4`}>
              {floatP.map((key) => {
                const textSize = 'P_STD';
                return(
                    <p className={theme.text[textSize] + 'mb-9' } key={key.body}>
                        {key.body}
                    </p>
                )
              })}

            {content.componentButton && 
              <div className='text-left'>
                <Buttons 
                  content={content.componentButton} 
                  sectionBackground={settings.backgroundColor}/>
              </div>
              }
            </div>

            {content.intextFloatedImage &&
              <GatsbyImage className="mb-9 lg:mb-0 lg:w-1/5 lg:ml-[5%]" objectFit="contain" imgStyle="objectFit:contain" image={content.intextFloatedImage.localFile.childImageSharp.gatsbyImageData} alt={` `} />  
            }
          </Container>
        </Section>
        {data.wpService.flexibleLayouts &&
          <FlexibleLayouts flexibleLayouts={data.wpService.flexibleLayouts} />
        }
    </>
  )
}
export default WpService;


export const query = graphql`
  query ServiceById( $id: String ){
    wpService(id: {eq: $id}) {
      id
      uri
      title
      content
      servicesHeader {
        serviceHeader {
          layoutContent {
            heading {
              black
              green
            }
            eyebrow
            componentButton {
              colors {
                fieldGroupName
                resting
              }
              link {
                target
                title
                url
              }
              style
            }
            bodyContent {
              body
              textSize
            }
            intextFloatedImage {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          layoutSettings {
            id
            fieldGroupName
            classes
            backgroundColor
            anchorId
            padding {
              bottom
              fieldGroupName
              top
            }
          }
        }
      }
      ...FlexibleLayoutsService
      seo {
        title
        metaDesc
        opengraphDescription
        opengraphImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          sourceUrl
        }
        twitterTitle
        twitterDescription
        twitterImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          sourceUrl
        }
        schema {
          pageType
        }
        opengraphTitle
        opengraphType
        opengraphUrl
        metaKeywords
        metaRobotsNofollow
        opengraphAuthor
        metaRobotsNoindex
      }
    }
    allWp {
      nodes {
        globalSettings {
          globalSettings {
            logos {
              favicon {
                sourceUrl
              }
            }
          }
        }
      }
    }
}
` 
