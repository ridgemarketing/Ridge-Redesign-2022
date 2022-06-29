import React from "react" 
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import { content } from "../../../tailwind.config.js"
import ResultItem from '../../components/ResultItem.js'
import ResultCard from '../../components/ResultCard.js'
import { graphql } from "gatsby"
import { faLoveseat } from "@fortawesome/pro-duotone-svg-icons"
import Parser from "../../components/global/Parser";

const Results = (props) => {
  console.log(props)
    
    const content = props.layoutData.layoutContent || {};
    const settings = props.layoutData.layoutSettings || {};


    const body = Parser(content.body);

  let columns = content.columns === '1' ? '' : 'lg:justify-between';


    return(
        <Section settings={settings}>
            <Container>
                {content.heading &&
                        <h2 className={'text-center mb-4 '}>
                            <span 
                                className={`${theme.text['H2']} text-${content.textColor}`}> 
                                { content.heading }
                            </span>
                        </h2>
                }
                {content.body &&
                        <p className={'mb-6 text-center'}>
                            <span dangerouslySetInnerHTML={{__html: body}} className={`${theme.text['P_STD']} text-${content.textColor} text-${content.textAlign}`}></span>
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
  fragment Results on WpPage_Flexiblelayouts_Layouts {
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