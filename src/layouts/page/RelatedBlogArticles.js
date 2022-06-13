import React from "react" 
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import BlogCard from '../../components/BlogCard.js'

const RelatedBlogArticles = ({ props }) => {
    
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.componentFlexibleMedia.image);
    
    return(
        <Section Settings={ settings }>
            <Container>
                {content.heading &&
                    <> 
                        <h2>
                            <span 
                                className={ 
                                            theme.text['H2'] 
                                            + ' text-' + content.textColor 
                                            + ' text-' + content.textAlign
                                        }> 
                                { content.heading }
                            </span>
                        </h2>
                    </>
                }
                {content.bodyText &&
                    <>
                        <p>
                            <span className={ 
                                            theme.text['P_STD'] 
                                            + ' text-' + content.textColor 
                                            + ' text-' + content.textAlign
                                        }>
                                { content.bodyText }
                            </span>
                        </p>
                    </>
                }
                    <div className="mt-12 flex w-full flex-col justify-center items-center lg:flex-row lg:flex-wrap lg:justify-between lg:items-baseline">

                        <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32">
                           
                            <BlogCard
                                heading = { `Elevate Your Next Content Marketing Campaign Today. Download our Field Guide` }
                                link = {
                                        url = ''
                                }
                                image = { `` }
                            />

                        </div>

                    </div>
            </Container>
        </Section>
    )
}
export default RelatedBlogArticles