import React from "react"
import Buttons from "../../components/global/Buttons"
import { Section, Container, BackgroundImage } from "../../components/global/Wrappers"
import Parser from "../../components/global/Parser"
import { getImage } from "gatsby-plugin-image"

// Teal gradient overlay pulled from Figma (node 11053:1447). Decimal angle + rgba stops
// can't be expressed as a Tailwind arbitrary value, so it lives in an inline style.
const OVERLAY = "linear-gradient(127deg, rgba(29,64,67,0.85) 24.09%, rgba(29,64,67,0.5) 62.33%, rgba(29,64,67,0.7) 88.78%)"

//background: linear-gradient(127deg, rgba(29, 64, 67, 0.85) 24.09%, rgba(29, 64, 67, 0.50) 62.33%, rgba(29, 64, 67, 0.70) 88.78%);

const HomeHero2026 = (props) => {

    const data     = props.layoutData || {};
    const content  = data.layoutContent || {};
    const settings = data.layoutSettings || {};

    const image       = (content.backgroundImage) ? getImage(content.backgroundImage.localFile.childImageSharp.gatsbyImageData) : false;
    const mobileImage = (content.mobileImage)      ? getImage(content.mobileImage.localFile.childImageSharp.gatsbyImageData)      : false;
    const tabletImage = (content.tabletImage)      ? getImage(content.tabletImage.localFile.childImageSharp.gatsbyImageData)      : false;

    const eyebrow    = content.eyebrow;
    const heading    = content.heading;
    const subheading = content.subheading;
    const button     = content.componentButton;

    let isImage = true;
    if (content.video) {
        var video = <video playsInline autoPlay="1" muted loop="loop" src={content.video} className={'absolute inset-0 object-cover object-center w-full h-full opacity-70'} type="video/webm"></video>
        isImage = false;
    }

    return (
        <Section classes={'relative overflow-hidden'} settings={settings}>
            {!isImage && video}
            {isImage && <BackgroundImage image={image} mobile={mobileImage} tablet={tabletImage} classes={'h-full opacity-70'} />}
            <div className="bg-black w-full h-full absolute top-0 left-0 -z-10" />
            {/* Teal gradient overlay sits above the image, below the text */}
            <div aria-hidden={true} className={'absolute inset-0 z-0'} style={{ backgroundImage: OVERLAY }}></div>

            <Container container={'default'} classes={'z-10'}>
                <div className={'flex flex-col justify-center min-h-[520px] md:min-h-[620px] xl:min-h-[794px] py-16 md:py-20'}>
                    <div className={'max-w-[560px] md:max-w-[760px]'}>
                        {heading &&
                            <h1 className={'font-stratos font-semibold uppercase text-rm-white text-[42px] md:text-[64px] xl:text-[80px] leading-[0.95]'}>{heading}</h1>
                        }
                        {eyebrow &&
                            <p className={'font-stratos font-medium uppercase text-[#CAF844] text-[15px] md:text-[21px] leading-tight tracking-[0.01em] mt-4 md:mt-6'}>{eyebrow}</p>
                        }
                        {subheading &&
                            <span dangerouslySetInnerHTML={{ __html: Parser(subheading) }} className={'block mt-5 font-stratos uppercase font-light text-rm-white text-30px lg:text-40px'}></span>
                        }
                        {button && button.link &&
                            <div className={'mt-8 md:mt-10 w-max'}>
                                <Buttons content={button} sectionBackground={'default'} />
                            </div>
                        }
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default HomeHero2026
