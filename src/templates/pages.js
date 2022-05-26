import React from "react"
import { graphql } from "gatsby"

const WpPage = ({ data }) =>{
  console.log(data);
  return (
    <div>
      <h1> {data.wpPage.title} </h1>
      <p> {data.wpPage.content} </p>
      {data.wpPage.quickGatsbyTestField.basicTextInput}
    </div>
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
      quickGatsbyTestField {
        basicTextInput
      }
    }
  }
`