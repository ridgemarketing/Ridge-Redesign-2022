import React from "react" 
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'

const PlatformLogos = ({ props }) => {

    return(
        <>
        <Section Settings={props.settings}>
            <Container ContainerClass={props.ContainerClass}>
                {props.title &&
                        <> 
                            <h2>
                                <span 
                                    className={ 
                                                theme.text['H2'] 
                                                + ' text-' + props.textColor 
                                                + ' text-' + props.textAlign
                                            }> 
                                    { props.title }
                                </span>
                            </h2>
                        </>
                    }
                    {props.description &&
                        <>
                            <p>
                                <span className={ 
                                                theme.text['P_STD'] 
                                                + ' text-' + props.textColor 
                                                + ' text-' + props.textAlign
                                            }>
                                    { props.description }
                                </span>
                            </p>
                        </>
                    }
                    <div className="mt-12 flex w-full flex-wrap justify-around">
                        <img className="w-full md:w-[31%] lg:w-[18%]" src="https://logos-world.net/wp-content/uploads/2021/02/Mailchimp-Logo-2018-present.png" alt="" />
                    </div> 
            </Container>
        </Section>
        </>
    )
}
export default PlatformLogos