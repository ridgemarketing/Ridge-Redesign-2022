import React from "react"
import { graphql } from "gatsby"
import { theme } from "../static/theme"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link }from "gatsby"

const WpPost = ({ data }) =>{
    const content     = data.wpPost;
    const nextPosts   = data.allWpPost;

    let next          = '';
    let previous      = '';

    for(let i =0; nextPosts.edges.length  > i; i++){
        if(nextPosts.edges[i].node.id === content.id){
            next      = nextPosts.edges[i].next.link;
            previous  = nextPosts.edges[i].previous.link;
        }
    }
    
  return (
    <> 
      <header className="container mt-20">
        <h1 className={theme.text.H1_STD + 'mb-9'}> {content.title} </h1>
        <span className={theme.text.P_STD + 'inline'}> By <address className={theme.text.P_BLD + 'inline not-italic'}>{content.author.node.name}</address> on <time pubdate dateTime={content.date} className="inline not-italic">{content.date}</time></span>
        <GatsbyImage className="w-full mt-9" image={content.featuredImage.node.localFile.childImageSharp.gatsbyImageData || ` `} />    
      </header>
      <article className="container blog-container my-9 font-basic-sans">
        <div dangerouslySetInnerHTML={ {__html: content.content} }></div>
      </article>
      <nav className="container mb-20">
        <div className="pre-footer-navigation w-full font-stratos block border-t border-[#c5c5c5] border-solid mt-8 mb-8">
            <div className="w-full flex justify-between mt-8 text-rm-green">
                <Link 
                    to={ '/blog' + previous }
                    className={ 
                        theme.text_links['BASE_STYLING'] + 
                        theme.text_links['STD'] + 
                        theme.text_links['BACK_BASE'] + 
                        theme.text_links['ARW_BACK_GREEN'] } >
                    PREVIOUS ARTICLE
                </Link>
                <Link 
                    to={ '/blog' + next }
                    className={ 
                        theme.text_links['BASE_STYLING'] + 
                        theme.text_links['STD'] + 
                        theme.text_links['FWD_BASE'] + 
                        theme.text_links['ARW_FWD_GREEN'] } >
                    NEXT ARTICLE
                </Link>
            </div>
        </div>
      </nav>
    </>
  )
}
export default WpPost;

export const query = graphql`
  query PostById( $id: String ){

    wpPost(id: {eq: $id}) {
      id
      uri
      title
      content
      author {
        node {
          avatar {
            url
          }
          name
        }
      }
      date
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }

    allWpPost {
      edges {
        node {
          id
        }
        next {
          link
        }
        previous {
          link
        }
      }
    }

  }
` 