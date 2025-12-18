import React from "react"
import Parser from "../../../components/global/Parser"
import { DarkBlueCloud_Large, LightBlueCloud_Large } from "../../../static/clouds"

const PPCHero = ({data}) => {

    const heading           = data.heading ?? false
    const subHeading        = data.subHeading ?? false
    const circleImages      = data.circleImages ?? false 
    const componentButton   = data.componentButton ?? false 

    return(
        <div className="min-h-[1250px]">
            {JSON.stringify(data)}
            {heading &&
                <h1 dangerouslySetInnerHTML={{__html: Parser(heading)}} className={`mb-20 text-center`}></h1>
            }
            {subHeading &&
                <p dangerouslySetInnerHTML={{__html: Parser(subHeading)}} className={`mb-20 text-center`}></p>
            }
            <DarkBlueCloud_Large className={`w-full absolute top-0 left-0 -z-[1]`} />
            <LightBlueCloud_Large className={`w-full absolute top-0 left-0 -z-[2]`} />
        </div>
    )

}
export default PPCHero