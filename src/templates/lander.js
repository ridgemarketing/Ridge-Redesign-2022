import React, { useContext, useEffect, useRef } from "react"
import { graphql } from "gatsby"
// import Seo from 'gatsby-plugin-wpgraphql-seo'
import FlexibleLayouts from "../layouts/FlexibleLayouts"
import PageHeader from "../layouts/layouts/PageHeader"
import CustomHeader from "../components/global/headerColor"
import { theme, ThemeContext } from "../static/theme"
import PPCLanderWrapper from "../layouts/layouts/ppcLander/PpcLanderWrapper"

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

    {/* Canonical */}
    {lander.seo.canonical && (
      <link
        rel="canonical"
        href={`https://www.ridgemarketing.com${lander.seo.canonical}`}
      />
    )}

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:url"
      content={`https://www.ridgemarketing.com${lander.uri}`}
    />
    <meta
      name="twitter:title"
      content={lander.seo.twitterTitle || lander.seo.title}
    />
    <meta
      name="twitter:description"
      content={lander.seo.twitterDescription || lander.seo.metaDesc}
    />
    <meta
      name="twitter:image"
      content={
        lander.seo.twitterImage?.sourceUrl ||
        "https://www.ridgemarketing.com/social-default.jpg"
      }
    />

    {/* JSON-LD Structured Data */}
    {lander.seo.schema?.raw && (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: lander.seo.schema.raw }}
      />
    )}

    {data.wpLander.seo.fullHead}
  </>
)

// export const Head = ({data}) => (
//   <>
//     <link rel="icon" type="image/x-icon" href={data.allWp.nodes[0].globalSettings.globalSettings.logos.favicon.sourceUrl}></link>
//   </>
// )

const WpLander = ({ data, location }) => {
  let color     = 'black';
  const context = useRef(useContext(ThemeContext));

  useEffect(() => {
    context.current.updateAccentFunction(theme.colors.primary.accent);
    context.current.updateSecondaryFunction(theme.colors.secondary.accent);
  }, []);

  if (data.wpLander.uri === '/lander/your-marketing-dream-team/') {
    return (<>
      <CustomHeader color={color} position={`sticky`} />
      <PPCLanderWrapper data={data.wpLander.Ridge2026PPC} />
    </>)
  }

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
        linkType 
        url
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
      Ridge2026PPC {

        hero {
          heading
          circleImagesDown {
            image {
                localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                altText
                sourceUrl
            }
          }
          circleImagesUp {
            image {
                 localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                altText
                sourceUrl
            }
          }
          subHeading
          componentButton {
            style
            link {
              target
              title
              url
            }
            colors {
              resting
            }
          }
        }

        twoColumnContent {
          checklist {
            heading
            list {
              item
            }
          }
          videoText {
            body
            heading
            video {
              mediaDetails {
                file
                height
                width
              }
              mimeType
              mediaItemUrl
            }
          }
        }

        projectSlider {
          images{
            image {
              localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              altText
              sourceUrl
            }
          }
          componentButtonGroup {
            componentButton {
              colors {
                resting
              }
              link {
                target
                title
                url
              }
              style
            }
          }
        }

        iconTextBoxes {
          badge {
            altText
            sourceUrl
          }
          buttons {
            componentButton {
              colors {
                resting
              }
              link {
                url
                title
                target
              }
              style
            }
          }
          heading
          icons {
            heading
            icon {
              altText
              sourceUrl
              localFile{
                ext
              }
            }
            link {
              url
              title
              target
            }
          }
        }

        stats {
          columns {
            body
            number
          }
          body
          heading
        }

        logos {
          image {
            altText
            sourceUrl
            localFile {
                ext
                childImageSharp {
                  gatsbyImageData
                }
              }
          }
        }

        form {
          body
          heading
          image {
            altText
            sourceUrl
            localFile {
                ext
                childImageSharp {
                  gatsbyImageData
                }
            }
          }
        }

        quotes {
          quotes {
            ... on WpReview {
              id
              title
              content
              reviewsFields {
                fieldGroupName
                titleCompany
              }
            }
          }
        }

        tools {
          heading
          logos {
            logo {
              altText
              sourceUrl
              localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
              }
            }
          }
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