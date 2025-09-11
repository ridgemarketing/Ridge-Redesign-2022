import React from "react"
import { graphql } from "gatsby"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { GatsbyImage } from 'gatsby-plugin-image'
import Parser from "../../components/global/Parser"

const ImagesTopAlignedText = (props) => {
    const content   = props.layoutData.layoutContent || {};
    const settings  = props.layoutData.layoutSettings || {};

    return(
        <Section settings={settings}>
            <Container container={settings.containerWidth}>
                {content?.heading && 
                    <h2 dangerouslySetInnerHTML={{__html: Parser(content.heading)}} className={`${theme.text.H2} max-w-[1120px] mx-auto`}></h2>
                }
                {content?.images && 
                    <div className="max-w-[1120px] mx-auto mt-7 flex flex-col gap-20">
                        {content.images?.map((image) => {
                            const headingSize =  image.headingSize !== 'heading' ? `${theme.text.P_BLD}` : `${theme.text.H2}`
                            return(
                                <div className="relative">
                                    {image.image.localFile.ext !== '.svg' &&
                                        <GatsbyImage 
                                            image       ={image.image.localFile.childImageSharp.gatsbyImageData} 
                                            alt         ={image.image.alt}
                                            className   ={``}
                                        />
                                    }
                                    { (image.text || image.body) &&
                                        <section className=" mt-6 lg:mt-0 lg:absolute top-0 right-0 lg:max-w-[285px] xl:max-w-[350px]">
                                            {image.text &&
                                                <h3 className={`${headingSize} mb-6`}>{image.text}</h3>
                                            }
                                            {image.body &&
                                                <p className={`${theme.text.P_STD}`}>{image.body}</p>
                                            }
                                        </section>
                                    }
                                </div>
                            )
                        })}
                    </div>
                }
            </Container>
        </Section>
    )
}

export default ImagesTopAlignedText

export const projectQuery = graphql`
  fragment ImagesTopAlignedTextProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_ImagesTopAlignedText {
        fieldGroupName
        layoutImagesTopAlignedText {
          layoutContent {
            heading
            images {
                image {
                    localFile {
                        ext
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                    altText
                }
                text
                headingSize
                body
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