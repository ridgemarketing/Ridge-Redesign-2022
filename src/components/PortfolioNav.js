import React, {useState} from "react"
import { theme } from "../static/theme"
import GatsbyLink from "gatsby-link"
import { Container } from "./global/Wrappers"

const PortfolioNav = (props) => {
    const fontClass = `font-basic-sans text-18px md:text-26px leading-36px text-white mx-3 md:mx-8 font-light hover:font-semibold hover:border-b-2 hover:border-rm-green`;
    return(
        <div className={"h-[92px] bg-black"}>
            <div className={"flex justify-center items-center pt-[34px]"}>
                <p className={fontClass}>Websites</p>
                <p className={fontClass}>Branding</p>
                <p className={fontClass}>Video</p>
                <p className={fontClass}>Interactive</p>
            </div>
        </div>
    )
}

export default PortfolioNav;