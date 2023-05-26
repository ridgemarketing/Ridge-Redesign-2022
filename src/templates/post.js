import React from "react"
import { graphql } from "gatsby"
import { theme } from "../static/theme"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link }from "gatsby"
import Parser from "../components/global/Parser"

export const Head = ({data}) => (
  <>
    <title>{data.wpPost.seo.title}</title>
    <link rel="icon" type="image/x-icon" href={data.allWp.nodes[0].globalSettings.globalSettings.logos.favicon.sourceUrl}></link>

    <meta name="description" content={data.wpPost.metaDesc} />
    <meta name="title" content={data.wpPost.seo.title}/>
    <meta name="pageType" content={data.wpPost.seo.schema.pageType}/>
    <meta name="keywords" content={data.wpPost.seo.metaKeywords}/>
    <meta name="author" content={data.wpPost.seo.opengraphAuthor}/>

    <meta property="og:type" content={data.wpPost.seo.opengraphType}/>
    <meta property="og:author" content={data.wpPost.seo.opengraphAuthor}/>
    <meta property="og:url" content={data.wpPost.seo.opengraphUrl}/>
    <meta property="og:title" content={data.wpPost.seo.opengraphTitle}/>
    <meta property="og:description" content={data.wpPost.seo.opengraphDescription}/>
    {data.wpPost.seo.opengraphImage &&
      <meta property="og:image" content={data.wpPost.seo.opengraphImage.sourceUrl}/>
    }

    <meta property="twitter:card" content="summary_large_image"/>
    <meta property="twitter:url" content={data.wpPost.seo.opengraphUrl}/>
    <meta property="twitter:title" content={data.wpPost.seo.twitterTitle}/>
    <meta property="twitter:description" content={data.wpPost.seo.twitterDescription}/>
    {data.wpPost.seo.twitterImage &&
      <meta property="twitter:image" content={data.wpPost.seo.twitterImage.sourceUrl}/>
    }
    {data.wpPost.seo.fullHead}
  </>
)

const WpPost = ({ data, pageContext }) =>{
    const content     = data.wpPost;
    const context     = pageContext;
    const links = {
      prev: context.previous,
      next: context.next
    }
    content.date = new Date(content.date).toLocaleDateString('default', { month: 'long', year: 'numeric', day:'numeric' });
    
  return (
    <>
      <hgroup className="container mt-20">
        <h1 className={theme.text.H1_STD + 'mb-9'}> {content.title} </h1>
        <div className="flex items-center">
          {content.author.node.users.avatar && 
            <GatsbyImage className="w-[70px] h-[70px] mr-5 rounded-full object-center object-cover" image={content.author.node.users.avatar.localFile.childImageSharp.gatsbyImageData} alt={content.author.node.name} />
          }
          <span className={theme.text.P_STD + 'inline'}>By <address className={theme.text.P_BLD + 'inline not-italic'}>{content.author.node.name}</address> on <time pubdate="pubdate" dateTime={content.date} className="inline not-italic">{content.date}</time></span>
        </div>
        <GatsbyImage className="w-full mt-9" image={content.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={`featured image`} />    
      </hgroup>
      <article className="container blog-container my-9 font-basic-sans">
        <div dangerouslySetInnerHTML={ {__html: Parser(content.content, 'blog')} }></div>
      </article>
      <nav className="container mb-20">
        <div className="pre-footer-navigation w-full font-stratos block border-t border-[#c5c5c5] border-solid mt-8 mb-8">
            <div className="w-full flex justify-between mt-8 text-rm-green">
              {links.prev && 
                <Link 
                    to={ '/blog' + links.prev }
                    className={ 
                        theme.text_links['BASE_STYLING'] + 
                        theme.text_links['STD'] + 
                        theme.text_links['BACK_BASE'] + 
                        theme.text_links['ARW_BACK_GREEN'] } >
                    PREVIOUS ARTICLE
                </Link>
              }
              {links.next &&
                <Link 
                    to={ '/blog' + links.next }
                    className={ 
                        theme.text_links['BASE_STYLING'] + 
                        theme.text_links['STD'] + 
                        theme.text_links['FWD_BASE'] + 
                        theme.text_links['ARW_FWD_GREEN'] } >
                    NEXT ARTICLE
                </Link>
              }
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
          users {
            avatar {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
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
      seo {
        title
        metaDesc
        opengraphDescription
        opengraphImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          sourceUrl
        }
        twitterTitle
        twitterDescription
        twitterImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          sourceUrl
        }
        schema {
          pageType
        }
        opengraphTitle
        opengraphType
        opengraphUrl
        metaKeywords
        metaRobotsNofollow
        opengraphAuthor
        metaRobotsNoindex
      }
    }
  allWp {
    nodes {
      globalSettings {
        globalSettings {
          logos {
            favicon {
              sourceUrl
            }
          }
        }
      }
    }
  }
}
` 