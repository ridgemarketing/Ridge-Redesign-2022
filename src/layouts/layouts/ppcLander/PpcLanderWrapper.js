import React from "react"
import PPCHero from "./PpcHero"
import PPCHeroStandard from "./PpcHero-Standard"
import PPCTwoColContent from "./PpcTwoColContent"
import PPCProjectSlider from "./PpcProjectSlider"
import PPCStats from "./PpcStats"
import PPCLogos from "./PpcLogos"
import PPCProcess from "./PpcProcess"
import PPCForm from "./PpcForm"
import PPCIconTextBoxes from "./PpcIconTextBoxes"
import PPCQuotes from "./PpcQuotes"
import PPCTools from "./PpcTools"

const PPCLanderWrapper = ({data}) => {

    return(<>
        <style>{`
            main { overflow : hidden }
        `}</style>
        {data.hero && <> 
            <PPCHero data={data.hero} /> {/* above 1280 */}
            <PPCHeroStandard data={data.hero} /> {/* below 1280 */}
        </>}
        {data.twoColumnContent &&
            <PPCTwoColContent data={data.twoColumnContent} />
        }
        {data.projectSlider&&
            <PPCProjectSlider data={data.projectSlider} />
        }
        {data.stats &&
            <PPCStats data={data.stats} />
        }
        {data.logos && 
            <PPCLogos data={data.logos} />
        }
        {data.process &&
            <PPCProcess data={data.process} />
        }   
        {data.form &&
            <PPCForm data={data.form} />
        }
        {data.iconTextBoxes && 
            <PPCIconTextBoxes data={data.iconTextBoxes} />
        }
        {data.quotes &&
            <PPCQuotes data={data.quotes} />
        }
        {data.tools && 
            <PPCTools data={data.tools}/>
        }
    </>)
}
export default PPCLanderWrapper