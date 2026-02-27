const React = require("react")
const Layout = require("./src/components/global/Layout").default


// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
 return <Layout {...props}>{element}</Layout>
}


exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
 setHtmlAttributes({ lang: "en" });
 setHeadComponents([
  <script key="mouseflow" type="text/javascript" dangerouslySetInnerHTML={{ __html: `
   window._mfq = window._mfq || [];
   (function() {
    var mf = document.createElement("script");
    mf.type = "text/javascript"; mf.defer = true;
    mf.src = "//cdn.mouseflow.com/projects/872b2e90-96a2-47de-a37c-019092da20c6.js";
    document.getElementsByTagName("head")[0].appendChild(mf);
   })();
  `}} />
 ]);
};
