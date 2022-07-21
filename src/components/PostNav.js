import React, { useRef, useState, useEffect } from "react"
import { theme } from "../static/theme"
import GatsbyLink from "gatsby-link"
import { Container } from "./global/Wrappers"

const PostNav = (props) => {
    return(
        <div>
            <Container>
                <div className={`md:flex`}>
                    <div className={`flex-1 text-left`}>
                        {props.links.prev &&
                            <GatsbyLink to={props.links.prev} />
                        }
                    </div>
                    <div className={`flex-1 text-right`}>
                        {props.links.prev &&
                            <GatsbyLink to={props.links.prev} />
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PostNav;