import React, { useRef, useEffect, useState } from "react"
import { graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import { content } from "../../../tailwind.config.js"

const VerticalSlider = (props) => {

    const [vslide, setVslide] = useState(0);
    const firstSlide = useRef(null);
    const slideHeight = 650;
    const settings = props.layoutData.layoutSettings || {};
    let totalHeight = 0;
  
    const vslides = [
      {
        heading:'RESPONSIVE WEBSITE DESIGN',
        p:'(Adapts to Mobile and Desktop)',
        img: `https://assets.justinmind.com/wp-content/uploads/2020/08/mockup-templates-to-download-now-768x492.png`
      },
      {
        heading:'Intuitive UX and Navigation',
        p:' ',
        img: `https://img.freepik.com/free-psd/mobile-phone-mockup-with-editable-design-changeable-colors_196070-196.jpg?w=2000`
      }
    ]
  
    for (let i =0; vslides.length + 1; i++){
      totalHeight = totalHeight + slideHeight;
    }
    
    onscroll = () => {
      if( firstSlide.current.offsetTop > slideHeight ){
        setVslide( 1 );
      }else{
        console.log(vslide);
        console.log('nope');
      }  
    }

    return(
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

            {/* need to change outer container location */}
            <div className="bg-rm-black text-rm-white w-full block">
                <div className={ `container flex-wrap relative`} style={ {height:totalHeight +'px'} }>
                    
                    <div ref={firstSlide} className="flex w-full items-center sticky top-1/4">
                        <div className="bg-rm-green h-full w-[10px]"></div>
                        <div className="lg:w-[50%]" >
                            <p className={ theme.text['P_BLD'] }> {vslide} </p>
                            <h2 className={ theme.text['H2']  + 'lg:mt-8'}> { vslides[vslide].heading } </h2>
                            <p className={ theme.text['P_STD'] + 'lg:mt-6'}> { vslides[vslide].p } </p>
                        </div>
                        
                        <img className="lg:w-[50%] lg:h-[500px] block object-cover " src={ vslides[vslide].img }  />
                    
                    </div>

                    </div> 
                </div>

            </Container>
        </Section>        
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