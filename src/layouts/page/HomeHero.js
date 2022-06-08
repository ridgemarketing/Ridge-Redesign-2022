import React from "react"
import Link from "../../components/global/FlexibleLink"
import { Section, Container, BackgroundImage } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"

const HomeHero = (props) => {

    const data      = props.layoutData;
    const content   = data.layoutContent;
    const settings  = data.layoutSettings;

    return (
        <Section settings={settings}>
            <BackgroundImage image={content.image} classes={`h-calc(100%-33px) lg:h-[calc(100%-55px)]`} />
            <Container>
                <div className={`max-w-full mx-auto bg-black text-white mt-[400px] px-9 pt-11 pb-14 md:px-14 md:pb-20 md:pt-16 md:mr-0 md:max-w-3/4 lg:px-[76px] lg:py-[85px] lg:mt-[337px] xl:max-w-[710px]`}>
                    <h1>
                        <span className={theme.text.HERO + ` block`}>{content.heading}</span>
                        <span className={`font-stratos font-light text-50px`}>{content.subheading}</span>
                    </h1>
                    <div>
                        <Link
                            link={content.link}
                            classes={theme.text_links.BASE_STYLING + theme.text_links.STD + theme.text_link.ARW_FWD_WHITE}
                        />
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default HomeHero
