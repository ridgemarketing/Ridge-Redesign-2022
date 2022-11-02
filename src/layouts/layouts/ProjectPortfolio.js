import React, {useState, useRef, useEffect, forwardRef} from "react"
import { graphql } from "gatsby"
import { Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"


const ProjectPortfolioImage = forwardRef((props, ref) => {

  const { startRef, endRef } = ref.current
  const mobile = props.image.mobile ? getImage(props.image.mobile.localFile) : false
  const tablet = props.image.tablet ? getImage(props.image.tablet.localFile) : false
  const desktop = props.image.desktop ? getImage(props.image.desktop.localFile) : false
  let padding = (props.image.padding);

  let desktopClassName  = `text-center `
  let tabletClassName   = `text-center `
  let mobileClassName   = `text-center `

  let first             = false
  let last              = false

  if (desktop) {
    desktopClassName  += ``
    tabletClassName   += `xl:hidden `
    mobileClassName   += `xl:hidden `
  }

  if (tablet) {
    desktopClassName  += `md:hidden `
    tabletClassName   += ``
    mobileClassName   += `md:hidden `
  }

  if (mobile) {
    desktopClassName  += `hidden xl:block `
    tabletClassName   += `hidden md:block `
    mobileClassName   += ``
  }

  if (props.index === 0) {
    first = true
  }

  if (props.index === (props.length - 1)) {
    last = true
  }

  return (
    <div style={{paddingBottom: `${padding}px`}} className={`portfolio-image relative`}>
      
      {first &&
        <div ref={startRef} className={`portfolio-start absolute top-[12.5%]`}></div>
      }

      {last &&
        <div ref={endRef} className={`portfolio-end absolute ${props.length === 1 ? `bottom-[12.5%]` : `bottom-[87.5%] xl:bottom-2/3`}`}></div>
      }

      {mobile &&
        <div className={`${mobileClassName}`}>
          <GatsbyImage image={mobile} />
        </div>
      }
      {tablet &&
        <div className={`${tabletClassName}`}>
          <GatsbyImage image={tablet} />
        </div>
      }
      {desktop &&
        <div className={`${desktopClassName}`}>
          <GatsbyImage image={desktop} />
        </div>
      }
  </div>
  )
})

const ProjectPortfolio = (props) => {

  const content   = props.layoutData.layoutContent;
  const settings  = props.layoutData.layoutSettings;

  const bgImage   = content.settings.backgroundImage ? getImage(content.settings.backgroundImage.localFile) : false
  const images    = content.images
  let textAlign   = `text-left`

  const startRef  = useRef(null)
  const endRef    = useRef(null)
  const ref       = useRef({startRef, endRef})

  if (content.settings.textAlign === `center`) {
    textAlign = `text-center`
  }

  if (content.settings.textAlign === `right`) {
    textAlign = `text-right`
  }

  const [bgHeight, setBgHeight] = useState(null)

  useEffect(() => {
    function handleResize() {
        if (startRef.current && endRef.current) {
          setBgHeight(endRef.current.getBoundingClientRect().top - startRef.current.getBoundingClientRect().top)
        }
      }
      setTimeout(function() {
        handleResize();
      }, 0)
    window.addEventListener('resize', handleResize)
  })

    return(
      <Section classes={`relative`} settings={settings}>
        <Container>
            {content.heading &&
              <h2 className={`mb-8 ${textAlign} ${theme.text.H2}`}>{content.heading}</h2>
            }
            {content.body && 
              <p className={`mb-12 ${theme.text.P_STD}`}>{content.body}</p>
            }
        </Container>
        <div className={`relative`}>
          {content.settings.backgroundColor && 
            <div className={`absolute w-full`} style={{backgroundColor: content.settings.backgroundColor, height: bgHeight + `px`, top: startRef.current ? startRef.current.offsetTop : `auto` }}></div>
          }
          {bgImage && 
            <GatsbyImage image={bgImage} objectFit={`cover`} className={`absolute w-full`} style={{height: bgHeight + `px`, top: startRef.current ? startRef.current.offsetTop : `auto` }} />
          }

          <Container>

            <div className={`relative`}>
              {images &&
                images.map((image, index) => {
                  return <ProjectPortfolioImage ref={ref} image={image} key={index} index={index} length={images.length} />
                })
              }
            </div>
          </Container>
        </div>

      </Section>
    )
}

export default ProjectPortfolio

export const query = graphql`
  fragment ProjectPortfolioPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_ProjectPortfolio {
        fieldGroupName
        layoutProjectPortfolio {
          layoutContent {
            heading
            images {
              desktop {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              mobile {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              tablet {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              padding
            }
            settings {
              backgroundColor
              backgroundImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              textAlign
            }
          }
          layoutSettings {
            padding {
              bottom
              top
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
  fragment ProjectPortfolioService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_ProjectPortfolio {
        fieldGroupName
        layoutProjectPortfolio {
          layoutContent {
            heading
            body
            images {
              desktop {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              mobile {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              tablet {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              padding
            }
            settings {
              backgroundColor
              backgroundImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              textAlign
            }
          }
          layoutSettings {
            padding {
              bottom
              top
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
  fragment ProjectPortfolioProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_ProjectPortfolio {
        fieldGroupName
        layoutProjectPortfolio {
          layoutContent {
            heading
            body
            images {
              desktop {
                localFile {
                  childImageSharp {
                    gatsbyImageData (quality: 99, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                  }
                }
              }
              mobile {
                localFile {
                  childImageSharp { 
                    gatsbyImageData (quality: 95, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                  }
                }
              }
              tablet {
                localFile {
                  childImageSharp {
                    gatsbyImageData (quality: 95, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                  }
                }
              }
              padding
            }
            settings {
              backgroundColor
              backgroundImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData (quality: 99, formats: [AUTO, WEBP, AVIF])
                  }
                }
              }
              textAlign
            }
          }
          layoutSettings {
            padding {
              bottom
              top
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