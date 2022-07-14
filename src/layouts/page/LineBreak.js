import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { graphql } from "gatsby"

const LineBreak = (props) => {
    const settings    = props.layoutData.layoutSettings;

    const lineClasses = `ml-auto mr-auto h-[2px] w-full lg:w-3/4 block border-none`;
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