//FAQ Layout & Schema
import React, { useEffect } from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const FrequentlyAskedQuestions = ({ layoutData }) => {
  const content  = layoutData.layoutContent
  const settings = layoutData.layoutSettings

  // Toggle + / - indicator
  useEffect(() => {
    const summaries = document.querySelectorAll(".faq-summary")
    summaries.forEach((summary) => {
      summary.addEventListener("click", () => {
        const indicator = summary.querySelector(".faq-indicator")
        indicator.textContent = summary.parentElement.open ? "+" : "-"
      })
    })
  }, [])

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqItems?.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer?.replace(/<[^>]*>/g, '') // Strip HTML tags for schema
      }
    })) || []
  }

  return (
    <>
      {/* Add FAQ Schema to head - only if FAQ items exist */}
      {content.faqItems && content.faqItems.length > 0 && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        </Helmet>
      )}

      <Section settings={settings} className="relative">
        {/* Image that extends above section */}
        {content.image && (
          <div className="absolute left-1/2 -translate-x-1/2 -top-32 max-w-3xl z-10 w-72 h-72">
            <GatsbyImage
              alt={content.image.altText || "FAQ Logo Image"}
              image={getImage(content.image.localFile)}
              className="w-full h-full"
              />
          </div>
        )}

        <Container container={settings.containerWidth}>
          {/* Title */}
          {content.title && (
            <h2 className={`${theme.text.H2} text-center mb-6 ${content.image ? 'pt-32' : ''}`}>
              {content.title}
            </h2>
          )}

          {/* Text */}
          {content.text && (
            <p className={`${theme.text.P_STD} text-center mb-16`}>
              {content.text}
            </p>
          )}

          {/* FAQ Items */}
          {content.faqItems && content.faqItems.length > 0 && (
          <div className="faq-container flex flex-col gap-6">
              {content.faqItems.map((faq, index) => (
              <div key={index} className="relative w-full">
                  <div className="bg-[#262626] rounded-md py-6 pl-6 pr-6">
                      <details className="transition-all cursor-pointer">
                      {faq.question && (
                          <summary className="faq-summary block">
                          <h3
                              className={`${theme.text.P_STD} flex justify-between gap-4 !font-bold`}
                          >
                              {faq.question}
                              <span className="faq-indicator font-bold text-3xl text-[#A9CF38]">+</span>
                          </h3>
                          </summary>
                      )}

                      {faq.answer && (
                          <div
                          className={`${theme.text.P_STD} text-left FAQ-Answer w-full mx-auto mt-4`}
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                          />
                      )}
                      </details>
                  </div>

              </div>
              ))}
          </div>
          )}
          
        </Container>
      </Section>
    </>
  )
}

export default FrequentlyAskedQuestions

// GraphQL Queries
export const query = graphql`
  fragment FrequentlyAskedQuestionsPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_FrequentlyAskedQuestions {
      fieldGroupName
      layoutFrequentlyAskedQuestions {
        layoutContent {
          image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
          title
          text
          faqItems {
            question
            answer
          }
        }
        layoutSettings {
          padding {
            top
            bottom
          }
          anchorId
          backgroundColor
          classes
          id
        }
      }
    }
  }
`

export const serviceQuery = graphql`
  fragment FrequentlyAskedQuestionsService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_FrequentlyAskedQuestions {
      fieldGroupName
      layoutFrequentlyAskedQuestions {
        layoutContent {
          image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
          title
          text
          faqItems {
            question
            answer
          }
        }
        layoutSettings {
          padding {
            top
            bottom
          }
          anchorId
          backgroundColor
          classes
          id
        }
      }
    }
  }
`

export const projectQuery = graphql`
  fragment FrequentlyAskedQuestionsProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_FrequentlyAskedQuestions {
      fieldGroupName
      layoutFrequentlyAskedQuestions {
        layoutContent {
          image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
          title
          text
          faqItems {
            question
            answer
          }
        }
        layoutSettings {
          padding {
            top
            bottom
          }
          anchorId
          backgroundColor
          classes
          id
        }
      }
    }
  }
`

export const landerQuery = graphql`
  fragment FrequentlyAskedQuestionsLander on WpLander_Flexiblelayouts_Layouts {
    ... on WpLander_Flexiblelayouts_Layouts_FrequentlyAskedQuestions {
      fieldGroupName
      layoutFrequentlyAskedQuestions {
        layoutContent {
          image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
          title
          text
          faqItems {
            question
            answer
          }
        }
        layoutSettings {
          padding {
            top
            bottom
          }
          anchorId
          backgroundColor
          classes
          id
        }
      }
    }
  }
`
