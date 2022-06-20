import React, { useEffect } from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import IconTextBoxStack from '../../components/IconTextBoxStack'
import IconTextBoxFlex from '../../components/IconTextBoxFlex'

const IconSection = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const desktopImage = getImage(content.flexibleMedia.image);
    const orientation = content.orientation;  
    

            return (
                <Section settings={settings}>
                    <Container>
                        <div>
                            {content.heading &&
                            <h2 className={'text-center'}>
                                <span 
                                    className={ 
                                                theme.text['H2'] 
                                                + ' text-' + content.textColor 
                                                + ' text-' + content.textAlign
                                            }> 
                                    { content.heading }
                                </span>
                            </h2>
                            }
                            {content.bodyText &&
                            <p className={"mt-6 max-w-5xl mx-auto text-center"}>
                                <span className={ 
                                                theme.text['P_STD'] 
                                                + ' text-' + content.textColor 
                                                + ' text-' + content.textAlign
                                            }>
                                    { content.bodyText }
                                </span>
                            </p>
                            }
                            {content.subheading &&
                            <p className={'mt-10 text-center'}>
                                <span className={theme.text.H4}>{content.subheading}</span>
                            </p>
                            }
                        </div>
        
                        <div className={wrapperClasses}>
                            {li_items.map(item => {
                                return (orientation == 'stacked') ? <IconTextBoxStack content={item} /> : <IconTextBoxFlex twoCol={false} content={item}/>;
                            })}
                        </div>
                    </Container>
                </Section>          
                )
}

export default IconSection