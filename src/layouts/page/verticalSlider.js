import React, { useRef, useEffect, useState } from "react"
import { graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { content } from "../../../tailwind.config.js"

const VerticalSlider = (props) => {
  
  const settings = props.layoutData.layoutSettings;

  const [vslide, setVslide]   = useState(0);
  const firstSlide            = useRef(null);
  const otherSlides           = useRef([]);
  const progressBar           = useRef([]);
  const outerContainer        = useRef(null);
  let slideHeight             = 550;
  let totalHeight             = 0;
  let scrollPoints            = [];
  //let sCounter                = 0;

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
      p:` `,
      img: `https://img.freepik.com/free-psd/mobile-phone-mockup-with-editable-design-changeable-colors_196070-196.jpg?w=2000`
    },
    {
      number:2,
      heading: `third heading`,
      p:` `,
      img: ``
    },
    {
      number:3,
      heading:'Intuitive UX ',
      p:` `,
      img: `https://img.freepik.com/free-psd/mobile-phone-mockup-with-editable-design-changeable-colors_196070-196.jpg?w=2000`
    },
  ]

  for (let i = 0; vslides.length > i; i++){
    scrollPoints.push(totalHeight);
    totalHeight = totalHeight + slideHeight;
  }
   
  let current = 0;
  let observer = new IntersectionObserver( (entries) =>{
      entries.forEach ( entry => {
        console.log(entry.isIntersecting);
          if( entry.isIntersecting ){

              onscroll = () => {
                for( let i = 0; scrollPoints.length > i; i++ ){
                  if ( firstSlide.current.offsetTop > scrollPoints[i] ){
                    //console.log('greater than', scrollPoints[i], i);
                    //console.log(firstSlide.current.offsetTop, scrollPoints[i] + slideHeight);
                    setVslide(i);
                    current = i;

                    progressBar.current[i].style.height = 200 / ( vslides.length  + 1 ) + '%';
                    progressBar.current[i].style.backgroundColor = '#FFFFFF';
                    progressBar.current[i].children[0].style.backgroundColor = '#A9CF38';
                    progressBar.current[i].children[0].style.height = ( ( firstSlide.current.offsetTop - scrollPoints[i] ) / slideHeight ) * 100 + '%';
                  }
                }
                for( let z = 0; scrollPoints.length > z; z++){
                  if( z == current ){}else{
                    progressBar.current[z].style.height = 100 / ( vslides.length  + 1 ) + '%';
                    progressBar.current[z].children[0].style.backgroundColor = '#FFFFFF';
                    progressBar.current[z].style.backgroundColor = '#FFFFFF';
                  }
                }
              }

          }else{
             return
          }
        }) },
    {
      root: null,
      rootMargin: '0px 0px -' + slideHeight + 'px 0px',
      //rootMargin: '0px',
      threshold: 0
    });
  
    useEffect(() => {
        observer.observe(outerContainer.current);
    }, []);

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
            <div className={ `block invisible` } style={ { height:slideHeight + 'px' } } aria-hidden="true"></div>
            <div ref={outerContainer} className={ `container ` + `flex-wrap relative`}  >
                <div ref={firstSlide} className="flex flex-col ml-auto mr-auto w-[95%] md:flex-row md:w-full items-center sticky -translate-y-1/2 top-[50%]" style={ { height : slideHeight } }>
                    <div className="w-full h-[45%] md:w-[50%] md:h-[80%] flex items-center" >
                        <div className="h-[100%] md:h-[70%]">
                            <div role={`progressbar`} aria-valuenow="0" aria-labelledby={`slides-main`} className="h-full w-[7px]">
                            { vslides.map( (key)  => (
                                <div ref={ el => progressBar.current[ key.number ] = el } className="overflow-hidden border-b-8 last:border-b-0 border-rm-black bg-rm-white transition-all ease-out"  key={ key.number } style={ { height: 100 / ( vslides.length  + 1 )  + '%' } } >
                                    <div className="w-full h-0 transition-all ease-out"></div>
                                </div>
                            ) ) } 
                            </div>
                            <AnchorLink
                            to='/sample-page/#skipVerticalSlider'
                            title="Skip to the next section"
                            className={ `hidden md:flex ` + theme.text[`H4_LTE`]  + `items-center text-rm-grey h-[30%]`}
                            >
                            Skip
                        </AnchorLink>
                        </div>
                        <div id="slides-main" className="ml-[10%] mr-[10%]">
                          <p className={ theme.text['CIRCLE_NUM'] + 'text-rm-green border-rm-green' }> { vslide + 1 } </p>
                          <h2 className={ theme.text['H2']  + 'mt-10'}> { vslides[vslide].heading } </h2>
                          <p className={ theme.text['P_STD'] + 'mt-6'}> { vslides[vslide].p } </p>
                        </div>
                    </div>
                    
                    <img className="w-full h-[45%] mt-[5%] md:mt-0 md:h-auto md:w-[50%] lg:h-full block object-cover " src={ vslides[vslide].img }  />
                    <AnchorLink
                          to='/sample-page/#skipVerticalSlider'
                          title="Skip to the next section"
                          className={ `md:hidden text-left w-full mt-[2%] h-[3%] ` + theme.text[`H4_LTE`]  + `flex items-center text-rm-grey`}
                            >
                            Skip
                    </AnchorLink>
                </div>
                
                { vslides.map( (key) => (
                    <div ref={ el => otherSlides.current[ key.number ] = el } key={ key.heading } className={ `block invisible` } style={ { height:slideHeight + 'px' } } aria-hidden="true" ></div>
                ) ) }

                </div> 
            </div>
            <div id="skipVerticalSlider" className="invisible" aria-hidden="true" ></div>
        </>  
    )
}

export default VerticalSlider;


export const query = graphql`
  fragment VerticalSlider on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_VerticalSlider {
        fieldGroupName
        layoutVerticalSlider {
          layoutContent {
            fieldGroupName
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