import React from "react"
import {Section, Container } from "../../components/global/Wrappers"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"

const FullWidthTextImage = (props) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.componentFlexibleMedia.image)
    let order;
    (settings.id == 'image-left') ? order= 'order-2' : order = '';

    return (
        // <Section settings={settings}>
        //     <Container>
        //         <div className="text-center">
        //             <h1 className={theme.text.H2 + ' z-10 relative'}>Full Width Text Image</h1>
        //             <div className={'max-w-[328px] mx-auto relative bottom-6 z-0'}>
        //                 <GatsbyImage image={image} />
        //             </div>
        //             <p className={'mt-8'}>
        //                 Test text to view spacing below positioned image
        //             </p>
        //         </div>
        //     </Container>
        // </Section>
        <Section settings={settings}>
            <Container>
                <div className={'lg:grid grid-cols-2 gap-16 pt-16'}>
                    <div className={'pb-12 xl:px-20 xl:pt-12 lg:pb-0' + order}>
                        <h3>
                            <span className={theme.text.H2 + ' uppercase'}>
                                your social media marketing agency partner
                            </span>
                        </h3>
                        <p className={theme.text.P_STD + ' mt-8'}>
                        Engaging your audience on social media requires channel expertise, strategic planning, and relationship building. As your social media marketing partner, we utilize the latest social media marketing tools to monitor and listen to conversations relevant to your brand to connect with your customers, provide customer support, measure your social media reach, and understand social media trends that impact your business.  
                        </p>
                    </div>

                    <div className={"lg:text-left text-center"}>
                        <GatsbyImage image={image} />
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default FullWidthTextImage
