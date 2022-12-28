import React, {useState} from "react"
import { theme } from "../static/theme"
import GatsbyLink from "gatsby-link"
import { Container } from "./global/Wrappers"

const PortfolioNav = (props) => {

    const handleClick = (filter) => {
        return props.setFilter(filter);
    }
    const fontClass = `cursor-pointer font-basic-sans text-18px md:text-26px leading-36px text-white mx-3 md:mx-8 font-light hover:font-semibold hover:border-b-2 hover:border-rm-green`;
    return(
        <div className={"h-[92px] bg-black flex justify-center"}>
            <div className={"flex items-center"}>
                <p onClick={() => handleClick("Websites")} className={fontClass}>Websites</p>
                <p onClick={() => handleClick("Branding")} className={fontClass}>Branding</p>
                <p onClick={() => handleClick("Video")} className={fontClass}>Video</p>
                <p onClick={() => handleClick("Interactive")} className={fontClass}>Interactive</p>
            </div>
        </div>
    )
}

export default PortfolioNav;