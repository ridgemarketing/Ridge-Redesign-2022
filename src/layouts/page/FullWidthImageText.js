import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"

const FullWidthImageText = (props) => {

  const content = props.layoutData.layoutContent;
  console.log(content);
  let headerClasses;
  let imageClasses;

  const settings = props.layoutData.layoutSettings;
  if (content.image) {
    var image = (content.image.localFile.ext === ".svg") 
    ? <img className={'mx-auto'} src={content.image.sourceUrl} />
    : <GatsbyImage 
        image={content.image.localFile.childImageSharp.gatsbyImageData} 
        alt={ ' ' } 
        className={ `` } 
        objectFit={'contain'}/> ;
  }

  if (content.alignment === 'overlap') {
    headerClasses = 'z-10 relative';
    imageClasses = 'relative bottom-6 z-10';
  } else if (content.alignment === 'standard') {
    headerClasses = '';
    imageClasses = 'mt-20';
  }

    return (
      <Section settings={settings}>
        <Container>
          <div class="text-center">
              <h1 className={`${theme.text.H2} ${headerClasses}`}>{content.heading}</h1>
              
              {
              content.intro && <p className={`mt-6 ${theme.text.P_STD} max-w-[1120px] mx-auto`}>
                {content.intro}
              </p> 
              }

              <div className={`mx-auto ${imageClasses}`}>
                {image}
              </div>

              {
              content.body && <p className={`mt-8 ${theme.text.H4_LTE}`}>
                {content.body}
              </p> 
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
                childImageSharp {
                  gatsbyImageData
                }
              }
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
          }
        }
      }
  }
`