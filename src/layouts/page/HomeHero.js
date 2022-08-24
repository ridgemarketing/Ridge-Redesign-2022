import React from "react"
import Link from "../../components/global/FlexibleLink"
import { Section, Container, BackgroundImage } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import Parser from "../../components/global/Parser"
import { getImage } from "gatsby-plugin-image"

const HomeHero = (props) => {

    const data      = props.layoutData;
    const content   = data.layoutContent;
    const settings  = data.layoutSettings || {};
    const image = (content.backgroundImage) ? getImage(content.backgroundImage.localFile.childImageSharp.gatsbyImageData) : false;
    const mobileImage = (content.mobileImage) ? getImage(content.mobileImage.localFile.childImageSharp.gatsbyImageData) : false;
    const tabletImage = (content.tabletImage) ? getImage(content.tabletImage.localFile.childImageSharp.gatsbyImageData) : false;

    let isImage = true;
    if (content.video) {
        var video = <video src={content.video.sourcUrl} className={''}></video>
        isImage = false;
    }
    return (
        <Section classes={'relative'} settings={settings}>
            {!isImage && video}
            {isImage && <BackgroundImage image={image} mobile={mobileImage} tablet={tabletImage} classes={`h-calc(100%-33px) lg:h-[calc(100%-55px)]`}/> }
            <Container className={'relative'}>
                <div className={'pt-[60px] md:pt-20 xl:pt-[330px] max-w-[520px] lg:max-w-[700px] xl:max-w-full ml-auto'}>

                <div className={`relative z-10 max-w-full mx-auto bg-black text-white mt-[330px] md:mt-[260px] lg:mt-[200px] xl:mt-0 px-9 pt-11 pb-14 md:px-14 md:py-16 md:pt-16 md:mr-0 md:max-w-3/4 lg:px-[86px] lg:py-[86px] lg:max-w-[680px] xl:max-w-[710px]`}>
                    <h1>
                        <span dangerouslySetInnerHTML={{__html: Parser(content.heading)}} className={theme.text.HERO + ` block`}></span>
                        <span dangerouslySetInnerHTML={{__html: Parser(content.subheading)}} className={`font-stratos uppercase font-light text-30px md:text-40px lg:text-50px`}></span>
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
