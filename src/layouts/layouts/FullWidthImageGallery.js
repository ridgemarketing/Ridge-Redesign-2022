import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const FullWidthImageGallery = (props) => {
    const content = props.layoutData.layoutContent;
    const images  = content.images || [];

    return (
        <div className="w-full overflow-hidden">
            <Splide
                aria-label="Image gallery"
                extensions={ { AutoScroll } }
                options={{
                    type       : 'loop',
                    perPage    : 5,
                    perMove    : 1,
                    gap        : 0,
                    // autoplay   : true,
                    // interval   : 3000,
                    pauseOnHover: false,
                    pagination : false,
                    arrows     : false,
                    drag       : true,
                    breakpoints: {
                        1120: { perPage: 4 },
                        768: { perPage: 3 },
                        640 : { perPage: 2 },
                    },
                    autoScroll: {
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        rewind: true,
                        speed: 0.25,
                    }
                }}
            >
                {images.map((item, index) => {
                    const img = item.image;
                    if (!img) return null;
                    const gatsbyImg = img.localFile?.childImageSharp?.gatsbyImageData
                        ? getImage(img.localFile)
                        : null;
                    return (
                        <SplideSlide key={index}>
                            {gatsbyImg ? (
                                <GatsbyImage
                                    image={gatsbyImg}
                                    alt={img.altText || ''}
                                    className="w-full h-full min-h-[200px] lg:min-h-[460px]"
                                    objectFit="cover"
                                />
                            ) : (
                                <img
                                    src={img.sourceUrl}
                                    alt={img.altText || ''}
                                    className="w-full min-h-[200px] lg:min-h-[460px] object-cover"
                                />
                            )}
                        </SplideSlide>
                    );
                })}
            </Splide>
        </div>
    );
}

export default FullWidthImageGallery

const imageFragment = `
  image {
    altText
    sourceUrl
    localFile {
      childImageSharp {
        gatsbyImageData(
          quality: 90
          placeholder: DOMINANT_COLOR
          layout: FULL_WIDTH
        )
      }
    }
  }
`

export const pageQuery = graphql`
  fragment FullWidthImageGalleryPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_FullWidthImageGallery {
      fieldGroupName
      layoutFullWidthImageGallery {
        layoutContent {
          images {
            image {
              altText
              sourceUrl
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 90, placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
                }
              }
            }
          }
        }
        layoutSettings {
          anchorId
          backgroundColor
          classes
          id
          padding { bottom top }
        }
      }
    }
  }
`

export const serviceQuery = graphql`
  fragment FullWidthImageGalleryService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_FullWidthImageGallery {
      fieldGroupName
      layoutFullWidthImageGallery {
        layoutContent {
          images {
            image {
              altText
              sourceUrl
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 90, placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
                }
              }
            }
          }
        }
        layoutSettings {
          anchorId
          backgroundColor
          classes
          id
          padding { bottom top }
        }
      }
    }
  }
`

export const projectQuery = graphql`
  fragment FullWidthImageGalleryProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_FullWidthImageGallery {
      fieldGroupName
      layoutFullWidthImageGallery {
        layoutContent {
          images {
            image {
              altText
              sourceUrl
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 90, placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
                }
              }
            }
          }
        }
        layoutSettings {
          anchorId
          backgroundColor
          classes
          id
          padding { bottom top }
        }
      }
    }
  }
`

export const landerQuery = graphql`
  fragment FullWidthImageGalleryLander on WpLander_Flexiblelayouts_Layouts {
    ... on WpLander_Flexiblelayouts_Layouts_FullWidthImageGallery {
      fieldGroupName
      layoutFullWidthImageGallery {
        layoutContent {
          images {
            image {
              altText
              sourceUrl
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 90, placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
                }
              }
            }
          }
        }
        layoutSettings {
          anchorId
          backgroundColor
          classes
          id
          padding { bottom top }
        }
      }
    }
  }
`
