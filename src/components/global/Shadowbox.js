import React, {useState} from "react";
import { theme } from "../../static/theme";

const ShadowBox = (props) => {
    const images            = props.images;

    const [imgOpacity, setImgOpacity]   = useState(1);
    const [image, setImage]             = useState(1);
    //const [previmage, setPrevimage]     = useState(1);
    const loadNext = () =>{
        setImgOpacity(1);
        if( (image + 1) > (images.length-1)){
            setImage(1);
            //setImgOpacity(0);
            // setTimeout(() => {
            //     (setPrevimage(1));
            // }, 500)
        }else{
            setImage(image + 1);
            //setImgOpacity(0);
            // setTimeout(() => {
            //     (setPrevimage(previmage + 1));
            // }, 500)
        }
    }
    const loadPrev = () =>{
        if( (image - 1)  < 1 ){
            setImage(images.length-1);
        }else{
            setImage(image - 1);
        }
    }

    const [overlay, setOverlay] = useState(false);
    const togglePopup = () =>{
        if(overlay === false){
            setOverlay(true);
        }
        if(overlay === true){
            setOverlay(false);
        }
        // console.log(overlay);
    }
    
    return(<>
    <img src={images[0].shadowBoxImage.sourceUrl} className={`cursor-pointer object-cover w-full`} onClick={()=>togglePopup()}/>
    <button className={theme.text_links.BASE_STYLING + theme.text_links.STD + theme.text_links.FWD_BASE + theme.text_links.ARW_FWD_BLACK + 'mt-3'} onClick={()=>togglePopup()}>{images[0].shadowBoxText}</button>
    <div className={`fixed top-0 left-0 h-screen w-screen`} style={{display:overlay ? 'block':'none', visibility:overlay ? 'visible':'hidden', zIndex:overlay ? '50':'0'}} aria-label="lightbox" aria-expanded={overlay}>
        <div className={`relative z-10 w-full h-full flex flex-col items-center justify-center`}>
            <div className={`w-[95%] md:w-3/4 lg:w-[25%] h-max relative flex flex-col justify-center items-center`}>
                <nav className={`absolute top-0 left-0 w-full h-full z-20 text-rm-white flex justify-between items-center ml-auto mr-auto`}> 
                    <button className={`absolute z-50 text-rm-white p-2 -top-[50px] right-0`} aria-label="Close Lightbox" onClick={()=>togglePopup()}>
                        <svg width="26" height="24" viewBox="0 0 26 24" fill="none">
                            <path d="M2 2L23.1852 22" stroke="#F1F5F5" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M24 2L2.81482 22" stroke="#F1F5F5" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </button>
                    <button className={`ml-2`} onClick={()=>loadPrev()} aria-label="Next Image">
                        <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9531 22.9375L13.5156 21.375C13.8281 20.9844 13.8281 20.4375 13.4375 20.0469L7.1875 14.0312L34.0625 14.0312C34.6094 14.0312 35 13.5625 35 13.0938V10.9062C35 10.3594 34.6094 9.96875 34.0625 9.96875L7.1875 9.96875L13.4375 3.875C13.8281 3.48437 13.8281 2.9375 13.5156 2.54687L11.9531 0.984375C11.5625 0.671875 11.0156 0.671875 10.625 0.984375L0.3125 11.2969C0 11.6875 0 12.2344 0.3125 12.625L10.625 22.9375C11.0156 23.25 11.5625 23.25 11.9531 22.9375Z" fill="#F1F5F5"/>
                        </svg>
                    </button>
                    <button className={`mr-2`} onClick={()=>loadNext()} aria-label="Previous Image">
                        <svg width="35" height="24" viewBox="0 0 35 24" fill="none">
                            <path d="M23.0469 1.0625L21.4844 2.625C21.1719 3.01562 21.1719 3.5625 21.5625 3.95312L27.8125 9.96875H0.9375C0.390625 9.96875 0 10.4375 0 10.9062V13.0938C0 13.6406 0.390625 14.0312 0.9375 14.0312H27.8125L21.5625 20.125C21.1719 20.5156 21.1719 21.0625 21.4844 21.4531L23.0469 23.0156C23.4375 23.3281 23.9844 23.3281 24.375 23.0156L34.6875 12.7031C35 12.3125 35 11.7656 34.6875 11.375L24.375 1.0625C23.9844 0.75 23.4375 0.75 23.0469 1.0625Z" fill="#F1F5F5"/>
                        </svg>
                    </button>
                </nav>
                {/* <img aria-hidden="true" style={{opacity:imgOpacity}} src={images[previmage].shadowBoxImage.sourceUrl} alt={``} className={`absolute w-full transition-all ease-out duration-300 z-10`} /> */}
                <img aria-controls={`image-${image}`} src={images[image].shadowBoxImage.sourceUrl} alt={images[image].shadowBoxImage.altText} className={`w-full z-0`} />
                <h3 className={`font-stratos text-rm-white text-21px uppercase`}>{images[image].shadowBoxText}</h3>
            </div>
        </div>
        <div className={`absolute top-0 left-0 w-full z-0 h-full bg-rm-black bg-opacity-80`} aria-hidden="true"></div>
    </div>        
    </>)
}
export default ShadowBox