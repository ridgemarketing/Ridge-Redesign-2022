import React from "react"
import { graphql } from "gatsby"
import FlexibleLayouts from "../layouts/FlexibleLayouts"
import ProjectHeader from "../layouts/page/ProjectHeader"

const WpProject = ({ data }) =>{
  return (
    <div>
      {data.wpProject && 
        <div>
          <ProjectHeader content={data.wpProject.projectHeader} info={data.wpProject.projectInformation} />
        </div>
      }
      {data.wpProject.flexibleLayouts && 
        <div>
            <FlexibleLayouts flexibleLayouts={data.wpProject.flexibleLayouts} />
        </div>
      }
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
      ...ProjectHeader
    }
  }
` 