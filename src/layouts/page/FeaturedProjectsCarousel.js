import React, { useState } from "react"
import Link from "../../components/global/FlexibleLink"
import { Section, Container, BackgroundImage } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/pro-light-svg-icons'

const FeaturedProjectsCarousel = (props) => {
    const [slide, setSlide] = useState(0);

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
        <Section settings={false}>
            <Container>
                <div className={`lg:flex`}>
                    <div className={`w-full max-w-[712px] h-[734px] text-right bg-rm-carbon relative`}>
                        <h2 className={theme.text.H2 + `absolute top-6 right-4`}>{props.content.heading}</h2>
                        <BackgroundImage image={props.content.image} />
                    </div>
                    <div className={`flex w-full relative`}>
                        <h2 className={theme.text.H2 + `mt-6 ml-4`}>{props.content.heading}</h2>
                        <div className={`self-end w-full -ml-20`}>
                            <div className={`px-8 pt-7 pb-10 bg-white w-full max-w-[548px] md:px-12 md:pt-9 shadow-block`}>
                                <span></span>
                                <h3>{slides[slide].heading}</h3>
                                <div>
                                    <Link link={`/`} classes={theme.buttons.GHOST_STD}></Link>
                                </div>
                            </div>
                            <div className={`w-36 flex bg-rm-pale-grey`}>
                                <button className={`flex-1 px-5 py-3 text-40px`} onClick={prevSlide}>
                                   <FontAwesomeIcon icon={faAngleLeft} />
                                </button>
                                <button className={`flex-1 px-5 py-3 text-40px`} onClick={nextSlide}>
                                    <FontAwesomeIcon icon={faAngleRight} />
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