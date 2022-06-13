import React, { useState, useMemo } from "react"
import { venn } from 'venny'

const vennDiagram = ({ props }) => {
    
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

        useEffect(() => {
            window.addEventListener('load', function(){
            if( document.getElementById('shadow-container') ){
                let shadowRoot_ =  document.getElementById('shadow-container').shadowRoot;
                let allElements =  shadowRoot_.querySelector('svg').querySelectorAll('g');
                
                for(var i =0; allElements.length > i; i++){
                    allElements[i].style.fillOpacity = '1';
                    allElements[i].style.opacity = '1';
                }
            }
            })
        });

      return(
        <Section Settings={ settings }>
            <Container>
                {/* not react layouts, custom html tags */}
                <venn-diagram class="block w-min ml-auto mr-auto drop-shadow-lg">
                    <venn-set name="A" label=""></venn-set>
                    <venn-set name="B" label=""></venn-set>
                    <venn-n sets="A B" label=""></venn-n>
                </venn-diagram>
            </Container>
        </Section>
    )
}

export default vennDiagram