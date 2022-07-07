import React from "react" 
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import { content } from "../../../tailwind.config.js"


export const ResultsMixed_Loop = (props) =>{
    
    return(
        <>
            {/* <div className={ 'flex flex-col w-full ' + resultTextSize_Container }>
                <Results_Loop_Text_Loop 
                    type    = { 'descriptor' }
                    color   = { `` }
                    padding = { `mb-1 ? mb-9 ? mb-0` }
                    class   = { resultTextSize_textSizeSmall }
                />
                <Results_Loop_Text_Loop 
                    type    = { 'callOut' }
                    color   = { `text-rm-green` }
                    padding = { `mb-12 ? mb-0` }
                    class   = { resultTextSize_textSizeLarge }
                />
                { content.results.caseStudy &&
                    <a 
                        href="#" 
                        className={ 
                            theme.text_links['BASE_STYLING'] + 
                            theme.text_links['FWD_BASE'] + 
                            theme.text_links['STD'] + 
                            theme.text_links['ARW_FWD_BLACK'] }>
                        VIEW CASE STUDY
                    </a>
                }
            </div> */}
        </>
    )
}

export const Results_Loop_Text_Loop = (props) =>{
    return(
        <>
            {/* descriptor */}
            {/* <p 
                className={ 
                    resultTextSize_textSizeSmall + 
                    ' ' }>
                { content.results.topText }
            </p>

 
            <p 
                className={ 
                    resultTextSize_textSizeLarge + 
                    '' }>
                 Ecommerce Website
            </p> */}
        </>
    )
}

const ResultsMixed = (props) => {
    
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    let theSize = content.ResultsSize; //large or small 
    let resultTextSize_Container        = theSize == 'large' ? `large md:w-[48%]` : `small lg:w-[31%] mb-12`;  
    let resultTextSize_textSizeLarge    = theSize == 'large' ? theme.text['STATS'] : theme.text['H2'];
    let resultTextSize_textSizeSmall    = theSize == 'large' ? theme.text['P_STD'] : theme.text['H4'];

    return(
        <Section Settings={ settings }>
            <Container>
                {content.heading &&
                    <> 
                        <h2>
                            <span 
                                className={ 
                                            theme.text['H2'] 
                                            + ' text-' + content.textColor 
                                            + ' text-' + content.textAlign
                                        }> 
                                { content.heading }
                            </span>
                        </h2>
                    </>
                }
                {content.bodyText &&
                    <>
                        <p>
                            <span className={ 
                                            theme.text['P_STD'] 
                                            + ' text-' + content.textColor 
                                            + ' text-' + content.textAlign
                                        }>
                                { content.bodyText }
                            </span>
                        </p>
                    </>
                }
                <div className={` mt-12 flex w-full flex-wrap justify-between `}>
                    {content.resultsBlocks.map(result => {
                        return (
                            <>
                                <p 
                                    className={ 
                                        resultTextSize_textSizeSmall + 
                                        ' ' }>
                                    { result.topText }
                                </p>
                                <p 
                                    className={ 
                                        resultTextSize_textSizeLarge + 
                                        '' }>
                                    {result.bottomText}
                                </p>
                            </>
                        )
                    })}
                </div>
            </Container>
        </Section>
    )
}
export default ResultsMixed;


export const query = graphql`
  fragment ResultsMixPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_ResultsMix {
        fieldGroupName
        layoutResultsMix {
          layoutContent {
            body
            heading
            results {
                content {
                    style
                    text
                }
                link {
                    target
                    title
                    url
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
export const serviceQuery = graphql`
  fragment ResultsMixService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_ResultsMix {
        fieldGroupName
        layoutResultsMix {
          layoutContent {
            body
            heading
            results {
                content {
                    style
                    text
                }
                link {
                    target
                    title
                    url
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