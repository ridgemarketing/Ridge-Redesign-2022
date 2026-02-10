import React, { useContext, useEffect, useRef } from "react"
import { graphql } from "gatsby"
// import Seo from 'gatsby-plugin-wpgraphql-seo'
import FlexibleLayouts from "../layouts/FlexibleLayouts"
import PageHeader from "../layouts/layouts/PageHeader"
import CustomHeader from "../components/global/headerColor"
import { theme, ThemeContext } from "../static/theme"
import PPCLanderWrapper from "../layouts/layouts/ppcLander/PpcLanderWrapper"
import PPCLanderWrapperCMO from "../layouts/layouts/ppcLander/PpcLanderWrapperCMO"
import AuditLanderWrapper from "../layouts/layouts/auditLander/AuditLanderWrapper"

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
    <meta property="og:url" content={`https://www.ridgemarketing.com${data.wpLander.uri}`}/>
    <meta property="og:title" content={data.wpLander.seo.opengraphTitle}/>
    <meta property="og:description" content={data.wpLander.seo.opengraphDescription}/>
    {data.wpLander.seo.opengraphImage &&
      <meta property="og:image" content={data.wpLander.seo.opengraphImage.sourceUrl}/>
    }

    <meta property="twitter:card" content="summary_large_image"/>
    <meta property="twitter:url" content={`https://www.ridgemarketing.com${data.wpLander.uri}`}/>
    <meta property="twitter:title" content={data.wpLander.seo.twitterTitle || data.wpLander.seo.opengraphTitle}/>
    <meta property="twitter:description" content={data.wpLander.seo.twitterDescription || data.wpLander.seo.opengraphDescription}/>
    {data.wpLander.seo.twitterImage &&
      <meta property="twitter:image" content={data.wpLander.seo.twitterImage.sourceUrl}/>
    }
    {/* Canonical */}
    {data?.wpLander?.seo?.canonical && (
      <link
        rel="canonical"
        href={`https://www.ridgemarketing.com${data.wpLander.seo.canonical}`}
      />
    )}

    {/* JSON-LD Structured Data */}
    {data?.wpLander?.seo?.schema?.raw && (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: data.wpLander.seo.schema.raw }}
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
      <PPCLanderWrapper data={data.wpLander.Ridge2026PPC} cmo={false} />
    </>)
  }

  if (data.wpLander.uri === '/lander/ridge-ppc-2026-cmo/') {
    return (<>
      <CustomHeader color={color} position={`sticky`} />
      <PPCLanderWrapperCMO data={data.wpLander.Ridge2026PPC_CMO} cmo={true} />
    </>)
  }

  if (data.wpLander.uri === '/lander/audit/') {
    return (<>
      <CustomHeader color={color} position={`sticky`} />
      <AuditLanderWrapper data={data.wpLander.AIAudit} />
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


    AIAudit {
          hero {
            body
            heading
            desktopBackground {
              sourceUrl
                      localFile {
                      ext
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
            }
            graphic {
              sourceUrl
                      localFile {
                      ext
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
            }
            largeDesktop {
              sourceUrl
                      localFile {
                      ext
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
            }
            mobileBackground {
              sourceUrl
                      localFile {
                      ext
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
            }
            preHeading
            tabletBackground {
              sourceUrl
                      localFile {
                      ext
                      childImageSharp {
                        gatsbyImageData
                      }
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
          formText {
            list {
              item
            }
            listBody
            mainBody
          }
          callout {
              backgroundImage {
              altText
                  localFile {
                    ext
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
            }
            body
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
            heading
            subHeading
          }
          logos {
            body
            heading
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
          }
          pricing {
            body
            heading
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
            priceBoxes {
              body
              heading
              price
              subHeading
              recommended
            }
          }
          stats {
            body
            heading
            stats {
              stat
              subHeading
              heading
            }
            subBody
          }
          steps {
            body
            heading
            steps {
              body
              heading
              icons {
                body
                heading
                icon {
                  altText
                  sourceUrl
                }
              }
              subBody
              image {
                altText
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

      Ridge2026PPC {
        heroCopy{
          heading
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
        }
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

        statsCopy {
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

        logosCopy {
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

        process {
          body
          heading
          icons {
            body
            heading
            icon {
              sourceUrl
              altText
              localFile{
                ext
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

      Ridge2026PPC_CMO {
        heroCmo{
          heading
          subHeading
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
            callout {
            body
            heading
          }
          list {
            item
          }
        }

        approach {
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
          heading
          body
        }

        audit {
          body
          heading
          list {
            item
          }
          subHeading
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
        
        twoColumnContentCopy {
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

        projectSliderCopy {
          heading
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

        statsCopy2 {
          stats {
            heading
            stat
            subHeading
          }
          body
          heading
        }

        formCopy {
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

        quotesCopy {
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