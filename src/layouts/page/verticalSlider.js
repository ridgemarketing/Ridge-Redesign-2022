import React, { useRef, useEffect, useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import { content } from "../../../tailwind.config.js"

const VerticalSlider = (props) => {

    const [vslide, setVslide]   = useState(0);
    const firstSlide            = useRef(null);
    const otherSlides           = useRef([]);
    let slideHeight             = 550;
    let sCounter                = 0;
  
    const vslides = [
      {
        number:0,
        heading:'RESPONSIVE WEBSITE DESIGN',
        p:'(Adapts to Mobile and Desktop)',
        img: `https://assets.justinmind.com/wp-content/uploads/2020/08/mockup-templates-to-download-now-768x492.png`
      },
      {
        number:1,
        heading:'Intuitive UX and Navigation',
        p:' ',
        img: `https://img.freepik.com/free-psd/mobile-phone-mockup-with-editable-design-changeable-colors_196070-196.jpg?w=2000`
      },
      {
        number:2,
        heading: `third heading`,
        p: `idk`,
        img: ``
      }
    ]
  
    let observer = new IntersectionObserver( (entries, options) => {
        entries.forEach ( entry => {
          if( entry.isIntersecting ){
  
            sCounter = sCounter + 1;
  
            if(sCounter === vslides.length ){
              sCounter = sCounter - 1;
            }else{
              setVslide( sCounter );
            }
            return
            
          }
          if (entry.boundingClientRect.top > 0) {
            if(sCounter === 0 ){ }else{
              sCounter = sCounter - 1;
              setVslide( sCounter );
            }
          } else {}
        });
    }, 
    {
      root: null,
      rootMargin: '0px 0px -' + slideHeight + 'px 0px',
      threshold: 0
    }, []);
  
    useEffect(() => {
        for(let i =0; otherSlides.current.length > i; i++){
          observer.observe( otherSlides.current[i] );
        } 
    });

    return(
        <>
            <Section Settings={ settings }>
                <Container>
                    {content.heading &&
                        <> 
                            <h2>
                                <span 
                                    className={ 
                                                theme.text['H1'] 
                                                + ' text-' + content.textColor 
                                                + ' text-' + content.textAlign
                                            }> 
                                    { content.heading }
                                </span>
                            </h2>
                        </>
                    }
                    {content.bodyText &&
                        <>
                            <p>
                                <span className={ 
                                                theme.text['P_STD'] 
                                                + ' text-' + content.textColor 
                                                + ' text-' + content.textAlign
                                            }>
                                    { content.bodyText }
                                </span>
                            </p>
                        </>
                    }

                </Container>
            </Section>    
            {/* need to change outer container location */}
            <div className="bg-rm-black text-rm-white w-full block">
                <div className={ `container ` + `flex-wrap relative`} style={ {height:totalHeight +'px'} }>
                    
                    <div ref={firstSlide} className="flex w-full items-center sticky top-1/4">
                        <div className="bg-rm-green h-full w-[10px]"></div>
                        <div className="lg:w-[50%]" >
                            <p className={ theme.text['P_BLD'] }> { vslide + 1 } </p>
                            <h2 className={ theme.text['H2']  + 'lg:mt-8'}> { vslides[vslide].heading } </h2>
                            <p className={ theme.text['P_STD'] + 'lg:mt-6'}> { vslides[vslide].p } </p>
                        </div>
                        
                        <img className="lg:w-[50%] lg:h-[500px] block object-cover " src={ vslides[vslide].img }  />
                    
                    </div>
        
                    { vslides.map( (key) => (
                        <div ref={ el => otherSlides.current[ key.number ] = el } key={ key.heading } className={ `block invisible` } style={ { height:slideHeight + 'px' } } aria-hidden="true" ></div>
                    ) ) }

                </div> 
            </div>
        </>  
    )
}

export default VerticalSlider;