// let order;
// (settings.id == 'image-left') ? order= 'order-2' : order = '';

// const list = [
//     {"image" : image, "text": "dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim"},
//     {"image" : image, "text": "dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim"},
//     {"image" : image, "text": "dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim"},
//     {"image" : image, "text": "dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim"},
//     {"image" : image, "text": "dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim"},
//     {"image" : image, "text": "dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim"}
// ]

// const textBlocks = list.map(item => {
//     const image = getImage(item.image)
//     return (
//         <div className={'md:px-4 py-3'}>

//             <div className={"text-center md:text-left lg:mx-0 min-h-[54px]"}>
//                 <GatsbyImage image={image} />
//             </div>
            
//             <p className={`mt-4 text-center md:text-left`}>{item.text}</p>
//         </div>
//     )
// })
       
       
       
       
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
        // <Section settings={settings}>
        //     <Container>
        //         <div className={'lg:grid grid-cols-2 gap-16 pt-16'}>
        //             <div className={'pb-12 xl:px-20 xl:pt-12 lg:pb-0 ' + order}>
        //                 <h3>
        //                     <span className={theme.text.H2 + ' uppercase'}>
        //                         your social media marketing agency partner
        //                     </span>
        //                 </h3>
        //                 <p className={theme.text.P_STD + ' mt-8'}>
        //                 Engaging your audience on social media requires channel expertise, strategic planning, and relationship building. As your social media marketing partner, we utilize the latest social media marketing tools to monitor and listen to conversations relevant to your brand to connect with your customers, provide customer support, measure your social media reach, and understand social media trends that impact your business.  
        //                 </p>
        //             </div>

        //             <div className={"lg:text-left text-center"}>
        //                 <GatsbyImage image={image} />
        //             </div>
        //         </div>
        //     </Container>
        // </Section>


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



// THIS IS THE BREAKOUT IMAGE TEXT SECTION 

<Section settings={settings} classes={'grid xl:block 2xl:max-w-[1920px] 2xl:mx-auto'}>
<div className={'xl:absolute xl:left-[-202px] px-6 order-2 mt-16 xl:mt-0 mx-auto xl:mx-0 max-w-[928px] xl:max-w-[850px] order-2'}>
    <GatsbyImage image={image}/>
</div>
<Container>
    <div className={'flex justify-start xl:mt-20 xl:mb-[600px]'}>
        <div className={`hidden xl:block xl:w-[calc(650px-(50vw-640px))] 2xl:w-[calc(726px-(50vw-640px)+(50vw-960px))] mr-8`}></div>

        <div className={'flex-1 px-5 xl:pr-10'}>
            <h4>
                <span className={theme.text.H3}>RIDGE MARKETING<br/>WEBSITE DESIGN SERVICES</span>
            </h4>
            <p className={theme.text.P_STD + ' my-8 text-rm-grey'}>
                Our in-house team of strategists, writers, search engine specialists, web designers and developers work with cutting-edge tools and web design techniques - allowing us to build you a supercharged web-based marketing asset. Our web design agency services include:
            </p>
            <ul className={'md:flex md:flex-wrap md:gap-[5%]'}>
                <li className={'md:w-[45%] text-21px leading-[26px] mb-5 text-rm-grey'}>
                    Prospect and Industry Research
                </li>
                <li className={'md:w-[45%] text-21px leading-[26px] mb-5 text-rm-grey'}>
                    QA and Performance Testing
                </li>
                <li className={'md:w-[45%] text-21px leading-[26px] mb-5 text-rm-grey'}>
                   Messaging and Copy Writing
                </li>
                <li className={'md:w-[45%] text-21px leading-[26px] mb-5 text-rm-grey'}>
                    First Page Google Rankings
                </li>
                <li className={'md:w-[45%] text-21px leading-[26px] mb-5 text-rm-grey'}>
                   Sitemap and Architecture Planning
                </li>
                <li className={'md:w-[45%] text-21px leading-[26px] mb-5 text-rm-grey'}>
                    Analytics and Marketing Integrations
                </li>
            </ul>
        </div>
    </div>
</Container>
</Section>






    // return (
    //     <Section settings={settings}>
    //         <Container>
    //             {logo}

    //             <div className={'mt-16 xl:grid xl:grid-cols-75/25'}>
    //                 <div className={'xl:w-[80%]'}>
    //                     <h1 className={theme.text.H1_STD + ' text-[#191984] mb-12'}>
    //                         HEALTHCARE STAFFING AGENCY REALIZES <br></br>2X USERS & <br className={'md:hidden'}></br>3X GROWTH
    //                     </h1>
    //                     <p className={theme.text.P_STD}>
    //                         All American Healthcare helps nursing facilities to quickly hire qualityhealthcare professionals, while helping RNs, CNAs and LPNs book the shifts they want to work. All American engaged Ridge Marketing to reboot their brand, raise their profile, help launch their AllShifts app and bring on more nurses and facilities.
    //                     </p>
    //                 </div>
    //                 <div className={'mt-10 md:grid md:grid-cols-2 xl:block xl:mt-0'}>
    //                     <div>
    //                         <p className={theme.text.P_BLD}>Website</p>
    //                         <ul className={'mb-12 mt-2'}>
    //                             <li>
    //                                 <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href="#">aahcs.com</a>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                     <div>
    //                         <p className={theme.text.P_BLD}>Services Provided</p>
    //                         <ul className={'mb-6 mt-2'}>
    //                             <li>
    //                                 <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href="#">Digital Marketing</a>
    //                             </li>
    //                             <li>
    //                                 <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href="#">Strategy</a>
    //                             </li>
    //                             <li>
    //                                 <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href="#">Brand Building</a>
    //                             </li>
    //                             <li>
    //                                 <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href="#">Website Design & Dev</a>
    //                             </li>
    //                             <li>
    //                                 <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href="#">Content Marketing</a>
    //                             </li>
    //                             <li>
    //                                 <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href="#">Video Production</a>
    //                             </li>
    //                             <li>
    //                                 <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href="#">SEO / SEM / PPC</a>
    //                             </li>
    //                             <li>
    //                                 <a style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);'}} className={'underline text-21px leading-[32px] font-light'} href="#">Email Marketing</a>
    //                             </li>
    //                         </ul>
    //                     </div>

    //                 </div>
    //             </div>
    //         </Container>
    //     </Section>
    // )