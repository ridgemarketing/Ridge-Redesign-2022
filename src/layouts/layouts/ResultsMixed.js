import React from "react" 
import { graphql } from "gatsby"
import { theme } from '../../static/theme'
import { Container, Section } from '../../components/global/Wrappers.js'
import { Link } from "gatsby"
import Counter from "../../components/Counter"

const ResultsMixed = (props) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

    const textColor     = settings.backgroundColor === 'black' ? 'white' : 'black'; 

    return(
       
        <Section settings={ settings }>
            <Container>
                {content.heading &&
                    <h2 className={`${theme.text.H2} mb-9 text-center text-rm-${textColor}`}> 
                      {content.heading}
                    </h2>
                }
                {content.body &&
                    <p className={`${theme.text.P_STD} text-center text-rm-${textColor}`}>
                        {content.body}
                    </p>
                }
                <div className={`mt-12 flex w-full flex-wrap justify-between`}>
                    {content.results.map((result) => {
                        return(
                            <div key={`resultsMixed ${Math.random()}`} className={ 'flex flex-col w-full small lg:w-[31%] justify-between' }>
                                <p>
                                {result.content.map((text) => {
                                    const fontSize      = text.style === 'stat' ? 'H2' :'H4';
                                    const color         = text.style === 'stat' ? ' text-rm-green' : ' text-rm-black';
                                    const padding       = text.style === 'stat' ? ' mb-1' : ' mb-1';
                                    const statNumber    = text.text.split(/\D+/)[0];
                                    const suffixString  = text.text.split(/\d+/)[1];
                                    const output        = (text.style === 'stat' && statNumber)                           
                                    ?
                                    <Counter number={statNumber} title={suffixString} classes={`${theme.text[fontSize]} ${color} ${padding} block`} />
                                    :                                         
                                    <span key={`resultsMixed${text.text}${Math.random()}`} className={`${theme.text[fontSize]} ${color} ${padding} block`}>
                                        { text.text }
                                    </span>
                                    ;
                                    return (
                                      <>
                                        {output}
                                      </>
                                    )
                                })}
                                </p>
                                <Link to={result.link.url} className={ 
                                        theme.text_links.BASE_STYLING + 
                                        theme.text_links.FWD_BASE + 
                                        theme.text_links.STD + 
                                        theme.text_links.ARW_FWD_BLACK +
                                        theme.text_links.HOVER_GREEN +
                                        theme.text_links.HOVER_ARW_FWD_GREEN +
                                        'mt-12'}>
                                    {result.link.title}
                                </Link>
                            </div>
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

export const projectQuery = graphql`
  fragment ResultsMixProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_ResultsMix {
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