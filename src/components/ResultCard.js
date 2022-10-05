import React from "react"
import { Link } from "gatsby"
import { theme } from "../static/theme"
import Parser from "../components/global/Parser"

const ResultCard = (props) => {

    const content = props.content;
    let statClass= 'text-[120px]';
    let descriptionClass= props.columns === '1' ? 'md:max-w-[60%]' : '';

    const classes = {
        1: 'md:flex items-center gap-8 max-w-[900px]',
        2: 'md:flex-[45%] lg:flex-[50%]',
        3: 'md:w-[45%] lg:w-[30%]'
    }
    if (props.columns !== "3") {
        statClass += ' lg:text-[160px]';
    }

    return (
            <div key={`${content.description}${content.stat}`} className={ `text-center lg:text-left ${classes[props.columns]} my-6` }>
                { content.stat && 
                    <p className={`accent-text ${statClass} font-bold`}>
                        { content.stat }
                    </p>  
                }
                { content.description &&  
                   <p dangerouslySetInnerHTML={{__html: Parser(content.description)}} className={`${theme.text.H3 + 'pr-4'} ${descriptionClass}`}></p>  
                }
                { content.company &&  
                   <p className={`${theme.text.P_STD} mt-9`}>
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