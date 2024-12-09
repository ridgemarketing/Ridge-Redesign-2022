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
                    src="https://cms.ridgemarketing.com/wp-content/uploads/2024/12/Wrapped-Background-Image-scaled-1.jpg"
                    alt=""
                    placeholder="blurred"
                    className="object-cover object-center w-[calc(100%+5rem)] h-[calc(100%+5rem)] -mt-[2.5rem] -ml-[2.5rem] blur-sm"
                />
            </div>
            <article className="relative mx-auto mt-5 text-center px-2" style={{maxWidth:'468px'}}>
                <StaticImage
                    src="https://cms.ridgemarketing.com/wp-content/uploads/2024/12/Hero-Image-HolidayWrapped24@2x.jpg"
                    placeholder="blurred"
                    alt="ridge wrapped"
                    layout="fullWidth"
                />
                <div className="flex flex-col gap-2 px-2 py-10 text-white bg-black">
                    <h1 className={`${theme.text['H5']}`}>RIDGE WRAPPED 2024</h1>
                    <p className={`${theme.text.P_STD}`}>Beats from the Barn of Brands</p>
                </div>
                <div className="bg-black">
                    <Playlists/>
                </div>
            </article>
            <a href="https://ridgemarketing.com/" target="blank" className={`flex items-center text-white gap-4 relative justify-center my-10 font-stratos group ${theme.text.LINK} no-underline hover:underline`}>
                GO TO RIDGE MARKETING WEBSITE 
                <svg className="group-hover:translate-x-2 will-change-transform transition-all ease-in-out duration-300" width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.4795 0.58252C12.6846 0.418457 12.9717 0.418457 13.1768 0.58252L18.5908 5.99658C18.7549 6.20166 18.7549 6.48877 18.5908 6.69385L13.1768 12.1079C12.9717 12.272 12.6846 12.272 12.4795 12.1079L11.6592 11.2876C11.4951 11.0825 11.4951 10.7954 11.7002 10.5903L14.9814 7.39111H0.87207C0.584961 7.39111 0.379883 7.18604 0.379883 6.89893V5.75049C0.379883 5.50439 0.584961 5.2583 0.87207 5.2583H14.9814L11.7002 2.1001C11.4951 1.89502 11.4951 1.60791 11.6592 1.40283L12.4795 0.58252Z" fill="currentColor"/>
                </svg>
            </a>
        </section>
    </>)
}

export default Wrapped2024;


const Playlists = () => {
    const logos = [
        { 
            name: 'Spotify', 
            link: 'https://cms.ridgemarketing.com/wp-content/uploads/2024/12/Logo-Spotify.svg',
            playlist: 'https://open.spotify.com/playlist/2J0xWW3BeaZcqFt3oAO8Bs?si=1aebc61f63e647ab' 
        },
        { 
            name: 'Apple Music', 
            link: 'https://cms.ridgemarketing.com//wp-content/uploads/2024/12/Logo-Apple-Music.svg',
            playlist: 'https://music.apple.com/us/playlist/ridge-marketing-wrapped-2024/pl.u-leyl1xJtVbLd3' 
        },
        { 
            name: 'YouTube', 
            link: 'https://cms.ridgemarketing.com/wp-content/uploads/2024/12/Logo-Youtube.svg',
            playlist: 'https://www.youtube.com/playlist?list=PLVpJJj2TnkCCcNGgSVOeuPklkTpsfC5wn' 
        },
    ];
    
    return (
        <>
            {logos.map((logoObj, index) => (
                <div key={index} className="px-6 sm:px-10 py-10 flex justify-between items-center border-white border-solid border-t-[0.5px] text-white group">
                    <img src={logoObj.link} alt={`${logoObj.name} logo`} />
                    <a 
                        href={logoObj.playlist} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`font-stratos flex gap-4 items-center ${theme.text.P_STD}`}
                    >
                        PLAY
                        <svg 
                            className="group-hover:translate-x-2 will-change-transform transition-all ease-in-out duration-300" 
                            width="12" 
                            height="13" 
                            viewBox="0 0 12 13" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                fillRule="evenodd" 
                                clipRule="evenodd" 
                                d="M0 12.8576L11.1022 6.42881L0 0V12.861V12.8576Z" 
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                </div>
            ))}
        </>
    );
};