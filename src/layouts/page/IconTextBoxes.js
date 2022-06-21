import React from 'react'
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"

const IconTextBoxes = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

    const textBlocks = content.list.map(item => {
        const image = getImage(item.image)
        return (
            <div className={'md:px-4 py-3'}>
                <div className={"text-center md:text-left lg:mx-0 min-h-[54px]"}>
                    <GatsbyImage image={image} />
                </div>              
                <p className={`mt-4 text-center md:text-left`}>{item.text}</p>
            </div>
        )
    })


    return (
        <Section settings={settings}>
            <Container>
            <div>
            <h3 className={'text-center'}>
                <span className={theme.text.H2}>{content.heading}
                </span>
            </h3>
            <p className={"mt-6 max-w-5xl mx-auto text-center"}>
                <span className={theme.text.P_STD}>{content.bodyText}
                </span>
            </p>
        
            <p className={'mt-10 text-center'}>
                <span className={theme.text.H4}>{content.subheading}</span>
            </p>
            </div>

            <div className={'md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 max-w-[1100px] mx-auto mt-6 lg:mt-12'}>
                {textBlocks}
            </div>
            </Container>
        </Section>
    )
}

export default IconTextBoxes


export const query = graphql`
  fragment IconTextBoxes on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_IconTextBoxes {
        fieldGroupName
        layoutIconTextBoxes {
          layoutContent {
            body
            boxes {
              body
              heading
              link {
                target
                title
                url
              }
              image {
                gatsbyImage
              }
            }
            heading
            settings {
              columns
              feature
              type
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
          }
        }
      }
  }
`