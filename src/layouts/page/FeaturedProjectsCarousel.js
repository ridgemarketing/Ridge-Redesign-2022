// !!!!!!!!!!! 
// !!!!!!!!!!! 
// Nic/Aaron, dont accept the FA changes in merge 
// FA still accepting the Auth code again ಠ╭╮ಠ
import React, { useState } from "react"
import Link from "../../components/global/FlexibleLink"
import { Section, Container, BackgroundImage } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleLeft, faAngleRight } from '@fortawesome/pro-light-svg-icons'

const FeaturedProjectsCarousel = (props) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    console.log(content);
    const [slide, setSlide] = useState(0);

    let headingArr = content.heading.split(' ');

    const nextSlide = () => {
        let i = slide
        if (i === slides.length - 1) {
            setSlide(0)
        } else {
            setSlide(i + 1)
        }
    }

    const prevSlide = () => {
        let i = slide
        if (i === 0) { 
            setSlide(slides.length - 1)
        } else {
            setSlide(i - 1)
        }
    }

    const slides = [
        {
            heading: "Slide 1"
        },
        {
            heading: "Slide 2"
        },
        {
            heading: "Slide 3"
        }
    ];


    return (
        <Section settings={settings}>
            <Container>
                <div className={`relative lg:flex`}>
                    <div class="lg:hidden">
                        <h2 className={theme.text.H2 + `hidden lg:block lg:absolute lg:top-6 lg:right-4`}>{content.heading}</h2>
                    </div>
                    <div className={`flex-shrink-0 w-full max-w-[712px] h-[734px] text-right md:w-[calc(100%+(50vw-350px))] md:-ml-[calc(50vw-350px)] lg:w-[calc(100%+(50vw-465px))] lg:-ml-[calc(50vw-465px)] xl:w-full xl:ml-0 bg-rm-carbon relative`}>
                        <h2 className={theme.text.H2 + `hidden lg:block lg:absolute lg:top-6 lg:right-4`}>{headingArr[0]}</h2>
                        {/* <BackgroundImage image={props.content.image} /> */}
                    </div>
                    <div className={`absolute bottom-0 right-0 w-full lg:relative lg:flex`}>
                        <h2 className={theme.text.H2 + `hidden lg:block lg:absolute lg:mt-6 lg:ml-4`}>{headingArr[1]}</h2>
                        <div className={`self-end flex flex-col items-end w-full mx-auto lg:-ml-1/2 xl:-ml-20`}>
                            <div className={`px-8 pt-7 pb-10 bg-white w-full max-w-[548px] md:px-12 md:pt-9 shadow-block`}>
                                <span></span>
                                <h3>{slides[slide].heading}</h3>
                                <div>
                                    {/* <Link link={`/`} classes={theme.buttons.GHOST_STD}></Link> */}
                                </div>
                            </div> 
                            <div className={`w-36 flex bg-rm-pale-grey`}>
                                <button className={`flex-1 px-5 py-3 text-40px`} onClick={prevSlide}>
                                   {/* <FontAwesomeIcon icon={faAngleLeft} /> */}
                                </button>
                                <button className={`flex-1 px-5 py-3 text-40px`} onClick={nextSlide}>
                                    {/* <FontAwesomeIcon icon={faAngleRight} /> */}
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