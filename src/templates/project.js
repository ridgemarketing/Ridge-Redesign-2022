import React from "react"
import { graphql } from "gatsby"
import Seo from 'gatsby-plugin-wpgraphql-seo'
import FlexibleLayouts from "../layouts/FlexibleLayouts"
import ProjectHeader from "../layouts/layouts/ProjectHeader"
import PostNav from "../components/PostNav"

// export const Head = ({data}) => (
//   <>
//     <title>{data.wpProject.seo.title}</title>
//     <link rel="icon" type="image/x-icon" href={data.allWp.nodes[0].globalSettings.globalSettings.logos.favicon.sourceUrl}></link>

//     <meta name="description" content={data.wpProject.seo.opengraphDescription} />
//     <meta name="title" content={data.wpProject.seo.title}/>
//     <meta name="pageType" content={data.wpProject.seo.schema.pageType}/>
//     <meta name="keywords" content={data.wpProject.seo.metaKeywords}/>
//     <meta name="author" content={data.wpProject.seo.opengraphAuthor}/>

//     {data.wpProject.seo.metaRobotsNoindex === 'noindex' &&
//       <>
//       <meta name="robots" content="noindex" />
//       <meta name="googlebot-news" content="noindex" />
//       </>
//     }
//     {data.wpProject.seo.metaRobotsNoFollow === 'nofollow' &&
//        <meta name="robots" content={data.wpProject.seo.metaRobotsNoFollow} />
//     }

//     <meta property="og:type" content={data.wpProject.seo.opengraphType}/>
//     <meta property="og:author" content={data.wpProject.seo.opengraphAuthor}/>
//     <meta property="og:url" content={data.wpProject.seo.opengraphUrl}/>
//     <meta property="og:title" content={data.wpProject.seo.opengraphTitle}/>
//     <meta property="og:description" content={data.wpProject.seo.opengraphDescription}/>
//     {data.wpProject.seo.opengraphImage &&
//       <meta property="og:image" content={data.wpProject.seo.opengraphImage.sourceUrl}/>
//     }

//     <meta property="twitter:card" content="summary_large_image"/>
//     <meta property="twitter:url" content={data.wpProject.seo.opengraphUrl}/>
//     <meta property="twitter:title" content={data.wpProject.seo.twitterTitle}/>
//     <meta property="twitter:description" content={data.wpProject.seo.twitterDescription}/>
//     {data.wpProject.seo.twitterImage &&
//       <meta property="twitter:image" content={data.wpProject.seo.twitterImage.sourceUrl}/>
//     }
//     {data.wpProject.seo.fullHead}
//   </>
// )

export const Head = ({data}) => (
  <>
    <link rel="icon" type="image/x-icon" href={data.allWp.nodes[0].globalSettings.globalSettings.logos.favicon.sourceUrl}></link>
  </>
)

const WpProject = ({ data, pageContext }) => {
  const project = pageContext
  const links = {
    prev: project.previous,
    next: project.next
  }
  return (
    <>
        <Seo post={data.wpProject} />
        {data.wpProject.projectHeader && 
            <ProjectHeader content={data.wpProject.projectHeader} info={data.wpProject.projectInformation} />
        }
        {data.wpProject.flexibleLayouts && 
            <FlexibleLayouts flexibleLayouts={data.wpProject.flexibleLayouts} />
        }
        {links &&
          <PostNav links={links} postType={`project`} />
        }
    </>
  )
}
export default WpProject;

export const query = graphql`
  query ProjectById( $id: String ){
    wpProject(id: {eq: $id}) {
      id
      uri
      title
      content
      ...FlexibleLayoutsProject
      ...ProjectHeader
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