import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import  { theme } from "../../static/theme"

const TextBlock = (props) => {
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

    return (
        <Section settings={settings}>
            <Container>
                <h2>
                    <span className={theme.text.H2}>
                        {content.mainText}
                    </span>
                </h2>
                <p>
                    <span className={theme.text.P_STD}>
                    {content.bodyText}
                    </span>
                    <span className={theme.text.P_BLD}>
                        {content.boldText}
                    </span>
                </p>
                {
                    content.isButton &&  
                    <a href={content.buttonHREF} className={text.button.BASE_STYLING}>
                        {content.buttonText}
                    </a>
                }
            </Container>
        </Section>
    )
}

export default TextBlock