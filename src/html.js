import React from "react"
import PropTypes from "prop-types"
export default function HTML(props) {  

  return (
    <html {...props.htmlAttributes}>
      <head>
      <meta charSet="UTF-8"/>
      <meta httpEquiv="Content-Type" content="text/html;" />
      <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {props.headComponents}
        <link rel="stylesheet" href="https://use.typekit.net/thq8rzi.css"></link>

        <script dangerouslySetInnerHTML={{ __html: `!function(w, d, s, u) {if (w.oaiq) return;
var q = function() {
q.q.push(arguments);
};
q.q = [];
w.oaiq = q;
var j = d.createElement(s);
j.async = 1;
j.src = u;
var f = d.getElementsByTagName(s)[0];
f.parentNode.insertBefore(j, f);
}(window, document, "script", "https://bzrcdn.openai.com/sdk/oaiq.min.js");
oaiq("init", {pixelId: "NRXzCDimo5wSMTzGQtZYuF",debug: true});
`}}></script>
    <script dangerouslySetInnerHTML={{ __html: `oaiq("measure", "registration_completed", {type: "customer_action",amount: 0,currency: "USD"});`}}></script>
      
      </head> 
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div 
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
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
