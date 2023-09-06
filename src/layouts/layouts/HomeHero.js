import React, { useEffect } from "react"
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

    const headingsList = content.headingCycle;
    const LENGTH = headingsList.length;
    const animationTimer = 4000;
    let aniIdx = 1
    
    useEffect(() => {
        const interval = setInterval(() => {
            let idxToChange = (aniIdx === LENGTH) ? 1 : aniIdx + 1;
            document.getElementById(`heading${aniIdx}`).classList.remove('animate-textFadeIn');
            document.getElementById(`heading${aniIdx}`).classList.add('animate-textFadeOut');
            document.getElementById(`heading${idxToChange}`).classList.remove('hidden', 'animate-textFadeOut');
            document.getElementById(`heading${idxToChange}`).classList.add('animate-textFadeIn');
            aniIdx = idxToChange;
        }, animationTimer);

          return () => clearInterval(interval);
    }, [])
 

    let isImage = true;
    if (content.video) {
        var video = <video playsInline autoPlay="1" muted loop="loop" src={content.video} className={'absolute object-cover object-center w-full h-full'} type="video/mp4"></video>
        isImage = false;
    }
    return (
        <>
        <Section classes={'relative'} settings={settings}>
            {!isImage && video}
            {isImage && <BackgroundImage image={image} mobile={mobileImage} tablet={tabletImage} classes={`h-calc(100%-33px) lg:h-[calc(100%-55px)]`}/> }
            <Container classes={'homeHero'} containerWidth={'slim'}>
                <div className={'pt-[60px] md:pt-20 xl:pt-0 max-w-[520px] lg:max-w-[700px] xl:max-w-full ml-auto relative -bottom-[100px]'}>
                </div>
            </Container>
        </Section>
        <div className={`-mt-px w-full lg:-mt-44`}>
            <div className="w-full ml-auto mr-auto lg:max-w-[930px] xl:max-w-[1120px] xl:pl-12">
                <div className={`relative z-10 max-w-full mx-auto bg-black text-white px-9 pt-11 pb-14 md:px-14 md:py-16 md:pt-16 md:ml-0 w-full sm:w-full xl:w-min xl:max-w-min `}>
                    <h1 className={`w-min`}>
                        <ul className={"h-min overflow-hidden relative"}>
                            {headingsList.map((data, idx) => {
                                return (
                                    <li key={`headingListItem__${idx+1}`} id={`heading${idx+1}`} className={`${(idx === 0) ? 'animate-textFadeIn !block' : 'hidden absolute top-0 left-0'} font-stratos uppercase text-80px xl:text-[83px] leading-[75px] font-bold w-full md:w-max`}>{data.heading}</li>
                                )
                            })}
                            {/* add blank li here thats ignored by loop and stays relative to maintain width if necessary */}
                        </ul>
                        <span dangerouslySetInnerHTML={{__html: Parser(content.subheading)}} className={`relative font-stratos uppercase font-light text-30px lg:text-40px w-min`}></span>
                    </h1>
                    <div className={'pt-10 w-max'}>
                        <Link
                            link={content.componentButton.link}
                            classes={`${theme.text_links.BASE_STYLING} ${theme.text_links.FWD_BASE} ${theme.text_links.HOVER_GREEN} ${theme.text_links.STD} ${theme.text_links.ARW_FWD_WHITE} ${theme.text_links.HOVER_ARW_FWD_GREEN}`}
                            />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeHero
