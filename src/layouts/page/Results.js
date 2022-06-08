import React from "react" 
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'

const Results = ({ props }) => {
    let theSize = props.ResultsSize; //large or small 
    let resultTextSize_Container        = theSize == 'large' ? `large md:w-[48%]` : `small lg:w-[31%] mb-12`;  
    let resultTextSize_textSizeLarge    = theSize == 'large' ? theme.text['STATS'] : theme.text['H2'];
    let resultTextSize_textSizeSmall    = theSize == 'large' ? theme.text['P_STD'] : theme.text['H4'];
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
                <div className={` mt-12 flex w-full flex-wrap justify-between `}>
        
                    {/* small */}
                    <div className={ 'flex flex-col w-full ' + resultTextSize_Container }>
                        <p className={ resultTextSize_textSizeSmall + ' mb-1' }>Carbon Fiber Wheel Manufacturer Launches</p>
                        <p className={ resultTextSize_textSizeLarge + 'mb-12 ' + 'text-rm-green' }>Ecommerce Website</p>
                        <a href="#" className={ theme.text_links['BASE_STYLING'] + theme.text_links['FWD_BASE'] + theme.text_links['STD'] + theme.text_links['ARW_FWD_BLACK'] }>VIEW CASE STUDY</a>
                    </div>

                    {/* large */}
                    <div className={ 'flex flex-col w-full ' + resultTextSize_Container }>
                        <p className={ resultTextSize_textSizeLarge + 'text-rm-green' }>184<sup>%</sup></p>
                        <p className={ theme.text['H3'] + 'mb-9 ' }>Increase in Online Orders</p>
                        
                        <p className={ resultTextSize_textSizeSmall }>Global Manufacturer</p>
                    </div>
                    <div className={ 'flex flex-col w-full ' + resultTextSize_Container }>
                        <p className={ resultTextSize_textSizeLarge + 'text-rm-green' }>184<sup>%</sup></p>
                        <p className={ theme.text['H3'] + 'mb-9 ' }>Increase in Online Orders</p>
                        
                        <p className={ resultTextSize_textSizeSmall }>Global Manufacturer</p>
                    </div>

                </div>
            </Container>
        </Section>
    )
}
export default Results;