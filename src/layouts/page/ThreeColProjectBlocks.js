import React from "react" 
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import { graphql } from "gatsby"

export const ThreeColProjectBlocks_Loop = (props) =>{

    return(
        <>
            {/* loop items */}
            {/* <div className="flex flex-col justify-center w-full md:w-[48%] lg:w-[31%] mb-12">
                <GatsbyImage 
                    image={ image } 
                    alt={ content.image.alt } 
                    className={ `object-cover w-full ` } 
                /> 
                <Link 
                    className={ 
                        theme.text_links['BASE_STYLING'] + 
                        theme.text_links['STD'] + 
                        theme.text_links['FWD_BASE'] + 
                        theme.text_links['ARW_FWD_BLACK'] + 
                        'mt-3' } 
                    to={ content.link.url }>
                    { content.link.heading }
                </Link>
            </div> */}
            {/* end loop */}
        </>
    )
}

const ThreeColProjectBlocks = ({ props }) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

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

                <div className="flex w-full flex-wrap justify-between">
                    {/* <ThreeColProjectBlocks_Loop /> */}
                    {content.projectBlocks.map(block => {
                        const image = getImage(block.image);
                        return (
                        <div className="flex flex-col justify-center w-full md:w-[48%] lg:w-[31%] mb-12">
                            <GatsbyImage 
                                image={ image } 
                                alt={ block.imageAlt } 
                                className={ `object-cover w-full ` } 
                            /> 
                            <Link 
                                className={ 
                                    theme.text_links['BASE_STYLING'] + 
                                    theme.text_links['STD'] + 
                                    theme.text_links['FWD_BASE'] + 
                                    theme.text_links['ARW_FWD_BLACK'] + 
                                    'mt-3' } 
                                to={ block.link.url }>
                                { block.link.heading }
                            </Link>
                    </div>
                        )
                    })}
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
                                theme.button[ content.button.color ] + 
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
export default ThreeColProjectBlocks;



export const query = graphql`
  fragment ThreeColProjectBlocksPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_ThreeColProjectBlocks {
        fieldGroupName
        layoutThreeColProjectBlocks {
          layoutContent {
            topHeading
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