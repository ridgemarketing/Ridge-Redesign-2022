import React from "react"
import PPCHero from "./PpcHero"

const PPCLanderWrapper = ({data}) => {
    return(<>
        {data.hero && 
            <PPCHero data={data.hero} />
        }
    </>)
}
export default PPCLanderWrapper