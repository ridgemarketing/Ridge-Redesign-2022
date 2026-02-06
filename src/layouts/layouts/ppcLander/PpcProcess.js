import React from "react"
import { Container } from "../../../components/global/Wrappers"
import { theme } from "../../../static/theme"
import Parser from "../../../components/global/Parser"

const PPC_IconTextBoxFlex = ({content, idx}) => {
    const svg     = content.icon ?? false
    const heading = content.heading ?? false
    const body    = content.body ?? false

    return (
        <div className="flex w-full md:w-[48%] mb-16 items-start">
            <div className="flex items-start">
                {svg &&
                    <div className="w-[75px]">
                        <img src={svg.sourceUrl} alt={svg.altText || ''} />
                    </div>
                }
                <div className="text-center md:text-left ml-6">
                    <span className={`${theme.text.CIRCLE_NUM} h-[55px] w-[55px] text-white border-white`}>{idx}</span>
                </div>
            </div>
            <div className="flex-col flex flex-1">
                {heading &&
                    <div className="mb-4">
                        <p style={{marginLeft: '24px'}} className={`${theme.text.H4} block items-center text-white w-full`}>
                            {heading}
                        </p>
                    </div>
                }
                {body &&
                    <div className="ml-6">
                        <p dangerouslySetInnerHTML={{__html: Parser(body)}} className={`${theme.text.FOOTER} text-white`}></p>
                    </div>
                }
            </div>
        </div>
    )
}

const PPCProcess = ({data}) => {

    const heading   = data.heading ?? false
    const body      = data.body ?? false
    const icons     = data.icons ?? false

    return(<>
        <section className="bg-black relative text-white">
            <Container classes="pt-[100px] pb-[100px] relative z-10">
                <div className="flex flex-col gap-6 z-20 relative">
                    {heading &&
                        <h2 className={`${theme.text.H2} text-white text-center`}>{heading}</h2>
                    }
                    {body &&
                        <p dangerouslySetInnerHTML={{__html: Parser(body)}} className={`text-center ${theme.text.P_STD}`}></p>
                    }
                    {icons &&
                        <div className="flex flex-wrap justify-between mt-24 px-2">
                            {icons.map((icon, index) => (
                                <PPC_IconTextBoxFlex
                                    key         ={`ppc_icontextboxflex_${index}`}
                                    content     ={icon}
                                    idx         ={index + 1}
                                />
                            ))}
                        </div>
                    }
                </div>
                <svg className="absolute z-0 right-0 -bottom-[75px]" width="681" height="910"  fill="none">
                    <g opacity="0.3" clipPath="url(#clip0_9501_2884)">
                        <path d="M613.168 190.507C608.694 186.041 601.451 186.041 596.977 190.507L540.607 246.778C536.133 251.244 536.133 258.475 540.607 262.941C545.081 267.407 552.324 267.407 556.798 262.941L593.185 226.617C585.494 358.343 475.736 463.166 341.884 463.166H305.476C241.096 463.166 180.571 488.197 135.066 533.644C89.5397 579.091 64.4863 639.51 64.4863 703.756C64.4863 710.072 69.6206 715.176 75.9265 715.176C82.2325 715.176 87.3667 710.051 87.3667 703.756C87.3667 583.685 185.215 486.007 305.497 486.007H341.905C415.255 486.007 484.237 457.488 536.112 405.704C584.663 357.237 612.806 293.799 616.193 225.809L653.39 262.941C655.627 265.174 658.545 266.28 661.485 266.28C664.425 266.28 667.344 265.174 669.581 262.941C674.054 258.475 674.054 251.244 669.581 246.778L613.21 190.507H613.168Z" fill="#00ABB6"/>
                        <path d="M75.9057 758.454C34.0436 758.454 0 792.438 0 834.227C0 876.016 34.0436 910 75.9057 910C117.768 910 151.811 876.016 151.811 834.227C151.811 792.438 117.768 758.454 75.9057 758.454ZM75.9057 887.16C46.6768 887.16 22.8804 863.426 22.8804 834.227C22.8804 805.028 46.6555 781.294 75.9057 781.294C105.156 781.294 128.931 805.028 128.931 834.227C128.931 863.426 105.156 887.16 75.9057 887.16Z" fill="#00ABB6"/>
                        <path d="M605.074 151.546C646.936 151.546 680.979 117.562 680.979 75.7731C680.979 33.9841 646.936 0 605.074 0C563.212 0 529.168 33.9841 529.168 75.7731C529.168 117.562 563.212 151.546 605.074 151.546ZM605.074 22.8404C634.303 22.8404 658.099 46.574 658.099 75.7731C658.099 104.972 634.324 128.706 605.074 128.706C575.823 128.706 552.048 104.972 552.048 75.7731C552.048 46.574 575.823 22.8404 605.074 22.8404Z" fill="#00ABB6"/>
                        <path d="M583.741 566.969C579.267 562.503 572.024 562.503 567.55 566.969L511.18 623.24L454.81 566.969C450.336 562.503 443.093 562.503 438.619 566.969C434.145 571.435 434.145 578.666 438.619 583.132L494.989 639.403L438.619 695.675C434.145 700.141 434.145 707.371 438.619 711.837C440.856 714.07 443.775 715.176 446.715 715.176C449.654 715.176 452.573 714.07 454.81 711.837L511.18 655.566L567.55 711.837C569.787 714.07 572.706 715.176 575.646 715.176C578.586 715.176 581.504 714.07 583.741 711.837C588.215 707.371 588.215 700.141 583.741 695.675L527.371 639.403L583.741 583.132C588.215 578.666 588.215 571.435 583.741 566.969Z" fill="#00ABB6"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_9501_2884">
                        <rect width="681" height="910" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </Container>
        </section>
    </>)
}

export default PPCProcess