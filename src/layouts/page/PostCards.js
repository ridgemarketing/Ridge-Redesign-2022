import React from "react" 
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import BlogCard from '../../components/BlogCard.js'

const PostCards = ({ props }) => {
    
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
                                heading = { ` ` }
                                link    = { ` `}
                                image   = { ` ` }
                            />

                        </div>

                    </div>
            </Container>
        </Section>
    )
}
export default PostCards

export const query = graphql`
  fragment PostCards on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_PostCards {
        fieldGroupName
        layoutPostCards {
          layoutContent {
            heading
            taxonomy {
                id
            }
          }
          layoutSettings {
            padding {
              bottom
              top
            }
            anchorId
            backgroundColor
            classes
            id
          }
        }
    }
  }
`