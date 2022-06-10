import React, { useState, useMemo } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { theme } from '../static/theme.js'

import { extractSets, generateCombinations, VennDiagram } from '@upsetjs/react';

const WpPage = ({ data }) =>{
    
      // const elems = useMemo(
      //   () => [
      //     { name: '', sets: ['S1', 'S2'] },
      //     { name: '', sets: ['S1'] },
      //     { name: '', sets: ['S2'] },
      //   ],
      //   []
      // ); 
    
      // const sets = useMemo(() => extractSets(elems), [elems]);
      // const combinations = useMemo(() => generateCombinations(sets), [sets]);
      
      // const [selection, setSelection] = React.useState(null);
      // return (
      //   <VennDiagram
      //     sets={sets}
      //     combinations={combinations}
      //     width={780}
      //     height={400}
      //   />
      // );
    
  return (
    <>
      <div className="bg-rm-black h-[500px] w-full"></div>
      <div className="flex w-full">
          <img className="w-1/2 -mt-[calc(12.5%)] block ml-auto mr-auto " src="https://atlantis.nyc3.digitaloceanspaces.com/media/legacy/atlantis/Things_To_Do/Water_Park/Beaches/Hero/Experiences_Beach.jpg" />
      </div>

      <div className="flex w-full flex-wrap justify-between">
          {/* loop items */}
          <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32">
              {/* <GatsbyImage 
                      image={ image } 
                      alt={ content.image.alt } 
                      className={ `object-cover w-full ` } 
              />  */}
              <div className="flex flex-col">
                  <div className="flex items-center ml-6 h-[75px]">
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
                  <div className="flex items-center ml-6 h-[75px]">
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
                  <div className="flex items-center ml-6 h-[75px]">
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