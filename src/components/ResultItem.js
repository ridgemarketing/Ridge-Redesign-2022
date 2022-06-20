import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const Results_Loop_Text_Loop = (props) =>{
    return(
        <>
            {/* descriptor */}
            { props.smallText &&
                <p 
                    className={ 
                        props.className + 
                        ' ' }>
                    { props.smallText }
                </p>
            }

            {/* call out */}
            { props.largeText &&
                <p 
                    className={ 
                        props.className + 
                        '' }>
                    { props.largeText }
                </p>
            }
        </>
    )
}

const ResultItem = (props) => {
    return (
        <>
            <div className={ 'flex w-full ' + props.container }>
                { props.smallText &&   
                    <Results_Loop_Text_Loop 
                        content    = { props.smallText }

                        color       = { props.textColor }
                        padding     = { props.padding }
                        className   = { props.className }
                    />
                }
                { props.largeText &&  
                    <Results_Loop_Text_Loop 
                        content    = { props.largeText }
                    
                        color       = { props.textColor  }
                        padding     = { props.padding }
                        className   = { props.className }
                    />
                }
                { props.caseStudy &&
                    <Link 
                        to={ props.caseStudy } 
                        className={ 
                            theme.text_links['BASE_STYLING'] + 
                            theme.text_links['FWD_BASE'] + 
                            theme.text_links['STD'] + 
                            theme.text_links['ARW_FWD_BLACK'] }>
                        VIEW CASE STUDY
                    </Link>
                }
            </div>
        </>
    )
}

export default ResultItem;