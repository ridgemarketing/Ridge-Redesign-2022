import React, { useState, useMemo, useEffect, useRef } from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { venn } from 'venny'
import { graphql } from "gatsby"

const VennDiagram = ({ props }) => {
    
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    let shadowContainer = useRef(null);

        useEffect(() => {
            window.addEventListener('load', function(){
                  if( shadowContainer.current ){
                        let shadowRoot_ =  shadowContainer.current.shadowRoot;
                        let allSVG =  shadowRoot_.querySelector('svg').querySelectorAll('g');
                        let allText = shadowRoot_.querySelectorAll('label');  
                        
                        if(window.innerWidth >= 1280){
                            let textContainer = shadowRoot_.getElementById('labels');
                            textContainer.style.transform='translateX(10%)';
                            }

                        for(let i =0; allSVG.length > i; i++){
                            allSVG[i].style.fillOpacity = '1';
                            allSVG[i].style.opacity = '1';
                            }

                        for (let i =0; allText.length > i; i++){
                            allText[i].style.lineHeight = '2.7rem';

                            if(i % 2 === 0){
                            allText[i].style.marginLeft   = '20px';
                            }else{
                            allText[i].style.marginRight = '20px';
                            allText[i].style.textAlign   = 'right';
                            }

                        }  
                
                }
            })
        });

      return(
        <Section Settings={ settings }>
            <Container>
                {/* not react layouts, custom html tags */}
                <div className="flex justify-center overflow-hidden items-center">
                    <img className="scale-50 lg:scale-100 h-[100px] w-[100px] z-10 absolute" src="https://media-exp1.licdn.com/dms/image/C560BAQEh3MdMkU-4oQ/company-logo_200_200/0/1615821999267?e=2147483647&v=beta&t=DkVybyqbal7MeWTIACfU-ilUc9svx0im4C7qm0gSfJI" />
                    <venn-diagram ref={shadowContainer} class="flex xl:w-full rotate-90 md:rotate-0 scale-50 lg:scale-75 xl:scale-100 justify-center ml-auto mr-auto drop-shadow-lg" width="1000" height="585">
                    <venn-set name="A" label="AWARD-WINNING DOERS, WRITERS, DESIGNERS & DEVELOPERS "></venn-set>
                    <venn-set name="B" label="STRATEGIC THINKERS WHO GET MEASURABLE RESULTS"></venn-set>
                    <venn-n part="intersection" sets="A B" label=""></venn-n>
                    </venn-diagram>
                </div>
            </Container>
        </Section>
    )
}

export default VennDiagram

// export const query = graphql`
//   fragment VennDiagramPage on WpPage_Flexiblelayouts_Layouts {
//     ... on WpPage_Flexiblelayouts_Layouts_VennDiagram {
//         fieldGroupName
//         layoutVennDiagram {
//           layoutContent {
//             fieldGroupName
//           }
//           layoutSettings {
//             padding {
//               bottom
//               top
//             }
//             anchorId
//             backgroundColor
//             classes
//             id
//           }
//         }
//       }
//   }
// `