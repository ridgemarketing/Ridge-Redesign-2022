import React from "react" 
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'

export const LogoCloud_Loop = (props) =>{
    
    return(
        <GatsbyImage 
            image={ image } 
            alt={ content.image.alt } 
            className={ `w-full md:w-[31%] lg:w-[18%] ` } 
        />
    )
}

const LogoCloud = ({ props }) => {

    return(
        <Section Settings={ settings }>
            <Container>
                {content.heading &&
                    <h2 className={theme.text['H2'] + ''}> 
                        { content.heading }
                    </h2>
                }
                {content.bodyText &&
                    <p className={theme.text['P_STD'] + ''}>
                        { content.bodyText }
                    </p>
                }
                <div className="mt-12 flex w-full flex-wrap justify-around">
                    <LogoCloud_Loop/>
                </div> 
            </Container>
        </Section>
    )
}
export default LogoCloud