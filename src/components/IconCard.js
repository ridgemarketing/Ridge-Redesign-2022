import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const IconCard = (props) => {
    let wrapperClasses  = ``;
    let imageClasses    = ``;
    
    if (props.orientation == `stacked`) {

    }
    return (
        <div className={`flex`}>
            <div className={`mr-4`}>
                <GatsbyImage image={props.image} alt={``} className={`h-14 w-auto`} />
            </div>
            <div className={`w-full max-h`}>
                <h3 className={`mb-4`}>{props.heading}</h3>
                <p className={`mb-8`}>{props.body}</p>
                <div>
                    <Link to={props.link.url}>See How</Link>
                </div>
            </div>
        </div>
    )
}

export default IconCard;