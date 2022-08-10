import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { graphql } from "gatsby"

const LineBreak = (props) => {
    const settings    = props.layoutData.layoutSettings;

    const lineClasses = `ml-auto mr-auto h-[1px] w-full block border-none`;
    let lineColor     = ``;

    if (settings.backgroundColor === 'black'){
        lineColor = `bg-rm-white`;
    }else{
        lineColor = `bg-rm-black`;
    }

    return (
        <Section settings={settings} role={'separator'} >
            <Container>
                <hr className={`${lineClasses} ${lineColor}`}/>
            </Container>
        </Section>
    )
}

export default LineBreak


export const query = graphql`
fragment LineBreakPage on WpPage_Flexiblelayouts_Layouts {
  ... on WpPage_Flexiblelayouts_Layouts_LineBreak {
      fieldGroupName
      layoutLineBreak {
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
  fragment LineBreakService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_LineBreak {
        fieldGroupName
        layoutLineBreak {
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
  fragment LineBreakProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_LineBreak {
        fieldGroupName
        layoutLineBreak {
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