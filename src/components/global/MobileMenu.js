import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { theme } from '../../static/theme'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ChevronRight} from "../svg"

const MenuItem = ({navItem, setShowMenu}) => {
    const [subMenuOpen, setSubMenuOpen]     = useState (navItem.childItems.nodes.length > 6);

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

    return(
        <li className={`${theme.text.P_STD} group flex flex-col h-full justify-center relative bg-white`}>
            <div className={`flex justify-between items-center`}>
                <Link onClick={() => setShowMenu(false)} title={navItem.label} to={navItem.url} className={`py-2 border-b border-transparent flex items-center group-hover:text-rm-green group-hover:border-rm-green`}>
                    <span className={``}>{navItem.label}</span>
                </Link>
                {navItem.childItems.nodes.length > 0 &&
                    <button onClick={() => setSubMenuOpen(!subMenuOpen)} className={`w-6 h-6 flex flex-col items-center justify-center`}>
                        <ChevronRight className={`h-4 ${subMenuOpen ? `-rotate-90` : `rotate-90`}`} />
                    </button>
                }
            </div>
            {navItem.childItems.nodes.length > 0 &&
                <div key={``} className={`transition-all duration-300 ${subMenuOpen ? `h-auto` : `h-0 overflow-hidden`}`}>
                    {navItem.childItems.nodes.length <= 6 &&
                        <div className={`bg-white py-2 text-rm-black flex flex-col gap-6 pl-4 border-l border-rm-grey border-opacity-10`}>
                            {navItem.childItems.nodes.map((subNavItem, index) => {
                                let menuIcon    = false
                                const uid       = subNavItem.label.replace(' ', '_')

                                if (subNavItem.acfWpMenu.icon) {
                                    menuIcon = checkImg(subNavItem.acfWpMenu.icon, 'h-[40px] w-[40px] mr-5');
                                }

                                if (subNavItem.label.toLowerCase() === 'ai search audit') {
                                    return(
                                        <Link key={`mobile_level-2b__${uid}__${index}`} onClick={() => setShowMenu(false)} to={subNavItem.url} className={`flex text-white hover:text-rm-green hover:underline bg-black w-max px-6 py-2 items-center rounded-md`}>
                                            {menuIcon && menuIcon}
                                            {subNavItem.label}
                                        </Link>
                                    )
                                }

                                return(
                                    <Link onClick={() => setShowMenu(false)} to={subNavItem.url} className={`hover:text-rm-green hover:underline`}>
                                        {menuIcon && menuIcon}
                                        {subNavItem.label}
                                    </Link>
                                )
                            })}
                        </div>
                    }
                    {navItem.childItems.nodes.length > 6 &&
                        <div className={`bg-white pt-6 pb-8 text-rm-black grid md:grid-cols-2 gap-y-4 gap-x-6`}>
                            {navItem.childItems.nodes.map((subNavItem, index) => {
                                let menuIcon    = false;
                                const uid       = subNavItem.label.replace(' ', '_')

                                if(subNavItem.acfWpMenu.icon){
                                    menuIcon = checkImg(subNavItem.acfWpMenu.icon, 'h-[40px] w-[40px] mr-5');
                                }

                                if (subNavItem.label.toLowerCase() === 'ai search audit') {
                                    return(
                                        <Link key={`mobile_level-2b__${uid}__${index}`} onClick={() => setShowMenu(false)} to={subNavItem.url} className={`flex text-white hover:text-rm-green hover:underline bg-black w-max px-6 py-2 items-center rounded-md`}>
                                            {menuIcon && menuIcon}
                                            {subNavItem.label}
                                        </Link>
                                    )
                                }
                                
                                return(
                                    <Link onClick={() => setShowMenu(false)}  to={subNavItem.url} className={`flex hover:text-rm-green hover:underline`}>
                                        {menuIcon && menuIcon}
                                        {subNavItem.label}
                                    </Link>
                                )
                            })}
                        </div>
                    }
                </div>
            }
        </li>
    )
}

const MobileMenu = ({setShowMenu}) => {
    const mobileWpMenuContent = useStaticQuery(graphql`
        query GetMobileWpMenu {
            wpMenu(name: {eq: "Mobile"}) {
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
    `);

    return(
        <div className={`absolute top-full left-0 flex flex-col pt-6 min-h-screen w-full`}>
            <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-70`}></div>
            <div className={`container`}>
                <div className={`relative py-4 px-6 bg-white text-black max-h-[80vh] overflow-scroll`}>
                    {mobileWpMenuContent && mobileWpMenuContent.wpMenu.menuItems.nodes.map( (navItem, index) => {
                        let currentItem = false;
                        if (!navItem.parentId) {
                            return(
                                <MenuItem key={`level-0-${index}`} navItem={navItem} setShowMenu={setShowMenu} />
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default MobileMenu