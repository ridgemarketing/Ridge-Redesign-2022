const React = require("react")
const Layout = require("./src/components/global/Layout").default

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.onRouteUpdate = () => {
  if (typeof window !== `undefined`) { window.scrollTo(0, 0)}
}

exports.shouldUpdateScroll = args => {
    return false;
};