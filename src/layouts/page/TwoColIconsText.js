import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import  { theme } from "../../static/theme"
import Link from "../../components/global/FlexibleLink"
import { graphql } from "gatsby"

const TwoColIconsText = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

    return (
        <Section settings={settings}>
            <Container>
                {/* TBD  */}
            </Container>
        </Section>
    )
}
export default TwoColIconsText
