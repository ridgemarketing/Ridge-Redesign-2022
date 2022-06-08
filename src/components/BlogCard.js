import React from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { theme } from '../static/theme.js'

const BlogCard = (props) => {
    return (
        <div>
            <div className={`pt-[.367%] mb-4 bg-grey `}>
                <GatsbyImage image={props.image} alt={``} className={ `object-cover h-[125px] w-full ` } />
                {/* <StaticImage 
                    src='https://i.insider.com/5bfec49248eb12058423acf7' 
                    alt={``} 
                    className={ `object-cover h-[125px] w-full ` }
                    /> */}
            </div>
            <div className={`w-full max-h`}>
                <h3 className={ theme.text['H4'] + `mb-7`}>{props.heading}</h3>
                <div>
                    <Link className={ theme.text_links['BASE_STYLING'] + theme.text_links['STD'] + theme.text_links['FWD_BASE'] + theme.text_links['ARW_FWD_BLACK'] } to={props.link.url}>Read Article</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;