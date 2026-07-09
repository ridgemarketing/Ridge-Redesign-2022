import React from "react"
import { Link } from "gatsby"
import { theme } from "../static/theme"
import Parser from "../components/global/Parser"
import Counter from "./Counter"

const ResultCard = (props) => {

    const content           = props.content;
    const statColorClass    = props.tealStats ? '!text-rm-ocean-teal' : 'accent-text';
    let statClass           = `${statColorClass} font-semibold font-stratos ${props.statFontSize || 'text-[100px] xl:text-[120px] -mb-4 block'}`;
    let descriptionClass = `
        ${props.columns === '1' ? 'md:max-w-[60%]' : ''}
        ${props.noBoldDescription ? 'font-normal' : ''}
    `;
    const statNumber        = content.stat ? content.stat.match(/[\d.]+/)?.[0] || false : false;
    const suffixString      = content.stat ? content.stat.match(/[^\d.]+$/)?.[0] || '' : false;
    const columnsNum        = parseInt(props.columns);

    const classes = {
        1: 'md:flex items-center gap-8 max-w-[800px] justify-center',
        2: 'md:flex-[45%] lg:flex-[50%] px-4',
        3: 'md:w-[45%] lg:w-[30%] px-4',
        4: 'md:w-[45%] xl:w-[24%] px-4'
    }

    if (columnsNum === 4) {
        statClass = `${statColorClass} text-[100px] xl:text-[100px] font-semibold font-stratos`;
    }

    if (columnsNum !== 3 && columnsNum !== 4) {
        statClass += ' lg:text-[160px]';
    }

    let centered = props.settings.includes('text-center') ? true : false

    return (
        <div key={`${content.description}${content.stat}`} className={ `text-center ${props?.settings?.includes('text-center') ? '' : 'md:text-left' } ${props.columns !== "1" && classes[props.columns]} my-6` }>
            <div className={`w-fit ${centered ? 'mx-auto' : 'ml-0' } ${props.columns === "1" && classes[props.columns]}`}>

            {!props.noCounter && content.stat && statNumber > 40 &&
                <Counter number={statNumber} title={suffixString} classes={statClass} columns={columnsNum} />   
            }
            {!props.noCounter && content.stat && statNumber < 40 &&
                <span className={statClass}>{`${content.stat}`}</span>   
            }          
            {props.noCounter && content.stat &&
                <span className={statClass}>{content.stat}</span>
            }   
            
            {content.description &&  
                <p dangerouslySetInnerHTML={{__html: Parser(content.description)}} className={`text-26px leading-36px font-bold font-basic-sans normal-case ${descriptionClass}`}></p>  
            }

            { content.company &&  
                <p className={`${theme.text.P_STD} mt-2`}>
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
        </div>
    )
}

export default ResultCard;