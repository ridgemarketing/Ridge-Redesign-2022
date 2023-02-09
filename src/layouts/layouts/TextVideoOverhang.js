import React, {useContext, useEffect, useState, useRef } from "react"
import { Container, Section } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme, ThemeContext } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"

const TextVideoOverhang = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    console.log(content);
    const video = content.video ? content.video : false;
    console.log(video);
    const ref = useRef();

    return (
        <Section settings={settings}>
            <Container container={settings.containerWidth} classes={`text-center`}>
            <div className={'w-full pt-16 lg:p-20 pb-[180px] lg:pb-[360px]'} style={{backgroundColor: content.bgColor}}>
                {content.heading && 
                    <p className={`${theme.text.H2} text-white pb-10 px-4`}>{content.heading}</p>
                }
                {content.body && 
                    <p className={`${theme.text.P_STD} text-white px-10`}>{content.body}</p>
                }
            </div>
                <div className={'py-20 max-w-[1020px] mx-auto -mt-[180px] lg:-mt-[360px]'}> 
                  <div className={'w-[84%] relative mx-auto'}> {/* bg-[#383737] */}
                      <img className={'relative mx-auto z-10'} alt={"laptop screen image"}src={"https://rm2022dev.wpengine.com/wp-content/uploads/2022/12/MacBookPro-Laptop-Top-2.svg"} />
                      {video && <video className={'mx-auto absolute top-0 left-0 w-full h-full object-cover p-[1%]'} autoPlay loop muted playsInline src={video}></video> }
                  </div>
                  <div className={'-mt-px z-20 relative'}>
                      <img alt={"laptop keyboard image"} src={"https://rm2022dev.wpengine.com/wp-content/uploads/2022/12/MacBookPro-Laptop-Bottom.svg"} />
                  </div>
                </div>
            </Container>
        </Section>
    )

}
export default TextVideoOverhang;

export const query = graphql`
  fragment TextVideoOverhangPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_TextVideoOverhang {
        fieldGroupName
        layoutTextVideoOverhang {
          layoutContent {
            bgColor
            body
            heading
            video
          }
          layoutSettings {
            padding {
              top
              bottom
            }
            anchorId
            backgroundColor
            classes
            containerWidth
            id
          }
        }
    }    
  }
`
export const serviceQuery = graphql`
  fragment TextVideoOverhangService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_TextVideoOverhang {
        fieldGroupName
        layoutTextVideoOverhang {
          layoutContent {
            bgColor
            body
            heading
            video
          }
          layoutSettings {
            padding {
              top
              bottom
            }
            anchorId
            backgroundColor
            classes
            containerWidth
            id
          }
        }
    }    
  }
`
export const projectQuery = graphql`
  fragment TextVideoOverhangProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_TextVideoOverhang {
        fieldGroupName
        layoutTextVideoOverhang {
          layoutContent {
            bgColor
            body
            heading
            video
          }
          layoutSettings {
            padding {
              top
              bottom
            }
            anchorId
            backgroundColor
            classes
            containerWidth
            id
          }
        }
    }    
  }
`