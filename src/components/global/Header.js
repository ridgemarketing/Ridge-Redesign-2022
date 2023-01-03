import React, { useRef, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { theme } from '../../static/theme'
import { Link } from "gatsby" 
import { GatsbyImage } from 'gatsby-plugin-image'

const Header = (props) => {

    const backgroundColor       = props.color;
    const textColor             = backgroundColor === `black` ? `text-rm-white` : `text-rm-black`; 
    const fillColor             = backgroundColor === `black` ? `fill-rm-white` : `fill-rm-black`;
    const hoverColor            = backgroundColor === `black` ? `hover:text-rm-green` : ``;
    const bkgClass              = props.classes;
    const headerPadding         = backgroundColor  === 'black' ? 'hidden' : 'h-[100px]';

    const headerMenu = useStaticQuery(graphql`
        query GetHeaderMenu {
            allWpMenu(filter: {name: {eq: "Primary"}}) {
            nodes {
                menuItems {
                nodes {
                    url
                    label
                    parentId
                    childItems {
                    nodes {
                        url
                        label
                        parentId
                        acfWpMenu {
                            icon {
                                sourceUrl
                            localFile {
                                ext
                                childImageSharp {
                                gatsbyImageData
                                }
                            }
                            }
                        }
                    }
                    }
                }
                }
            }
            }

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
    const content = headerMenu.allWpMenu.nodes[0].menuItems.nodes;
    const checkImg = function(img, classes){
        if (img.localFile.ext === `.svg`) {
            return(<img className={`${classes} block`} alt={img.altText} src={img.sourceUrl} />)
        }else{ 
            return(<GatsbyImage 
                image={img.localFile.childImageSharp.gatsbyImageData} 
                alt={`${img.altText}`} 
                className={`flex self-start w-auto ${classes}`} 
                objectFit={`contain`}/>)
        }
    }

    let logo    = ``;
    if(headerMenu.allWp.nodes[0].globalSettings.globalSettings.logos){
        logo    = backgroundColor === `black` ? checkImg(headerMenu.allWp.nodes[0].globalSettings.globalSettings.logos.dark, 'w-[250px] sm:w-[275px], lg:w-[300px]') : checkImg(headerMenu.allWp.nodes[0].globalSettings.globalSettings.logos.light,  'w-[175px] sm:w-[250px] lg:w-[300px]');
    }

    let noParents   = 0;
    for(let i=0; content.length > i; i++){
        if(content[i].parentId){}else{
            noParents = noParents + 1;
        }
    }
    //let desktopWidth       = 100/noParents + '%'; 
    
    const mobileMenuIcon                        = useRef([]);
    const overlay                               = useRef([]);
    const [overlayState, setoverlayState]       = useState(false);
    const [mobileMenuState, setMobileMenuState] = useState(true);
    //const [rotateState, setRotateState]         = useState(0);
    const mobileMenuToggle = () =>{
        if(mobileMenuState){
            setoverlayState(true);
            setMobileMenuState(false);
            mobileMenuIcon.current.setAttribute('aria-expanded', true);
            //setRotateState(30);
            // document.style.overflowY = 'hidden';
        }else{
            setoverlayState(false);
            setMobileMenuState(true);
            mobileMenuIcon.current.setAttribute('aria-expanded', false);
            //setRotateState(0);
            // document.style.overflowY = 'scroll';
        }
    }

    const HoverSubMenu = (e) => {
        // console.log(e.target.parentNode);
    }
    
    let mobileArrows = [theme.text_links.FWD_BASE.split(' '), theme.text_links.ARW_FWD_BLACK.split(' ')]; 
    let classesString = ' ';
    for (let i = 0; mobileArrows.length > i; i++){
        for(let z =0; mobileArrows[i][z].length > z; z++){
            if(mobileArrows[i][z] !== '' && mobileArrows[i][z] !== " "){
                classesString = classesString + ' ' + mobileArrows[i][z] + ' lg:after:hidden';
            }
        }
    }

    const focusMain = (e) =>{
        if(document.getElementById('mainContent')){
            document.getElementById('mainContent').focus();
        }
    }

    return(
        <>
        <header className={`${textColor} ${bkgClass} fixed w-full h-[100px] z-50 top-0 flex items-center`} >
            <button type="button" onClick={()=>focusMain()} onKeyDown={()=>focusMain()} className="bg-rm-white text-rm-black p-5 font-basic-sans text-18px absolute -top-96 -left-96 focus:left-0 focus:top-0 focus:underline z-50" title="skip main navigation">Skip Main Navigation</button>
            <section className="container">
                <nav>
                    <ul key={`header-MasterUL`} className="flex items-center justify-between">
                        <li key={`header-home`}><Link to={`/`} className="h-min">{logo}</Link></li>
                        <li key={`header-mobileMenu`} className="w-[40px] h-[40px] flex lg:hidden lg:invisible" >
                            <button key={`header-button`} ref={mobileMenuIcon} onClick={() => mobileMenuToggle()} onKeyDown={() => mobileMenuToggle() } type="button" aria-expanded="false" aria-label="Mobile Menu Container">
                                <svg key={`header-svg`} version="1.1" x="0px" y="0px" viewBox="0 0 33 19.5" className="w-full">
                                    <g className={`${fillColor} transition-all duration-300 ease-out`}>
                                        <path d="M0,0h33v4H0V0z"/>
                                        <path d="M0,15.6h33v4H0V15.6z"/>
                                        <path d="M0,7.8h33v4H0V7.8z"/>
                                        {/* transform={`rotate(-${rotateState})`} */}
                                    </g>
                                </svg>
                            </button>
                        </li>
                        <div key={`header-container-mobileMenu`} style={{display:overlayState ? 'block': 'none', visibility:overlayState ? 'visible': 'hidden'}} className={`absolute top-full left-[50%] -translate-x-[50%] w-[95%] md:w-3/4 bg-rm-white text-rm-black mt-5 p-6 lg:p-0 lg:mt-0 lg:left-0 lg:translate-x-0 lg:w-max lg:relative ${textColor} lg:bg-transparent lg:h-min lg:!inline-flex lg:!visible -lg:overflow-y-scroll moblileMenuHeight`}>
                            {content.map ( (navItem) =>{
                            //detect current if nav item is current page 
                                let currentItem = false;
                                // let currentURL = (window.location.pathname.split('/')).filter(element => { return element !== ''; });
                                // for(let i = 0; currentURL.length > i; i++ ){
                                //     if( navItem.url.includes(currentURL[i])){
                                //         currentItem = true;
                                //     }
                                // } 
                                if(navItem.parentId){return (<></>)}else{
                                    if(navItem.childItems.nodes.length > 0){
                                        let doubleMenu  = 'lg:flex-col';
                                        let doubleLI    = 'w-full sm:-lg:w-1/2 '; 
                                        let hidden      = '-lg:hidden flex';

                                        if(navItem.childItems.nodes.length > 4){
                                            doubleMenu  = 'lg:flex-wrap lg:max-w-[650px]';
                                            doubleLI    = 'w-full sm:w-1/2';
                                            hidden      = '-lg:block flex';
                                        }
                                        return(
                                            <li key={`header-itemA${navItem.label}`} className={`h-min min-w-max mb-2 lg:mb-0 lg:mx-3 p-1 cursor-pointer group relative hover:[&>*]:`} onMouseOver={HoverSubMenu}>
                                                <Link title={navItem.label} to={navItem.url} className={`${currentItem && `-lg:!text-rm-black !font-bold pb-2 border-b-[1px] border-b-rm-green`} ${theme.text.P_STD} ${hoverColor} hover:!font-bold text-18px`}> {/* hover:!font-bold hover:pb-2 hover:border-b-[1px] hover:border-b-rm-green */}
                                                    <span className={`${classesString}`}>{navItem.label}</span>
                                                </Link>  
                                                    <ul key={`submenu${navItem.label}${Math.random()}`} 
                                                        className={`my-6 lg:my-0 ${hidden} -lg:justify-between -lg:flex-wrap
                                                            transition-all duration-300 ease-out -z-10
                                                            ${doubleMenu} lg:hidden lg:absolute lg:-ml-5 lg:p-7 lg:shadow-block lg:bg-rm-white lg:opacity-0 
                                                            lg:group-hover:opacity-100 lg:group-hover:z-50 lg:group-focus:z-50 lg:group-focus-within:z-50 lg:group-focus:opacity-100 lg:group-focus-within:opacity-100 lg:w-max lg:left-[75%] lg:-translate-x-[50%] lg:group-hover:translate-y-5 lg:group-hover:flex
                                                            lg:after:bg-[url("../static/triangle.svg")] lg:after:-top-[15px] lg:after:left-0 after:h-[30px] lg:after:w-full lg:after:absolute lg:after:bg-no-repeat lg:after:bg-contain lg:after:bg-center`}>
                                                        {navItem.childItems.nodes.map((subNavItem) => {
                                                            let menuIcon = ``;
                                                            if(subNavItem.acfWpMenu.icon){
                                                                menuIcon = checkImg(subNavItem.acfWpMenu.icon, 'h-[40px] w-[40px] mr-5');
                                                            }
                                                            return(
                                                                <li key={`header-sub-submenu${navItem.label}${subNavItem.label}`} className={`${doubleLI} text-rm-black mb-4 last-of-type:mb-0 cursor-pointer`}>
                                                                    <Link to={subNavItem.url} className={`${theme.text.P_STD} -lg:!text-rm-black -lg:w-max -lg:text-[0.875rem] -lg:leading-[1.31rem] text-18px flex hover:underline hover:text-rm-green cursor-pointer items-center`}>
                                                                        {menuIcon && menuIcon}
                                                                        {subNavItem.label}
                                                                    </Link>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                            </li>
                                        )
                                    }else{
                                        return(
                                            <li key={`header-itemB${navItem.label}`} className={`${classesString} h-min min-w-max w-1/2 mb-2 lg:mb-0 lg:mx-3 p-1 cursor-pointer`}>
                                                <Link title={navItem.label} to={navItem.url} className={`${currentItem && `-lg:!text-rm-black !font-bold pb-2 border-b-[1px] border-b-rm-green`} ${theme.text.P_STD} ${hoverColor} text-18px hover:!font-bold hover:pb-2 hover:border-b-[1px] hover:border-b-rm-green`}>
                                                    {navItem.label}
                                                </Link>
                                            </li>
                                        )
                                    }
                                }
                            })}
                        </div>
                    </ul>
                </nav>
            </section>
        </header> 
        <div className={headerPadding}></div>
        <div ref={overlay} aria-hidden="true" style={{ height:overlayState ? '100%' : '0%', opacity:overlayState ? '0.7' : '0' }} className={`-lg:bg-rm-black w-full z-10 fixed top-0 left-0 transition-all ease-out duration-300 lg:!opacity-0 lg:hidden`}></div>
        </>
    )
}
export default Header