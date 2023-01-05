const React = require("react")
const Layout = require("./src/components/global/Layout").default

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}

exports.onRouteUpdate = () => {
  if (typeof window !== `undefined`) { window.scrollTo(0, 0)}
}

exports.shouldUpdateScroll = args => {
   return false;
};