import React from "react"
import { graphql } from "gatsby"
import { theme } from '../static/theme'

const Blog = ({data}) => {

  const posts  = data.allWpPost.nodes;
  console.log('blog', posts);
  return ( 
   <>
   <div className="w-full bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url("https://rm2022dev.wpengine.com/wp-content/uploads/2022/07/blog-hero.png")'}}>
      <header className="container">
        <h1 className={theme.text.H1_STD + 'text-rm-white text-left py-12'}>
            The Barn of Brands <span className="text-rm-green">Blog</span>
        </h1>
      </header>
    </div>
   </> 
  )
  
}
export default Blog

export const query = graphql`
query GetBlogPosts {
  allWpPost {
    nodes {
      title
      content
      link
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      categories {
        nodes {
          id
          name
        }
      }
      tags {
        nodes {
          id
          name
        }
      }
    }
  }
}
`