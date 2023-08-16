import React, {useState} from "react";
import { theme } from "../../static/theme";
import Link from "./FlexibleLink"
import { GatsbyImage } from "gatsby-plugin-image";

const LightBoxBranding = ({ images, video, title, link, size, brandingImgLinkLarge, brandingImgLinkMobile, brandingImgLinkSmall, sidePin, twoCol, twoColImg }) => {
    
    let gallery;
    let loadNext;
    let loadPrev;
    let togglePopup;
    let handleHoverState;
    let linkInfo;
    let galleryLength;

    if(images && images.length > 0){
        console.log(images);
        let thumbnail                   = images[0].image.localFile.childImageSharp.gatsbyImageData;
        gallery                         = images.length > 1 ? images.slice(1) : video ? thumbnail : images[0]
    }
    const [image, setImage]             = useState(0);
    const [hoverState, setHoverState]   = useState("hidden");
    const [overlay, setOverlay]         = useState(false);

    if(images){
        if(gallery.length){
            galleryLength = true;
        }else{
            galleryLength = false;
        }

        loadNext = () =>{
            if( (image) === (gallery.length - 1)){
                setImage(0);
            }else{
                setImage(image + 1);
            }
        }
        loadPrev = () =>{
            if( (image)  === 0 ){
                setImage(gallery.length - 1);
            }else{
                setImage(image - 1);
            }
        }

        togglePopup = () =>{
            if(images.length > 1){
                if(overlay === false){
                    setOverlay(true);
                    document.body.classList.add("overflow-hidden");
                }
                if(overlay === true){
                    setOverlay(false);
                    document.body.classList.remove("overflow-hidden");
                    setImage(0);
                }
            }
        }
        linkInfo = {
            target: "_blank",
            url: link,
            title: "Visit Website"
        }
        handleHoverState = (currentlyShowing) => {
            setHoverState((currentlyShowing) ? "hidden" : "flex");
            return;
        }
    }
    return(<>
        {!twoCol &&
            <div onMouseEnter={() => handleHoverState(false)} onMouseLeave={() => handleHoverState(true)}>
                {size == 'large' && 
                    <>
                        {brandingImgLinkMobile && 
                            <>
                                <div className="block xl:hidden">
                                    <button className="block h-max" onClick={()=>togglePopup()} onKeyDown={()=>togglePopup()}>
                                        <GatsbyImage 
                                            image={brandingImgLinkMobile} 
                                            alt={``} 
                                            objectPosition={`${sidePin}`}
                                            className={`w-full h-[100vw] xl:h-[700px] z-0 border-solid border-black border-[9px]`} />
                                    </button>
                                </div>
                                <div className="hidden xl:block">
                                    <button className="block h-max" onClick={()=>togglePopup()} onKeyDown={()=>togglePopup()}>
                                        <GatsbyImage 
                                            image={brandingImgLinkLarge} 
                                            alt={``} objectPosition={`${sidePin}`}
                                            className={`w-full h-[100vw] xl:h-[700px] z-0 border-solid border-black border-[9px]`} />
                                    </button>
                                </div>
                            </>
                        }
                        {brandingImgLinkLarge && !brandingImgLinkMobile && 
                            <button className="block h-max" onClick={()=>togglePopup()} onKeyDown={()=>togglePopup()}>
                                <GatsbyImage 
                                    image={brandingImgLinkLarge} 
                                    alt={``} objectPosition={`${sidePin}`}
                                    className={`w-full h-[100vw] xl:h-[700px] z-0 border-solid border-black border-[9px]`} />
                            </button>
                        }
                    </>
                }
                {size == 'small' &&
                    <>
                        {brandingImgLinkSmall&& 
                            <button className="block h-max" onClick={()=>togglePopup()} onKeyDown={()=>togglePopup()}>
                                <GatsbyImage 
                                    image={brandingImgLinkSmall} 
                                    alt={``} 
                                    className={`w-full h-[100vw] xl:h-[350px] xl:w-[350px] z-0 border-solid border-black border-[9px]`} />
                            </button>
                        }
                    </>
                }
                <>
                    {/* rollover desktop */}
                    <div className="hidden lg:flex flex-col justify-center items-center absolute opacity-0 hover:opacity-100 bg-opacity-80 backdrop-blur-sm bg-white w-[calc(100%-18px)] h-[calc(100%-18px)] top-[9px] left-[9px] transition-opacity duration-500">
                        <h2 className="text-rm-black font-stratos uppercase text-[1.75rem] leading-6 font-bold mb-[45px]">{title}</h2>
                            {images.length > 1 &&
                                <button onClick={()=>togglePopup()} onKeyDown={()=>togglePopup()} className={`${theme.button['BASE_STYLING']} ${theme.button['SOLID_GREEN_HOVER_DARK']}`}>
                                    VIEW PROJECT
                                </button>
                            }
                    </div>
                    {/* text link mobile */}
                    <div className="block lg:hidden bg-black p-8 lg:absolute bottom-4 left-4 lg:max-w-[350px] z-10">
                        <h2 className="text-white font-stratos uppercase text-[2.5rem] leading-10 font-bold mb-5">{title}</h2>
                        {images.length > 1 &&
                            <button onClick={()=>togglePopup()} onKeyDown={()=>togglePopup()} className={`text-rm-green font-stratos-lights uppercase w-max ${theme.text_links['BASE_STYLING']} ${theme.text_links['STD']} ${theme.text_links['FWD_BASE']} ${theme.text_links['ARW_FWD_GREEN']} ${theme.text_links['HOVER_ARW_FWD_GREEN']} ${theme.text_links['HOVER_GREEN']} `}>
                                VIEW PROJECT
                            </button>
                        }
                    </div>
                </>
            </div>
        }
        {twoCol &&
            <>
                <button className="block h-max" onClick={()=>togglePopup()} onKeyDown={()=>togglePopup()}>
                    <GatsbyImage 
                        image={twoColImg} 
                        alt={``} objectPosition={`${sidePin}`}
                        className={`w-full z-0 h-[calc(50vw)] border-solid border-black border-[9px]`} />
                </button>
                <div className="bg-black p-6">
                    <h2 className="text-white font-stratos uppercase text-[1.75rem] leading-6 font-bold mb-2">{title}</h2>
                    {images.length > 1 &&
                        <button onClick={()=>togglePopup()} onKeyDown={()=>togglePopup()} className={`text-rm-green font-stratos-lights uppercase w-max ${theme.text_links['BASE_STYLING']} ${theme.text_links['STD']} ${theme.text_links['FWD_BASE']} ${theme.text_links['ARW_FWD_GREEN']} ${theme.text_links['HOVER_ARW_FWD_GREEN']} ${theme.text_links['HOVER_GREEN']} `}>
                            VIEW WORK
                        </button>
                    }
                </div>
            </>
        }

        {/* Lightbox */}
        {images.length > 1 &&
            <div className={`fixed top-0 left-0 h-screen w-screen`} style={{display:overlay ? 'block':'none', visibility:overlay ? 'visible':'hidden', zIndex:overlay ? '50':'0'}} aria-label="lightbox" aria-expanded={overlay}>
                <div className={`relative z-10 w-full h-full flex flex-col items-center justify-center`}>
                    <div className={`w-[95%] md:w-3/4 lg:w-[40%] h-max relative flex flex-col justify-center items-center`}>
                        <nav className={`absolute top-0 left-0 w-full h-full z-50 text-rm-white flex justify-between items-center ml-auto mr-auto`}> 
                            <button className={`absolute z-50 text-rm-white p-2 -top-[50px] right-0`} aria-label="Close Lightbox" onClick={()=>togglePopup()} onKeyDown={()=>togglePopup()} tabIndex={0}>
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none">
                                    <path d="M2 2L23.1852 22" stroke="#F1F5F5" strokeWidth="3" strokeLinecap="round"/>
                                    <path d="M24 2L2.81482 22" stroke="#F1F5F5" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </button>
                        </nav>
                        {!video && 
                            <div className={'relative'}>
                                {gallery[0] &&
                                    <GatsbyImage aria-controls={`image-${gallery}`} image={gallery[image] ? gallery[image].image.localFile.childImageSharp.gatsbyImageData : gallery[0].image.localFile.childImageSharp.gatsbyImageData} alt={``} className={`w-full z-0`} />
                                }
                                {galleryLength == true && gallery.length > 1 &&
                                    <>
                                        <button galleryLength className={`hidden md:block absolute top-1/2 left-[-50px] ml-2 z-50 text-white ${gallery.length < 3 ? 'hidden' : ''}`} onClick={()=>loadPrev()} onKeyDown={()=>loadPrev()} aria-label="Next Image" tabIndex={0}>
                                            <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.9531 22.9375L13.5156 21.375C13.8281 20.9844 13.8281 20.4375 13.4375 20.0469L7.1875 14.0312L34.0625 14.0312C34.6094 14.0312 35 13.5625 35 13.0938V10.9062C35 10.3594 34.6094 9.96875 34.0625 9.96875L7.1875 9.96875L13.4375 3.875C13.8281 3.48437 13.8281 2.9375 13.5156 2.54687L11.9531 0.984375C11.5625 0.671875 11.0156 0.671875 10.625 0.984375L0.3125 11.2969C0 11.6875 0 12.2344 0.3125 12.625L10.625 22.9375C11.0156 23.25 11.5625 23.25 11.9531 22.9375Z" fill="currentColor"/>
                                            </svg>
                                        </button>
                                        <button className={`hidden md:block absolute top-1/2 right-[-50px] z-50 mr-2 text-white ${gallery.length < 3 ? 'hidden' : ''}`} onClick={()=>loadNext()} onKeyDown={()=>loadNext()} aria-label="Previous Image" tabIndex={0}>
                                            <svg width="35" height="24" viewBox="0 0 35 24" fill="none">
                                                <path d="M23.0469 1.0625L21.4844 2.625C21.1719 3.01562 21.1719 3.5625 21.5625 3.95312L27.8125 9.96875H0.9375C0.390625 9.96875 0 10.4375 0 10.9062V13.0938C0 13.6406 0.390625 14.0312 0.9375 14.0312H27.8125L21.5625 20.125C21.1719 20.5156 21.1719 21.0625 21.4844 21.4531L23.0469 23.0156C23.4375 23.3281 23.9844 23.3281 24.375 23.0156L34.6875 12.7031C35 12.3125 35 11.7656 34.6875 11.375L24.375 1.0625C23.9844 0.75 23.4375 0.75 23.0469 1.0625Z" fill="currentColor"/>
                                            </svg>
                                        </button>
                                    </>
                                }

                            </div>
                        }

                        {/* <h3 className={`${theme.text.H4} pt-4 text-rm-white text-center`}>{(!video) ? gallery[image].text ? gallery[image].text : title : title}</h3> */}
                        
                        {galleryLength == true && gallery.length > 1 &&
                            <div className={"flex justify-between pt-6 md:hidden w-full"}>
                                <button className={`relative text-white ml-2 z-50 ${gallery.length < 3 ? 'hidden' : ''}`} onClick={()=>loadPrev()} onKeyDown={()=>loadPrev()} aria-label="Next Image" tabIndex={0}>
                                            <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.9531 22.9375L13.5156 21.375C13.8281 20.9844 13.8281 20.4375 13.4375 20.0469L7.1875 14.0312L34.0625 14.0312C34.6094 14.0312 35 13.5625 35 13.0938V10.9062C35 10.3594 34.6094 9.96875 34.0625 9.96875L7.1875 9.96875L13.4375 3.875C13.8281 3.48437 13.8281 2.9375 13.5156 2.54687L11.9531 0.984375C11.5625 0.671875 11.0156 0.671875 10.625 0.984375L0.3125 11.2969C0 11.6875 0 12.2344 0.3125 12.625L10.625 22.9375C11.0156 23.25 11.5625 23.25 11.9531 22.9375Z" fill="currentColor"/>
                                            </svg>
                                </button>
                                <button className={`z-50 mr-2 text-white ${gallery.length < 3 ? 'hidden' : ''}`} onClick={()=>loadNext()} onKeyDown={()=>loadNext()} aria-label="Previous Image" tabIndex={0}>
                                            <svg width="35" height="24" viewBox="0 0 35 24" fill="none">
                                                <path d="M23.0469 1.0625L21.4844 2.625C21.1719 3.01562 21.1719 3.5625 21.5625 3.95312L27.8125 9.96875H0.9375C0.390625 9.96875 0 10.4375 0 10.9062V13.0938C0 13.6406 0.390625 14.0312 0.9375 14.0312H27.8125L21.5625 20.125C21.1719 20.5156 21.1719 21.0625 21.4844 21.4531L23.0469 23.0156C23.4375 23.3281 23.9844 23.3281 24.375 23.0156L34.6875 12.7031C35 12.3125 35 11.7656 34.6875 11.375L24.375 1.0625C23.9844 0.75 23.4375 0.75 23.0469 1.0625Z" fill="currentColor"/>
                                            </svg>
                                </button>
                            </div>
                        }
                    </div>
                </div>
                <div className={`absolute top-0 left-0 w-full z-0 h-full bg-rm-black bg-opacity-80`} aria-hidden="true"></div>
            </div>   
        }            
    </>)
}
export default LightBoxBranding