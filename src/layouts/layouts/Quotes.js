import React, { useState, useRef, useEffect } from "react" 
import { graphql } from "gatsby"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers'
import Parser from '../../components/global/Parser';
import { ArrowTallLeftBlack } from "../../static/arrow-tall-left-black.js";
import { ArrowTallRightBlack } from "../../static/arrow-tall-right-black.js";

const Quotes = (props) => {
  
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const slides = content.quotes ? content.quotes : [];
    const [slide, setSlide] = useState(0);
    const [data, setData] = useState(content.quotes[0]);
    const [slideInteraction, setInteraction] = useState(false);

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

    const sliderRef = useRef();
    const isVisible = useIsVisible(sliderRef);

    useEffect(() => {
      const interval = setInterval(() => {
        if (isVisible && !slideInteraction) nextSlide();
      }, 6000);
    
      return () => clearInterval(interval);
    });

    const parallaxContainer  = useRef(null);
    const quoteLeft          = useRef(null);
    const quoteRight         = useRef(null);

    const quoteFunc = () => {
      if(slides.length > 0){

      let topLeft              = 75;
      let topRight             = 125;
      let topCounter           = 0.65;
      let prevDirection = `0`;

      if(window.innerWidth < 1024){
        topCounter  = 0.35;
        topLeft     = 50;
        topRight    = 75;
        
      }
      function inView(){
        if (quoteLeft.current !== null && quoteRight.current !== null) {
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
        }
        prevDirection = window.pageYOffset;
      }

      function throttleinView(){
        inView();
      }

      function reset(){
        if (quoteLeft.current !== null && quoteRight.current !== null) {
          if(window.innerWidth < 1024){
            topLeft                       = 50;
            topRight                      = 75;
            quoteLeft.current.style.top   = `${topLeft}%`;
            quoteRight.current.style.top  = `${topRight}%`;
          }else{
            topLeft                       = 75;
            topRight                      = 125;
            quoteLeft.current.style.top   = `${topLeft}%`;
            quoteRight.current.style.top  = `${topRight}%`;
          }
        }
      }

        let observer = new IntersectionObserver( (entries) => {
          entries.forEach ( entry => {
            if( entry.isIntersecting ){
              window.addEventListener('scroll',  throttleinView, {passive: true});
            }else{
              reset();
              window.removeEventListener('scroll',  throttleinView, {passive: true});
            }
          })
        })
        observer.observe(parallaxContainer.current);
      }
    }

    const dataFetchedRef = useRef(false);
    useEffect(() => {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
      quoteFunc();
    }, [])

    let arrows = false;
    if(slides.length > 1){
      arrows = true;
    }
    return(
      <div ref={parallaxContainer} className={`block `}>
        <Section classes="overflow-hidden" settings={ settings }>
          <Container container={settings.containerWidth}>
            {content.heading &&
              <h2 className={ theme.text['H2'] }>
                  { content.heading }
              </h2>
            }
            <div ref={sliderRef} className={` mt-12 flex w-full flex-wrap justify-between relative`}>
                <div className={ `frosted-glass p-8 lg:p-14 w-full` }>
                  <div key={Math.random()} className={`animate-quote`}>
                    <div dangerouslySetInnerHTML={{__html: Parser(data.content)}} className={ theme.text['Q'] + slide.class + ' block transition-all ease-in-out' }></div>
                    <p className={ theme.text.P_BLD +  `pt-8 pb-2` }>
                        { data.title }
                    </p>
                    <small className={ theme.text.FOOTER  }>
                        { data.reviewsFields.titleCompany }
                    </small>
                  </div>
                </div>
                {arrows &&
                <div className={`w-[175px] flex bg-rm-pale-grey lg:ml-10`}>
                    <button className={`flex-1 px-5 py-3 text-40px`} onClick={() => handleClick(false)}>
                        <ArrowTallLeftBlack/>
                    </button>
                    <span className={ theme.text.FOOTER + 'flex items-center font-basic-sans'}> {slide + 1} / {slides.length}</span>
                    <button className={`flex-1 px-5 py-3 text-40px`} onClick={() => handleClick(true)}>
                        <ArrowTallRightBlack/>
                    </button>
                </div>
                }
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
            containerWidth
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
            containerWidth
          }
        }
      }
  }
`

export const projectQuery = graphql`
  fragment QuotesProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_Quotes {
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
            containerWidth
          }
        }
      }
  }
`

export const landerQuery = graphql`
  fragment QuotesLander on WpLander_Flexiblelayouts_Layouts {
    ... on WpLander_Flexiblelayouts_Layouts_Quotes {
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
            containerWidth
          }
        }
      }
  }
`