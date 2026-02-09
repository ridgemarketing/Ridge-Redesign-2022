import React from "react"
import PPCTwoColContentCMO from "./PpcTwoColContentCMO"
import PPCProjectSlider from "./PpcProjectSlider"
import PPCForm from "./PpcForm"
import PPCQuotes from "./PpcQuotes"
import PPCHeroCMO from "./PpcHeroCmo"
import PPCApproach from "./PpcApproach"
import PPCAudit from "./PpcAudit"
import AuditStats from "../auditLander/AuditStats"

const PPCLanderWrapperCMO = ({data, cmo}) => {

    return(<>
        <style>{`
            main { overflow : hidden }
        `}</style>
        {data.heroCmo && cmo &&
            <PPCHeroCMO data={data.heroCmo} />
        }
        {data.twoColumnContentCopy &&
            <PPCTwoColContentCMO data={data.twoColumnContentCopy} />
        }
        {data.projectSliderCopy &&
            <PPCProjectSlider data={data.projectSliderCopy} cmo={cmo} />
        }
        {data.statsCopy2 && <>
            <AuditStats data={data.statsCopy2} cmo={cmo} /> 
        </>}
        {data.quotesCopy &&
            <PPCQuotes data={data.quotesCopy} cmo={cmo} />
        }
        {data.approach &&
            <PPCApproach data={data.approach} />
        }
        {data.audit &&
            <PPCAudit data={data.audit} />
        }
        {data.formCopy &&
            <PPCForm data={data.formCopy} cmo={cmo} />
        }
    </>)
}
export default PPCLanderWrapperCMO