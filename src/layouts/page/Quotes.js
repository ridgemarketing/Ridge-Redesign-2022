import React, { useState } from "react" 
import { graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/pro-light-svg-icons'

// import { content } from "../../../tailwind.config.js"

// export const Quote_Loop = (props) =>{
//     return(
//         <>
//             <q className={ theme.text['Q'] + slides[slide].class + ' block transition-all ease-in-out' }>
//                 {slides[slide].heading}
//             </q>
//             <p className={ theme.text['P_BLD'] }>
//                 { content.quote.name }
//             </p>
//             <small className={ theme.text['FOOTER'] }>
//                 { content.quote.company }
//             </small>
//         </>

//     )
// }

const Quotes = (props) => {

    console.log("QUOTES")
    console.log(props)

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    
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
          heading: "We’re very pleased with the quality of work that Ridge Marketing provided in redesigning our website. They’ve exceeded our expectations and provided a dramatically improved user experience for our customers.",
          class:  'first-slide'
      },
      {
          heading: "Slide 2",
          class:  'second-slide'
      },
      {
          heading: "Slide 3",
          class:  'third-slide'
      }
    ];
        // let animationClass = `.`+ slide.class + ` {          
        //     animation-timing-function: ease-out;
        //     animation-duration: .75s;
        //     animation-name: ` + slide.class + ` ;
        // }`;
    
        // let animationKeyframes =`@keyframes ` +  slide.class + ` {
        //     0%        { 
        //         opacity: 0;
        //         transform: translateX(-25px);
        //     }
        //     25%       {
        //         opacity: 0;
        //     }
        //     100%      { 
        //         opacity: 1;
        //         transform: translateX(0px);
        //     }
        // }`;

    //will be content.slides.map or something along those lines 
    const styles = slides.map(slide => {
        let animations = `.${slide.class} {          
            animation-timing-function: ease-out;
            animation-duration: .75s;
            animation-name: ${slide.class} ;
        },
        @keyframes ${slide.class} {
            0%        { 
                opacity: 0;
                transform: translateX(-25px);
            }
            25%       {
                opacity: 0;
            }
            100%      { 
                opacity: 1;
                transform: translateX(0px);
            }
        }`;
        return animations;
    })


    return(
        <Section settings={ settings }>
            <Container>
                    {content.heading &&
                        <> 
                            <h2>
                                <span 
                                    className={ 
                                                theme.text['H2'] 
                                                + ' text-' + content.textColor 
                                                + ' text-' + content.textAlign
                                            }> 
                                    { content.heading }
                                </span>
                            </h2>
                        </>
                    }
                    <div className="hidden invisible" aria-hidden="true">
                        <style type="text/css">
                            {/* { animationClass }
                            { animationKeyframes } */}
                            {styles}
                        </style>
                    </div>
                    <div className={` mt-12 flex w-full flex-wrap justify-between relative `}>
                        <div className={ `frosted-glass p-8 lg:p-14 w-full` }>
                            {/* will be content.slides.map once accurately passing data */}
                           {slides.map(slide => {
                            return (
                                <>
                                {/* <p className={ theme.text['Q'] + slide.class + ' block transition-all ease-in-out' }>
                                    {slide.heading}
                                </p>
                                <p className={ theme.text['P_BLD'] }>
                                    { content.quote.name }
                                </p>
                                <small className={ theme.text['FOOTER'] }>
                                    { content.quote.company }
                                </small> */}
                            </>
                            )
                           })}
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
                    <div>
                        <span
                            aria-hidden="true" 
                            className={ 
                                theme.text['STATS'] + 
                                'text-rm-green absolute -z-10 '}>
                            “
                        </span>
                        <span
                            aria-hidden="true" 
                            className={ 
                                theme.text['STATS'] + 
                                'text-rm-green absolute -z-10 '}>
                            ”
                        </span>

                    </div>
            </Container>
        </Section>
    )
}
export default Quotes


export const query = graphql`
  fragment Quotes on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_Quotes {
        fieldGroupName
        layoutQuotes {
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