import React, { useEffect } from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import IconTextBoxStack from '../../components/IconTextBoxStack'
import IconTextBoxFlex from '../../components/IconTextBoxFlex'

//USE THIS SECTION FOR TESTING SECTION STYLES
//any code put on this page will render to /sample-page


// <-------------------------------------------------->
// <--------------- TESTING SECTION ------------------>
// <-------------------------------------------------->

const FullWidthTextImage = (props) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.componentFlexibleMedia.image);
    const orientation = 'flex';

    const threeCols = true;
    const cols = threeCols ? 'lg:grid-cols-3' : '';
    const wrapperClasses = orientation == 'stacked' ? `md:grid md:grid-cols-2 ${cols} gap-8 max-w-[1100px] mx-auto mt-6 lg:mt-12` : `flex w-full flex-wrap justify-between threeColIconsText mt-6`;

    const li_items = [
        {
            "text": 'Complete an extensive audit of your existing content',
            "heading": `We're your extended team`,
            "image": image,
            "iconType": 'icon'
        },
        {
            "text": 'Create a content calendar that outlines campaign activities',
            "heading": `A full service agency`,
            "image": image,
            "iconType": 'icon'
        },
        {
            "text": 'Develop meaningful digital content to engage your audience',
            "heading": `with a customized approach`,
            "image": image,
            "iconType": 'icon'
        },
        {
            "text": 'Complete an extensive audit of your existing content',
            "heading": `always nimble, always hungry`,
            "image": image,
            "iconType": 'icon'
        },
        {
            "text": 'Create a content calendar that outlines campaign activities',
            "heading": 'data-driven, results oriented',
            "image": image,
            "iconType": 'icon'
        },
        {
            "text": 'Develop meaningful digital content to engage your audience',
            "heading": `and your long-term partner`,
            "image": image,
            "iconType": 'icon'
        }
]

        return (
        <Section settings={settings}>
            <Container>
                <div>
                <h3 className={'text-center'}>
                    <span className={theme.text.H2}>Our Content Marketing Approach 
                    </span>
                </h3>
                <p className={"mt-6 max-w-5xl mx-auto text-center"}>
                    <span className={theme.text.P_STD}>Many prospects do extensive research online before making a purchase or reaching out to talk to a sales rep. Content marketing helps you build trust with your audience while alerting sales when action is needed. Ridge Marketing is a content marketing agency that helps you start or ramp up your existing content marketing efforts to win more loyal customers who expect smart, multi-channel digital experiences with your brand. 
                    </span>
                </p>
            
                <p className={'mt-10 text-center'}>
                    <span className={theme.text.H4}>When you partner with Ridge, we will:</span>
                </p>
                </div>

                {/* className={`md:grid md:grid-cols-2 ${cols} gap-8 max-w-[1100px] mx-auto mt-6 lg:mt-12`} */}
                <div className={wrapperClasses}>
                    {li_items.map(item => {
                        return (orientation == 'stacked') ? <IconTextBoxStack content={item} /> : <IconTextBoxFlex threeCol={threeCols} content={item}/>;
                    })}
                </div>
            </Container>
        </Section>          
        )
}

export default FullWidthTextImage
