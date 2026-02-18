import React from "react"
import { useState } from "react"
import PPCTwoColContentCMO from "./PpcTwoColContentCMO"
import PPCProjectSlider from "./PpcProjectSlider"
import PPCForm from "./PpcForm"
import PPCQuotes from "./PpcQuotes"
import PPCHeroCMO from "./PpcHeroCmo"
import PPCApproach from "./PpcApproach"
import PPCAudit from "./PpcAudit"
import AuditStats from "../auditLander/AuditStats"
import PpcCaseStudies from "./PpcCaseStudies"

const PPCLanderWrapperCMO = ({data, cmo}) => {

    const [persistantEmail, setPersistantEmail] = useState(null)

    return(<>
        <style>{`
            main { overflow : hidden }
        `}</style>
        {data.heroCmo && cmo &&
            <PPCHeroCMO data={data.heroCmo} setPersistantEmail={setPersistantEmail} />
        }
        {data.twoColumnContentCopy &&
            <PPCTwoColContentCMO data={data.twoColumnContentCopy} cmo={cmo} />
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
        {data.caseStudies?.items?.length > 0 &&
            <PpcCaseStudies data={data.caseStudies} />
        }
        {data.formCopy &&
            <PPCForm data={data.formCopy} cmo={cmo} persistantEmail={persistantEmail} />
        }
    </>)
}
export default PPCLanderWrapperCMO