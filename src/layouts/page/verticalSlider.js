import React, { useRef, useEffect, useState } from "react"
import { graphql } from "gatsby"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const VerticalSlider = (props) => {

  const content               = props.layoutData.layoutContent;
  const settings              = props.layoutData.layoutSettings;

  console.log('vertical slider');
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

  for (let i = 0; vslides.length > i; i++){
    scrollPoints.push(totalHeight);
    totalHeight = totalHeight + slideHeight;
  }
   
  let current = 0;
  
  useEffect(() => {

      let observer = new IntersectionObserver( (entries) => {
          entries.forEach ( entry => {
              console.log(entry);
              if( entry.isIntersecting ){
                if(firstSlide.current.offsetTop < totalHeight ){
    
                  onscroll = () => {
                    for( let i = 0; scrollPoints.length > i; i++ ){
                      if ( firstSlide.current.offsetTop > scrollPoints[i] ){

                        console.log('greater than', scrollPoints[i], firstSlide.current.offsetTop, totalHeight, i);

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
                observer.unobserve(innerContainer.current);
              }
            }) 
          },
        {
          threshold: [0.1, 1]
        }
      );
      observer.observe(innerContainer.current);
      //observer.unobserve(outerContainer.current);
  }, []);

    const skipTo = (location) => {
      window.scrollBy(0, (scrollPoints[location] + slideHeight) - firstSlide.current.offsetTop );
    }

    return(
      <>
        <Section settings={ settings }>
            <Container>
                {content.heading &&
                  <h2 className={`${theme.text.H1_STD} text-center mb-9 ${textColor}`}> 
                    { content.heading }
                  </h2>
                }
                {content.body &&
                  <p className={`${theme.text.P_STD} text-center ${textColor} `}>
                    { content.body }  
                  </p>
                }
            </Container>
        </Section>    
        <div ref={outerContainer} className={`${backgroundColor} ${textColor} w-full block`} style={ {marginTop:'-' + slideHeight/2 + 'px'} }>
          <div className={ `block invisible` } style={ { height:slideHeight + 'px' } } aria-hidden="true"></div>
          
          <div ref={innerContainer} className={ `container flex-wrap relative`} style={{height:"inherit"}}>
            <div ref={firstSlide} className="flex flex-col ml-auto mr-auto w-[95%] md:flex-row md:w-full items-center sticky -translate-y-1/2 top-[50%]" style={ { height : slideHeight } }>
              <div className="w-full h-full md:w-[50%] md:h-[80%] flex items-center" >
                <div className="h-[100%] md:h-[70%]">
                  <div role={`progressbar`} aria-valuenow={0} aria-labelledby={`slides-main`} className="h-full w-[7px]">
                    { vslides.map( (key, index)  => (
                        <div ref={ el => progressBar.current[ index ] = el } aria-label="slider tabs" className="cursor-pointer overflow-hidden border-b-8 last:border-b-0 border-rm-black bg-rm-white transition-all ease-out"  key={ 'slides' + index } style={ { height: 100 / ( vslides.length  + 1 )  + '%' } }  onClick={() => skipTo(index)}>
                            <div className="w-full h-0 transition-all ease-out"></div>
                        </div>
                    ) ) } 
                  </div>

                  <AnchorLink to='#skipVerticalSlider' title="Skip to the next section" className={ `hidden md:flex transition-all ease-out ` + theme.text.H4_LTE + theme.text_links.BASE_STYLING + theme.text_links.FWD_BASE + theme.text_links.ARW_FWD_GREY + ` items-center text-rm-grey h-[30%] hover:text-rm-white capitalize`}> Skip </AnchorLink>
                </div>

                <div id="slides-main" className="ml-[10%] mr-[10%]">
                  <p key={Math.random()} className={ theme.text['CIRCLE_NUM'] + 'text-rm-green border-rm-green animate-quote' }> { vslide + 1 } </p>
                  <h2 key={Math.random()} className={ theme.text['H2']  + 'mt-5 mb-5 md:mb-0 md:mt-10 animate-quote opacity-0 '} style={{animationDelay:'0.22s'}}> { vslides[vslide].heading } </h2>
                  {vslides[vslide].smallText && 
                    <p key={Math.random()} className={ theme.text['P_STD'] + 'mt-6 animate-quote opacity-0'} style={{animationDelay:'0.37s'}}> { vslides[vslide].smallText } </p>
                  }
                </div>
              </div>
                
              <div className="w-full h-[45%] mt-[5%] md:mt-0 md:h-auto md:w-[50%] lg:h-full block object-cover ">
                <Player className="w-full h-full block" src={ vslides[vslide].lottieJsonUrl } loop={false} autoplay={true} controls={false}/>
              </div>
              <AnchorLink to='#skipVerticalSlider' title="Skip to the next section" className={ `md:hidden text-left w-full mt-[5%] h-[3%] transition-all ease-out ` + theme.text.H4_LTE + theme.text_links.BASE_STYLING + theme.text_links.FWD_BASE + theme.text_links.ARW_FWD_GREY  + ` flex items-center text-rm-grey hover:text-rm-white capitalize`}>Skip </AnchorLink>
            </div>
            { vslides.map( (key, index) => (
                <div ref={ el => otherSlides.current[ index ] = el } key={ key.heading } className={ `block invisible` } style={ { height:slideHeight + 'px' } } aria-hidden="true" ></div>
            ) ) }
        </div> 
      </div>
      <div id="skipVerticalSlider" className="invisible" aria-hidden="true" ></div> 
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