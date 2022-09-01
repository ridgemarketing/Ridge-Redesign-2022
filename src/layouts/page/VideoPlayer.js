import React from "react"
import { graphql } from "gatsby"

const VideoPlayer = () => {
    return (
      <div>
        <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
          <iframe
            src="https://player.vimeo.com/video/388871350?h=fce888ab40&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            title="BRPC Workcamp 2019">
          </iframe>
        </div>
        {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
      </div>
    )
}

export default VideoPlayer

export const pageQuery = graphql`
  fragment VideoPlayerPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_VideoPlayer {
        fieldGroupName
        layoutVideoPlayer {
          layoutContent {
            sideImage {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            videos {
              placeholder {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              source
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

export const serviceQuery = graphql`
  fragment VideoPlayerService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_VideoPlayer {
        fieldGroupName
        layoutVideoPlayer {
          layoutContent {
            sideImage {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            videos {
              placeholder {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              source
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

export const projectQuery = graphql`
  fragment VideoPlayerProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_VideoPlayer {
        fieldGroupName
        layoutVideoPlayer {
          layoutContent {
            sideImage {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            videos {
              placeholder {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              source
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