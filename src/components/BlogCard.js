import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const BlogCard = (props) => {
    return (
        <div>
            <div className={`pt-[.367%] mb-4 bg-grey`}>
                <GatsbyImage image={props.image} alt={``} className={`absolute w-full h-full top-0 left-0`} />
            </div>
            <div className={`w-full max-h`}>
                <h3 className={`mb-7`}>{props.heading}</h3>
                <div>
                    <Link to={props.link.url}>Read Article</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;