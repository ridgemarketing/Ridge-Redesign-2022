import React from 'react'
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import IconTextBoxStack from '../../components/IconTextBoxStack'
import IconTextBoxFlex from '../../components/IconTextBoxFlex'

const ThreeColNumberedText = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.componentFlexibleMedia.image);

    const cols = content.threeCols ? 'lg:grid-cols-3' : '';
    const wrapperClasses = (content.orientation == 'stacked') ? `md:grid md:grid-cols-2 ${cols} gap-8 max-w-[1100px] mx-auto mt-6 lg:mt-12` : `flex w-full flex-wrap justify-between threeColIconsText mt-6`;

    // const textBlocks = content.list.map(item => {
    //     const image = getImage(item.image)
    //     return (
    //         <div className={'md:px-4 py-3'}>
    //             <div className={"text-center md:text-left lg:mx-0 min-h-[54px]"}>
    //                 <GatsbyImage image={image} />
    //             </div>              
    //             <p className={`mt-4 text-center md:text-left`}>{item.text}</p>
    //         </div>
    //     )
    // })


    return (
        <Section settings={settings}>
            <Container>
            <div>
            <h3 className={'text-center'}>
                <span className={theme.text.H2}>{content.heading}
                </span>
            </h3>
            <p className={"mt-6 max-w-5xl mx-auto text-center"}>
                <span className={theme.text.P_STD}>{content.bodyText}
                </span>
            </p>
        
            <p className={'mt-10 text-center'}>
                <span className={theme.text.H4}>{content.subheading}</span>
            </p>
            </div>

            <div className={wrapperClasses}>
                {li_items.map(item => {
                    return (content.orientation == 'stacked') ? <IconTextBoxStack content={item} /> : <IconTextBoxFlex threeCol={content.threeCols} content={item}/>;
                })}
            </div>
            </Container>
        </Section>
    )
}

export default ThreeColNumberedText