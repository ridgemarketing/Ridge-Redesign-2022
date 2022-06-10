import React from "react"
import { graphql } from "gatsby"
import { ThreeUpIcons } from '../layouts/page/ThreeUpIcons.js'
import { theme } from '../static/theme.js'
import FeaturedProjectsCarousel from "../layouts/page/FeaturedProjectsCarousel"

const WpPage = ({ data }) =>{

  return (
    <>
      <FeaturedProjectsCarousel />
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