import React from "react"
import Link from "../../components/global/FlexibleLink"
import {Section, Container, BackgroundImage} from "../../components/global/Wrappers"
import theme from "../../static/theme"

const HomeHero = (props) => {
    return (
        <Section settings={props.settings}>
            <BackgroundImage image={props.content.image} />
            <Container>
                <div className={`max-w-full md:max-w-3/4 xl:max-w-[710px]`}>
                    <h1>
                        <span className={theme.text.HERO + ` block`}>{props.content.heading}</span>
                        <span className={`font-stratos font-light text-50px`}>{props.content.subheading}</span>
                    </h1>
                    <div>
                        <Link
                            link={props.content.link}
                            classes={theme.text_links.BASE_STYLING + theme.text_links.STD + theme.text_link.ARW_FWD_WHITE}
                        />
                    </div>
                </div>
            </Container>
        </Section>
    )
}