import React, { useState } from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"

//USE THIS SECTION FOR TESTING SECTION STYLES
//any code put on this page will render to /sample-page


// <-------------------------------------------------->
// <--------------- TESTING SECTION ------------------>
// <-------------------------------------------------->

const FullWidthTextImage = (props) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.componentFlexibleMedia.image);
    const mobileImage = getImage(content.responsiveImages.mobile);
    let logo = image ? <GatsbyImage image={image} alt={content.imageAlt} /> : <></>;
    const images = mobileImage 
    ? 
        <>
        <GatsbyImage className={'md:hidden'} image={mobileImage} alt={content.imageAlt} />
        <GatsbyImage className={'hidden md:block mx-auto'} image={image} alt={content.imageAlt} />
        </>
    :
        <GatsbyImage image={image} alt={content.imageAlt} />; 

        return (
            <Section settings={settings}>
            <Container>
                <div className={'max-w-[1120px] mx-auto'}>
                    {images}
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
