import React from "react" 
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'

const FullVWBreakoutImage = ({ props }) =>{

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.componentFlexibleMedia.image);

    return(
        <div className="block w-full">
            {content.heading &&
                <> 
                    <h2>
                        <span 
                            className={ 
                                        theme.text['H2'] 
                                        + ' text-' + content.textColor 
                                        + ' text-' + content.textAlign
                                        }> 
                            { content.heading }
                        </span>
                    </h2>
                </>
            }
            <div className="block w-full">
                <GatsbyImage
                    image       = { image }
                    alt         = { content.alt.image }
                    className   = { 'object-cover w-full h-[315px] md:h-[560px] xl:h-[950px]' }
                />
            </div>
        </div>
    )
}

export default FullVWBreakoutImage