// !!!!!!!!!!! 
// !!!!!!!!!!! 
// Nic/Aaron, dont accept the FA changes in merge 
// FA still accepting the Auth code again ಠ╭╮ಠ
import React, { useState, useRef, useEffect } from "react" 
import { graphql } from "gatsby"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import Parser from '../../components/global/Parser';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleLeft, faAngleRight } from '@fortawesome/pro-light-svg-icons'

const Quotes = (props) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const slides = content.quotes;
    const [slide, setSlide] = useState(0);
    const [data, setData] = useState(content.quotes[0]);

    const nextSlide = () => {
        let i = (slide === slides.length - 1) ? 0 : slide + 1;
        setSlide(i);
        setData(slides[i]);
    }
    const prevSlide = () => {
        let i = (slide - 1 + slides.length) % slides.length;
        setData(slides[i]);
        setSlide(i);
    }

    const parallaxContainer  = useRef(null);
    const quoteLeft          = useRef(null);
    const quoteRight         = useRef(null);
    let topLeft              = 75;
    let topRight             = 125;
    let topCounter           = 0.65;

    if(window.innerWidth < 769){
      topCounter  = 0.35;
      topLeft     = 50;
      topRight    = 75;
      
    }

    useEffect(() => {
      let prevDirection = `0`;
      function inView(entry){

        if (window.pageYOffset > prevDirection){
          topLeft   = topLeft - topCounter;
          topRight  = topRight + topCounter; 
          quoteLeft.current.style.top   = topLeft + '%';
          quoteRight.current.style.top  = topRight + '%';
        }
        if (window.pageYOffset < prevDirection){
          topLeft   = topLeft + topCounter;
          topRight  = topRight - topCounter; 
          quoteLeft.current.style.top   = topLeft + '%';
          quoteRight.current.style.top  = topRight + '%';
        }
        prevDirection = window.pageYOffset;
      }

      let observer = new IntersectionObserver( (entries) => {
        entries.forEach ( entry => {
          if( entry.isIntersecting ){
            window.addEventListener('scroll', inView, true);
            console.log(entry.isIntersecting);
          }else{
            window.removeEventListener('scroll', inView, true);
            console.log(entry.isIntersecting);
          }
        })
      })
      observer.observe(parallaxContainer.current);
    }, [])

    //classes={`bg-[url('https://rm2022dev.wpengine.com/wp-content/uploads/2022/07/Group-24.png')] bg-cover bg-[center_50%]`}
    return(
      <div ref={parallaxContainer} className={`block `}>
        <Section classes="overflow-hidden" settings={ settings } ref={parallaxContainer}>
          <Container>
            {content.heading &&
              <h2 className={ theme.text['H2'] }>
                  { content.heading }
              </h2>
            }
            <div className={` mt-12 flex w-full flex-wrap justify-between relative`}>
                <div className={ `frosted-glass p-8 lg:p-14 w-full` }>
                  <div key={Math.random()} className={`animate-quote`}>
                    <p dangerouslySetInnerHTML={{__html: Parser(data.content)}} className={ theme.text['Q'] + slide.class + ' block transition-all ease-in-out' }></p>
                    <p className={ theme.text.P_BLD +  `pt-8 pb-2` }>
                        { data.title }
                    </p>
                    <small className={ theme.text.FOOTER  }>
                        { data.reviewsFields.titleCompany }
                    </small>
                  </div>
                </div>
                <div className={`w-[175px] flex bg-rm-pale-grey lg:ml-10`}>
                    <button className={`flex-1 px-5 py-3 text-40px`} onClick={() => prevSlide()}>
                        {/* <FontAwesomeIcon icon={faAngleLeft} /> */}
                    </button>
                    <span className={ theme.text.FOOTER + 'flex items-center font-basic-sans'}> {slide + 1} / {slides.length}</span>
                    <button className={`flex-1 px-5 py-3 text-40px`} onClick={() => nextSlide()}>
                        {/* <FontAwesomeIcon icon={faAngleRight} /> */}
                    </button>
                </div>
            </div> 
          </Container>
            <span ref={quoteLeft}  aria-hidden="true" className={`${theme.text.STATS} transition-all ease-out duration-1000 text-rm-green opacity-20 absolute scale-[7] lg:scale-[10] top-[50%] lg:top-[75%] left-[30%] lg:left-[20%] -z-10`}> “</span>
            <span ref={quoteRight} aria-hidden="true" className={`${theme.text.STATS} transition-all ease-out duration-1000 text-rm-green opacity-20 absolute scale-[7] lg:scale-[10] top-[75%] lg:top-[125%] right-[30%] lg:right-[20%] -z-10`}>” </span>
        </Section>
      </div>
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
                  reviewsFields {
                    titleCompany
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
  fragment QuotesService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_Quotes {
        fieldGroupName
        layoutQuotes {
          layoutContent {
            heading
            quotes {
                ... on WpReview {
                  title
                  content
                  reviewsFields {
                    titleCompany
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