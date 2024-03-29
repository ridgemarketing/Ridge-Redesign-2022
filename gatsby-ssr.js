const React = require("react")
const Layout = require("./src/components/global/Layout").default

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}