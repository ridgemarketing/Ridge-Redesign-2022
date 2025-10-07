import React, { useContext, useEffect, useRef } from "react"
import { graphql } from "gatsby"
// import Seo from 'gatsby-plugin-wpgraphql-seo'
import FlexibleLayouts from "../layouts/FlexibleLayouts"
import PageHeader from "../layouts/layouts/PageHeader"
import CustomHeader from "../components/global/headerColor"
import { theme, ThemeContext } from "../static/theme"

export const Head = ({data}) => (
  <>
    <title>{data.wpLander.seo.title}</title>
    <link rel="icon" type="image/x-icon" href={data.allWp.nodes[0].globalSettings.globalSettings.logos.favicon.sourceUrl}></link>

    <meta name="description" content={data.wpLander.seo.opengraphDescription} />
    <meta name="title" content={data.wpLander.seo.title}/>
    <meta name="pageType" content={data.wpLander.seo.schema.pageType}/>
    <meta name="keywords" content={data.wpLander.seo.metaKeywords}/>
    <meta name="author" content={data.wpLander.seo.opengraphAuthor}/>

    {data.wpLander.seo.metaRobotsNoindex === 'noindex' &&
      <>
        <meta name="robots" content="noindex" />
        <meta name="googlebot-news" content="noindex" />
      </>
    }
    {data.wpLander.seo.metaRobotsNoFollow === 'nofollow' &&
       <meta name="robots" content={data.wpLander.seo.metaRobotsNoFollow} />
    }

    <meta property="og:type" content={data.wpLander.seo.opengraphType}/>
    <meta property="og:author" content={data.wpLander.seo.opengraphAuthor}/>
    <meta property="og:url" content={data.wpLander.seo.opengraphUrl}/>
    <meta property="og:title" content={data.wpLander.seo.opengraphTitle}/>
    <meta property="og:description" content={data.wpLander.seo.opengraphDescription}/>
    {data.wpLander.seo.opengraphImage &&
      <meta property="og:image" content={data.wpLander.seo.opengraphImage.sourceUrl}/>
    }

    <meta property="twitter:card" content="summary_large_image"/>
    <meta property="twitter:url" content={data.wpLander.seo.opengraphUrl}/>
    <meta property="twitter:title" content={data.wpLander.seo.twitterTitle}/>
    <meta property="twitter:description" content={data.wpLander.seo.twitterDescription}/>
    {data.wpLander.seo.twitterImage &&
      <meta property="twitter:image" content={data.wpLander.seo.twitterImage.sourceUrl}/>
    }
    {data.wpLander.seo.fullHead}
  </>
)

// export const Head = ({data}) => (
//   <>
//     <link rel="icon" type="image/x-icon" href={data.allWp.nodes[0].globalSettings.globalSettings.logos.favicon.sourceUrl}></link>
//   </>
// )

const WpLander = ({ data, location }) => {
  console.log(data)
  let color     = 'black';
  const context = useRef(useContext(ThemeContext));

  useEffect(() => {
    context.current.updateAccentFunction(theme.colors.primary.accent);
    context.current.updateSecondaryFunction(theme.colors.secondary.accent);
  }, []);

    return (
      <>
        <CustomHeader color={color} />
        {data.wpLander.pageHeader &&
          <PageHeader layoutData={data.wpLander.pageHeader.pageHeader} />
        }
        {data.wpLander.flexibleLayouts && 
          <FlexibleLayouts location={location} flexibleLayouts={data.wpLander.flexibleLayouts} />
        }
      </>
    )
}
export default WpLander;

export const query = graphql`
  query LanderById($id: String) {
    wpLander(id: {eq: $id}) {
      id
      uri
      title
      landingPages {
        showFooter
      }
      content
      ...PageHeaderLander
      ...FlexibleLayoutsLander
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
// ...PortfolioHeader