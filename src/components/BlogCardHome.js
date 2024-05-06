import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { theme } from '../static/theme'

const BlogCardHome = (props) => {
    return (
        <article key={`blogCard${props.heading}`} className="w-full sm:w-[360px] md:w-[330px] lg:w-[300px] xl:w-[330px] flex flex-col mb-7 lg:mb-0 justify-between">
            <Link to={ props.link } className={'flex flex-col flex-1'}>
                <div className={`relative pt-[100%] mb-4 bg-grey `}>
                    <GatsbyImage image={ props.image } alt={props.alt} className={ `absolute top-0 left-0 object-cover h-full w-full ` } />
                </div>
                <div className={`w-full flex flex-col flex-1`}>
                    <h3 className={theme.text['H4'] + `mb-14 lg:mb-7 flex-1`}>{props.heading}</h3>
                    <div>
                        <span 
                            className={ 
                                theme.text_links['BASE_STYLING'] + 
                                theme.text_links['STD'] + 
                                theme.text_links['FWD_BASE'] + 
                                theme.text_links['ARW_FWD_BLACK'] +
                                theme.text_links['HOVER_ARW_FWD_GREEN'] +
                                theme.text_links['HOVER_GREEN'] +
                                ` w-max` }>
                            READ ARTICLE
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default BlogCardHome;