import React from "react" 
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import ResultCard from '../../components/ResultCard.js'
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser";

const Results = (props) => {
    
    const content = props.layoutData.layoutContent || {};
    const settings = props.layoutData.layoutSettings || {};


    const body = Parser(content.body);

    let columns = content.columns === '1' ? '' : 'md:justify-between';


    return(
        <Section settings={settings}>
            <Container>
                {content.heading &&
                        <h2 className={'text-center mb-4 '}>
                            <span 
                                className={`${theme.text['H2']}`}> 
                                { content.heading }
                            </span>
                        </h2>
                }
                {content.body &&
                        <p className={'mb-6 text-center'}>
                            <span dangerouslySetInnerHTML={{__html: body}} className={`${theme.text['P_STD']}`}></span>
                        </p>
                }
                <div className={`flex flex-wrap justify-center ${columns}`}>
                    { content.results && content.results.map(result => {
                      return <ResultCard content ={result} columns={content.columns}/>
                    })           
                    }
                </div>
            </Container>
        </Section>
    )
}
export default Results;


export const query = graphql`
  fragment ResultsPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_Results {
        fieldGroupName
        layoutResults {
          layoutContent {
            columns
            body
            heading
            results {
              company
              description
              stat
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