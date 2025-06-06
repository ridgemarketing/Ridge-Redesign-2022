import React, { useContext, useEffect, useRef } from "react"
import { graphql } from "gatsby"
import Seo from 'gatsby-plugin-wpgraphql-seo'
import FlexibleLayouts from "../layouts/FlexibleLayouts"
import Blog from "./blog"
import HomeHero from "../layouts/layouts/HomeHero"
import PageHeader from "../layouts/layouts/PageHeader"
import Menu from "../components/global/FooterMenu"
import { Container } from "../components/global/Wrappers"
import CustomHeader from "../components/global/headerColor"
import PortfolioHeader from "../layouts/layouts/PortfolioHeader"
import { theme, ThemeContext } from "../static/theme"
import Wrapped2024 from "../layouts/layouts/wrapped2024"

// export const Head = ({data}) => (
//   <>
//     <title>{data.wpPage.seo.title}</title>
//     <link rel="icon" type="image/x-icon" href={data.allWp.nodes[0].globalSettings.globalSettings.logos.favicon.sourceUrl}></link>

//     <meta name="description" content={data.wpPage.seo.opengraphDescription} />
//     <meta name="title" content={data.wpPage.seo.title}/>
//     <meta name="pageType" content={data.wpPage.seo.schema.pageType}/>
//     <meta name="keywords" content={data.wpPage.seo.metaKeywords}/>
//     <meta name="author" content={data.wpPage.seo.opengraphAuthor}/>

//     {data.wpPage.seo.metaRobotsNoindex === 'noindex' &&
//       <>
//         <meta name="robots" content="noindex" />
//         <meta name="googlebot-news" content="noindex" />
//       </>
//     }
//     {data.wpPage.seo.metaRobotsNoFollow === 'nofollow' &&
//        <meta name="robots" content={data.wpPage.seo.metaRobotsNoFollow} />
//     }

//     <meta property="og:type" content={data.wpPage.seo.opengraphType}/>
//     <meta property="og:author" content={data.wpPage.seo.opengraphAuthor}/>
//     <meta property="og:url" content={data.wpPage.seo.opengraphUrl}/>
//     <meta property="og:title" content={data.wpPage.seo.opengraphTitle}/>
//     <meta property="og:description" content={data.wpPage.seo.opengraphDescription}/>
//     {data.wpPage.seo.opengraphImage &&
//       <meta property="og:image" content={data.wpPage.seo.opengraphImage.sourceUrl}/>
//     }

//     <meta property="twitter:card" content="summary_large_image"/>
//     <meta property="twitter:url" content={data.wpPage.seo.opengraphUrl}/>
//     <meta property="twitter:title" content={data.wpPage.seo.twitterTitle}/>
//     <meta property="twitter:description" content={data.wpPage.seo.twitterDescription}/>
//     {data.wpPage.seo.twitterImage &&
//       <meta property="twitter:image" content={data.wpPage.seo.twitterImage.sourceUrl}/>
//     }
//     {data.wpPage.seo.fullHead}
//   </>
// )

export const Head = ({data}) => (
  <>
    <link rel="icon" type="image/x-icon" href={data.allWp.nodes[0].globalSettings.globalSettings.logos.favicon.sourceUrl}></link>
  </>
)

const WpPage = ({ data, location }) =>{

  let color = 'black';
  if(data.wpPage.uri === '/contact/' || data.wpPage.uri === `/terms-and-conditions/` || data.wpPage.uri === `/privacy-policy/`){
    color = 'white';
  } 

  const blackList = ["404", "Terms and Conditions", "Portfolio", "Privacy Policy"];
  const context = useRef(useContext(ThemeContext));

  useEffect(() => {
    context.current.updateAccentFunction(theme.colors.primary.accent);
    context.current.updateSecondaryFunction(theme.colors.secondary.accent);
  }, []);

  if(data.wpPage.uri === '/wrapped_2024/'){
    return (
      <>
        <Seo post={data.wpPage} />
        <Wrapped2024/>
      </>
    )
  }

  if(data.wpPage.isPostsPage === true){
    return (
    <>
      <Seo post={data.wpPage} />
      <Blog/>
    </>
    )
  } else {
    return (
      <>
        <Seo post={data.wpPage} />
        <CustomHeader color={color} />
        {(data.wpPage.pageHeader && !data.wpPage.isFrontPage && !blackList.includes(data.wpPage.title)) &&
          <PageHeader layoutData={data.wpPage.pageHeader.pageHeader} />
        }
        {(data.wpPage.title === "Portfolio" || data.wpPage.title === 'PortfolioDev') &&
            <PortfolioHeader layoutData={data.wpPage.portfolioHeader.portfolioHeader} />
        }
        {data.wpPage.isFrontPage &&
          <HomeHero layoutData={data.wpPage.homeHero.layoutHomeHero}/>
        }
        {data.wpPage.title === "404" &&
          <Container>
            <div className={'page404'} dangerouslySetInnerHTML={{__html: data.wpPage.content}}></div>
            <Menu />
          </Container>
        }
        {(data.wpPage.title === "Terms and Conditions" || data.wpPage.title === "Privacy Policy")  &&
          <div className={'terms pb-20 prose max-w-full'} dangerouslySetInnerHTML={{__html: data.wpPage.content}}></div>
        }
        {(data.wpPage.flexibleLayouts) && 
          <FlexibleLayouts location={location} flexibleLayouts={data.wpPage.flexibleLayouts} />
        }
      </>
    )
  }
}
export default WpPage;

export const query = graphql`
  query PageById($id: String) {
    wpPage(id: {eq: $id}) {
      id
      uri
      title
      content
      isPostsPage
      isFrontPage
      homeHero {
        layoutHomeHero {
          layoutContent {
            headingCycle {
              heading
            }
            subheading
            componentButton {
              style
              link {
                url
                title
                target
              }
              colors {
                resting
              }
            }
            video
            backgroundImage {
              sourceUrl
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            mobileImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(height: 686)
                }
              }
            }
            tabletImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(height: 686)
                }
              }
            }
          }
        }
      }
      ...PageHeader
      ...PortfolioHeader
      ...FlexibleLayoutsPage
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