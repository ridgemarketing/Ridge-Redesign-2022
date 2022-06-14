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
    const image = getImage(content.componentFlexibleMedia.image)



    return (
        <Section settings={settings} classes={'grid xl:block 2xl:max-w-[1920px] 2xl:mx-auto'}>
            <div className={'xl:absolute xl:left-[-202px] px-6 order-2 mt-16 xl:mt-0 mx-auto xl:mx-0 max-w-[928px] xl:max-w-[850px] order-2'}>
                <GatsbyImage image={image}/>
            </div>
            <Container>
                <div className={'flex justify-start xl:mt-20 xl:mb-[600px]'}>
                    <div className={`hidden xl:block xl:w-[calc(650px-(50vw-640px))] 2xl:w-[calc(726px-(50vw-640px)+(50vw-960px))] mr-8`}></div>

                    <div className={'flex-1 px-5 xl:pr-10'}>
                        <h4>
                            <span className={theme.text.H3}>RIDGE MARKETING<br/>WEBSITE DESIGN SERVICES</span>
                        </h4>
                        <p className={theme.text.P_STD + ' my-8 text-rm-grey'}>
                            Our in-house team of strategists, writers, search engine specialists, web designers and developers work with cutting-edge tools and web design techniques - allowing us to build you a supercharged web-based marketing asset. Our web design agency services include:
                        </p>
                        <ul className={'md:flex md:flex-wrap md:gap-[5%]'}>
                            <li className={'md:w-[45%] text-21px leading-[26px] mb-5 text-rm-grey'}>
                                Prospect and Industry Research
                            </li>
                            <li className={'md:w-[45%] text-21px leading-[26px] mb-5 text-rm-grey'}>
                                QA and Performance Testing
                            </li>
                            <li className={'md:w-[45%] text-21px leading-[26px] mb-5 text-rm-grey'}>
                               Messaging and Copy Writing
                            </li>
                            <li className={'md:w-[45%] text-21px leading-[26px] mb-5 text-rm-grey'}>
                                First Page Google Rankings
                            </li>
                            <li className={'md:w-[45%] text-21px leading-[26px] mb-5 text-rm-grey'}>
                               Sitemap and Architecture Planning
                            </li>
                            <li className={'md:w-[45%] text-21px leading-[26px] mb-5 text-rm-grey'}>
                                Analytics and Marketing Integrations
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default FullWidthTextImage
