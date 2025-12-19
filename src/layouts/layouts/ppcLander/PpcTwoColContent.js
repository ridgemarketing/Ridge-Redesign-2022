import React from "react"
import { TopCloud_Large, TopCloudPiece_Large } from "../../../static/clouds"

const PPCTwoColContent = ({data}) => {

    return(<>
        <div className="min-h-[1056px] relative bg-gradient-to-t from-[#edf8f9] via-[#f3f9f9] via-47% to-white">
            {/* <TopCloud_Large className={`w-full absolute top-0 left-0 -z-[4]`} /> */}
        </div>
        <TopCloudPiece_Large className={`w-full mb-20`} />
    </>)
}

export default PPCTwoColContent