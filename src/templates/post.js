import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
// import Seo from 'gatsby-plugin-wpgraphql-seo'
import { theme } from "../static/theme"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link }from "gatsby"
import Parser from "../components/global/Parser"
import { ThemeContext } from "../static/theme"
import { SeoPopup } from "../components/SeoPopup"

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
        <meta property="og:url" content={`https://www.ridgemarketing.com/blog${data?.wpPost?.uri}`}/>
        <meta property="og:title" content={data?.wpPost?.seo?.opengraphTitle}/>
        <meta property="og:description" content={data?.wpPost?.seo?.opengraphDescription}/>
        {data?.wpPost?.seo?.opengraphImage &&
          <meta property="og:image" content={data?.wpPost?.seo?.opengraphImage?.sourceUrl}/>
        }

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={`https://www.ridgemarketing.com/blog${data?.wpPost?.uri}`}/>
        <meta property="twitter:title" content={data?.wpPost?.seo?.twitterTitle || data?.wpPost?.seo?.opengraphTitle}/>
        <meta property="twitter:description" content={data?.wpPost?.seo?.twitterDescription || data?.wpPost?.seo?.opengraphDescription}/>
        {data?.wpPost?.seo?.twitterImage &&
          <meta property="twitter:image" content={data?.wpPost?.seo?.twitterImage?.sourceUrl}/>
        }

        {/* Canonical */}
        {data?.wpPost?.seo?.canonical && (
          <link
            rel="canonical"
            href={`https://www.ridgemarketing.com${data.wpPost.seo.canonical}`}
          />
        )}

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content={`https://www.ridgemarketing.com${data?.wpPost?.uri}`}
        />
        <meta
          name="twitter:title"
          content={data?.wpPost?.seo?.twitterTitle || data?.wpPost?.seo?.title}
        />
        <meta
          name="twitter:description"
          content={data?.wpPost?.seo?.twitterDescription || data?.wpPost?.seo?.metaDesc}
        />
        <meta
          name="twitter:image"
          content={
            data?.wpPost?.seo?.twitterImage?.sourceUrl ||
            "https://www.ridgemarketing.com/social-default.jpg"
          }
        />

        {/* JSON-LD Structured Data */}
        {data?.wpPost?.seo?.schema?.raw && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: data.wpPost.seo.schema.raw }}
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

const WpPost = ({ data, pageContext }) => {

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
      <style>
        {`            
          .showMobile, .showDesktop {
            display:none;
          }
          @media screen and (max-width:768px) {
            .showMobile {
              display:block;
            }
          }
          @media screen and (min-width:768px) {
            .showDesktop {
              display:block;
            }
          }
        `}
      </style>
      {data.wpPost.uri === '/seo-vs-aeo-vs-geo/' && (
        <>
        <SeoPopup />
        <style>{`
            .blog-container .large img { 
              max-width:100%; 
            }
            @media screen and (max-width:1024px) {
              .wp-block-media-text.is-stacked-on-mobile {
                display:flex;
                flex-direction:column-reverse;
              }
            }
            @media screen and (min-width:1024px){
                figure.wp-block-media-text__media{
                  float: right;
                  width: 600px;
                  margin-left: 70px;
                }
            }
            table{
              width:100%;
              border-collapse:collapse;
              border:2px solid black;
              overflow:scroll;
            }
            .wp-block-table {
              width:100%;
              overflow:scroll;
              margin-bottom:60px;
            }
            @media screen and (min-width:640px){
              .wp-block-table, table {
                overflow: hidden;
              }
            }
            thead{
              text-align:left;
              background-color:#1f9da5;
            }
            thead th{
              color:white;
              font-weight:700;
              font-size:21px;
              line-height:28px;
              padding:10px 12px;
              border:1px solid black;
            }
            tbody td{
              font-size:21px;
              line-height:28px;
              padding:10px 12px;
              border:1px solid black;
              font-weight:300;
            }

            .sideheader table {
              border:2px solid black;
              font-weight:300;
              max-width:658px;
            }
            .sideheader td:first-child{
              background-color:#1f9da5;
              color:white;
              font-weight:600;
              font-size:26px;
              line-height:30px;
              text-align:center;
              padding:20px 12px;
              border:2px solid black;
            }
            @media screen and (min-width:768px) {
              .sideheader td:first-child{
                width:220px;
              }
            }
            .sideheader td:first-child strong{
              font-weight:600;
            }
            .sideheader td:last-child{
              background-color:white;
              color:black;
              font-size:21px;
              line-height:28px;
              text-align:center;
              padding:20px 12px;
              border:2px solid black;
            }
            hr {
              margin-bottom:2.5rem;
            }

            .faq-section{
              display:flex;
              flex-direction:column;
              gap:16px;
            }
            .faq-section details{
              background-color:#f1f5f5;
              border-radius:5px;
              padding:24px;
            }
            .faq-section summary{
              font-weight:700;
              font-size:21px;
              line-height:28px;
              color:black;
              cursor:pointer;
              list-style:none;
              display:flex;
              justify-content:space-between;
              align-items:center;
            }
            .faq-section summary::-webkit-details-marker{
              display:none;
            }
            .faq-section summary::after{
              content:'+';
              font-size:24px;
              font-weight:400;
              color:#A9CF38;
              margin-left:16px;
            }
            .faq-section details[open] summary::after{
              content:'−';
            }
            .faq-section details p{
              font-weight:300;
              font-size:21px;
              line-height:28px;
              color:black;
              margin-top:16px;
              margin-bottom:0;
            }
            .showMobile, .showDesktop {
              display:none;
            }
            @media screen and (max-width:768px) {
              .showMobile {
                display:block;
              }
            }
            @media screen and (min-width:768px) {
              .showDesktop {
                display:block;
              }
            }
        `}</style>
        </>
      )}
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