import React from "react"
import Link from "../../components/global/FlexibleLink"
import { Section, Container, BackgroundImage } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HomeHero = (props) => {

    const data      = props.layoutData;
    const content   = data.layoutContent;
    const settings  = data.layoutSettings || {};
    console.log(content);
    const image = getImage(content.backgroundImage.localFile.childImageSharp.gatsbyImageData);

    return (
        <Section classes={'relative h-[100vh]'} settings={settings}>
            <BackgroundImage image={image} classes={`w-[100vw] h-[100vh] absolute`}/>
            {/* <BackgroundImage image={image} classes={`h-calc(100%-33px) lg:h-[calc(100%-55px)]`}/> */}
            <Container className={'relative'}>
                <div className={'pt-[260px] md:pt-20 xl:pt-[330px]'}>

                <div className={`max-w-full mx-auto bg-black text-white mt-[400px] px-9 pt-11 pb-14 md:px-14 md:py-16 md:pt-16 md:mr-0 md:max-w-3/4 lg:px-[86px] lg:py-[86px] lg:mt-[0px] lg:max-w-[680px] xl:max-w-[710px]`}>
                {/* <div className={`max-w-full mx-auto bg-black text-white mt-[400px] px-9 pt-11 pb-14 md:px-14 md:pb-20 md:pt-16 md:mr-0 md:max-w-3/4 lg:px-[76px] lg:py-[85px] lg:mt-[337px] xl:max-w-[710px]`}> */}
                    <h1>
                        <span dangerouslySetInnerHTML={{__html: Parser(content.heading)}} className={theme.text.HERO + ` block`}></span>
                        <span dangerouslySetInnerHTML={{__html: Parser(content.subheading)}} className={`font-stratos font-light text-50px`}></span>
                    </h1>
                    <div className={'pt-10'}>
                        <Link
                            link={content.componentButton.link}
                            classes={theme.text_links.BASE_STYLING + theme.text_links.STD + theme.text_links.ARW_FWD_WHITE}
                            />
                    </div>
                </div>
                </div>
            </Container>
        </Section>
    )
}

export default HomeHero
