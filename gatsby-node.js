const path = require(`path`)
const redirects = require("./src/static/redirects.json")
const { slash } = require(`gatsby-core-utils`)

const CMS_URL  = `https://cms.ridgemarketing.com`
const SITE_URL = `https://ridgemarketing.com`

const rewriteUrl = url =>
  process.env.NODE_ENV === `production` && typeof url === `string`
    ? url.replace(CMS_URL, SITE_URL)
    : url

// const rewriteUrl = url =>
// typeof url === `string` ? url.replace(CMS_URL, SITE_URL) : url


exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    WpMediaItem: {
      sourceUrl: {
        resolve(source) {
          return rewriteUrl(source.sourceUrl)
        },
      },
      mediaItemUrl: {
        resolve(source) {
          return rewriteUrl(source.mediaItemUrl)
        },
      },
      originalSourceUrl: {
        type: `String`,
        resolve(source) {
          return source.sourceUrl
        },
      },
    }
  })
}

exports.onPostBuild = async ({ graphql, reporter }) => {
  if (process.env.NODE_ENV !== `production`) return

  const fs    = require(`fs`)
  const https = require(`https`)
  const http  = require(`http`)
  const path  = require(`path`)

  const result = await graphql(`
    query {
      allWpMediaItem(filter: { mimeType: { eq: "image/svg+xml" } }) {
        nodes {
          originalSourceUrl
        }
      }
    }
  `)

  if (result.errors) {
    reporter.warn(`SVG download: GraphQL query failed`)
    return
  }

  const svgs = result.data.allWpMediaItem.nodes
  reporter.info(`SVG download: fetching ${svgs.length} files`)

  const download = (url, dest) => new Promise((resolve, reject) => {
    const client = url.startsWith(`https`) ? https : http
    const file = fs.createWriteStream(dest)
    client.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close()
        fs.unlinkSync(dest)
        return download(res.headers.location, dest).then(resolve).catch(reject)
      }
      res.pipe(file)
      file.on(`finish`, () => file.close(resolve))
    }).on(`error`, (err) => {
      fs.unlink(dest, () => {})
      reject(err)
    })
  })

  await Promise.all(svgs.map(async ({ originalSourceUrl }) => {
    if (!originalSourceUrl) return
    try {
      const urlPath  = new URL(originalSourceUrl).pathname
      const dest     = path.join(`public`, urlPath)
      const dir      = path.dirname(dest)
      fs.mkdirSync(dir, { recursive: true })
      if (fs.existsSync(dest)) return
      await download(originalSourceUrl, dest)
    } catch (err) {
      reporter.warn(`SVG download failed: ${originalSourceUrl} — ${err.message}`)
    }
  }))

  reporter.info(`SVG download: complete`)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  // query content for WordPress posts

  redirects.forEach(redirect =>
    createRedirect({
      fromPath    : redirect.fromPath,
      toPath      : redirect.toPath,
      isPermanent : true,
      force       : true,
    })
  )

  // Proxy WordPress media so images are served from ridgemarketing.com
  createRedirect({
    fromPath   : `/wp-content/uploads/*`,
    toPath     : `https://cms.ridgemarketing.com/wp-content/uploads/:splat`,
    statusCode : 200,
  })

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

