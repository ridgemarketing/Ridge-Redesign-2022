import React from "react"
import { theme } from '../../static/theme'
import Link from "../../components/global/FlexibleLink"

const Buttons = (props) => {

    const content           = props.content;
    const background        = props.sectionBackground == 'black' ? `_HOVER_LIGHT` : `_HOVER_DARK`;
    const style             = content.style == 'solid' ? 'SOLID_' : 'GHOST_';
    const baseColor         = content.colors.resting;
    //const hoverColor        = content.colors.hover;

    let buttonClass   = style + baseColor + background;

    const check = function(){
        if( background == 'black' ){
            buttonClass = theme.button['SOLID_GREEN_HOVER_LIGHT'];
        }else{
            buttonClass = theme.button[`SOLID_GREEN_HOVER_DARK`];
        }
    }

    if( ( baseColor == background ) || ( !theme.button[buttonClass] ) ){
        check()
    }

    return(
        <>
        {content.link.title && content.link.url &&
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