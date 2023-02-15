import React, { useEffect, useRef, useState, useContext } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { theme, ThemeContext } from '../../static/theme'
import { GatsbyImage } from 'gatsby-plugin-image'
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"
import { Close, Hamburger } from "../svg"

const Header = (props) => {

    const backgroundColor                       = props.color;
    const textColor                             = backgroundColor === `black` ? `text-rm-white` : `text-rm-black`; 
    const fillColor                             = backgroundColor === `black` ? `fill-rm-white` : `fill-rm-black`;
    const hoverColor                            = backgroundColor === `black` ? `hover:text-rm-green` : ``;
    const bkgClass                              = props.classes;
    const headerPadding                         = backgroundColor  === 'black' ? 'hidden' : 'h-[100px]';
    const mobileMenuIcon                        = useRef([]);
    const [mobileMenuState, setMobileMenuState] = useState(false);
    const [overlayState, setOverlayState]       = useState(false);
    // const context                               = useContext(ThemeContext);
    let logo                                    = ``;
    // const [headerBg, setHeaderBg]               = useState(false)

    const [isScrolled, setIsScrolled]           = useState(false)
    const [showMenu, setShowMenu]               = useState(false)

    const checkImg = function(img, classes){
        if (img.localFile.ext === `.svg`) {
            return(<img className={`${classes} block`} alt={img.altText} src={img.sourceUrl} />)
        } else { 
            return(<GatsbyImage 
                image={img.localFile.childImageSharp.gatsbyImageData} 
                alt={`${img.altText}`} 
                className={`flex self-start w-auto ${classes}`} 
                objectFit={`contain`}/>)
        }
    }


    const focusMain = (e) =>{
        if(document.getElementById('mainContent')){
            document.getElementById('mainContent').focus();
        }
    }

    useEffect(() => {
        if (typeof window !== `undefined`) {
            const onScroll = () => {
                if (window.pageYOffset > 100) {
                    setIsScrolled(true)
                } else {
                    setIsScrolled(false)
                }
            }
            window.addEventListener('scroll', onScroll, { passive: true });
            return () => window.removeEventListener('scroll', onScroll);
        }
    }, [window])


    const headerSettings = useStaticQuery(graphql`
        query GetHeaderSettings {
            allWp {
                nodes {
                    globalSettings {
                        globalSettings {
                            logos {
                                light {
                                    localFile {
                                        ext
                                        childImageSharp {
                                            gatsbyImageData
                                        }
                                    }
                                    altText
                                    sourceUrl
                                }
                                dark {
                                    localFile {
                                        ext
                                        childImageSharp {
                                            gatsbyImageData
                                        }
                                    }
                                    sourceUrl
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    
    if(headerSettings.allWp.nodes[0].globalSettings.globalSettings.logos){
        logo    = backgroundColor === `black` ? checkImg(headerSettings.allWp.nodes[0].globalSettings.globalSettings.logos.dark, 'w-[250px] sm:w-[275px], xl:w-[300px]') : checkImg(headerSettings.allWp.nodes[0].globalSettings.globalSettings.logos.light,  'w-[175px] sm:w-[250px] xl:w-[300px]');
    }

    return(
        <>
            <header style={{transition: "height 300ms"}} ref={nav} className={`${textColor} ${bkgClass} fixed w-full h-[100px] z-50 top-0 flex items-center`} >
            <button type="button" onClick={()=>focusMain()} onKeyDown={()=>focusMain()} className="bg-rm-white text-rm-black p-5 font-basic-sans text-18px absolute -top-96 -left-96 focus:left-0 focus:top-0 focus:underline z-50" title="skip main navigation">Skip Main Navigation</button>
            <section className="container h-full">
                <nav className="h-full">
                    <ul className="flex items-center justify-between h-full">
                        <li><Link to={`/`} className="h-min">{logo}</Link></li>
                        <li className="w-[40px] h-[40px] flex ml-auto xl:hidden" >
                            <button className={``} onClick={() => setShowMenu(!showMenu)} onKeyDown={() => setShowMenu(!showMenu) } type="button" aria-expanded="false" aria-label="Mobile Menu Container">
                                {showMenu ? 
                                    <Close />
                                :
                                    <Hamburger />
                                }
                            </button>
                        </li>
                        {/* <style>{css}</style> */}
                        <div className={`hidden xl:flex flex-col h-full justify-center`}>
                            <DesktopMenu  />
                        </div>
                        <div className={`block xl:hidden`}>
                            {showMenu &&
                                <MobileMenu setShowMenu={setShowMenu}  />
                            }
                        </div>   
                    </ul>
                </nav>
            </section>
        </header>
        <div className={headerPadding}></div>
        </>
    )
}
export default Header