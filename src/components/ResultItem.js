import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { theme } from "../static/theme"

export const Results_Loop_Text_Loop = (props) =>{
    return(
        <>
            {/* { props.smallText &&
                <p 
                    className={ 
                        props.className + 
                        ' ' }>
                    { props.smallText }
                </p>
            }

            { props.largeText &&
                <p 
                    className={ 
                        props.className + 
                        '' }>
                    { props.largeText }
                </p>
            } */}
        </>
    )
}

const ResultItem = (props) => {
    const content = props.layoutContent;
    return (
        <>
            <div className={ 'flex w-full ' + content.container }>

                {/* IF THIS IS A LOOP UNCOMMENT LINE BELOW AND MOVE CODE INTO MAP*/}
                {/* CHANGE FROM 'content.smallText', etc. to 'block.smallText', etc. */}

                {/* {content.textBlocks.map(block => {
                })} */}
                { content.smallText && 
                    <p 
                        className={`${content.className} `}>
                        { content.smallText }
                    </p>  
                }
                { content.largeText &&  
                   <p 
                        className={`${content.className} `}>
                        { content.largeText }
                    </p>  
                }
                { content.caseStudy &&
                    <Link 
                        to={ content.caseStudy } 
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