import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser";

const TeamGrid = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

    return (
        <Section settings={settings}>
            <Container container={settings.containerWidth}>
                {content.heading && 
                <h3 className={`${theme.text.H1_STD} text-white mb-20`} dangerouslySetInnerHTML={ {__html:  Parser(content.heading)} }></h3>
                }
                <div className={"md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16"}>
                    {content.teamMember && content.teamMember.map(tm => {
                        return (
                            <div className={`text-center mb-16 md:mb-0`}>
                              <div className={`pt-[109%] relative mb-4`}>
                                <img className={`absolute h-full w-full top-0 left-0 object-cover`} src={tm.image.publicUrl} alt={`photo of ${tm.name}`} />
                                {/* <GatsbyImage imgClassName={`absolute h-full w-full top-0 left-0 object-cover`} image={tm.image.publicUrl}/> */}
                              </div>
                              <p className={theme.text.H5 + 'mb-1'}>{tm.name}</p>
                              <p className={theme.text.P_STD}>{tm.title}</p>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </Section>
    )
}

export default TeamGrid

export const pageQuery = graphql`
  fragment TeamGridPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_TeamGrid {
      fieldGroupName
      layoutTeamGrid {
        layoutContent {
          heading
          teamMember {
            name
            title
            image {
              publicUrl
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
          containerWidth
        }
      }      
    }
  }
`

export const serviceQuery = graphql`
  fragment TeamGridService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_TeamGrid {
        fieldGroupName
        layoutTeamGrid {
          layoutContent {
            heading
            teamMember {
              name
              title
              image {
                publicUrl
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
            containerWidth
          }
        }
      }
  }
`

export const projectQuery = graphql`
  fragment TeamGridProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_TeamGrid {
        fieldGroupName
        layoutTeamGrid {
          layoutContent {
            heading
            teamMember {
              name
              title
              image {
                publicUrl
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
            containerWidth
          }
        }
      }
  }
`
