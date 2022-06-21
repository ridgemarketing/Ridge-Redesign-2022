import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"

const ThreeFourthsTextOneFourthList = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.componentFlexibleMedia.image);
    let logo = image ? <GatsbyImage image={image} alt={content.imageAlt} /> : <></>;

    return (
        //need to put px-6 xl:p-20 classes on the section tag
        <Section settings={settings}>
            <Container>
                {logo}

                <div className={'mt-16 xl:grid xl:grid-cols-75/25'}>
                    <div className={'xl:w-[80%]'}>
                        <h1 className={theme.text.H1_STD + ' text-[#191984] mb-12'}>
                            {content.heading}
                        </h1>
                        <p className={theme.text.P_STD}>
                            {content.bodyText}
                        </p>
                    </div>
                    <div className={'mt-10 md:grid md:grid-cols-2 xl:block xl:mt-0'}>

                        <div>
                            <p className={theme.text.P_BLD}>{content.listOneHeading}</p>
                            <ul className={'mb-12 mt-2'}>
                                {content.listOne.map(item => {
                                    return (
                                        <li>
                                            <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href={item.link}>{item.text}</a>
                                        </li>                                       
                                    )
                                })}
                            </ul>
                        </div>

                        <div>
                            <p className={theme.text.P_BLD}>{content.listTwoHeading}</p>
                            <ul className={'mb-6 mt-2'}>
                                {content.listTwo.map(item => {
                                    return (
                                        <li>
                                            <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href={item.link}>{item.text}</a>
                                        </li>                                       
                                    )
                                })}                                
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default ThreeFourthsTextOneFourthList