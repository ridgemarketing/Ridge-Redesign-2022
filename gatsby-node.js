const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

 //pages
  const pageResults = await graphql(`
        {
            allWpPage {
                nodes {
                  id
                  uri
                  title
                  content
                  flexibleLayouts {
                    fieldGroupName
                    layouts {
                      ... on WpPage_Flexiblelayouts_Layouts_CenteredContent {
                        fieldGroupName
                        layoutCenteredContent {
                          fieldGroupName
                          layoutContent {
                            body
                            componentButtonGroup {
                              componentButton {
                                colors {
                                  fieldGroupName
                                  hover
                                }
                                icon
                                link {
                                  target
                                  title
                                  url
                                }
                                style
                              }
                            }
                          }
                          layoutSettings {
                            anchorId
                            backgroundColor
                            padding {
                              bottom
                              top
                              fieldGroupName
                            }
                            id
                            fieldGroupName
                            classes
                          }
                        }
                      }
                      ... on WpPage_Flexiblelayouts_Layouts_CenteredTextWIcons {
                        fieldGroupName
                      }
                    }
                  }
                }
              }
        }
  `)

   if(pageResults?.errors){ }

   const { allWpPage } = pageResults?.data;
   const PageTemplate = path.resolve('./src/templates/pages.js')
   allWpPage.nodes.map( page => {
        actions.createPage({
            path: page.uri,
            component: PageTemplate,
            context: page
        })
    })

 //posts
  const postResults = await graphql(`
     {
        allWpPost {
          nodes {
            id
            uri
            title
            content
          }
        }
      }
  `)

    if(postResults?.errors){ }
    
    const { allWpPost } = postResults?.data;
    const postTemplate = path.resolve(`./src/templates/posts.js`)

    allWpPost.nodes.map( post => {
        actions.createPage({
            path: post.uri,
            component: postTemplate,
            context: post
        })   
    })

}