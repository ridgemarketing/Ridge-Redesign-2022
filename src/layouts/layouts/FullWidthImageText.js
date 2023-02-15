import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"

const FullWidthImageText = (props) => {

  const content = props.layoutData.layoutContent;
  const settings = props.layoutData.layoutSettings;
  let headerClasses;
  let imageWrapperClasses;
  let imageClasses ='';
  let mobile;
  let textColor;
  // console.log(settings);

  if (settings.backgroundColor === 'black') {
    textColor = 'text-white';
  }

  if (content.mobile) {
    imageClasses += 'hidden md:block';
    mobile = <img className={`mx-auto md:hidden`} src={content.mobile.sourceUrl} alt={content.mobile.altText} />
  }

  if (content.image) {
    var image = (content.image.localFile.ext === ".svg") 
    ? <img className={`mx-auto ${imageClasses}`} src={content.image.sourceUrl} alt={content.image.altText}/>
    : <GatsbyImage 
        image={content.image.localFile.childImageSharp.gatsbyImageData} 
        alt={ ' ' } 
        className={`${imageClasses}`} 
        objectFit={'contain'}/> ;
  }

  if (content.alignment === 'overlap') {
    headerClasses = 'z-20 relative';
    imageWrapperClasses = 'relative bottom-6 z-10';
  } else if (content.alignment === 'standard') {
    headerClasses = '';
    imageWrapperClasses = 'mt-20';
  }

    return (
      <Section settings={settings}>
        <Container container={settings.containerWidth}>
          <div className={`text-center`}>
            { content.heading && 
                <h1 className={`${theme.text.H2} ${headerClasses} ${textColor} px-3`}>{content.heading}</h1>
            }
            {
            content.alignment === 'standard' && content.body && <p dangerouslySetInnerHTML={{__html: Parser(content.body)}} className={`mt-6 ${theme.text.P_STD} max-w-[1120px] mx-auto ${textColor}`}></p> 
            }

            <div className={`mx-auto ${imageWrapperClasses}`}>
              <div className={imageClasses}>{image}</div>
              {mobile}
            </div>

            {
            content.alignment === 'overlap' && content.intro &&  <p dangerouslySetInnerHTML={{__html: Parser(content.intro)}} className={`text-left mt-8 ${theme.text.H4_LTE} ${textColor}`}></p> 
            }
            {
            content.alignment === 'overlap' && content.body &&  <p dangerouslySetInnerHTML={{__html: Parser(content.body)}} className={`text-left mt-8 ${theme.text.P_STD} ${textColor}`}></p> 
            }
          </div>     
        </Container>
      </Section>
    )
}

export default FullWidthImageText


export const query = graphql`
  fragment FullWidthImageTextPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_FullWidthImageText {
        fieldGroupName
        layoutFullWidthImageText {
          layoutContent {
            alignment
            body
            heading
            intro
            image {
              localFile {
                ext
                childImageSharp {
                  gatsbyImageData
                }
              }
              altText
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
            containerWidth
          }
        }
      }
  }
`
export const serviceQuery = graphql`
  fragment FullWidthImageTextService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_FullWidthImageText {
        fieldGroupName
        layoutFullWidthImageText {
          layoutContent {
            alignment
            body
            heading
            intro
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
            mobile {
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
          layoutSettings {
            padding {
              bottom
              top
            }
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
  fragment FullWidthImageTextProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_FullWidthImageText {
        fieldGroupName
        layoutFullWidthImageText {
          layoutContent {
            alignment
            body
            heading
            intro
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
            mobile {
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
          layoutSettings {
            padding {
              bottom
              top
            }
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