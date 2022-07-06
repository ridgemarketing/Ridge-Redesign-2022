import React, { useEffect, useState } from "react" 
import { graphql } from "gatsby"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import Parser from '../../components/global/Parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/pro-light-svg-icons'

const Quotes = (props) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const slides = content.quotes;
    const [slide, setSlide] = useState(0);
    const [data, setData] = useState(content.quotes[0]);

    const nextSlide = () => {
        if (slide === slides.length - 1) {
            setSlide(0)
            setData(slides[0])
        } else {
            setSlide(slide + 1);
            setData(slides[slide + 1])
        }
    }
    const prevSlide = () => {
        let i = (slide - 1) + slides.length;
        i = i % slides.length;
        setData(slides[i]);
        setSlide(i);
    }

    return(
        <Section settings={ settings }>
        <Container>
                {content.heading &&
                        <h2 className={ theme.text['H2'] }>
                            { content.heading }
                        </h2>
                }
                <div key={Math.random()} className={` mt-12 flex w-full flex-wrap justify-between relative animate-quote`}>
                    <div className={ `frosted-glass p-8 lg:p-14 w-full` }>
                            <p dangerouslySetInnerHTML={{__html: Parser(data.content)}} className={ theme.text['Q'] + slide.class + ' block transition-all ease-in-out' }></p>
                            <p className={ `${theme.text['P_BLD']} pt-8 pb-2` }>
                                { data.title }
                            </p>
                            <small className={ `${theme.text['FOOTER']} ` }>
                                { data.company }
                            </small>
                    </div>
                    <div className={`w-36 flex bg-rm-pale-grey`}>
                        <button className={`flex-1 px-5 py-3 text-40px`} onClick={() => prevSlide()}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                        <button className={`flex-1 px-5 py-3 text-40px`} onClick={() => nextSlide()}>
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
  fragment QuotesPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_Quotes {
        fieldGroupName
        layoutQuotes {
          layoutContent {
            heading
            quotes {
                ... on WpReview {
                  title
                  content
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