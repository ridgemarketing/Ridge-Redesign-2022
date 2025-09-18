import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby"
import ResultCard from '../../components/ResultCard'
//import Parser from "../../components/global/Parser";
import Buttons from '../../components/global/Buttons'

const ResultsImage = (props) => {
    const content       = props.layoutData.layoutContent || {};
    const settings      = props.layoutData.layoutSettings || {};
    const services      = content.services;

    //const body = Parser(content.body);
    let columns         = content.columns === '1' ? '' : 'lg:justify-between';
    let image;
    let imageClasses    ='';
    if (content.image) {
        image = (content.image.localFile.ext === ".svg") 
        ? <img className={`mx-auto ${imageClasses}`} src={content.image.sourceUrl} alt={content.image.altText}/>
        : <GatsbyImage 
            image     ={content.image.localFile.childImageSharp.gatsbyImageData} 
            alt       ={content.image.altText} 
            className ={`${imageClasses}`} 
            objectFit ={'contain'}/> ;
    }

    return(
        <Section settings={settings}>
            <Container container={settings.containerWidth} classes={`bg-rm-${content.backgroundColor}`}>
              <Container classes={'px-8 py-16 xlz:px-0 xl:py-20 w-full mx-auto lg:w-[calc(100%-360px)] xl:w-[calc(100%-520px)] lg:ml-0'}>
                <div className={`lg:flex`}>
                      <div className={`lg:w-3/4 lg:max-w-[80%] xl:pr-24`}>
                          <h2 dangerouslySetInnerHTML={{__html: content.heading}} className={`${theme.text.H2} text-[80px] fontsemibold`}></h2>
                          <p dangerouslySetInnerHTML={{__html: content.body}} className={`${theme.text.H4_LTE} mt-12 text-[50px] font-semibold`}></p>
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
                                      {services.map((service, index) => {
                                          return (<li key={index} className={'mb-1'}><a className={`${theme.text.LINK} ${theme.text_links.HOVER_GREEN}`} href={service.service ? service.service.link : `#`}>{service.titleOverride}</a></li>)
                                      })}
                                  </ul>
                              </div>
                          }
                      </div>
                  </div>

                  <div className={`flex flex-wrap justify-center ${columns}`}>
                      {content.results && content.results.map((result, index) => {
                          return (
                            <div key={`ResultsTextBlock_CardsItem__${index}`} className="w-full md:w-[48%]">
                              <ResultCard key={`ResultsTextBlock_CardsItem__${result.description.replace(' ', '_')}__${index}`} noCounter={true} content={result} columns={content.columns} statFontSize="text-[100px] lg:text-[80px] xl:text-[120px]" />
                          </div>
                          )
                        })
                      }
                  </div>

                  {content.secondaryBody && (
                    <div className="mt-8 text-center lg:text-left">
                      <p 
                        dangerouslySetInnerHTML={{ __html: content.secondaryBody }} 
                        className={`${theme.text.H4_LTE} text-[21px] font-light leading-[28px]`}
                      ></p>
                    </div>
                  )}
                </Container>
            </Container>
            {image &&
              <div className={`relative w-full lg:absolute top-0 lg:top-60 right-0 lg:max-w-[450px] xl:max-w-[600px] 2xl:max-w-[700px]`}>
                <div className={imageClasses}>{image}</div>
              </div>
            }
        </Section>
    )
}

export default ResultsImage;

export const query = graphql`
  fragment ResultsImagePage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_ResultsImage {
        fieldGroupName
        layoutResultsImage {
          layoutContent {
            backgroundColor
            body
            heading
            results {
              company
              description
              stat
            }
            secondaryBody
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
  fragment ResultsImageService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_ResultsImage {
        fieldGroupName
        layoutResultsImage {
          layoutContent {
            backgroundColor
            body
            heading
            results {
              company
              description
              stat
            }
            secondaryBody
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
  fragment ResultsImageProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_ResultsImage {
        fieldGroupName
        layoutResultsImage {
          layoutContent {
            backgroundColor
            body
            heading
            image {
              localFile {
                ext
                childImageSharp {
                  gatsbyImageData
                }
              }
              altText
              sourceUrl
            }
            results {
              company
              description
              stat
            }
            secondaryBody
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