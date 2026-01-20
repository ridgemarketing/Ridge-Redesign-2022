import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
// import Seo from 'gatsby-plugin-wpgraphql-seo'
import { theme } from "../static/theme"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link }from "gatsby"
import Parser from "../components/global/Parser"
import { ThemeContext } from "../static/theme"

export const Head = ({data}) => {
  if (data?.wpPost?.blogFields?.additionalBlogFields?.previewMode) {
    return (
        <meta name="robots" content="noindex"/>
    )
  }
  if (!data?.wpPost?.blogFields?.additionalBlogFields?.previewMode) {
    return(
      <>
        <title>{data?.wpPost?.seo?.title}</title>

        <link rel="icon" type="image/x-icon" href={data?.allWp?.nodes[0]?.globalSettings?.globalSettings?.logos?.favicon?.sourceUrl}></link>

        <meta name="description" content={data?.wpPost.seo.opengraphDescription} />
        <meta name="title" content={data?.wpPost?.seo?.title}/>
        <meta name="pageType" content={data?.wpPost?.seo?.schema?.pageType}/>
        <meta name="keywords" content={data?.wpPost?.seo?.metaKeywords}/>
        <meta name="author" content={data?.wpPost?.seo?.opengraphAuthor}/>

        {data?.wpPost?.seo?.metaRobotsNoindex === 'noindex' &&
          <>
            <meta name="robots" content="noindex" />
            <meta name="googlebot-news" content="noindex" />
          </>
        }
        {data?.wpPost?.seo?.metaRobotsNoFollow  === 'nofollow' &&
          <meta name="robots" content={data?.wpPost?.seo?.metaRobotsNoFollow} />
        }

        <meta property="og:type" content={data?.wpPost?.seo?.opengraphType}/>
        <meta property="og:author" content={data?.wpPost?.seo?.opengraphAuthor}/>
        <meta property="og:url" content={data?.wpPost?.seo?.opengraphUrl}/>
        <meta property="og:title" content={data?.wpPost?.seo?.opengraphTitle}/>
        <meta property="og:description" content={data?.wpPost?.seo?.opengraphDescription}/>
        {data?.wpPost?.seo?.opengraphImage &&
          <meta property="og:image" content={data?.wpPost?.seo?.opengraphImage?.sourceUrl}/>
        }

        {/* Canonical */}
        {post.seo.canonical && (
          <link
            rel="canonical"
            href={`https://www.ridgemarketing.com${post.seo.canonical}`}
          />
        )}

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content={`https://www.ridgemarketing.com${post.uri}`}
        />
        <meta
          name="twitter:title"
          content={post.seo.twitterTitle || post.seo.title}
        />
        <meta
          name="twitter:description"
          content={post.seo.twitterDescription || post.seo.metaDesc}
        />
        <meta
          name="twitter:image"
          content={
            post.seo.twitterImage?.sourceUrl ||
            "https://www.ridgemarketing.com/social-default.jpg"
          }
        />

        {/* JSON-LD Structured Data */}
        {post.seo.schema?.raw && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: post.seo.schema.raw }}
          />
        )}

        {data?.wpPost?.seo?.fullHead}
      </>
    )
  }
}

// export const Head = ({data}) => (
//   <>
//     <link rel="icon" type="image/x-icon" href={data.allWp.nodes[0].globalSettings.globalSettings.logos.favicon.sourceUrl}></link>
//   </>
// )

const WpPost = ({ data, pageContext }) =>{

    const content       = data.wpPost;
    const context       = pageContext;
    const themeContext  = useContext(ThemeContext);

    const links = {
      prev: context.previous,
      next: context.next
    }
    content.date = new Date(content.date).toLocaleDateString('default', { month: 'long', year: 'numeric', day:'numeric' });

    useEffect(() => {
      themeContext.updateHeaderBkgcolor('white');
    }, []);
    
  return (
    <>
      {/* <Seo post={content} /> */}
      <hgroup className="container pt-20">
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
      blogFields {
        additionalBlogFields {
          previewMode
        }
      }
      content
      status
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
        focuskw
        metaKeywords
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphTitle
        opengraphDescription
        opengraphType
        opengraphUrl
        opengraphAuthor
        opengraphImage {
            altText
            sourceUrl
            srcSet
        }
        twitterTitle
        twitterDescription
        twitterImage {
            altText
            sourceUrl
            srcSet
        }
        canonical
        cornerstone
        schema {
            articleType
            pageType
            raw
        }
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