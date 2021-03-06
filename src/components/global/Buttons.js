import React from "react"
import { theme } from '../../static/theme'
import Link from "../../components/global/FlexibleLink"

const Buttons = (props) => {
    const content           = props.content;

    let bkg                 = props.sectionBackground;
    if( (bkg === `paleGrey`) || (bkg === `transparent`) ){
        bkg = `white`;
    }

    const background        = bkg == `white` ? `_HOVER_DARK` : `_HOVER_LIGHT`;
    const style             = content.style == `solid` ? `SOLID_` : `GHOST_`;
    const baseColor         = content.colors.resting;

    let buttonClass   = style + baseColor + background;
    const check = function(){
        if( props.sectionBackground == `black` ){
            buttonClass = `SOLID_GREEN_HOVER_LIGHT`;
        }else{
            buttonClass = `SOLID_GREEN_HOVER_DARK`;
        }
    }

    if ( (baseColor.toUpperCase() == props.sectionBackground.toUpperCase())  || !(theme.button[buttonClass]) ){
        check();
    }
    
    return(
        <>
        {content.link &&
            <Link
                classes = {theme.button.BASE_STYLING + theme.button[buttonClass]}
                link = {content.link}
            >
            </Link>
        }
        </>
    )
}

export default Buttons