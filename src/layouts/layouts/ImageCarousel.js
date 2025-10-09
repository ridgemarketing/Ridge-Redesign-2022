import React from "react" 
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers'
import Buttons from '../../components/global/Buttons'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Parser from "../../components/global/Parser"



const ImageCarousel = props => {

  const settings      = props.layoutData.layoutSettings;
  const content       = props.layoutData.layoutContent;
  const heading       = content.heading;
  const body          = content.body;
  const slides        = content.slides;
  const buttons       = content.componentButtonGroup;
  const arrowStyle    = content.arrowstyle;

    return(
        <Section settings={ settings }>
            <Container>
                {heading &&
                    <h2 className={`${theme.text['H2']} text-center`} dangerouslySetInnerHTML={{__html: Parser(heading)}}></h2>
                }
                {body &&
                    <p className={`${theme.text.P_STD} text-center my-4`} dangerouslySetInnerHTML={{__html: body}}></p>
                }
                  <div className={`mt-10 px-6 lg:px-10`}>
                  <Splide
                    className={``}
                    aria-label={`${heading} slider`}
                    hasTrack={ false }
                    options={ {
                      type        : `loop`,
                      perPage     : 4,
                      perMove     : 1,
                      gap         : `1.5rem`,
                      pagination  : false,
                      lazyLoad    : false,
                      breakpoints: {
                        640: {
                          perPage: 1,
                        },
                        1000: {
                          perPage: 3,
                        }
                      }
                    } }
                    >
                        <SplideTrack>
                        {slides.map((slide, index) => {
                          const image = (slide.image.localFile.ext === ".svg") 
                            ? <img className="w-full object-contain" src={slide.image.sourceUrl} alt={slide.image.altText}/>
                            : <GatsbyImage className="w-full" objectFit="contain" image={slide.image.localFile.childImageSharp.gatsbyImageData} alt={slide.image.altText} loading="eager" />;

                          return (
                            <SplideSlide key={slide.image.sourceUrl}>
                              {slide.url ? (
                                <a href={slide.url}>
                                  {image}
                                </a>
                              ) : (
                                image
                              )}
                            </SplideSlide>
                          );
                        })}

                        </SplideTrack>
                        <div className="splide__arrows">
                          {/* Prev Arrow */}
                          <button className="splide__arrow splide__arrow--prev !h-auto !w-4 lg:!h-24 lg:!w-14 !max-w-none !max-h-none !bg-transparent !-left-6 lg:!-left-20">
                            {arrowStyle === 'teal' ? (
                              <svg width="32" height="58" viewBox="0 0 32 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                                <path
                                  opacity="0.7"
                                  d="M1.41856 57.5129L0.494846 56.6036C-0.164948 55.9541 -0.164948 55.0448 0.494846 54.3953L26.2268 28.9351L0.494846 3.6047C-0.164948 2.95521 -0.164948 2.04591 0.494846 1.39642L1.41856 0.487122C2.07835 -0.162374 3.00206 -0.162374 3.66186 0.487122L31.5052 27.8959C32.1649 28.5454 32.1649 29.4546 31.5052 30.1041L3.66186 57.5129C3.00206 58.1624 2.07835 58.1624 1.41856 57.5129Z"
                                  fill="#24B6BF"
                                />
                              </svg>
                            ) : (
                              <svg width="56" height="98" viewBox="0 0 56 98" fill="none" xmlns="http://www.w3.org/2000/svg" className={`!transform-none !h-auto !w-full`}>
                                <g clipPath="url(#clip0_6369_11245)">
                                  <path d="M2.04922 53.9431C-0.684616 51.2097 -0.684615 46.7705 2.04923 44.0371L44.041 2.05112C46.7749 -0.682336 51.2146 -0.682335 53.9485 2.05112C56.6823 4.78458 56.6823 9.22372 53.9485 11.9572L16.8994 49.001L53.9288 86.0449C56.6626 88.7783 56.6626 93.2153 53.9288 95.9487C51.1949 98.6822 46.7552 98.6822 44.0213 95.9487L2.02954 53.9628L2.05141 53.9409L2.04922 53.9431Z" fill="#474848"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0_6369_11245">
                                    <rect width="56" height="98" fill="white" transform="translate(56 98) rotate(-180)"/>
                                  </clipPath>
                                </defs>
                              </svg>
                            )}
                          </button>

                          {/* Next Arrow */}
                          <button className="splide__arrow splide__arrow--next !h-auto !w-4 lg:!h-24 lg:!w-14 !max-w-none !max-h-none !bg-transparent !-right-6 lg:!-right-20">
                            {arrowStyle === 'teal' ? (
                              <svg width="64" height="116" viewBox="0 0 32 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  opacity="0.7"
                                  d="M1.41856 57.5129L0.494846 56.6036C-0.164948 55.9541 -0.164948 55.0448 0.494846 54.3953L26.2268 28.9351L0.494846 3.6047C-0.164948 2.95521 -0.164948 2.04591 0.494846 1.39642L1.41856 0.487122C2.07835 -0.162374 3.00206 -0.162374 3.66186 0.487122L31.5052 27.8959C32.1649 28.5454 32.1649 29.4546 31.5052 30.1041L3.66186 57.5129C3.00206 58.1624 2.07835 58.1624 1.41856 57.5129Z"
                                  fill="#24B6BF"
                                />
                              </svg>
                            ) : (
                              <svg width="56" height="98" viewBox="0 0 56 98" fill="none" xmlns="http://www.w3.org/2000/svg" className={`!h-auto !w-full`}>
                                <g clipPath="url(#clip0_6369_11243)">
                                  <path d="M53.9507 44.0569C56.6846 46.7903 56.6846 51.2295 53.9507 53.9629L11.9589 95.9489C9.22508 98.6823 4.78532 98.6823 2.05148 95.9489C-0.682362 93.2154 -0.682362 88.7763 2.05148 86.0428L39.1005 48.999L2.07116 11.9551C-0.662678 9.22167 -0.662678 4.78471 2.07116 2.05125C4.805 -0.682205 9.24476 -0.682205 11.9786 2.05125L53.9704 44.0372L53.9485 44.0591L53.9507 44.0569Z" fill="#474848"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0_6369_11243">
                                    <rect width="56" height="98" fill="white"/>
                                  </clipPath>
                                </defs>
                              </svg>
                            )}
                          </button>
                        </div>

                    </Splide>
                  </div>
                  {buttons && buttons.length > 0 &&
                  <div className='flex flex-wrap justify-center gap-4 my-12'>
                    {buttons.map((button, index) => (
                      button.componentButton && button.componentButton.link &&
                      <Buttons 
                        key={index}
                        content={button.componentButton} 
                        sectionBackground={settings.backgroundColor}/>
                    ))}
                  </div>
                }
            </Container>
        </Section>
    )
}
export default ImageCarousel


export const query = graphql`
  fragment ImageCarouselPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_ImageCarousel {
        fieldGroupName
        layoutImageCarousel {
          layoutContent {
            componentButtonGroup {
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
            }
            heading
            arrowstyle
            slides {
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                  ext
                }
                sourceUrl
              }
              url
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
  fragment ImageCarouselService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_ImageCarousel {
        fieldGroupName
        layoutImageCarousel {
          layoutContent {
            componentButtonGroup {
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
            }
            heading
            arrowstyle
            slides {
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                  ext
                }
                sourceUrl
              }
              url
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
  fragment ImageCarouselProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_ImageCarousel {
        fieldGroupName
        layoutImageCarousel {
          layoutContent {
            componentButtonGroup {
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
            }
            heading
            arrowstyle
            slides {
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                  ext
                }
                sourceUrl
              }
              url
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

export const landerQuery = graphql`
  fragment ImageCarouselLander on WpLander_Flexiblelayouts_Layouts {
    ... on WpLander_Flexiblelayouts_Layouts_ImageCarousel {
        fieldGroupName
        layoutImageCarousel {
          layoutContent {
            componentButtonGroup {
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
            }
            heading
            arrowstyle
            slides {
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                  ext
                }
                sourceUrl
              }
              url
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