import React from "react"
import { graphql } from "gatsby"
import { theme } from "../static/theme"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const WpPost = ({ data }) =>{
    const content     = data.wpPost;
    const nextPosts   = data.allWpPost.nodes;
    let counter       = 1;
    
    let next          = '';
    let previous      = '';

    if(nextPosts[counter + 1].id === content.id){
        next = nextPosts[counter].link;
    }else{
        next = nextPosts[counter + 1].link;
    }
    
    if(nextPosts[counter - 1].id === content.id){
        previous = nextPosts[counter].link;
    }else{
        previous = nextPosts[counter - 1].link;
    }
    
    console.log(content,next, previous);
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

    allWpPost(limit: 3) {
        nodes {
          id
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