require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Ridge Marketing`,
    siteUrl: `http://www.ridgemarketing.com`
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      
      options: {
        production: {
          allow404Images: true,
        },
        html: { useGatsbyImage: false },
        url:
        // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
          process.env.WPGRAPHQL_URL_PROD ||
          `https://rm2022.wpengine.com/graphql`,
          // `http://ridge-marketing-2022.local/graphql`,
        schema: {
          //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: `Wp`,
        },
        develop: {
          //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: true,
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 10,
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          allWpContentNode(filter: {nodeType: {in: ["Post", "Page", "Project", "Service"]}}) {
            nodes {
              ... on WpPost {
                uri
                modifiedGmt
              }
              ... on WpPage {
                uri
                modifiedGmt
              }
              ... on WpProject {
                uri
                modifiedGmt
              }
              ... on WpService {
                uri
                modifiedGmt
              }
            }
          }
        }
      `,
        resolveSiteUrl: () => `http://www.ridgemarketing.com`,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allWpContentNode: { nodes: allWpNodes },
        }) => {
          const wpNodeMap = allWpNodes.reduce((acc, node) => {
            const { uri } = node
            acc[uri] = node

            return acc
          }, {})

          return allPages.map(page => {
            return { ...page, ...wpNodeMap[page.path] }
          })
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NV9M24V",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        enableWebVitalsTracking: true,
      },
    },
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    'gatsby-plugin-react-helmet'
  ]
};
