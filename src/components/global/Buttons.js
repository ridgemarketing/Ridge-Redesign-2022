import React from "react"
import { theme } from '../../static/theme'
import Link from "../../components/global/FlexibleLink"
import ArrowRight from '../../static/arrow-right-white.svg';

const Buttons = (props) => {
    const content           = props.content;
    const icon              = content.icon || 'none';

    let bkg                 = props.sectionBackground;
    // if( (bkg === `paleGrey`) || (bkg === `transparent`) ){
    //     bkg = `white`;
    // }
    let background;
    switch(bkg) {
        case `white`:
            background = `_HOVER_DARK`;
            break;
        case `paleGrey`:
            background = `_GREY_HOVER_DARK`;
            break;
        case `transparent`:
        case `paleTeal`:
            background = (content.style === `solid`) ? `_HOVER_DARK` : `_TRANSPARENT`;
            break;
        default:
            background = `_HOVER_LIGHT`;
            break;
    }

    // const background        = bkg === `white` ? `_HOVER_DARK` : `_HOVER_LIGHT`;
    const style             = content.style === `solid` ? `SOLID_` : `GHOST_`;
    const baseColor         = content.colors.resting;

    let buttonClass   = style + baseColor + background;

    //Transparent background with white hover state 
    if (baseColor.toUpperCase() === 'TRANSPARENT') {
        buttonClass = 'GHOST_TRANSPARENT_WHITE';
    }

    const check = function(){
        if( props.sectionBackground === `black` ){
            buttonClass = `SOLID_GREEN_HOVER_LIGHT`;
        }else{
            buttonClass = `SOLID_GREEN_HOVER_DARK`;
        }
    }

    if ( (baseColor.toUpperCase() === background.toUpperCase())  || !(theme.button[buttonClass]) ){
        check();
    }

    // Create button content
    const buttonContent = (
        <>
            {content.link.title}
            {icon === 'button' && 
                <span className="inline-block ml-2">
                    <ArrowRight />
                </span>
            }
        </>
    );
    
    return(
        <>
        {content.link &&
            <Link
                classes = {theme.button.BASE_STYLING + theme.button[buttonClass]}
                link = {content.link}
            >
                {buttonContent}
            </Link>
        }
        </>
    )
}

export default Buttons