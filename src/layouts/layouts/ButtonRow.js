import React, { useContext } from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { theme, ThemeContext } from "../../static/theme"
import { graphql } from "gatsby"

const ButtonRow = (props) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

    const context= useContext(ThemeContext);

    const filterType = {
      "websites": "Websites",
      "branding": "Branding",
      "video": "Video",
      "interactive": "Interactive"
    }
    
    return (
        <Section settings={settings}>
            <Container container={settings.containerWidth}>
                <div className={''}>
                    <h3 className={`${theme.text.H5} text-center mb-4 xl:mb-0`}>
                        {content.topHeading}
                    </h3>
                    <div className={`flex justify-center xl:justify-between gap-x-8 lg:gap-x-1 xl:gap-0 flex-wrap`}>
                      {content.buttons.map((button) => {
                        const linkInfo = button.componentButton.link;
                        return(
                          <div className='w-full md:w-[240px] lg:w-1/3 xl:w-1/4 my-4 lg:my-8 text-center'>
                                <div className={"xl:py-10"}>
                                  <a href={linkInfo.url} onClick={() => context.updateFilterState(filterType[linkInfo.title.toLowerCase()])} className={`${theme.button.BASE_STYLING} ${theme.button.GHOST_GREEN_HOVER_DARK} w-[240px]`}>{linkInfo.title}</a>
                                </div>
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