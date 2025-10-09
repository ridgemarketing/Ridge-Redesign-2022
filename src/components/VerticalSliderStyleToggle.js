import React, { useRef, useEffect, useState } from "react"
import { graphql } from "gatsby"
import { theme } from '../static/theme.js'
import { Container, Section } from './global/Wrappers.js'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Parser from "./global/Parser"
import Buttons from './global/Buttons'

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
  const flipOrientation       = content.styleToggle ? "md:flex-row-reverse" : "md:flex-row";

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
                  <h2
                  className={`${content.styleToggle ? 'font-stratos uppercase font-light text-40px leading-44px' : theme.text.H1_STD} text-center pt-10 ${textColor}`}
                  dangerouslySetInnerHTML={{ __html: Parser(content.heading) }}
                />
                }
                {content.body &&
                  <p className={`${theme.text.P_STD} text-center pt-4 pb-16 md:pb-0 ${textColor}`}>
                    { content.body }  
                  </p>
                }
            </Container>
        </Section>    
        <div ref={outerContainer} className={`${backgroundColor} ${textColor} w-full block`} style={ {marginTop:'-' + slideHeight/1.7 + 'px'} }>
            <div className={ `block invisible` } style={ { height:slideHeight + 'px' } } aria-hidden="true"></div>
              <div ref={innerContainer} className={ `container flex-wrap relative`} style={{height:"inherit"}}>
                  <div ref={firstSlide} className={`flex flex-col ml-auto mr-auto w-[95%] md:flex-row md:w-full items-center sticky -translate-y-1/2 top-[50%]`} style={ { height : slideHeight } }> 
                    <div className="w-full h-full md:h-[80%] flex items-center" >
                      <div className="h-[100%] md:h-[150px]">
                            <div role={`progressbar`} aria-valuenow={0} aria-labelledby={`slides-main`} className={`hidden md:block h-[100%] w-[7px]`}>
                              { vslides.map( (key, index)  => (
                                  <div ref={ el => progressBar.current[ index ] = el } aria-label={`go to slide ${index}`} role={`button`} tabIndex={0} className="w-[5px] cursor-pointer overflow-hidden border-b-8 last:border-b-0 border-rm-black bg-rm-white transition-all ease-out"  key={ 'slides' + index } style={ { height: 100 / ( vslides.length  + 1 )  + '%' } }  onClick={() => skipTo(index)} onKeyDown={() => skipTo(index)}>
                                      <div className="w-full h-0 transition-all ease-out"></div>
                                  </div>
                              ) ) } 
                            </div> 
                            <AnchorLink to='#skipVerticalSlider' title="Skip to the next section" className={ `hidden md:flex transition-all ease-out` + theme.text.H4_LTE + theme.text_links.BASE_STYLING + theme.text_links.FWD_BASE + theme.text_links.ARW_FWD_GREY + ` items-center text-rm-grey h-[30%] hover:text-rm-white capitalize mt-32`}> Skip </AnchorLink>
                      </div>

                      {/* Image / Lottie  -- Desktop */}
                      <div className={`w-full sm:pt-6 md:w-[80%] h-auto md:h-[80%] md:flex items-center justify-center hidden`} >
                          {content.styleToggle && vslides[vslide].image?.sourceUrl ? (
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
                      {/* Image / Lottie  -- Mobile */}
                      <div className={`w-full sm:pt-6 md:w-[50%] h-auto md:h-[80%] items-center md:hidden`}>
                          {content.styleToggle && vslides[vslide].image?.sourceUrl ? (
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

                    <div className={`flex flex-col md:flex-row ${flipOrientation} items-start md:items-center w-full`}>
                          {/* Text next to progress bar ON MOBILE */}
                          <div className="flex w-full mb-4 md:mb-0">
                              <div id="slides-main" className="ml-[10%] mr-[10%]">
                              {!content.styleToggle && (
                                  <p className={`${theme.text['CIRCLE_NUM']} w-[55px] h-[55px] text-rm-green border-rm-green animate-quote`}> { vslide + 1 } </p>
                              )}
                              
                              <h2 className={`${content.styleToggle ? theme.text.H3 + ' text-rm-green pb-6' : theme.text.H2} mt-5 mb-5 md:mb-0 md:mt-10 animate-quote opacity-0`} style={{animationDelay:'0.22s'}}>
                                  { vslides[vslide].heading }
                              </h2>
                              {vslides[vslide].smallText && (
                                  <p className={`${theme.text['P_STD']} mt-0 animate-quote opacity-0 !text-[28px]`} style={{animationDelay:'0.37s'}}>
                                  { vslides[vslide].smallText }
                                  </p>
                              )}
                              </div>
                          </div>
                      </div>
                    
                    <AnchorLink to='#skipVerticalSlider' title="Skip to the next section" className={ `md:hidden text-left w-full mt-[5%] h-[3%] transition-all ease-out ${theme.text.H4_LTE} ${theme.text_links.BASE_STYLING} ${theme.text_links.FWD_BASE} ${theme.text_links.ARW_FWD_GREY} flex items-center text-rm-grey hover:text-rm-white capitalize`}>Skip </AnchorLink>
                    </div>

                { vslides.map( (key, index) => (
                    <div ref={ el => otherSlides.current[ index ] = el } key={ key.heading } className={ `block invisible` } style={ { height:slideHeight + 'px' } } aria-hidden="true" ></div>
                ) ) }
                {content.componentButton && content.componentButton.link && (
                        <div className="w-full flex justify-center pb-28 pt-0 mt-0">
                          <Buttons
                            content={content.componentButton}
                            sectionBackground={settings.backgroundColor}
                          />
                        </div>
                      )}
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
            styleToggle
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
            styleToggle
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
            styleToggle
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
