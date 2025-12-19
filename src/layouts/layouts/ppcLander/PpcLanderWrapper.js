import React from "react"
import PPCHero from "./PpcHero"
import PPCProjectSlider from "./PpcProjectSlider"
import PPCTwoColContent from "./PpcTwoColContent"
import PPCForm from "./PpcForm"

const PPCLanderWrapper = ({data}) => {
    return(<>
        {data.hero && 
            <PPCHero data={data.hero} />
        }

        {data.twoColumnContent &&
            <PPCTwoColContent data={data.twoColumnContent} />
        }
        
        {data.projectSlider&&
            <PPCProjectSlider data={data.projectSlider} />
        }

        <PPCForm data={data} />
    </>)
}
export default PPCLanderWrapper