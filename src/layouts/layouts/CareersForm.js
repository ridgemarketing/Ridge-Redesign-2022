import React from "react"
import { theme } from '../../static/theme'

import { Container, Section } from '../../components/global/Wrappers.js'
import { graphql } from "gatsby"
import FormWrapper from "../../components/global/FormWrapper"
import Parser from "../../components/global/Parser";

const CareersForm = (props) => {

    const content   = props.layoutData.layoutContent;
    const settings  = props.layoutData.layoutSettings;

    const textColor = settings.backgroundColor === `white` ? `text-rm-black` : `text-rm-white`;
    const p         = Parser(content.body);

    return(
        <Section settings={ settings }>
            <Container>
                {content.heading &&
                  <h2 className={`${theme.text.H2} ${textColor} text-center`}> 
                      { content.heading }
                  </h2>
                }
                {content.body &&
                  <p className={`${theme.text.P_STD} ${textColor} text-center mt-6`} dangerouslySetInnerHTML={ {__html:p} }></p>
                }
              <FormWrapper
                formSize    = {`NO_WRAP`}
                formBkg     = {'black'}
                dropShadow  = {false}
                careers     = {true}
              />
        </Container>
    </Section>
    )
}

export default CareersForm

export const query = graphql`
fragment CareersFormPage on WpPage_Flexiblelayouts_Layouts {
  ... on WpPage_Flexiblelayouts_Layouts_CareersForm {
      fieldGroupName
      layoutCareersForm {
        layoutContent {
          body
          heading
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

