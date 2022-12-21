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
    const ref = useRef();

    return (
        <Section settings={settings}>
            <Container container={settings.containerWidth} classes={`text-center`}>
                <div className={'w-full p-20'} style={{backgroundColor: content.bgColor}}>
                {content.heading && 
                    <p className={`${theme.text.H2} text-white pb-10`}>{content.heading}</p>
                }
                {content.body && 
                    <p className={`${theme.text.P_STD} text-white px-10`}>{content.body}</p>
                }
                </div>
                {video && 
                    <div ref={ref} className={'mx-auto'} style={{maxWidth: "800px"}}>
                        <video controls src={video} />
                    </div>
                }
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