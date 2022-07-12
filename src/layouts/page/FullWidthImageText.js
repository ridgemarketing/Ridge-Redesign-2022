import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"

const FullWidthImageText = (props) => {

  const content = props.layoutData.layoutContent;
  console.log(content);

  // <GatsbyImage image={''} alt={content.imageAlt} />
  const settings = props.layoutData.layoutSettings;
  if (content.image) {
    var image = (content.image.localFile.ext === ".svg") 
    ? <img className={'block w-full lg:mt-9 lg:w-4/5 h-auto'} src={content.image.sourceUrl} />
    : <GatsbyImage 
        image={content.image.localFile.childImageSharp.gatsbyImageData} 
        alt={ ' ' } 
        className={ `` } 
        objectFit={'contain'}/> ;
  }
  // const image = getImage(content.image.gatsbyImage);

    return (
      <Section settings={settings}>
        <Container>
          <div class="text-center">
              <h1 className={theme.text.H2 + ' z-10 relative mb-9'}>{content.heading}</h1>

              <p className={theme.text.P_STD +'mt-8 mb-9'}>
                {content.intro}
              </p>

              <div className={'mx-auto relative bottom-6 z-10 flex justify-center w-full'}>
                {image}
              </div>
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