import React from "react"
import { graphql } from "gatsby"
import FlexibleLayouts from "../layouts/FlexibleLayouts"
import ProjectHeader from "../layouts/page/ProjectHeader"

import Header from "../components/global/Header"
import Footer from "../components/global/Footer"

const WpProject = ({ data }) =>{
  return (
    <>
    <Header/>
    <main>
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
    </main>
    <Footer/>
    </>
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