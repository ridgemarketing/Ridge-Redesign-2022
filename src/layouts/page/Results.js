import React from "react" 
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import { content } from "../../../tailwind.config.js"
import ResultItem from '../../components/ResultItem.js'

const Results = ({ props }) => {
    
    // IMPORTANT
    //small text needs padding options of   mb-1 ? mb-9 ? mb-0
    //large text needs padding options of   mb-12 ? mb-0

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

    let theSize = content.ResultsSize; //large or small 
    let resultTextSize_Container        = theSize === 'large' ? `large md:w-[48%] ` : `small lg:w-[31%] mb-12 `;  
    let resultTextSize_textSizeLarge    = theSize === 'large' ? theme.text['STATS'] : theme.text['H2'];
    let resultTextSize_textSizeSmall;

    //three sizes for smaller text sections (Homepage, Work Page, Services Page)
    if( content.descriptorSize === 'large' ){
        resultTextSize_textSizeSmall    = theme.text['H3'];
    }
    if( content.descriptorSize === 'medium' ){
        resultTextSize_textSizeSmall    = theme.text['H4'];
    }
    if( content.descriptorSize === 'small' ){
        resultTextSize_textSizeSmall    = theme.text['P_STD'];
    }

    let stacked = content.ResultsStack;
    let resultOrientation               = stacked == `stacked` ? `flex-row ` : `flex-col `; 


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
                <div className={` mt-12 flex w-full flex-wrap justify-between `}>
                    { content.results.smallText &&     
                        <ResultItem
                            smallText   = { content.results.smallText }
                            className   = { resultTextSize_textSizeSmall }
                            textColor   = { content.results.textColor }
                            caseStudy   = { content.results.caseStudy }
                            padding     = { content.results.textPadding }

                            container   = { resultTextSize_Container + resultOrientation }

                        />
                    }
                    { content.results.largeText &&
                        <ResultItem
                            largeText   = { content.results.largeText }
                            className   = { resultTextSize_textSizeLarge }
                            textColor   = { content.results.textColor }
                            padding     = { content.results.textPadding }
                        
                            container   = { resultTextSize_Container + resultOrientation }

                        />
                    }
                </div>
            </Container>
        </Section>
    )
}
export default Results;