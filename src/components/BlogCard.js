import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { theme } from '../static/theme'

const BlogCard = (props) => {
    return (
        <article className="w-[360px] md:w-[330px] lg:w-[300px] xl:w-[330px] flex flex-col mb-7 lg:mb-0 justify-between">
            <Link to={ props.link }>
                <div className={`pt-[.367%] mb-4 bg-grey `}>
                    <GatsbyImage image={ props.image } alt={``} className={ `object-cover h-[125px] w-full ` } />
                </div>
                <div className={`w-full flex flex-col flex-1`}>
                    <h3 className={theme.text['H4'] + `mb-7 flex-1`}>{props.heading}</h3>
                    <div>
                        <span 
                            className={ 
                                theme.text_links['BASE_STYLING'] + 
                                theme.text_links['STD'] + 
                                theme.text_links['FWD_BASE'] + 
                                theme.text_links['ARW_FWD_BLACK'] +
                                `w-max` }>
                            READ ARTICLE
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default BlogCard;