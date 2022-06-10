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
       
        //shadow container 
        if( document.getElementById('shadow-container') ){
          let shadowRoot_ =  document.getElementById('shadow-container').shadowRoot;
          let allElements =  shadowRoot_.querySelector('svg').querySelectorAll('g');
            
          for(let i =0; allElements.length > i; i++){
              allElements[i].style.fillOpacity = '1';
              allElements[i].style.opacity = '1';
            }
        }

        //three col icon text height
        if ( document.getElementsByClassName('threeColIconsText').length > 0 ){
            const allimg  = document.getElementsByClassName('threeColIconsText')[0].getElementsByTagName('img');
            const allText = document.getElementsByClassName('threeColIconsText')[0].getElementsByClassName('icon-block-title');

            let heights = [];
            let currentHeight;

            for ( let i = 0; allText.length > i; i++ ){
              heights.push(allText[i].clientHeight);
            }

            for ( let i = 0; heights.length > i; i++ ){
              currentHeight = heights[i];
                for ( let z = 0; allText.length > z; z++ ){
                  if(allText[z].clientHeight < currentHeight){
                    allText[z].style.height = currentHeight + 'px';
                  }
                }
            }

            for ( let i = 0; allText.length > i; i++ ){
                if( allText[i].clientHeight > allimg[i].clientHeight ){
                    allimg[i].style.marginTop = ( allText[i].clientHeight - allimg[i].clientHeight )/2 + 'px' ;
                }
                if( allText[i].clientHeight < allimg[i].clientHeight){
                    allText[i].parentNode.style.height = allimg[i].clientHeight + 'px';
                }
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
          <img className="w-1/2 -mt-[12.5%] block ml-auto mr-auto " src="https://atlantis.nyc3.digitaloceanspaces.com/media/legacy/atlantis/Things_To_Do/Water_Park/Beaches/Hero/Experiences_Beach.jpg" />
      </div>
      

      <div className="mt-12 flex w-full flex-wrap justify-between threeColIconsText">
          {/* loop items */}
          <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32">
              <img
                      src={ `https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png` } 
                      alt={ `` } 
                      className={ `flex self-start object-contain w-[55px] h-[55px]` } 
              /> 
              <div className="flex flex-col">
                  <div className="flex items-center ml-6 ">
                      <p className={ theme.text['H4'] + 'icon-block-title flex items-center' }>Web Copywriting</p>
                  </div>
                  <div className="ml-6 mt-4">
                      <p className={ theme.text['FOOTER'] }>
                          Deliver compelling customer-focused content and campaign landing pages with strong calls-to-action. 
                      </p>
                  </div>
              </div>  
          </div>
          {/* end loop */}
            {/* loop items */}
            <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32">
                  <img
                      src={ `https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png` } 
                      alt={ `` } 
                      className={ `flex self-start object-contain w-[55px] h-[55px]` } 
                    /> 
              <div className="flex flex-col">
                  <div className="flex items-center ml-6 ">
                      <p className={ theme.text['H4'] + 'icon-block-title flex items-center' }>eBooks and Whitepapers</p>
                  </div>
                  <div className="ml-6 mt-4">
                      <p className={ theme.text['FOOTER'] }>
                        Grow your readership and establish your authority with well written and stunning eBooks and whitepapers.  
                      </p>
                  </div>
              </div>  
          </div>
          {/* end loop */} 
              {/* loop items */}
              <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32">
                  <img
                    src={ `https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png` } 
                    alt={ `` } 
                    className={ `flex self-start object-contain w-[55px] h-[55px]` } 
                  /> 
              <div className="flex flex-col">
                  <div className="flex items-center ml-6 ">
                      <p className={ theme.text['H4'] + 'icon-block-title flex items-center' }>eBooks and Whitepapers and newspapers</p>
                  </div>
                  <div className="ml-6 mt-4">
                      <p className={ theme.text['FOOTER'] }>
                        Grow your readership and establish your authority with well written and stunning eBooks and whitepapers.  
                      </p>
                  </div>
              </div>  
          </div>
          {/* end loop */}
                     {/* loop items */}
                     <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32">
                  <img
                    src={ `https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png` } 
                    alt={ `` } 
                    className={ `flex self-start object-contain w-[55px] h-[55px]` } 
                  /> 
              <div className="flex flex-col">
                  <div className="flex items-center ml-6 ">
                      <p className={ theme.text['H4'] + 'icon-block-title flex items-center' }>eBooks and Whitepapers and newspapers</p>
                  </div>
                  <div className="ml-6 mt-4">
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