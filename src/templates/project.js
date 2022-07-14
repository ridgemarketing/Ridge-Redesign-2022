import React from "react"
import { graphql } from "gatsby"
import FlexibleLayouts from "../layouts/FlexibleLayouts"

const WpProject = ({ data }) =>{
  return (
    <div>
      <div>
          <FlexibleLayouts flexibleLayouts={data.wpProject.flexibleLayouts} />
      </div>
    </div>
  )
}
export default WpProject;


export const query = graphql`
  query ProjectById( $id: String ){
    wpProject(id: {eq: $id}) {
      id
      uri
      title
      content
      ...FlexibleLayoutsProject
    }
  }
` 