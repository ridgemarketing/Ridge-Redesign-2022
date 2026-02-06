import React from "react"
import { Container } from "../../../components/global/Wrappers"
import Parser from "../../../components/global/Parser"
import { FormAudit2026 } from "../../../components/global/Forms"
import { theme } from "../../../static/theme"

const AuditFormText = ({data}) => {

    const mainBody      = data.mainBody ?? false
    const listBody      = data.listBody ?? false
    const listItems     = data.list ?? false

    return (
        <section id="form" className="bg-white">
            <Container container="slim">
                {/* Intro Text - Centered Teal - H5-Light style */}
                <div className="py-20 text-center">
                    <p className={`font-stratos text-40px leading-44px !font-light text-rm-aqua max-w-[1255px] mx-auto`}>
                        If AI search tools like ChatGPT, Copilot, and Claude aren't citing your brand, you may be missing opportunities for growth.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="flex flex-col xl:flex-row flex-wrap gap-12 pb-20">

                    {/* Left Column - Intro Copy */}
                    <div className="flex flex-col gap-6 flex-1 xl:max-w-[613px]">
                        {/* H3 - 34px - Light style */}
                        {mainBody &&
                            <p
                                dangerouslySetInnerHTML={{__html: Parser(mainBody)}}
                                className={`font-light text-[2.125rem] leading-[2.5rem] text-black font-basic-sans`}
                            />
                        }

                        {/* Checklist */}
                        {listItems && listItems.length > 0 &&
                            <div className="flex flex-col gap-2 mt-4 max-w-[350px] xl:max-w-full xl:w-full self-center">
                                {listItems.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        {/* Arrow Icon */}
                                        <svg
                                            className="w-6 h-6 shrink-0 text-rm-aqua"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                        <span className={`${theme.text.H4} !leading-[56px] text-black`}>
                                            {item.item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>

                    {/* Right Column - Form Box */}
                    <div className="xl:w-[625px] shrink-0">
                        <div
                            className="bg-[#f6f8ef] p-8 xl:px-12 xl:pt-7 xl:pb-9"
                            style={{ boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.2)' }}
                        >
                            {/* Form Header */}
                            <div className="flex flex-col gap-2 mb-2">
                                {/* H3 - 34px style */}
                                <h2 className={`${theme.text.H3} !text-[34px] text-rm-aqua`}>
                                    Get Your Custom Website Audit
                                </h2>
                                {/* P style */}
                                <p className={`${theme.text.P_STD} text-black`}>
                                    Share your details below and we'll customize an audit plan for your goals.
                                </p>
                            </div>

                            {/* Form */}
                            <FormAudit2026
                                classes="w-full"
                                submitLabel="Request My Audit"
                                btnStyle="SOLID_GREEN_HOVER_DARK"
                                redirectForm={true}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AuditFormText
