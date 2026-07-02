import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Section, Container } from "../../components/global/Wrappers"
import Buttons from "../../components/global/Buttons"
import Parser from "../../components/global/Parser"
import { theme } from "../../static/theme"

const renderImage = (image, classes, objectFit = 'cover') => {
    if (!image) return null
    return (image.localFile?.ext === '.svg')
        ? <img src={image.sourceUrl} alt={image.altText || ''} className={classes} />
        : image.localFile?.childImageSharp?.gatsbyImageData
            ? <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText || ''} className={classes} objectFit={objectFit} />
            : null
}

const BarnOfBrands = (props) => {

    const content         = props.layoutData.layoutContent
    const settings        = props.layoutData.layoutSettings
    const heading         = content.heading ?? false
    const body            = content.body ?? false
    const componentButton = content.componentButton ?? false
    const image           = content.image ?? false
    const badge           = content.badge ?? false

    return (
        <Section settings={settings}>
            <Container container={settings.containerWidth}>
                <div className="relative bg-rm-black rounded-[25px] shadow-[0_0_20px_0_rgba(0,0,0,0.2)] overflow-hidden flex flex-col lg:flex-row">

                    <div className="lg:w-[70%] flex flex-col justify-center p-8 md:p-12 xl:p-[80px] relative">
                        {heading &&
                            <h2
                                dangerouslySetInnerHTML={{ __html: Parser(heading) }}
                                className={`${theme.text.H5} text-rm-white [&_sup]:text-[0.45em] [&_sup]:align-super`}
                            />
                        }
                        {body &&
                            <div
                                dangerouslySetInnerHTML={{ __html: Parser(body) }}
                                className={`${theme.text.P_STD} text-rm-white mt-6 max-w-[586px] [&_p]:mb-4 [&_a]:underline`}
                            />
                        }
                        {componentButton?.link?.url &&
                            <div className="mt-8 w-max">
                                <Buttons content={componentButton} sectionBackground="black" />
                            </div>
                        }
                        {badge &&
                            renderImage(
                                badge,
                                'hidden lg:block absolute bottom-[30px] right-[30px] w-[146px] h-[146px] z-10',
                                'contain'
                            )
                        }
                    </div>

                    {image &&
                        <div className="relative lg:w-[30%] min-h-[240px] lg:min-h-0">
                            {renderImage(image, 'w-full h-full absolute inset-0')}
                        </div>
                    }

                </div>
            </Container>
        </Section>
    )
}

export default BarnOfBrands


export const query = graphql`
  fragment BarnOfBrandsPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_BarnOfBrands {
      fieldGroupName
      layoutBarnOfBrands {
        layoutContent {
          heading
          body
          componentButton {
            style
            colors { resting }
            link { url title target }
          }
          image {
            altText
            sourceUrl
            localFile { ext childImageSharp { gatsbyImageData } }
          }
          badge {
            altText
            sourceUrl
            localFile { ext childImageSharp { gatsbyImageData } }
          }
        }
        layoutSettings {
          padding { bottom top }
          anchorId
          backgroundColor
          classes
          id
          containerWidth
        }
      }
    }
  }
`

export const serviceQuery = graphql`
  fragment BarnOfBrandsService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_BarnOfBrands {
      fieldGroupName
      layoutBarnOfBrands {
        layoutContent {
          heading
          body
          componentButton {
            style
            colors { resting }
            link { url title target }
          }
          image {
            altText
            sourceUrl
            localFile { ext childImageSharp { gatsbyImageData } }
          }
          badge {
            altText
            sourceUrl
            localFile { ext childImageSharp { gatsbyImageData } }
          }
        }
        layoutSettings {
          padding { bottom top }
          anchorId
          backgroundColor
          classes
          id
          containerWidth
        }
      }
    }
  }
`

export const projectQuery = graphql`
  fragment BarnOfBrandsProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_BarnOfBrands {
      fieldGroupName
      layoutBarnOfBrands {
        layoutContent {
          heading
          body
          componentButton {
            style
            colors { resting }
            link { url title target }
          }
          image {
            altText
            sourceUrl
            localFile { ext childImageSharp { gatsbyImageData } }
          }
          badge {
            altText
            sourceUrl
            localFile { ext childImageSharp { gatsbyImageData } }
          }
        }
        layoutSettings {
          padding { bottom top }
          anchorId
          backgroundColor
          classes
          id
          containerWidth
        }
      }
    }
  }
`
