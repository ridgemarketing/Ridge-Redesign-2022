import React, { useContext } from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { theme, ThemeContext } from "../../static/theme"
import { graphql } from "gatsby"
import { motion } from "framer-motion"

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
    const containerVariant = {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 0,
          staggerChildren: 0.3
        }
      }
    };
    const variantItems = {
      hidden: {
        y: "100vw"
      },
      visible: {
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          mass: 0.3
        }
      }
    };
    
    return (
        <Section settings={settings}>
            <Container container={settings.containerWidth}>
                <div className={''}>
                    <h3 className={`${theme.text.H5} text-center mb-4 xl:mb-0`}>
                        {content.topHeading}
                    </h3>                
                      <motion.div
                        suppressHydrationWarning
                        className={`flex justify-center gap-x-8 lg:gap-x-1 xl:gap-0 flex-wrap`}
                        variants={containerVariant}
                        initial="hidden"
                        whileInView="visible"
                      >
                      {content.buttons && content.buttons.map((button, index) => {
                        const linkInfo  = button.componentButton.link;
                        const uid       = linkInfo.title.replace(' ', '_')
                        return (
                          <motion.div
                          suppressHydrationWarning
                          key={`ButtonRowItem__${uid}__${index}`}
                          className={'w-full md:w-[240px] lg:w-1/3 xl:w-1/4 my-4 lg:mt-8 lg:mb-5 text-center'}
                          variants={variantItems}>
                            <div className={"xl:pt-10"}>
                              <a href={linkInfo.url} onClick={() => context.updateFilterState(filterType[linkInfo.title.toLowerCase()])} className={`${theme.button.BASE_STYLING} ${theme.button.GHOST_GREEN_HOVER_DARK} w-[240px]`}>{linkInfo.title}</a>
                            </div>
                          </motion.div>
                        )
                      })}
                    </motion.div>
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