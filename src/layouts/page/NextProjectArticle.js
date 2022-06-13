import React from "react"
import { theme } from '../static/theme'
import { Link } from "gatsby"
import { Container, Section } from '../../components/global/Wrappers.js'

const PreFooterNavigation = (props) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

    return(
        <Section Settings={ settings }>
            <Container>
                <div className="pre-footer-navigation w-full font-stratos block border-t border-[#c5c5c5] border-solid mt-8 mb-8">
                    <div className="w-full flex justify-between mt-8 text-rm-green">
                        <Link 
                            to={ content.back.url }
                            className={ 
                                theme.text_links['BASE_STYLING'] + 
                                theme.text_links['STD'] + 
                                theme.text_links['BACK_BASE'] + 
                                theme.text_links['ARW_BACK_GREEN'] } >
                            PREVIOUS { content.back.heading }
                        </Link>
                        <Link 
                            to={ content.next.url }
                            className={ 
                                theme.text_links['BASE_STYLING'] + 
                                theme.text_links['STD'] + 
                                theme.text_links['FWD_BASE'] + 
                                theme.text_links['ARW_FWD_GREEN'] } >
                            NEXT { content.next.heading }
                        </Link>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default PreFooterNavigation