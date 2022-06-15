import React, { useState } from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import IconTextBoxStack from '../../components/IconTextBoxStack'

//USE THIS SECTION FOR TESTING SECTION STYLES
//any code put on this page will render to /sample-page


// <-------------------------------------------------->
// <--------------- TESTING SECTION ------------------>
// <-------------------------------------------------->

const FullWidthTextImage = (props) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.componentFlexibleMedia.image);
    // const mobileImage = getImage(content.responsiveImages.mobile);
    // let logo = image ? <GatsbyImage image={image} alt={content.imageAlt} /> : <></>;
    let threeCols = false;
    const cols = threeCols ? 'lg:grid-cols-3' : '';
    // const images = mobileImage 
    // ? 
    //     <>
    //     <GatsbyImage className={'md:hidden'} image={mobileImage} alt={content.imageAlt} />
    //     <GatsbyImage className={'hidden md:block mx-auto'} image={image} alt={content.imageAlt} />
    //     </>
    // :
    //     <GatsbyImage image={image} alt={content.imageAlt} />; 
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
            // <Section settings={settings}>
            // <Container>
            //     <div className={'max-w-[1120px] mx-auto text-center'}>
            //         {images}
            //     </div>
            // </Container>
            // </Section>  
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

                <div className={`md:grid md:grid-cols-2 ${cols} gap-8 max-w-[1100px] mx-auto mt-6 lg:mt-12`}>
                    {li_items.map(item => {
                        
                        // const icon = 
                        // item.iconType == 'icon'
                        //     ? 
                        //         <div className={"mb-8 text-center md:text-left lg:mx-0 min-h-[108px]"}>
                        //             <GatsbyImage image={item.image} />
                        //         </div> 
                        //     :  
                        //     <>
                        //         <div className={"mb-8 text-center md:text-left lg:mx-0 min-h-[78px]"}></div>    
                        //         <span className={'block w-[138px] border-t-2 border-t-rm-green mb-7'}>
                        //         </span>  
                        //     </>   
                                
                        // return (
                        // <div className={'md:px-4 py-3'}>
                        //     {icon}
                        //     <h5 className={theme.text.H5}>{item.heading}</h5>        
                        //     <p className={`mt-4 text-center md:text-left`}>{item.text}</p>
                        // </div>
                        // )
                        return <IconTextBoxStack content={item} />
                    })}
                </div>
            </Container>
        </Section>          
        )

    // return (
    //     <Section settings={settings}>
    //         <Container>
    //             {logo}

    //             <div className={'mt-16 xl:grid xl:grid-cols-75/25'}>
    //                 <div className={'xl:w-[80%]'}>
    //                     <h1 className={theme.text.H1_STD + ' text-[#191984] mb-12'}>
    //                         HEALTHCARE STAFFING AGENCY REALIZES <br></br>2X USERS & <br className={'md:hidden'}></br>3X GROWTH
    //                     </h1>
    //                     <p className={theme.text.P_STD}>
    //                         All American Healthcare helps nursing facilities to quickly hire qualityhealthcare professionals, while helping RNs, CNAs and LPNs book the shifts they want to work. All American engaged Ridge Marketing to reboot their brand, raise their profile, help launch their AllShifts app and bring on more nurses and facilities.
    //                     </p>
    //                 </div>
    //                 <div className={'mt-10 md:grid md:grid-cols-2 xl:block xl:mt-0'}>
    //                     <div>
    //                         <p className={theme.text.P_BLD}>Website</p>
    //                         <ul className={'mb-12 mt-2'}>
    //                             <li>
    //                                 <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href="#">aahcs.com</a>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                     <div>
    //                         <p className={theme.text.P_BLD}>Services Provided</p>
    //                         <ul className={'mb-6 mt-2'}>
    //                             <li>
    //                                 <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href="#">Digital Marketing</a>
    //                             </li>
    //                             <li>
    //                                 <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href="#">Strategy</a>
    //                             </li>
    //                             <li>
    //                                 <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href="#">Brand Building</a>
    //                             </li>
    //                             <li>
    //                                 <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href="#">Website Design & Dev</a>
    //                             </li>
    //                             <li>
    //                                 <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href="#">Content Marketing</a>
    //                             </li>
    //                             <li>
    //                                 <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href="#">Video Production</a>
    //                             </li>
    //                             <li>
    //                                 <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href="#">SEO / SEM / PPC</a>
    //                             </li>
    //                             <li>
    //                                 <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href="#">Email Marketing</a>
    //                             </li>
    //                         </ul>
    //                     </div>

    //                 </div>
    //             </div>
    //         </Container>
    //     </Section>
    // )
}

export default FullWidthTextImage
