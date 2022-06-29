import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { theme } from "../static/theme"

const ResultCard = (props) => {
    const content = props.content;

    const classes = {
        1: 'flex items-center gap-8 max-w-[900px]',
        2: 'lg:flex-[50%]',
        3: 'lg:w-[30%]'
    }

    return (
            <div className={ `px-4 ${content.container} text-center lg:text-left ${classes[props.columns]} my-6` }>
                { content.stat && 
                    <p 
                        className={`${content.className} text-rm-green text-[120px] font-bold`}>
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