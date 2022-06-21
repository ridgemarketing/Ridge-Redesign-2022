import React, { useState, useMemo, useEffect } from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { venn } from 'venny'
import { graphql } from "gatsby"

const VennDiagram = ({ props }) => {
    
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

export default VennDiagram

export const query = graphql`
  fragment VennDiagram on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_VennDiagram {
        fieldGroupName
        layoutVennDiagram {
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