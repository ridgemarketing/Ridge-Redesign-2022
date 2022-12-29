import React, { useContext } from "react"
import { ThemeContext } from "../static/theme"

const PortfolioNav = (props) => {

    const context = useContext(ThemeContext);

    const handleClick = (filter) => {
        return props.setFilter(filter);
    }
    const fontClass = `cursor-pointer font-basic-sans text-18px md:text-26px leading-36px text-white mx-3 md:mx-8 font-light`;
    const active = ` font-semibold border-b-2 border-rm-green`
    return(
        <div className={"h-[92px] bg-black flex justify-center"}>
            <div className={"flex items-center"}>
                <p onClick={() => handleClick("Websites")} className={fontClass + (context.filterState == "Websites" ? active : ' ')}>Websites</p>
                <p onClick={() => handleClick("Branding")} className={fontClass + (context.filterState == "Branding" ? active : ' ')}>Branding</p>
                <p onClick={() => handleClick("Video")} className={fontClass + (context.filterState == "Video" ? active : ' ')}>Video</p>
                <p onClick={() => handleClick("Interactive")} className={fontClass + (context.filterState == "Interactive" ? active : ' ')}>Interactive</p>
            </div>
        </div>
    )
}

export default PortfolioNav;