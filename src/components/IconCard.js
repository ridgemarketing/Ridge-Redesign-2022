import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { theme } from "../static/theme";

const IconCard = (props) => {
    let wrapperClasses  = `flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32`;
    let headingSize     = theme.text['H4'];
    let imageClasses    = ``;
    let marginClasses   = `ml-6 `;
    let stacked = ` `;
    
    // if (props.orientation == `stacked`) {
    //     stacked = 'flex-col ';
    //     marginClasses = ` `;
    // }
    if (props.twoCol){
        wrapperClasses = `flex w-full md:w-[48%] mb-12 md:mb-16 lg:mb-32`;
    }
    if(props.headingSize == `large`){
        headingSize = theme.text['H5'];
    }

    return(
        <>
           {/* loop items */}
           <div className={ stacked + wrapperClasses }>
                    {props.image &&
                    <GatsbyImage 
                            image={ props.image } 
                            alt={ props.image.alt } 
                            className={ `flex self-start object-contain w-[55px] h-[55px]` } 
                    /> 
                    }
                    <div className="flex flex-col">
                        {props.heading &&
                        <div className={ marginClasses + `flex items-center ml-6`}>
                            <p 
                                className={ headingSize + 'icon-block-title flex items-center' }>
                                { props.heading }
                            </p>
                        </div>
                        }
                        {props.bodyText &&
                        <div className={ marginClasses + `mt-4`}>
                            <p 
                                className={ theme.text['FOOTER'] }>
                                { props.bodyText }
                            </p>
                        </div>
                        }
                        {props.url &&
                            <Link
                                to          ={ props.url }
                                className   ={ theme.text_links['BASE_STYLING'] + theme.text_links['FWD_BASE'] + theme.text_links['STD'] + theme.text_links['ARW_FWD_GREEN'] +  'text-rm-green' }
                            >
                            { props.linkText }  
                            </Link>
                        }
                    </div>  
                </div>
            {/* end loop */}
        </>
    )
}

export default IconCard;