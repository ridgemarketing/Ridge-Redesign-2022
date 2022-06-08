import React from "react"
import { graphql } from "gatsby"
import { ThreeUpIcons } from '../layouts/page/ThreeUpIcons.js'
import { theme } from '../static/theme.js'

const WpPage = ({ data }) =>{

  return (
    <>
      <div className="mt-12 flex w-full flex-wrap justify-between">

      <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32">
          <img className="h-[50px] mt-[12.5px] w-min" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png" alt=""/>
          
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