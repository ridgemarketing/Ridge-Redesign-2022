import React from "react"
import { graphql } from "gatsby"
import FlexibleLayouts from "../layouts/FlexibleLayouts"

const WpService = ({ data }) =>{
  return (
    <div>
      <h1> {data.wpService.title} </h1>
      <p> {data.wpService.content} </p>
      <div>
          <FlexibleLayouts flexibleLayouts={data.wpService.flexibleLayouts} />
      </div>
    </div>
  )
}
export default WpService;


// export const query = graphql`
//   query ServiceById( $id: String ){
//     wpService(id: {eq: $id}) {
//       id
//       uri
//       title
//       content
//       ...FlexibleLayoutsService
//     }
//   }
// ` 