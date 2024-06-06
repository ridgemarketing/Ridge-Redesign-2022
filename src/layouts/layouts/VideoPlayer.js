import React, { useState } from "react"
import { graphql } from "gatsby"
import { Container, Section } from '../../components/global/Wrappers'
import { theme } from "../../static/theme"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Vimeo from '@u-wave/react-vimeo';

const VideoPlayer = (props) => {
  const content       = props.layoutData.layoutContent;
  const settings      = props.layoutData.layoutSettings;

  let videos          = content.videos;

  const [player, setPlayer] = useState(videos[0]);

  // const swapVideos = (video, index) => {
  //   const newThumbnail = player;
  //   videos.splice(index, 1);
  //   videos.push(newThumbnail);
  //   setPlayer(video);
  // }

  return (
    <Section settings={settings}>
      <Container>
        {content.heading &&
          <h2 className={`${theme.text.H2} text-center mb-8`}>{content.heading}</h2>
        }
        {player &&
          <div>
            <div className={`relative pt-[56.25%]`}>
              {player.placeholder &&
                <GatsbyImage className={`absolute top-0 left-0 w-full h-full object-cover`} image={getImage(player.placeholder.localFile)} />
              }
              <Vimeo
                video={player.source}
                muted={player.autoplay || false}
                responsive
                controls={!player.autoplay}
                autoplay={player.autoplay || false}
                loop={player.autoplay || false}
                className={`absolute top-0 left-0 w-full h-full object-cover`}
              />
                {player.caption&& 
                  <p className={`${theme.text['P_STD']} mt-4`}>{player.caption}</p>
                }
            </div>
          </div>
        } 
        {videos && videos.length > 1 &&
          <div className={`grid grid-cols-3 mt-4 xl:mt-9 -mx-2 xl:-mx-5`}>
            {videos.map((video, index) => {
                if (index < 3) {
                  return(
                    <div role={`button`} tabIndex={0} className={`relative pt-[56.25%] mx-2 xl:mx-5`} onClick={() => setPlayer(video)} onKeyDown={() => setPlayer(video)}>
                      {video.placeholder &&
                        <GatsbyImage className={`absolute top-0 left-0 w-full h-full object-cover`} image={getImage(video.placeholder.localFile)} />
                      }
                    </div>
                  )
                } else {
                  return false
                }
            })}
          </div>
        }
      </Container>
    </Section>
  )
}

export default VideoPlayer


export const pageQuery = graphql`
  fragment VideoPlayerPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_VideoPlayer {
        fieldGroupName
        layoutVideoPlayer {
          layoutContent {
            heading
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
              autoplay
              caption
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
            heading
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
              autoplay
              caption
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
            heading
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
              autoplay
              caption
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