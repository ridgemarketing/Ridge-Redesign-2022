import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import ResultCard from '../../components/ResultCard.js'
import Parser from "../../components/global/Parser";
import Buttons from '../../components/global/Buttons'

const ResultsTextBlock = (props) => {
    const content = props.layoutData.layoutContent || {};
    const settings = props.layoutData.layoutSettings || {};
    const services = content.services;

    const body = Parser(content.body);
    let columns = content.columns === '1' ? '' : 'md:justify-between';

    return(
        <Section settings={settings}>
            <Container container={settings.containerWidth} classes={`bg-rm-${content.backgroundColor}`}>
              <Container classes={'px-8 py-16 xl:px-0 xl:py-20 '}>
              <div className={`lg:flex`}>
                    <div className={`lg:w-3/4 xl:pr-24`}>
                        <h1 dangerouslySetInnerHTML={{__html: content.heading}} className={`${theme.text.H2} `}></h1>
                        <p dangerouslySetInnerHTML={{__html: content.body}} className={`${theme.text.H4_LTE} mt-8`}></p>
                        <div className='mt-8'>
                        <Buttons 
                        content={content.componentButton} 
                        sectionBackground={settings.backgroundColor}/>
                        </div>
                    </div>
                    <div className={`mt-12 lg:mt-0 lg:pl-10 lg:w-auto`}>
                        {services && 
                            <div>
                                <p className={`${theme.text.H4} mb-3`}>Services Provided</p>
                                <ul>
                                    {services.map(service => {
                                        return (<li className={'mb-1'}><a className={`${theme.text.LINK}`} href={service.service.link}>{service.titleOverride}</a></li>)
                                    })}
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                <div className={`flex flex-wrap justify-center ${columns}`}>
                    { content.results && content.results.map(result => {
                      return <ResultCard content ={result} columns={content.columns}/>
                    })           
                    }
                </div>
                </Container>
            </Container>
        </Section>
    )
}

export default ResultsTextBlock

export const query = graphql`
  fragment ResultsTextBlockPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_ResultsTextBlock {
        fieldGroupName
        layoutResultsTextBlock {
          layoutContent {
            backgroundColor
            columns
            body
            heading
            results {
              company
              description
              stat
            }
            services {
              service {
                ... on WpService {
                  link
                  id
                }
              }
              titleOverride
            }
            componentButton {
              style
              link {
                target
                title
                url
              }
              colors {
                resting
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
  fragment ResultsTextBlockService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_ResultsTextBlock {
        fieldGroupName
        layoutResultsTextBlock {
          layoutContent {
            backgroundColor
            columns
            body
            heading
            results {
              company
              description
              stat
            }
            services {
              service {
                ... on WpService {
                  link
                  id
                }
              }
              titleOverride
            }
            componentButton {
              style
              link {
                target
                title
                url
              }
              colors {
                resting
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
  fragment ResultsTextBlockProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_ResultsTextBlock {
        fieldGroupName
        layoutResultsTextBlock {
          layoutContent {
            backgroundColor
            columns
            body
            heading
            results {
              company
              description
              stat
            }
            services {
              service {
                ... on WpService {
                  link
                  id
                }
              }
              titleOverride
            }
            componentButton {
              style
              link {
                target
                title
                url
              }
              colors {
                resting
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