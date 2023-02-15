import React, { useState, useRef, useEffect} from "react"
import { Link } from "gatsby"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import { ArrowTallRightBlack } from "../../static/arrow-tall-right-black"
import { ArrowTallLeftBlack } from "../../static/arrow-tall-left-black"

const FeaturedProjectsCarousel = (props) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const slides = content.featuredProjects;
    let headingArr = content.heading.split(' ');
    const [slide, setSlide] = useState(0);
    const [data, setData] = useState(slides[0]);
    const [slideInteraction, setInteraction] = useState(false);
    //let dataTwo = slide + 1;

    const nextSlide = () => {
        let i = slide;
        //dataTwo = slide + 1;
        if (i === slides.length - 1) {
            setSlide(0);
            setData(slides[slide]);
        } else {
            setSlide(i + 1);
            setData(slides[slide]);
        }
    }

    const prevSlide = () => {
        let i = slide
        if (i === 0) { 
            setSlide(slides.length - 1);
            setData(slides[slide]);            
        } else {
            setSlide(i - 1);
            setData(slides[slide]);
        }
    }
    const handleClick = (next) => {
      setInteraction(true);
      (next) ? nextSlide() : prevSlide();
      return;
    }

    function useIsVisible(ref) {
      const [isIntersecting, setIntersecting] = useState(false);
    
      useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
          setIntersecting(entry.isIntersecting)
        );
    
        observer.observe(ref.current);
        return () => {
          observer.disconnect();
        };
      }, [ref]);
    
      return isIntersecting;
    }

    const carouselRef = useRef();
    const isVisible = useIsVisible(carouselRef);

    useEffect(() => {
      const interval = setInterval(() => {
        if (isVisible && !slideInteraction) nextSlide();
      }, 6000);
    
      return () => clearInterval(interval);
    });

    // dataTwo = dataTwo - slide;
    // if(dataTwo > slides.length -1){
    //   dataTwo = 0;
    // }
    // console.log( slide, dataTwo,);

    // const css = `
    //   .homeSlider{
    //     background: linear-gradient(to top right, rgba(255,255,255,0), 50%, white),
    //     url("${data.project.projectInformation.images.carouselFeature.publicUrl}");
    //   }
    //   .homeSlider-2{
    //     background: linear-gradient(to bottom left, rgba(255,255,255,0), 50%, white),
    //     url("${slides[dataTwo].project.projectInformation.images.carouselFeature.publicUrl}");
    //   }
    // `;

    return (
        <Section settings={settings}>
            <Container container={'none'} classes={'md:container xl:max-w-[1120px] relative'}>
                <div className={`relative lg:flex`}>
                    <div className={`lg:hidden`}>
                        <h2 className={theme.text.H2 + `hidden lg:block lg:absolute lg:top-6 lg:right-4`}>{content.heading}</h2>
                    </div>
                    <div className={`flex-shrink-0 w-full max-w-[680px] 2xl:max-w-[712px] h-[734px] text-right md:w-[calc(100%+(50vw-350px))] md:-ml-[calc(50vw-350px)] lg:w-[calc(100%+(50vw-465px))] lg:-ml-[calc(50vw-465px)] xl:w-full xl:ml-0 bg-rm-black relative`}>
                        <h2 className={theme.text.H2 + `z-20 text-white hidden lg:block lg:absolute lg:top-6 lg:right-4`}>{headingArr[0]}</h2>
                        {data.project.projectInformation.images.carouselFeature && 
                          <>
                          {/* <style>{css}</style> */}
                          <div ref={carouselRef} className="homeSlider absolute overflow-hidden w-full h-full">
                              {/* <div className="homeSlider absolute overflow-hidden w-full h-full"></div>
                              <div className="homeSlider-2 absolute overflow-hidden w-full h-full"></div> */}
                             <GatsbyImage 
                                fadeIn={false}
                                durationFadeIn={0}
                                image={data.project.projectInformation.images.carouselFeature.localFile.childImageSharp.gatsbyImageData} 
                                alt={ ' ' } 
                                className={ `` } 
                                objectFit={'contain'}/>
                            {/*
                            <GatsbyImage
                                image={slides[dataTwo].project.projectInformation.images.carouselFeature.localFile.childImageSharp.gatsbyImageData} 
                                alt={ ' ' } 
                                className={ `absolute top-0 left-0 translate-x-11 homeSlider-` } 
                                objectFit={'contain'}/>  */}
                          </div>
                          </>
                        }
                    </div>
                    <div className={`absolute bottom-0 right-0 w-full lg:relative md:flex`}>
                        <h2 className={theme.text.H2 + `text-black hidden lg:block lg:absolute lg:mt-6 lg:ml-4`}>{headingArr[1]}</h2>
                        <div className={`self-end flex flex-col w-full mx-auto md:w-auto md:ml-auto md:mr-0 lg:-ml-[50%] xl:-ml-36 max-w-[360px] md:max-w-[none]`}>
                            <div className={`px-8 pt-7 pb-10 bg-white w-full md:max-w-[548px] md:px-12 md:pt-9 shadow-block`}>
                                <span></span>
                                <h3 className={`${theme.text.P_STD}`}>{data.project.title}</h3>
                                <h5 className={`font-stratos uppercase font-bold text-[32px] md:text-40px leading-44px  `}>{data.caption}</h5>
                                <div className={'mt-6'}>
                                    <Link className={`${theme.button.BASE_STYLING} ${theme.button.GHOST_GREEN_HOVER_DARK}`} to={data.project.link}>View Project</Link>
                                </div>
                            </div> 
                            <div className={`w-36 flex bg-rm-pale-grey`}>
                                <button className={`flex-1 px-5 py-3 text-40px`} onClick={() => handleClick(false)}>
                                   <ArrowTallLeftBlack/>
                                </button>
                                <button className={`flex-1 px-5 py-3 text-40px`} onClick={() => handleClick(true)}>
                                  <ArrowTallRightBlack/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default FeaturedProjectsCarousel


export const query = graphql`
  fragment FeaturedProjectsCarouselPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_FeaturedProjectsCarousel {
        fieldGroupName
        layoutFeaturedProjectsCarousel {
          layoutContent {
            heading
            featuredProjects {
                caption
                project {
                    ... on WpProject {
                      id
                      title
                      link
                      projectInformation {
                        images {
                          carouselFeature {
                            publicUrl
                            localFile {
                              childImageSharp {
                                gatsbyImageData
                              }
                            }
                          }
                        }
                      }
                    }
              }
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
  fragment FeaturedProjectsCarouselService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_FeaturedProjectsCarousel {
        fieldGroupName
        layoutFeaturedProjectsCarousel {
          layoutContent {
            heading
            featuredProjects {
                caption
                project {
                    ... on WpProject {
                      id
                      title
                      link
                      projectInformation {
                        images {
                          carouselFeature {
                            localFile {
                              childImageSharp {
                                gatsbyImageData
                              }
                            }
                          }
                        }
                      }
                    }
              }
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
  fragment FeaturedProjectsCarouselProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_FeaturedProjectsCarousel {
        fieldGroupName
        layoutFeaturedProjectsCarousel {
          layoutContent {
            heading
            featuredProjects {
                caption
                project {
                    ... on WpProject {
                      id
                      title
                      link
                      projectInformation {
                        images {
                          carouselFeature {
                            localFile {
                              childImageSharp {
                                gatsbyImageData
                              }
                            }
                          }
                        }
                      }
                    }
              }
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