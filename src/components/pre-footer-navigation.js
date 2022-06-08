import React from "react"
import { theme } from '../static/theme'

const PreFooterNavigation = (props) => {

    return(
        <div className="pre-footer-navigation w-full font-stratos block border-t border-[#c5c5c5] border-solid mt-8 mb-8">
            <div className="w-full flex justify-between mt-8 text-rm-green">
                <a href="#" className={ theme.text_links['BASE_STYLING'] + theme.text_links['STD'] + theme.text_links['BACK_BASE'] + theme.text_links['ARW_BACK_GREEN'] } >PREVIOUS PROJECT</a>
                <a href="#" className={ theme.text_links['BASE_STYLING'] + theme.text_links['STD'] + theme.text_links['FWD_BASE'] + theme.text_links['ARW_FWD_GREEN'] } >NEXT PROJECT</a>
            </div>
        </div>
    )
}

export default PreFooterNavigation