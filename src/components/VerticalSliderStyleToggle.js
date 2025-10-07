import React, { useRef, useEffect, useState } from "react"
import { graphql } from "gatsby"
import { theme } from '../static/theme.js'
import { Container, Section } from './global/Wrappers.js'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const VerticalSlider = (props) => {

  const content               = props.layoutData.layoutContent;
  const settings              = props.layoutData.layoutSettings;

  const textColor             = settings.backgroundColor === 'black' ? 'text-rm-white' : 'text-rm-black'; 
  const backgroundColor       = settings.backgroundColor === 'black' ? 'bg-rm-black' : 'bg-rm-white';

  const [vslide, setVslide]   = useState(0);
  const firstSlide            = useRef(null);
  const otherSlides           = useRef([]);
  const progressBar           = useRef([]);
  const outerContainer        = useRef(null);
  const innerContainer        = useRef(null);
  let slideHeight             = 550;
  let totalHeight             = 0;
  let scrollPoints            = [];

  const vslides               = content.slides;
  const flipOrientation       = content.styletoggle ? "md:flex-row-reverse" : "md:flex-row";

  
  useEffect(() => {

    if (vslides.length > 0) {
      for (let i = 0; vslides.length > i; i++){
        scrollPoints.push(totalHeight);
        totalHeight = totalHeight + slideHeight;
      }
    }

    if(firstSlide && firstSlide.current && firstSlide.current !== null){
      let current = 0;
      let observer = new IntersectionObserver( (entries) => {
          entries.forEach ( (entry) => {

              //if screen loads past the vslider
              if (entry.boundingClientRect.top < (-1 * totalHeight)) {
                setVslide(vslides.length - 1)
              }
              
              if( entry.isIntersecting ){
                
                if(firstSlide.current.offsetTop < totalHeight ){
    
                  onscroll = () => {
                    for( let i = 0; scrollPoints.length > i; i++ ){
                      if ( firstSlide.current.offsetTop > scrollPoints[i] ){

                        //console.log('greater than', scrollPoints[i], firstSlide.current.offsetTop, totalHeight, i);

                        setVslide(i);
                        current = i;
    
                        progressBar.current[i].style.height = 200 / ( vslides.length  + 1 ) + '%';
                        progressBar.current[i].style.backgroundColor = '#FFFFFF';
                        progressBar.current[i].children[0].style.backgroundColor = '#A9CF38';
                        progressBar.current[i].children[0].style.height = ( ( firstSlide.current.offsetTop - scrollPoints[i] ) / slideHeight ) * 100 + '%';
                        progressBar.current[i].parentElement.setAttribute('aria-valuenow', Math.round( (firstSlide.current.offsetTop / totalHeight) * 100 ) );
                      }
                    }
                    for( let z = 0; scrollPoints.length > z; z++){
                      if( z === current ){}else{
                        progressBar.current[z].style.height = 100 / ( vslides.length  + 1 ) + '%';
                        progressBar.current[z].children[0].style.backgroundColor = '#FFFFFF';
                        progressBar.current[z].style.backgroundColor = '#FFFFFF';
                      }
                    }
                  }
                }
                //observer.unobserve(innerContainer.current);
              }

            }) 
          },
        {
          threshold: [0.1, 1]
        }
      );
      observer.observe(innerContainer.current);
    }
  }, [])
 
    const offSetTop =  firstSlide.current ?  firstSlide.current.offsetTop : 0
    const skipTo = (location) => {
      window.scrollBy(0, (scrollPoints[location] + slideHeight) - offSetTop );
    }

    return(
      <>
        <Section settings={ settings }>
            <Container>
                {content.heading &&
                  <h2 className={`${content.styletoggle ? 'font-stratos uppercase font-light text-40px leading-44px' : theme.text.H1_STD} text-center mb-9 ${textColor}`}> 
                    { content.heading }
                  </h2>
                }
                {content.body &&
                  <p className={`${theme.text.P_STD} text-center ${textColor} x`}>
                    { content.body }  
                  </p>
                }
            </Container>
        </Section>    
        <div ref={outerContainer} className={`${backgroundColor} ${textColor} w-full block`} style={ {marginTop:'-' + slideHeight/2 + 'px'} }>
          <div className={ `block invisible` } style={ { height:slideHeight + 'px' } } aria-hidden="true"></div>
          
          <div ref={innerContainer} className={ `container flex-wrap relative`} style={{height:"inherit"}}>
            <div ref={firstSlide} className={`flex flex-col ml-auto mr-auto w-[95%] md:flex-row  md:w-full items-center sticky -translate-y-1/2 top-[50%]`} style={ { height : slideHeight } }>
              <div className="flex flex-col items-center h-[75%] w-[7px] md:mr-[5rem] lg:mr-[6rem] md:mt-12">
                
                <div role={`progressbar`} aria-valuenow={0} aria-labelledby={`slides-main`} className={`h-[100%] w-[7px]`}>
                  { vslides.map( (key, index)  => (
                      <div ref={ el => progressBar.current[ index ] = el } aria-label={`go to slide ${index}`} role={`button`} tabIndex={0} className="w-[5px] cursor-pointer overflow-hidden border-b-8 last:border-b-0 border-rm-black bg-rm-white transition-all ease-out"  key={ 'slides' + index } style={ { height: 100 / ( vslides.length  + 1 )  + '%' } }  onClick={() => skipTo(index)} onKeyDown={() => skipTo(index)}>
                          <div className="w-full h-0 transition-all ease-out"></div>
                      </div>
                  ) ) } 
                </div> 

                <div className={`h-[100%] md:h-[70%]`}>
                  <AnchorLink to='#skipVerticalSlider' title="Skip to the next section" className={ `hidden md:flex transition-all ease-out` + theme.text.H4_LTE + theme.text_links.BASE_STYLING + theme.text_links.FWD_BASE + theme.text_links.ARW_FWD_GREY + ` items-center text-rm-grey h-[30%] hover:text-rm-white capitalize mt-12`}> Skip </AnchorLink>
                </div>
                </div>

                <div className={`flex flex-col md:flex-row ${flipOrientation} items-start md:items-center w-full`}>
                    {/* Text next to progress bar ON MOBILE */}
                    <div className="flex w-full md:w-[50%] mb-4 md:mb-0">
                        <div id="slides-main" className="ml-[10%] mr-[10%]">
                        {!content.styletoggle && (
                            <p className={`${theme.text['CIRCLE_NUM']} w-[55px] h-[55px] text-rm-green border-rm-green animate-quote`}> { vslide + 1 } </p>
                        )}
                        
                        <h2 className={`${content.styletoggle ? theme.text.H3 + ' text-rm-green pb-6' : theme.text.H2} mt-5 mb-5 md:mb-0 md:mt-10 animate-quote opacity-0`} style={{animationDelay:'0.22s'}}>
                            { vslides[vslide].heading }
                        </h2>
                        {vslides[vslide].smallText && (
                            <p className={`${theme.text['P_STD']} mt-6 animate-quote opacity-0`} style={{animationDelay:'0.37s'}}>
                            { vslides[vslide].smallText }
                            </p>
                        )}
                        </div>
                    </div>

                    {/* Image / Lottie */}
                    <div className={`w-full sm:pt-6 md:w-[50%] h-auto md:h-[80%] items-center`}>
                        {content.styletoggle && vslides[vslide].image?.sourceUrl ? (
                        <img
                            src={vslides[vslide].image.sourceUrl}
                            alt={vslides[vslide].image.altText || ''}
                            className="w-full h-auto object-cover"
                        />
                        ) : (
                        <DotLottieReact
                            className="w-full h-full block"
                            src={vslides[vslide].lottieJsonUrl}
                            loop={true}
                            autoplay={true}
                            controls={false}
                        />
                        )}
                    </div>
                    </div>
 
              <AnchorLink to='#skipVerticalSlider' title="Skip to the next section" className={ `md:hidden text-left w-full mt-[5%] h-[3%] transition-all ease-out ${theme.text.H4_LTE} ${theme.text_links.BASE_STYLING} ${theme.text_links.FWD_BASE} ${theme.text_links.ARW_FWD_GREY} flex items-center text-rm-grey hover:text-rm-white capitalize`}>Skip </AnchorLink>
            </div>
            { vslides.map( (key, index) => (
                <div ref={ el => otherSlides.current[ index ] = el } key={ key.heading } className={ `block invisible` } style={ { height:slideHeight + 'px' } } aria-hidden="true" ></div>
            ) ) }
        </div> 
      </div>
      <div id="skipVerticalSlider" className={`invisible`} aria-hidden="true" ></div> 
    </>
  ) 
}

export default VerticalSlider;


export const query = graphql`
  fragment VerticalSliderPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_VerticalSlider {
        fieldGroupName
        layoutVerticalSlider {
          layoutContent {
            slides {
              heading
              lottieJsonUrl
              smallText
              image {
                sourceUrl 
              }
            }
            body
            heading
            styletoggle
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
  fragment VerticalSliderService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_VerticalSlider {
        fieldGroupName
        layoutVerticalSlider {
          layoutContent {
            slides {
              heading
              lottieJsonUrl
              smallText
              image {
                sourceUrl 
              }
            }
            body
            heading
            styletoggle
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
  fragment VerticalSliderProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_VerticalSlider {
        fieldGroupName
        layoutVerticalSlider {
          layoutContent {
            slides {
              heading
              lottieJsonUrl
              smallText
            }
            body
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

export const landerQuery = graphql`
  fragment VerticalSliderLander on WpLander_Flexiblelayouts_Layouts {
    ... on WpLander_Flexiblelayouts_Layouts_VerticalSlider {
        fieldGroupName
        layoutVerticalSlider {
          layoutContent {
            slides {
              heading
              lottieJsonUrl
              smallText
              image {
                sourceUrl 
              }
            }
            body
            heading
            styletoggle
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
