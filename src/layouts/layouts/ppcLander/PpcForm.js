import React from "react"
import { BottomCloudPiece_Large } from "../../../static/clouds"

const PPCForm = ({data}) => {

    return(<>
        <BottomCloudPiece_Large className={`w-full mt-20`} />
        <div className="min-h-[1056px] relative bg-gradient-to-t from-white via-[#f3f9f9] via-47% to-[#edf8f9]">
            {/* <TopCloud_Large className={`w-full absolute top-0 left-0 -z-[4]`} /> */}
        </div>
    </>)
}

export default PPCForm