const path = require(`path`)
const redirects = require("./src/static/redirects.json")
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  // query content for WordPress posts

  redirects.forEach(redirect => 
    createRedirect({
      fromPath: redirect.fromPath,
      toPath: redirect.toPath,
    })
  )

  const {
    data: {
      allWpPost:    { edges: allPosts },
      allWpPage:    { nodes: allPages },
      allWpService: { nodes: allServices },
      allWpProject: { edges: allProjects },
      allWpLander: { nodes: allLanders },
    },
  } = await graphql(`
    query {
      allWpPost(sort: {date: DESC}) {
        edges {
          node {
            id
            uri
          }
          next {
            id
            uri
          }
          previous {
            id
            uri
          }
        }
      }
      allWpPage {
        nodes {
          id
          uri
          isPostsPage
        }
      }
      allWpService {
        nodes {
          id
          uri
        }
      }
      allWpProject {
        edges {
          node {
            id
            uri
            template {
              templateName
            }
          }
        }
      }
      allWpLander {
        nodes {
          id
          uri
        }
      }
    }
  `)

  const postTemplate    = path.resolve(`./src/templates/post.js`)
  const pageTemplate    = path.resolve(`./src/templates/page.js`)
  const serviceTemplate = path.resolve(`./src/templates/service.js`)
  const projectTemplate = path.resolve(`./src/templates/project.js`)
  const landerTemplate  = path.resolve(`./src/templates/lander.js`)

  allPosts.forEach(post => {

    createPage({
      // will be the url for the page
      path: `blog` + post.node.uri,

      // specify the component template of your choice
      component: slash(postTemplate),

      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.node.id,
        previous: post.previous ? post.previous.uri : allPosts[allPosts.length - 1].node.uri,
        next: post.next ? post.next.uri : allPosts[0].node.uri
      },
    })
  })

  allPages.forEach(page => {
    if (page.isPostsPage) {
      page.uri = `/blog/`
    }
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

  allLanders.forEach(lander => {
    createPage({
      // will be the url for the page
      path: lander.uri,

      // specify the component template of your choice
      component: slash(landerTemplate),
      // component: slash(flexTemplate),

      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: lander.id,
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
  
  const filteredProjects = allProjects.filter(project => {
    if (project.node.template && project.node.template.templateName !== "Hidden") {
      return project;
    }
  })
  
  filteredProjects.forEach((project, idx) => {
      createPage({
        // will be the url for the page
        path: project.node.uri,
  
        // specify the component template of your choice
        component: slash(projectTemplate),
        // component: slash(flexTemplate),
  
        // In the ^template's GraphQL query, 'id' will be available
        // as a GraphQL variable to query for this post's data.
        context: {
          id: project.node.id,
          previous: idx === 0 ? filteredProjects[filteredProjects.length - 1].node.uri : filteredProjects[idx - 1].node.uri,
          next: idx === filteredProjects.length - 1 ? filteredProjects[0].node.uri : filteredProjects[idx + 1].node.uri
        },
      })
  })
}
