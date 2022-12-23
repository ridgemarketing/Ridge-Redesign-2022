import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import Buttons from "../../components/global/buttons"

const ButtonRow = (props) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    
    return (
        <Section settings={settings}>
            <Container container={settings.containerWidth}>
                <div className={''}>
                    <h3 className={`${theme.text.H5} text-center`}>
                        {content.topHeading}
                    </h3>
                    <div className={`flex justify-between flex-wrap`}>
                      {content.buttons.map((button) => {
                        return(
                          <div className='w-1/2 lg:w-1/4 my-8 text-center'>
                              <Buttons 
                                content={button.componentButton} 
                                sectionBackground={settings.backgroundColor}/>
                          </div>
                          )
                        })
                      }
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default ButtonRow


export const query = graphql`
  fragment ButtonRowPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_ButtonRow {
        fieldGroupName
        layoutButtonRow{
          layoutContent {
            buttons {
              componentButton {
                colors {
                  resting
                }
                link {
                  target
                  url
                  title
                }
                style
              }
            }
            topHeading 
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