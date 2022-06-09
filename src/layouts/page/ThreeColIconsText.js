import React from "react" 
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'

export const ThreeColIconsText_Loop = ( props ) => {

    return(
        <>
           {/* loop items */}
           <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32">
                    <GatsbyImage 
                            image={ image } 
                            alt={ content.image.alt } 
                            className={ `object-cover w-full ` } 
                    /> 
                    <div className="flex flex-col">
                        <div className="flex items-center ml-6 h-[75px]">
                            <p 
                                className={ theme.text['H4'] }>
                                { content.col.heading }
                            </p>
                        </div>
                        <div className="ml-6">
                            <p 
                                className={ theme.text['FOOTER'] }>
                                { content.col.bodyText }
                            </p>
                        </div>
                    </div>  
                </div>
            {/* end loop */}
        </>
    )
}

const ThreeColIconsText = ({ props }) => {
    
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

                <div className="flex w-full flex-wrap justify-between">
                    <ThreeColIconsText_Loop/>
                </div>

                {content.subHeading &&
                    <>
                        <h2>
                            <span
                                className={ 
                                        theme.text['H2'] 
                                        + ' text-' + content.textColor 
                                        + ' text-' + content.textAlign
                                    }> 
                                { content.subHeading }
                            </span>
                        </h2>
                    </>
                }
                {content.button &&
                    <>
                        <Link
                            className={ 
                                theme.button['BASE_STYLING'] + 
                                theme.button[ context.button.color ] + 
                                'w-[210px] h-min '}
                            to={ content.button.url }
                        >
                        { content.button.heading }
                        </Link>
                    </>
                }
            </Container>
        </Section>
    )
}
export default ThreeColIconsText;