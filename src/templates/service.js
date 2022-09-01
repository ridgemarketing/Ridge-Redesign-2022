import React from "react"
import { graphql } from "gatsby"
import FlexibleLayouts from "../layouts/FlexibleLayouts"
import { Container, Section } from '../components/global/Wrappers.js'
import { theme } from '../static/theme'
import Buttons from '../components/global/Buttons'
import { GatsbyImage } from 'gatsby-plugin-image'
import Parser from '../components/global/Parser'

import Layout from "../components/global/Layout"

export const Head = ({data}) => (
  <>
    <title>{data.wpService.seo.title}</title>
    <link rel="icon" type="image/x-icon" href={data.allWp.nodes[0].globalSettings.globalSettings.logos.favicon.sourceUrl}></link>

    <meta name="description" content={data.wpService.metaDesc} />
    <meta name="title" content={data.wpService.seo.title}/>
    <meta name="pageType" content={data.wpService.seo.schema.pageType}/>
    <meta name="keywords" content={data.wpService.seo.metaKeywords}/>
    <meta name="author" content={data.wpService.seo.opengraphAuthor}/>

    {data.wpService.seo.metaRobotsNoindex &&
      <>
      <meta name="robots" content="noindex" />
      <meta name="googlebot-news" content="noindex" />
      </>
    }
    {data.wpService.seo.metaRobotsNoFollow &&
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
 
  let headerBodyContent = content.bodyContent;
  let floatP = [];
  let visibility  = 'hidden invisible';

  if(content.intextFloatedImage){
    for(let i =0; headerBodyContent.length > i; i++){
        if(headerBodyContent[i].textSize === "standard"){
          floatP.push(headerBodyContent[i]);
          headerBodyContent.splice(i,1);
          i--;
        }
    }
    visibility = 'inline-block';
  }
  // console.log('service', content, floatP);

  return (
    <Layout>
      <Section settings={settings}>
        <Container>
          {content.eyebrow &&
            <h1 className={theme.text.H4 + 'block mb-4'}>
              {content.eyebrow}
            </h1>
          }
          {content.heading.green && content.heading.black && 
            <h2 className={theme.text.HERO + 'mb-9'}>
                <span className="text-rm-green">
                  {content.heading.green + " "}
                </span>
                <span className="text-rm-black">
                  {content.heading.black}
                </span>
            </h2>
          }
          {content.bodyContent && content.bodyContent.map((key) =>{
            const textSize = key.textSize === 'large' ? 'H4_LTE' : 'P_STD';  
            return(
                <> 
                  <p dangerouslySetInnerHTML={{__html: Parser(key.body)}} className={theme.text[textSize] + 'mb-9' } key={key.body}></p>
                </>
            )
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
            </div>

            {content.intextFloatedImage &&
              <GatsbyImage className="mb-9 lg:mb-0 lg:w-1/5 lg:ml-[5%]" objectFit="contain" imgStyle="objectFit:contain;" image={content.intextFloatedImage.localFile.childImageSharp.gatsbyImageData} alt={` `} />  
            }
            
            {content.componentButton && 
              <div className='text-left'>
                <Buttons 
                  content={content.componentButton} 
                  sectionBackground={settings.backgroundColor}/>
              </div>
              }
          </Container>
        </Section>
        {data.wpService.flexibleLayouts &&
          <FlexibleLayouts flexibleLayouts={data.wpService.flexibleLayouts} />
        }
    </Layout>
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
