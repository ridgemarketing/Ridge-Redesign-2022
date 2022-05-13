require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Ridge Marketing`,
    siteUrl: `https://www.ridgemarketing.com`
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // We'll need to make this an env variable for local, prod, etc environments
        url: process.env.GRAPHQL_ENDPOINT,
      },
    },
    'gatsby-plugin-postcss',
  ]
};