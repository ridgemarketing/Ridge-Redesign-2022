import React from "react" 
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import { content } from "../../../tailwind.config.js"

export const Quote_Loop = (props) =>{
    return(
        <>
            {content.quote &&
                <div className={ `frosted-glass p-8 lg:p-14 w-full` }>
                
                        <q className={ theme.text['Q'] }>
                            { content.quote.main }
                        </q>
                        <p className={ theme.text['P_BLD'] }>
                            { content.quote.name }
                        </p>
                        <small className={ theme.text['FOOTER'] }>
                            { content.quote.company }
                        </small>
    
                </div>
            }
        </>
    )
}

const Quote = ({ props }) => {

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
            heading: "Slide 1"
        },
        {
            heading: "Slide 2"
        },
        {
            heading: "Slide 3"
        }
    ];


    return(
        <Section Settings={ settings }>
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
                    <div className={` mt-12 flex w-full flex-wrap justify-between relative `}>
                       
                        <Quote_Loop/>
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
export default Quote