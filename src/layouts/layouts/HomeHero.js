import React from "react"
import Link from "../../components/global/FlexibleLink"
import { Section, Container, BackgroundImage } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import Parser from "../../components/global/Parser"
import { getImage } from "gatsby-plugin-image"

const HomeHero = (props) => {

    const data      = props.layoutData;
    const content   = data.layoutContent;
    console.log(content);
    const settings  = data.layoutSettings || {};
    const image = (content.backgroundImage) ? getImage(content.backgroundImage.localFile.childImageSharp.gatsbyImageData) : false;
    const mobileImage = (content.mobileImage) ? getImage(content.mobileImage.localFile.childImageSharp.gatsbyImageData) : false;
    const tabletImage = (content.tabletImage) ? getImage(content.tabletImage.localFile.childImageSharp.gatsbyImageData) : false;

    let isImage = true;
    if (content.video) {
        var video = <video playsinline autoplay="1" muted loop="loop" src={content.video} className={'absolute object-cover object-center w-full h-full'} type="video/mp4"></video>
        isImage = false;
    }
    return (
        <>
        <Section classes={'relative'} settings={settings}>
            {!isImage && video}
            {isImage && <BackgroundImage image={image} mobile={mobileImage} tablet={tabletImage} classes={`h-calc(100%-33px) lg:h-[calc(100%-55px)]`}/> }
            <Container classes={'homeHero'}>
                <div className={'pt-[60px] md:pt-20 xl:pt-0 max-w-[520px] lg:max-w-[700px] xl:max-w-full ml-auto relative -bottom-[100px]'}>
                </div>
            </Container>
        </Section>
        <div className={`w-full lg:-mt-44`}>
            <div className="w-full ml-auto mr-auto lg:max-w-[930px] xl:max-w-[1280px]">
                <div className={`relative z-10 max-w-full mx-auto bg-black text-white px-9 pt-11 pb-14 md:px-14 md:py-16 md:pt-16 md:ml-0 w-[99%] sm:w-full xl:w-min xl:max-w-min `}>
                    <h1 className={`w-min`}>
                        <span dangerouslySetInnerHTML={{__html: Parser(content.heading)}} className={`font-stratos uppercase text-80px leading-[75px] font-bold block w-[99%] md:w-max`}></span>
                        <span dangerouslySetInnerHTML={{__html: Parser(content.subheading)}} className={`font-stratos uppercase font-light text-30px lg:text-40px w-min`}></span>
                    </h1>
                    <div className={'pt-10 w-max'}>
                        <Link
                            link={content.componentButton.link}
                            classes={theme.text_links.BASE_STYLING + theme.text_links.FWD_BASE + theme.text_links.STD + theme.text_links.ARW_FWD_WHITE}
                            />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeHero
