import React from "react"
import { graphql } from "gatsby"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import FlexibleMedia from "../../components/global/FlexibleMedia"

const MediaBlocks = (props) => {
  const content   = props.layoutData.layoutContent;
  const settings  = props.layoutData.layoutSettings;

  const media     = content.blocks
  const mediaExists = media && (media[0].componentFlexibleMedia.image || media[0].componentFlexibleMedia.video.videoUrl);
  console.log(media);
    return(
      <Section settings={settings}>
        <Container>
          {content.heading &&
            <h2 className={`text-center ${theme.text.H2}`}>{content.heading}</h2>
          }
          {media && mediaExists &&
            <div className={`lg:flex flex-wrap items-center lg:-mx-10 mt-14`}>
              {media.map(block => {
                return (
                  <div className={`lg:w-[calc(50%-5rem)] mb-20 lg:mx-10`}>
                    <FlexibleMedia data={block.componentFlexibleMedia} />
                  </div>
                )
              })}
            </div>
          }
        </Container>
      </Section>
    )
}

export default MediaBlocks

export const query = graphql`
  fragment MediaBlocksPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_MediaBlocks {
        fieldGroupName
        layoutMediaBlocks {
          layoutContent {
            blocks {
              heading
              componentFlexibleMedia {
                lottie
                type
                video {
                  videoUrl
                  thumbnailImage {
                    publicUrl
                  }
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
            columns
            heading
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
export const serviceQuery = graphql`
  fragment MediaBlocksService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_MediaBlocks {
        fieldGroupName
        layoutMediaBlocks {
          layoutContent {
            blocks {
              heading
              componentFlexibleMedia {
                lottie
                type
                video {
                  videoUrl
                  thumbnailImage {
                    publicUrl
                  }
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
            columns
            heading
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

export const projectQuery = graphql`
  fragment MediaBlocksProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_MediaBlocks {
        fieldGroupName
        layoutMediaBlocks {
          layoutContent {
            blocks {
              heading
              componentFlexibleMedia {
                lottie
                type
                video {
                  videoUrl
                  thumbnailImage {
                    publicUrl
                  }
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
            columns
            heading
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