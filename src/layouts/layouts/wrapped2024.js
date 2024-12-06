import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { theme } from "../../static/theme";

const Wrapped2024 = () => {

    return(<>
        <section>
            <div className={`w-full h-full fixed z-0`} aria-hidden="true">
                <StaticImage 
                    width={1920}
                    height={1012}
                    src="https://rm2022stage.wpengine.com/wp-content/uploads/2024/12/Wrapped-Background-Image-scaled.jpg"
                    alt="A kitten"
                    placeholder="blurred"
                    className="object-cover object-center w-[calc(100%+5rem)] h-[calc(100%+5rem)] -mt-[2.5rem] -ml-[2.5rem] blur-sm"
                />
            </div>
            <article className="relative mx-auto mt-5 text-center px-2" style={{maxWidth:'468px'}}>
                <StaticImage
                    src="https://rm2022stage.wpengine.com/wp-content/uploads/2024/12/Hero-Image.webp"
                    placeholder="blurred"
                    alt="ridge wrapped"
                    width={466}
                    height={349}
                />
                <div className="flex flex-col gap-2 px-2 py-10 text-white bg-black">
                    <h1 className={`${theme.text['H5']}`}>RIDGE WRAPPED 2024</h1>
                    <p className={`${theme.text.P_STD}`}>Beats from the Barn of Brands</p>
                </div>
                <div className="bg-black">
                    <Playlists/>
                </div>
            </article>
        </section>
    </>)
}

export default Wrapped2024;


const Playlists = () => {
    const logos = [
        'https://rm2022stage.wpengine.com/wp-content/uploads/2024/12/Logo-Spotify.svg',
        'https://rm2022stage.wpengine.com/wp-content/uploads/2024/12/Logo-Apple-Music.svg',
        'https://rm2022stage.wpengine.com/wp-content/uploads/2024/12/Logo-Youtube.svg',
    ]
    return(<>
        {logos.map((logo) => {
            return(
            <div className="px-4 sm:px-10 py-10 flex justify-between items-center border-white border-solid border-t-[0.5px] text-white">
                <img src={logo} alt=""/>
                <a href="#" target="blank" className={`font-stratos flex gap-4 items-center ${theme.text.P_STD}`}>
                    PLAY
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.8576L11.1022 6.42881L0 0V12.861V12.8576Z" fill="currentColor"/>
                    </svg>
                </a>
            </div>)
        })}
    </>)
}