import React, { useRef, useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { theme } from '../static/theme.js'

import { venn } from 'venny'
//import { extractSets, generateCombinations, VennDiagram } from '@upsetjs/react';

const WpPage = ({ data }) =>{

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

  return (
    <>
    <div className="pt-12 bg-rm-black h-[750px] w-full">
      <div className="container">
        <venn-diagram id="shadow-container" class="block w-min ml-auto mr-auto drop-shadow-lg" width="1000" height="585">
          <venn-set name="A" label="AWARD-WINNING DOERS, WRITERS, DESIGNERS & DEVELOPERS "></venn-set>
          <venn-set name="B" label="STRATEGIC THINKERS WHO GET MEASURABLE RESULTS"></venn-set>
          <venn-n part="intersection" sets="A B" label=""></venn-n>
        </venn-diagram>
      </div>
    </div>
    <div className="container">
      <div className="flex w-full">
          <img className="w-1/2 -mt-[calc(12.5%)] block ml-auto mr-auto " src="https://atlantis.nyc3.digitaloceanspaces.com/media/legacy/atlantis/Things_To_Do/Water_Park/Beaches/Hero/Experiences_Beach.jpg" />
      </div>

      <div className="mt-12 flex w-full flex-wrap justify-between">
          {/* loop items */}
          <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32">
              {/* <GatsbyImage 
                      image={ image } 
                      alt={ content.image.alt } 
                      className={ `object-cover w-full ` } 
              />  */}
              <div className="flex flex-col">
                  <div className="flex items-center ml-6 h-[calc(200%)]">
                      <p className={ theme.text['H4'] }>Web Copywriting</p>
                  </div>
                  <div className="ml-6">
                      <p className={ theme.text['FOOTER'] }>
                          Deliver compelling customer-focused content and campaign landing pages with strong calls-to-action. 
                      </p>
                  </div>
              </div>  
          </div>
          {/* end loop */}
            {/* loop items */}
            <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32">
              {/* <GatsbyImage 
                      image={ image } 
                      alt={ content.image.alt } 
                      className={ `object-cover w-full ` } 
              />  */}
              <div className="flex flex-col">
                  <div className="flex items-center ml-6 h-[calc(200%)]">
                      <p className={ theme.text['H4'] }>eBooks and Whitepapers</p>
                  </div>
                  <div className="ml-6">
                      <p className={ theme.text['FOOTER'] }>
                        Grow your readership and establish your authority with well written and stunning eBooks and whitepapers.  
                      </p>
                  </div>
              </div>  
          </div>
          {/* end loop */} 
              {/* loop items */}
              <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32">
              {/* <GatsbyImage 
                      image={ image } 
                      alt={ content.image.alt } 
                      className={ `object-cover w-full ` } 
              />  */}
              <div className="flex flex-col">
                  <div className="flex items-center ml-6 h-[calc(200%)]">
                      <p className={ theme.text['H4'] }>eBooks and Whitepapers and newspapers</p>
                  </div>
                  <div className="ml-6">
                      <p className={ theme.text['FOOTER'] }>
                        Grow your readership and establish your authority with well written and stunning eBooks and whitepapers.  
                      </p>
                  </div>
              </div>  
          </div>
          {/* end loop */}
      </div>

    </div>
    </>
  )
}
export default WpPage;

export const query = graphql`
  query PageById( $id: String ){
    wpPage( id: {eq: $id} ){
      id
      uri
      title
      content
    }
  }
` 