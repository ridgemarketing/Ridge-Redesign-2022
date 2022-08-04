import React from "react"
import { graphql } from "gatsby"
import FlexibleLayouts from "../layouts/FlexibleLayouts"
import ProjectHeader from "../layouts/page/ProjectHeader"
import PostNav from "../components/PostNav"
import Layout from "../components/global/Layout"


const WpProject = ({ data, pageContext }) => {
  const project = pageContext
  const links = {
    prev: project.previous,
    next: project.next
  }
  return (
    <Layout>
      <div>
        {data.wpProject.projectHeader && 
          <div>
            <ProjectHeader content={data.wpProject.projectHeader} info={data.wpProject.projectInformation} />
          </div>
        }
        {data.wpProject.flexibleLayouts && 
          <div>
              <FlexibleLayouts flexibleLayouts={data.wpProject.flexibleLayouts} />
          </div>
        }
        <PostNav links={links} postType={`project`} />
      </div>
    </Layout>
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