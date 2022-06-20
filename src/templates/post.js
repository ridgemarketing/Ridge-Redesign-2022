import React from "react"
import { graphql } from "gatsby"

const WpPost = ({ data }) =>{
  
  return (
    <div>
      <h1> {data.wpPost.title} </h1>
      <p> {data.wpPost.content} </p>
    </div>
  )
}
export default WpPost;


export const query = graphql`
  query PostById( $id: String ){
    wpPost(id: {eq: $id}) {
      id
      uri
      title
      content
    }
  }
` 