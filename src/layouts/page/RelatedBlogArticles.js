import React from "react" 
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import BlogCard from '../../components/BlogCards.js'

const RelatedBlogArticles = ({ props }) => {

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
                    <div className="mt-12 flex w-full flex-wrap justify-between">

                        <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32">
                            <img className="h-[50px] mt-[12.5px] w-min" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png" alt=""/>
                            
                            <div className="flex flex-col">
                                <div className="flex items-center ml-6 h-[75px]">
                                    <p className={ theme.text['H4'] }>Web Copywriting</p>
                                </div>
                                <div className="ml-6">
                                <p className={ theme.text['FOOTER'] }>
                                        Deliver compelling customer-focused content and campaign landing pages with strong calls-to-action. 
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
            </Container>
        </Section>
    )
}
export default RelatedBlogArticles