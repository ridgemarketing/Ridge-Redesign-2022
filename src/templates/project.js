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
        {data.wpProject.projectHeader && 
            <ProjectHeader content={data.wpProject.projectHeader} info={data.wpProject.projectInformation} />
        }
        {data.wpProject.flexibleLayouts && 
            <FlexibleLayouts flexibleLayouts={data.wpProject.flexibleLayouts} />
        }
        <PostNav links={links} postType={`project`} />
      <Footer/>
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