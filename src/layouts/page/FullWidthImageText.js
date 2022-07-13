import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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

  if (settings.backgroundColor == 'black') {
    textColor = 'text-white';
  }

  if (content.mobile) {
    imageClasses += 'hidden md:block';
    mobile = <img className={`mx-auto md:hidden`} src={content.mobile.sourceUrl} />
  }

  if (content.image) {
    var image = (content.image.localFile.ext === ".svg") 
    ? <img className={`mx-auto ${imageClasses}`} src={content.image.sourceUrl} />
    // ? <img className={'block w-full lg:mt-9 lg:w-4/5 h-auto'} src={content.image.sourceUrl} />
    : <GatsbyImage 
        image={content.image.localFile.childImageSharp.gatsbyImageData} 
        alt={ ' ' } 
        className={ `` } 
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
        <Container classes={'xl:max-w-[860px]'}>
          <div class="text-center">
            { content.heading && 
              <h1 className={`${theme.text.H2} ${headerClasses} ${textColor}`}>{content.heading}</h1>
            }
            {
            content.intro && <p dangerouslySetInnerHTML={{__html: Parser(content.intro)}} className={`mt-6 ${theme.text.P_STD} max-w-[1120px] mx-auto ${textColor}`}></p> 
            }

            <div className={`mx-auto ${imageWrapperClasses}`}>
              {image}
              {mobile}
            </div>

            {
            content.body && <p dangerouslySetInnerHTML={{__html: Parser(content.body)}} className={`text-left mt-8 ${theme.text.H4_LTE} ${textColor}`}></p> 
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
            mobile {
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