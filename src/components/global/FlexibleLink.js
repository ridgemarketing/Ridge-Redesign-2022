import React from "react"
import { Link }from "gatsby"

const FlexibleLink = (props) => {

    return(
        <>
        {props.link && props.link.target !== `_blank` && 
            <Link className={props.classes} to={props.link.url}>{props.link.title}</Link>
        }

        {props.link && props.link.target === `_blank` && 
            <a className={props.classes} href={props.link.url} target={props.link.target}>{props.link.title}</a>
        }
        </>
        
    )
}

export default FlexibleLink