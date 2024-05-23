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
  // const columns = (content.columns === 2) ? `lg:w-[calc(50%-5rem)]` : `lg:w-[calc(33%-4rem)]`;
  const columns = (content.columns === 1) ? `mt-14 block` : `lg:grid grid-cols-${content.columns} gap-x-6  mt-14`;
    return(
      <Section settings={settings}>
        <Container>
          {content.heading &&
            <h2 className={`text-${content.text_align} ${theme.text.H2}`}>{content.heading}</h2>
          }
          {media && mediaExists &&
            <div className={columns}> 
            {/* <div className={`lg:flex flex-wrap items-center lg:-mx-10 mt-14`}> */}
              {media.map((block, index) => {
                return (
                  <div className={`w-full mb-20`}>
                    <FlexibleMedia key={`MediaBlocksItem__${index}`} paddingRatio={content.ratio} data={block.componentFlexibleMedia} />
                    {block.heading&& 
                      <p className={`${theme.text['P_STD']} mt-4`}>{block.heading}</p>
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
                heading
                videoSource
                video {
                  videoUrl
                  thumbnailImage {
                    sourceUrl
                    localFile {
                      ext
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
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
            textAlign
            heading
            ratio
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
                videoSource
                video {
                  videoUrl
                  thumbnailImage {
                    sourceUrl
                    localFile {
                      ext
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
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
            textAlign
            heading
            ratio
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
                videoSource
                video {
                  videoUrl
                  thumbnailImage {
                    sourceUrl
                    localFile {
                      ext
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
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
            textAlign
            heading
            ratio
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