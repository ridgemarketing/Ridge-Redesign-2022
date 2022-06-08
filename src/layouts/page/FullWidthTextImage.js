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

    const list = [
        {"image" : image, "text": "dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim"},
        {"image" : image, "text": "dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim"},
        {"image" : image, "text": "dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim"},
        {"image" : image, "text": "dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim"},
        {"image" : image, "text": "dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim"},
        {"image" : image, "text": "dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim"}
    ]

    const textBlocks = list.map(item => {
        const image = getImage(item.image)
        return (
            <div className={'md:px-4 py-3'}>
                <div className={"text-center max-w-[54px] mx-auto lg:mx-0"}>
                    <GatsbyImage image={image} />
                </div>
                <p className={`mt-4 text-center lg:text-left`}>{item.text}</p>
            </div>
        )
    })

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
                    <div className={'pb-12 xl:px-20 xl:pt-12 lg:pb-0 ' + order}>
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
    //     <Section settings={settings}>
    //     <Container>
    //         <div>
    //         <h3 className={'text-center'}>
    //             <span className={theme.text.H2}>Our Content Marketing Approach 
    //             </span>
    //         </h3>
    //         <p className={"mt-6 max-w-5xl mx-auto text-center"}>
    //             <span className={theme.text.P_STD}>Many prospects do extensive research online before making a purchase or reaching out to talk to a sales rep. Content marketing helps you build trust with your audience while alerting sales when action is needed. Ridge Marketing is a content marketing agency that helps you start or ramp up your existing content marketing efforts to win more loyal customers who expect smart, multi-channel digital experiences with your brand. 
    //             </span>
    //         </p>
        
    //         <p className={'mt-10 text-center'}>
    //             <span className={theme.text.H4}>When you partner with Ridge, we will:</span>
    //         </p>
    //         </div>

    //         <div className={'md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 max-w-[1100px] mx-auto mt-6 lg:mt-12'}>
    //             {textBlocks}
    //         </div>
    //     </Container>
    // </Section>
    )
}

export default FullWidthTextImage
