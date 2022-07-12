import React from "react"
import { graphql } from "gatsby"
import FlexibleLayouts from "../layouts/FlexibleLayouts"

import { Container, Section } from '../components/global/Wrappers.js'
import { theme } from '../static/theme'
import Buttons from '../components/global/Buttons'
import { GatsbyImage } from 'gatsby-plugin-image'

const WpService = ({ data }) =>{
    
  const settings  = data.wpService.servicesHeader.serviceHeader.layoutSettings;
  const content   = data.wpService.servicesHeader.serviceHeader.layoutContent;
 
  let floatP = [];
  let visibility  = 'hidden invisible';
  
  //if floated image, push all small text into a div
  if(content.intextFloatedImage){
    for(let i =0; content.bodyContent.length > i; i++){
        if(content.bodyContent[i].textSize === "standard"){
          floatP.push(content.bodyContent[i]);
          content.bodyContent.splice(i,1);
          i--;
        }
    }
    visibility = 'inline-block';
  }

  return (
    <div>
      <Section settings={settings}>
        <Container>
          {content.eyebrow &&
            <h1 className={theme.text.H4 + 'block mb-4'}>
              {content.eyebrow}
            </h1>
          }
          {content.heading.green && content.heading.black && 
            <h2 className={theme.text.HERO + 'mb-9'}>
                <span className="text-rm-green block">
                  {content.heading.green}
                </span>
                <span className="text-rm-black block">
                  {content.heading.black}
                </span>
            </h2>
          }
          {content.bodyContent && content.bodyContent.map((key) =>{
            const textSize = key.textSize === 'large' ? 'H4_LTE' : 'P_STD';  
            return(
                <> 
                  <p className={theme.text[textSize] + 'mb-9' } key={key.body}>
                    {key.body} 
                  </p>
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
          
          {content.componentButton && content.componentButton.link.url &&
            <div className='text-left'>
              <Buttons 
                content={content.componentButton} 
                sectionBackground={settings.backgroundColor}/>
            </div>
            }
        </Container>
      </Section>
      <div>
          <FlexibleLayouts flexibleLayouts={data.wpService.flexibleLayouts} />
      </div>
    </div>
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
    }
  }
` 