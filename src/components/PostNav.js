import React from "react"
import { theme } from "../static/theme"
import { Link } from "gatsby"
import { Container } from "./global/Wrappers"

const PostNav = (props) => {
    return(
        <div>
            <Container>
                <div className={`md:flex py-8 border-t border-[#c5c5c5] border-solid mt-20 mb-28`}>
                    <div className={`flex-1 text-left`}>
                        {props.links.prev && props.links.prev !== undefined &&
                            <Link to={props.links.prev} className={`mb-8 md:mb-0 justify-center md:justify-start text-rm-green ${theme.text_links.BASE_STYLING} ${theme.text_links.BACK_BASE} ${theme.text_links.ARW_BACK_GREEN}`}>Previous {props.postType}</Link>
                        }
                    </div>
                    <div className={`flex-1 text-right`}>
                        {props.links.next && props.links.next !== undefined &&
                            <Link to={props.links.next} className={`justify-center md:justify-end text-rm-green ${theme.text_links.BASE_STYLING} ${theme.text_links.FWD_BASE} ${theme.text_links.ARW_FWD_GREEN}`}>Next {props.postType}</Link>
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PostNav;