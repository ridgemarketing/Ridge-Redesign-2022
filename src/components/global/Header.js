import React, { useEffect, useRef, useState, useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { theme, ThemeContext } from '../../static/theme'
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
            allWpMenu(filter: {name: {in: ["Primary","Mobile"] }}) {
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
                        childItems {
                            nodes {
                                url
                                label
                                parentId
                            }
                        }
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
    
    console.log(headerMenu);
    let [menuCounter, setMenuCounter] = useState(1);
    let content = headerMenu.allWpMenu.nodes[menuCounter].menuItems.nodes;
    
    const menuFunc = () =>{
        
        function windowResizing (){
            if(window.innerWidth > 1280){
                setMenuCounter(1);
            }else{
                setMenuCounter(0);
            }
            content = headerMenu.allWpMenu.nodes[menuCounter].menuItems.nodes;
        }
        
        window.addEventListener('resize', windowResizing, true);
    }

    const dataFetchedRef = useRef(false);
    useEffect(() => {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
      menuFunc();
    }, [])
    
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
        logo    = backgroundColor === `black` ? checkImg(headerMenu.allWp.nodes[0].globalSettings.globalSettings.logos.dark, 'w-[250px] sm:w-[275px], xl:w-[300px]') : checkImg(headerMenu.allWp.nodes[0].globalSettings.globalSettings.logos.light,  'w-[175px] sm:w-[250px] xl:w-[300px]');
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
    const context                               = useContext(ThemeContext);
    //const [rotateState, setRotateState]         = useState(0);
    const mobileMenuToggle = () =>{
        if(mobileMenuState){
            setoverlayState(true);
            setMobileMenuState(false);
            mobileMenuIcon.current.setAttribute('aria-expanded', true);
        }else{
            setoverlayState(false);
            setMobileMenuState(true);
            mobileMenuIcon.current.setAttribute('aria-expanded', false);
        }
    }

    const HoverSubMenu = (e) => {}
    
    let mobileArrows = [theme.text_links.FWD_BASE.split(' '), theme.text_links.ARW_FWD_BLACK.split(' ')]; 
    let classesString = ' ';
    for (let i = 0; mobileArrows.length > i; i++){
        for(let z =0; mobileArrows[i][z].length > z; z++){
            if(mobileArrows[i][z] !== '' && mobileArrows[i][z] !== " "){
                classesString = classesString + ' ' + mobileArrows[i][z] + ' xl:after:hidden';
            }
        }
    }

    const focusMain = (e) =>{
        if(document.getElementById('mainContent')){
            document.getElementById('mainContent').focus();
        }
    }

    const navRef = useRef([]); 
    const workFunc = (index) =>{
        if(index === 0){
            navRef.current[0].style.display=`flex`;
            navRef.current[1].style.display=`none`;
        }
        if(index === 1){
            navRef.current[1].style.display=`flex`;
            navRef.current[0].style.display=`none`;
        }
    }
    const css= `@media screen and (max-width:1200px){.menuMobileScroll{height:80vh;}}`

    return(
        <>
        <header className={`${textColor} ${bkgClass} fixed w-full h-[100px] z-50 top-0 flex items-center`} >
            <button type="button" onClick={()=>focusMain()} onKeyDown={()=>focusMain()} className="bg-rm-white text-rm-black p-5 font-basic-sans text-18px absolute -top-96 -left-96 focus:left-0 focus:top-0 focus:underline z-50" title="skip main navigation">Skip Main Navigation</button>
            <section className="container h-full">
                <nav className="h-full">
                    <ul key={`header-MasterUL`} className="flex items-center justify-between h-full">
                        <li key={`header-home`}><Link to={`/`} className="h-min">{logo}</Link></li>
                        <li key={`header-mobileMenu`} className="w-[40px] h-[40px] flex xl:hidden xl:invisible" >
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
                        <style>{css}</style>
                        <div key={`header-container-mobileMenu`} style={{display:overlayState ? 'block': 'none', visibility:overlayState ? 'visible': 'hidden'}} className={`absolute menuMobileScroll top-0 -xl:mt-[110px] -xl:left-[50%] -xl:-translate-x-[50%] w-[95%] md:w-3/4 bg-rm-white text-rm-black mt-5 p-6 -xl:h-min xl:p-0 xl:mt-0 xl:left-0 xl:translate-x-0 xl:w-max xl:relative ${textColor} xl:bg-transparent xl:-mb-[20px] xl:h-full xl:!inline-flex xl:items-center xl:!visible -xl:overflow-y-scroll moblileMenuHeight`}>
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
                                        let doubleMenu  = 'xl:flex-col';
                                        let doubleLI    = 'w-full sm:-xl:w-1/2 '; 
                                        let hidden      = '-xl:hidden flex';

                                        if(navItem.childItems.nodes.length > 4){
                                            doubleMenu  = 'xl:flex-wrap xl:max-w-[650px]';
                                            doubleLI    = 'w-full sm:w-1/2';
                                            hidden      = '-xl:block flex';
                                        }

                                        for(let a = 0; a < navItem.childItems.nodes.length; a++){
                                            if(navItem.childItems.nodes[a].childItems.nodes.length > 0){
                                                return(
                                                    <>
                                                        <li key={`header-itemA${navItem.label}`} className={`xl:h-full flex items-center min-w-max mb-2 xl:mb-0 xl:mx-3 p-1 cursor-pointer group relative xl:pb-[20px] hover:[&>*]:`} onMouseOver={HoverSubMenu}>
                                                            <Link title={navItem.label} to={navItem.url} className={`${currentItem && `-xl:!text-rm-black !font-bold pb-2 border-b-[1px] border-b-rm-green`} ${theme.text.P_STD} ${hoverColor} hover:!font-bold text-18px`}> {/* hover:!font-bold hover:pb-2 hover:border-b-[1px] hover:border-b-rm-green */}
                                                                <span className={`${classesString}`}>{navItem.label}</span>
                                                            </Link> 
                                                                <div key={`submenu${navItem.label}}`} 
                                                                    className={`my-6 xl:my-0 ${hidden} -xl:justify-between 
                                                                        transition-all duration-300 ease-out -z-10 top-[calc(100%+5px)] min-w-[430px]
                                                                        flex xl:flex-wrap xl:hidden xl:absolute xl:-ml-5 xl:shadow-block xl:bg-rm-white xl:opacity-0 
                                                                        xl:group-hover:opacity-100 xl:group-hover:z-50 xl:group-focus:z-50 xl:group-focus-within:z-50 xl:group-focus:opacity-100 xl:group-focus-within:opacity-100 xl:w-max xl:left-[75%] xl:-translate-x-[50%] xl:group-hover:flex`}>
                                                                    
                                                                    <div key={`bg-div`} aria-hidden="true" className={`xl:-top-[15px] xl:z-[51] xl:opacity-0 xl:group-hover:opacity-100 xl:group-focus:opacity-100 xl:group-focus-within:opacity-100 xl:bg-[url("../static/triangle.svg")] xl:left-0 h-[30px] xl:w-full xl:absolute xl:bg-no-repeat xl:bg-contain xl:bg-center`}></div>     
                                                                    <div className={`text-rm-black bg-rm-pale-grey mb-0 cursor-pointer flex-col xl:p-7`}>
                                                                    {navItem.childItems.nodes.map((subNavItem, index) => {
                                                                        let menuIcon = ``;
                                                                        if(subNavItem.acfWpMenu.icon){
                                                                            menuIcon = checkImg(subNavItem.acfWpMenu.icon, 'h-[40px] w-[40px] mr-5');
                                                                        }
                                                                        return(
                                                                            <Link onMouseOver={()=> workFunc(index)} to={subNavItem.url} className={`${theme.text.P_STD} -xl:!text-rm-black -xl:w-max -xl:text-[0.875rem] -xl:leading-[1.31rem] text-18px hover:underline hover:text-rm-green cursor-pointer block first-of-type:mb-6`}>
                                                                                {menuIcon && menuIcon}
                                                                                {subNavItem.label}
                                                                            </Link>
                                                                        );
                                                                    })}
                                                                    </div>
                                                                    {navItem.childItems.nodes.map((subNavItem, i) => {
                                                                        return(
                                                                            <div ref={el => navRef.current[i] = el} className="last-of-type:hidden flex flex-row justify-end flex-wrap xl:py-7 xl:w-[320px] xl:max-w-[320px]">
                                                                                {subNavItem.childItems.nodes.map( (sub_SubNavItem) =>{                                                                             
                                                                                    if (sub_SubNavItem.url === '/portfolio/') {
                                                                                        return(
                                                                                            <Link onClick={() => context.updateFilterState(sub_SubNavItem.label)} to={sub_SubNavItem.url} className={`${theme.text.P_STD} w-[42%] text-rm-black -xl:w-max text-[0.875rem] mb-3 flex hover:underline hover:text-rm-green cursor-pointer items-center`}>
                                                                                                {sub_SubNavItem.label}
                                                                                            </Link>
                                                                                        )
                                                                                    }

                                                                                    return(
                                                                                        <Link to={sub_SubNavItem.url} className={`${theme.text.P_STD} w-[42%] text-rm-black -xl:w-max text-[0.875rem] mb-3 flex hover:underline hover:text-rm-green cursor-pointer items-center`}>
                                                                                            {sub_SubNavItem.label}
                                                                                        </Link>
                                                                                    )
                                                                                })}
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                        </li>
                                                    </>
                                                )
                                            }
                                        }
                                        return(
                                            <li key={`header-itemA${navItem.label}`} className={`xl:h-full flex -xl:flex-col items-baseline xl:items-center md:min-w-[75%] xl:min-w-max mb-2 xl:mb-0 xl:mx-3 p-1 cursor-pointer group relative xl:pb-[20px] hover:[&>*]:`} onMouseOver={HoverSubMenu}>
                                                <Link title={navItem.label} to={navItem.url} className={`${currentItem && `-xl:!text-rm-black !font-bold pb-2 border-b-[1px] border-b-rm-green`} ${theme.text.P_STD} ${hoverColor} hover:!font-bold text-18px`}> {/* hover:!font-bold hover:pb-2 hover:border-b-[1px] hover:border-b-rm-green */}
                                                    <span className={`${classesString}`}>{navItem.label}</span>
                                                </Link>
                                                    <div className={`my-6 xl:my-0 ${hidden} -xl:justify-between -xl:flex-wrap
                                                            transition-all duration-300 ease-out -z-10 top-[calc(100%+5px)]
                                                            ${doubleMenu} xl:hidden xl:absolute xl:-ml-5 xl:p-7 xl:shadow-block xl:bg-rm-white xl:opacity-0 
                                                            xl:group-hover:opacity-100 xl:group-hover:z-50 xl:group-focus:z-50 xl:group-focus-within:z-50 xl:group-focus:opacity-100 xl:group-focus-within:opacity-100 xl:w-max xl:left-[75%] xl:-translate-x-[50%] xl:group-hover:flex`}>
                                                        <div key={`bg-div`} aria-hidden="true" className={`-xl:hidden xl:-top-[15px] xl:z-[51] xl:opacity-0 xl:group-hover:opacity-100 xl:group-focus:opacity-100 xl:group-focus-within:opacity-100 xl:bg-[url("../static/triangle.svg")] xl:left-0 h-[30px] xl:w-full xl:absolute xl:bg-no-repeat xl:bg-contain xl:bg-center`}></div>     
                                                        <ul key={`submenu${navItem.label}}`} 
                                                            className={`flex ${doubleMenu} -xl:flex-wrap`}>
                                                            {navItem.childItems.nodes.map((subNavItem) => {
                                                                let menuIcon = ``;
                                                                if(subNavItem.acfWpMenu.icon){
                                                                    menuIcon = checkImg(subNavItem.acfWpMenu.icon, 'h-[40px] w-[40px] mr-5');
                                                                }
                                                                return(
                                                                    <li key={`header-sub-submenu${navItem.label}${subNavItem.label}`} className={`${doubleLI} text-rm-black mb-4 last-of-type:mb-0 cursor-pointer`}>
                                                                        <Link to={subNavItem.url} className={`${theme.text.P_STD} -xl:!text-rm-black -xl:w-max -xl:text-[0.875rem] -xl:leading-[1.31rem] text-18px flex hover:underline hover:text-rm-green cursor-pointer items-center`}>
                                                                            {menuIcon && menuIcon}
                                                                            {subNavItem.label}
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </div>
                                            </li>
                                        )
                                    }else{
                                        return(
                                            <li key={`header-itemB${navItem.label}`} className={`${classesString} h-min min-w-max w-1/2 mb-2 xl:mb-0 xl:mx-3 p-1 xl:pb-[20px] cursor-pointer`}>
                                                <Link title={navItem.label} to={navItem.url} className={`${currentItem && `-xl:!text-rm-black !font-bold pb-2 border-b-[1px] border-b-rm-green`} ${theme.text.P_STD} ${hoverColor} text-18px hover:!font-bold hover:pb-2 hover:border-b-[1px] hover:border-b-rm-green`}>
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
        <div ref={overlay} aria-hidden="true" style={{ height:overlayState ? '100%' : '0%', opacity:overlayState ? '0.7' : '0' }} className={`-xl:bg-rm-black w-full z-10 fixed top-0 left-0 transition-all ease-out duration-300 xl:!opacity-0 xl:hidden`}></div>
        </>
    )
}
export default Header