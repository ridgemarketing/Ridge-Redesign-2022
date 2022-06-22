import React from "react" 
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'

export const LogoCloud_Loop = (props) =>{
    
    // return(
    //     <GatsbyImage 
    //         image={ image } 
    //         alt={ content.image.alt } 
    //         className={ `w-full md:w-[31%] lg:w-[18%] ` } 
    //     />
    // )
}

const LogoCloud = props => {

  const content = props.layoutData.layoutContent;
  const settings = props.layoutData.layoutSettings;

    return(
        <Section settings={ settings }>
            <Container>
                {content.heading &&
                    <h2 className={theme.text['H2'] + ''}> 
                        { content.heading }
                    </h2>
                }
                {content.bodyText &&
                    <p className={theme.text['P_STD'] + ''}>
                        { content.bodyText }
                    </p>
                }
                <div className="mt-12 flex w-full flex-wrap justify-around">
                    {content.logos.map(logo => {
                      const image = getImage(logo.image);
                      return(
                        <GatsbyImage 
                            image={ image } 
                            alt={ logo.alt } 
                            className={ `w-full md:w-[31%] lg:w-[18%] ` } 
                        />
                    )
                    })}
                </div> 
            </Container>
        </Section>
    )
}
export default LogoCloud


export const query = graphql`
  fragment LogoCloud on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_LogoCloud {
        fieldGroupName
        layoutLogoCloud {
          layoutContent {
            body
            heading
            logos {
              image {
                gatsbyImage
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