import React, { useRef, useEffect, useState } from "react"
import { graphql } from "gatsby"
import FlexibleLayouts from "../layouts/FlexibleLayouts"
import PageHeader from "../layouts/page/PageHeader"

const WpPage = ({ data }) =>{
  return (
    <div>
      {/* <h1> {data.wpPage.title} </h1> */}
      {/* <p> {data.wpPage.content} </p> */}
      {data.wpPage.pageHeader &&
        <PageHeader layoutContent={data.wpPage.pageHeader.pageHeader} />
      }
      <div>
          <FlexibleLayouts flexibleLayouts={data.wpPage.flexibleLayouts} />
      </div>
    </div>
  )
}
export default WpPage;


export const query = graphql`
  query PageById($id: String) {
    wpPage(id: {eq: $id}) {
      id
      uri
      title
      content
      ...FlexibleLayoutsPage

    }
  } 
`