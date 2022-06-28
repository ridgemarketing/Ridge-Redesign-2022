import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { theme } from "../static/theme"

const ResultCard = (props) => {
    const content = props.content;
    console.log(content);
    return (
            <div className={ `px-4 ${content.container} text-center lg:text-left lg:w-[50%] my-6 2xl:w-fit` }>
                { content.stat && 
                    <p 
                        className={`${content.className} text-rm-green text-[120px] lg:text-[160px] font-bold`}>
                        { content.stat }
                    </p>  
                }
                { content.description &&  
                   <p 
                        className={`${content.className} ${theme.text.H3}`}>
                        { content.description }
                    </p>  
                }
                { content.company &&  
                   <p 
                        className={`${content.className} ${theme.text.P_STD} mt-9`}>
                        { content.company }
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
    )
}

export default ResultCard;