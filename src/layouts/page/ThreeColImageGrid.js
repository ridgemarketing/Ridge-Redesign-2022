import React from "react" 
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'

const ThreeColImageGrid = ({ props }) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.componentFlexibleMedia.image)
    let order;

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
                <div className="mt-12 flex w-full flex-wrap justify-between">

                    <div className="flex flex-col justify-center w-full md:w-[48%] lg:w-[31%] mb-12">
                        {/* <GatsbyImage image={data.image} alt={``} className={ `object-cover w-full ` } /> */}
                        <StaticImage 
                                src='https://i.insider.com/5bfec49248eb12058423acf7' 
                                alt={``} 
                                className={ `object-cover w-full ` }
                                /> 
                        <Link className={ theme.text_links['BASE_STYLING'] + theme.text_links['STD'] + theme.text_links['FWD_BASE'] + theme.text_links['ARW_FWD_BLACK'] + 'mt-3' } to={'#'}>Project Name</Link>
                    </div>

                </div>
            </Container>
        </Section>
    )
}
export default ThreeColImageGrid;