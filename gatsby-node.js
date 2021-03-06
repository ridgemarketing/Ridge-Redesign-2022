const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const {
    data: {
      allWpPost: { nodes: allPosts },
      allWpPage: { nodes: allPages },
      allWpService: { nodes: allServices },
      allWpProject: { nodes: allProjects }
    },
  } = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          uri
        }
      }
      allWpPage {
        nodes {
          id
          uri
        }
      }
      allWpService {
        nodes {
          id
          uri
        }
      }
      allWpProject {
        nodes {
          id
          uri
        }
      }
    }
  `)

  const postTemplate = path.resolve(`./src/templates/post.js`)
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const serviceTemplate = path.resolve(`./src/templates/service.js`)
  const projectTemplate = path.resolve(`./src/templates/project.js`)

  allPosts.forEach(post => {
    createPage({
      // will be the url for the page
      path: `blog` + post.uri,

      // specify the component template of your choice
      component: slash(postTemplate),

      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
      },
    })
  })


  allPages.forEach(page => {
    createPage({
      // will be the url for the page
      path: page.uri,

      // specify the component template of your choice
      component: slash(pageTemplate),
      // component: slash(flexTemplate),

      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: page.id,
      },
    })
  })

  allServices.forEach(service => {
    createPage({
      // will be the url for the page
      path: service.uri,

      // specify the component template of your choice
      component: slash(serviceTemplate),
      // component: slash(flexTemplate),

      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: service.id,
      },
    })
  })

  allProjects.forEach(project => {
    createPage({
      // will be the url for the page
      path: project.uri,

      // specify the component template of your choice
      component: slash(projectTemplate),
      // component: slash(flexTemplate),

      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: project.id,
      },
    })
  })
}
