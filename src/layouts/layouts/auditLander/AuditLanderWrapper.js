import React from "react"
import AuditHero from "./AuditHero"
import AuditFormText from "./AuditFormText"
import AuditSteps from "./AuditSteps"
import AuditPricing from "./AuditPricing"
import AuditStats from "./AuditStats"
import AuditLogos from "./AuditLogos"
import AuditCallout from "./AuditCallout"
import PPCTwoColContentCMO from "../ppcLander/PpcTwoColContentCMO"

const AuditLanderWrapper = ({data}) => {

    return(<>
        <style>{`
            main { overflow : hidden }
            html .gatsby-image-wrapper img, .gatsby-image-wrapper img { bottom:0 !important}
        `}</style>

        {data.hero &&
            <AuditHero data={data.hero} />
        }
        {data.formText &&
            <AuditFormText data={data.formText} />
        }
        {data.twoColumnContent &&
            <PPCTwoColContentCMO data={data.twoColumnContent} audit={true} />
        }
        {data.steps &&
            <AuditSteps data={data.steps} />
        }
        {data.pricing &&
            <AuditPricing data={data.pricing} />
        }
        {data.stats &&
            <AuditStats data={data.stats} />
        }
        {data.logos &&
            <AuditLogos data={data.logos} />
        }
        {data.callout &&
            <AuditCallout data={data.callout} />
        }
    </>)
}

export default AuditLanderWrapper
