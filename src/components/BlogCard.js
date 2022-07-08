import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { theme } from '../static/theme.js'

const BlogCard = (props) => {
    return (
        <div className="w-[360px] md:w-[330px] lg:w-[300px] xl:w-[330px] flex flex-col mb-7 lg:mb-0">
            <div className={`pt-[.367%] mb-4 bg-grey `}>
                <GatsbyImage image={ props.image } alt={``} className={ `object-cover h-[125px] w-full ` } />
            </div>
            <div className={`w-full max-h h-full flex flex-col justify-between`}>
                <h3 className={ theme.text['H4'] + `mb-7` }>{props.heading}</h3>
                <div>
                    <Link 
                        className={ 
                            theme.text_links['BASE_STYLING'] + 
                            theme.text_links['STD'] + 
                            theme.text_links['FWD_BASE'] + 
                            theme.text_links['ARW_FWD_BLACK'] } 
                            
                            to={ props.link }>
                        READ ARTICLE
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;