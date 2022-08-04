import React, { useState, useEffect} from "react"
import { theme, ThemeContext } from "./static/theme"
import PropTypes from "prop-types"
import Layout
 from "./components/global/Layout"
export default function HTML(props) {  

  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <link rel="stylesheet" href="https://use.typekit.net/thq8rzi.css"></link>
      </head> 
        <body {...props.bodyAttributes}>
          {props.preBodyComponents}
          <main
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
          {props.postBodyComponents}
          <footer></footer>
        </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
