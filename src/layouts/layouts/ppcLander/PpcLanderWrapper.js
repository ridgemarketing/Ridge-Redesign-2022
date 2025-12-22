import React from "react"
import PPCHero from "./PpcHero"
import PPCTwoColContent from "./PpcTwoColContent"
import PPCProjectSlider from "./PpcProjectSlider"
import PPCStats from "./PpcStats"
import PPCLogos from "./PpcLogos"
import PPCForm from "./PpcForm"
import PPCIconTextBoxes from "./PpcIconTextBoxes"
import PPCQuotes from "./PpcQuotes"
import PPCTools from "./PpcTools"

const PPCLanderWrapper = ({data}) => {

    console.log('all data', data)

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
        {data.stats &&
            <PPCStats data={data.stats} />
        }
        {data.logos && 
            <PPCLogos data={data.logos} />
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