import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { theme } from '../static/theme.js'

const WpPage = ({ data }) =>{

  return (
    <>
      <div className="mt-12 flex w-full flex-wrap justify-between">

        <div className="flex flex-col justify-center w-full md:w-[48%] lg:w-[31%] mb-12">
            {/* <GatsbyImage image={data.image} alt={``} className={ `object-cover w-full ` } /> */}
            <StaticImage 
                    src='https://i.insider.com/5bfec49248eb12058423acf7' 
                    alt={``} 
                    className={ `object-cover w-full ` }
                    /> 
             <Link className={ theme.text_links['BASE_STYLING'] + theme.text_links['STD'] + theme.text_links['FWD_BASE'] + theme.text_links['ARW_FWD_BLACK'] + 'mt-3' } to={'#'}>Project Name</Link>
        </div>
        <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12">
            {/* <GatsbyImage image={data.image} alt={``} className={ `object-cover w-full ` } /> */}
            <StaticImage 
                    src='https://i.insider.com/5bfec49248eb12058423acf7' 
                    alt={``} 
                    className={ `object-cover w-full ` }
                    /> 
        </div>
        <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12 ">
            {/* <GatsbyImage image={data.image} alt={``} className={ `object-cover w-full ` } /> */}
            <StaticImage 
                    src='https://i.insider.com/5bfec49248eb12058423acf7' 
                    alt={``} 
                    className={ `object-cover w-full ` }
                    /> 
        </div>
        <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12 ">
            {/* <GatsbyImage image={data.image} alt={``} className={ `object-cover w-full ` } /> */}
            <StaticImage 
                    src='https://i.insider.com/5bfec49248eb12058423acf7' 
                    alt={``} 
                    className={ `object-cover w-full ` }
                    /> 
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