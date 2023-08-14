import React, {useRef, useState, useEffect} from "react";
import { theme } from "../../static/theme";
import Link from "./FlexibleLink"
import { GatsbyImage } from "gatsby-plugin-image";
import Vimeo from '@vimeo/player';

const LightBox = ({type, images, video, title, link, caption, typeOfProject, noThumb, brandingImgLinkLarge, brandingImgLinkMobile }) => {
    // const noThumbnail                   = noThumb;
    const thumbnail                     = (video) ? images.localFile.childImageSharp.gatsbyImageData : images[0].image.localFile.childImageSharp.gatsbyImageData;
    const gallery                       = images.length > 1 ? images.slice(1) : video ? thumbnail : images[0]
    const [image, setImage]             = useState(0);
    const [hoverState, setHoverState]   = useState("hidden");
    // const [imgBlur, setImgBlur]         = useState("");
    const [overlay, setOverlay]         = useState(false);

    const playerRef = useRef(null);

    let galleryLength;
    if(gallery.length){
        galleryLength = true;
    }else{
        galleryLength = false;
    }

    useEffect(() =>{
        if(playerRef.current){
            playerRef.current = new Vimeo(playerRef.current);

            return () => {
                // Clean up the player when the component unmounts
                playerRef.current.destroy();
            };
        }
    },[])

    const loadNext = () =>{
        if( (image) === (gallery.length - 1)){
            setImage(0);
        }else{
            setImage(image + 1);
        }
    }
    const loadPrev = () =>{
        if( (image)  === 0 ){
            setImage(gallery.length - 1);
        }else{
            setImage(image - 1);
        }
    }

    const togglePopup = () =>{
        if(overlay === false){
            setOverlay(true);
            document.body.classList.add("overflow-hidden");
        }
        if(overlay === true){
            setOverlay(false);
            document.body.classList.remove("overflow-hidden");
            setImage(0);
        }
        if(playerRef.current && overlay === false){
            playerRef.current.play();
        }
        if(playerRef.current && overlay === true){
            playerRef.current.pause();
        }
    }
    const linkInfo = {
        target: "_blank",
        url: link,
        title: "Visit Website"
    }
    const handleHoverState = (currentlyShowing) => {
        setHoverState((currentlyShowing) ? "hidden" : "flex");
        // setImgBlur((currentlyShowing) ? "" : "");
        return;
    }
    return(<>
    <div onMouseEnter={() => handleHoverState(false)} onMouseLeave={() => handleHoverState(true)} className={`${typeOfProject == 'Video'&& 'pt-[56.25%]'} relative`}>
        
        {typeOfProject == 'Video'&&
            <GatsbyImage image={thumbnail} alt={`${title}`} className={`absolute top-0 left-0 h-full cursor-pointer object-contain w-full`}/>
        }
        
        {typeOfProject !== 'Video'&& typeOfProject !== 'Branding'&&
            <GatsbyImage image={thumbnail} alt={`${title}`} className={`cursor-pointer object-cover w-full`}/>
        }
        
        {typeOfProject !== 'Websites'&&
            <div role="button" onClick={()=>togglePopup()} onKeyDown={()=>togglePopup()}  className={`flex shadow-lightbox absolute top-0 left-0 justify-center items-center w-full h-full opacity-0 xl:hover:opacity-100 bg-transparent xl:bg-white !bg-opacity-80 backdrop-blur-sm transition-opacity duration-500`} >
                <div className={'text-center'}>
                    <p className={`${theme.text.P_STD} md:pb-2 text-rm-black font-bold hidden xl:block`}>{caption}</p>
                    <p className={`${theme.text.H4} text-rm-black pb-4 hidden xl:block`}>{title}</p>
                    <div className={"w-[65px] lg:w-[95px] text-center mx-auto xl:pt-7"}>
                        {typeOfProject == 'Video'&&
                            <img className="hidden xl:block" src={'https://rm2022stage.wpengine.com/wp-content/uploads/2023/06/circle-play-solid-1.svg'} alt={`play button`} />
                        }
                        {typeOfProject !== 'Video'&& 
                            <img className="hidden xl:block" src={'https://rm2022dev.wpengine.com/wp-content/uploads/2022/12/plus.png'} alt={`plus`} />
                        }
                    </div>
                </div>
            </div>
        }
    </div>
    {typeOfProject == 'Video' &&
        <div className="block xl:hidden bg-black p-6">
            <p className={`${theme.text.P_STD} md:pb-2 text-rm-white text-left font-bold`}>{caption}</p>
            <h2 role="button" onClick={()=>togglePopup()} onKeyDown={()=>togglePopup()}  className="text-white font-stratos uppercase text-[1.75rem] leading-6 font-bold mb-2">{title}</h2>
            <span role="button" onClick={()=>togglePopup()} onKeyDown={()=>togglePopup()}  className={`text-[18px] text-rm-green font-stratos-lights uppercase w-max ${theme.text_links['BASE_STYLING']} ${theme.text_links['STD']} ${theme.text_links['FWD_BASE']} ${theme.text_links['ARW_FWD_GREEN']} ${theme.text_links['HOVER_ARW_FWD_GREEN']} ${theme.text_links['HOVER_GREEN']}`}>
                WATCH VIDEO
            </span>
        </div>
    }
    <div className={`fixed top-0 left-0 h-screen w-screen`} style={{display:overlay ? 'block':'none', visibility:overlay ? 'visible':'hidden', zIndex:overlay ? '50':'0'}} aria-label="lightbox" aria-expanded={overlay}>
        <div className={`relative z-10 w-full h-full flex flex-col items-center justify-center`}>
            <div className={`w-[95%] md:w-3/4 xl:w-3/5 h-max relative flex flex-col justify-center items-center`}>
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
                {video &&
                    <div className={'pt-[56.25%] w-full relative'}>
                        {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
                        <iframe ref={playerRef} title={`video`} className={`w-full h-full z-50 absolute object-cover left-0 top-0`} src={video} width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                }

                <h3 className={`${theme.text.H4} pt-4 text-rm-white text-center`}>{(!video) ? gallery[image].text ? gallery[image].text : title : title}</h3>
                
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
                {typeOfProject !== 'Branding'&&
                    <>
                        {linkInfo.url !== null && <div className={'pt-10'}>
                                <Link
                                    link={linkInfo}
                                    classes={theme.button.BASE_STYLING + theme.text_links.STD + theme.button.GHOST_GREEN_TRANSPARENT_W + ' relative z-50'}
                                    />
                        </div>}
                    </>
                }
            </div>
        </div>
        <div className={`absolute top-0 left-0 w-full z-0 h-full bg-rm-black bg-opacity-80`} aria-hidden="true"></div>
    </div>      
    </>)
}
export default LightBox