import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const ResultItem = (props) => {
    return (
        <div>
            <p className={props.orientation == `stacked` ? `` : `md:flex items-center`}>
                <span className={`block mb-4 mr-4 text-160px font-semibold font-stratos` + props.color}>{props.figure}</span>
                <span>{props.description}</span>
            </p>
            {props.client && 
                <p className={`mt-9`}>{props.client}</p>
            }
        </div>
    )
}

export default ResultItem;