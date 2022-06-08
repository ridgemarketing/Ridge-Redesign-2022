import React from "react" 
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'

const Quote = ({ props }) => {

    return(
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
                    <div className={` mt-12 flex w-full flex-wrap justify-between relative `}>
                        <div className={ `frosted-glass p-8 lg:p-14` }>
                            {props.content &&
                                <>
                                    <q className={ theme.text['Q'] }>
                                        { props.content }
                                        We’re very pleased with the quality of work that Ridge Marketing provided in redesigning our website. They’ve exceeded our expectations and provided a dramatically improved user experience for our customers.
                                    </q>
                                    <p className={ theme.text['P_BLD'] }>
                                        Dan Mchatton
                                    </p>
                                    <small className={ theme.text['FOOTER'] }>
                                        Customer Service Director, Amphenol
                                    </small>
                                </>
                            }
                        </div>
                        <p className={ theme.text['STATS'] + 'text-rm-green absolute -z-10 '}>“</p>
                    </div>
            </Container>
        </Section>
    )
}
export default Quote