import React from "react"
import {Section } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"

const TwoColList = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
 
    return (
        <Section settings={settings}>
            <h2>
                <span className={theme.text.P_STD}>This is from the Two Col List Layout</span>
            </h2>

            <ul className={'mt-5'}>
                {content.list.map(item => {
                    return <li>{item.listItem}</li>
                })}
            </ul>
        </Section>
    )
}

export default TwoColList;