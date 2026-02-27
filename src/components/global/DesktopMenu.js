import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { theme } from '../../static/theme'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Triangle } from "../svg"

const DesktopMenu = () => {

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


    const desktopWpMenuContent = useStaticQuery(graphql`
        query GetDesktopWpMenu {
            wpMenu(name: {eq: "Primary"}) {
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
                                iconHover {
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
        <div key={`highLevel`} className={`flex justify-end h-full items-center gap-10`}>
            {desktopWpMenuContent && desktopWpMenuContent.wpMenu.menuItems.nodes.map( (navItem, index) => {
                //let currentItem = false;
                const uid       = navItem.label.replace(' ', '_')
                if (!navItem.parentId) {
                    return(
                        <li key={`level-0__${uid}__${index}`} className={`${theme.text.P_STD} group flex flex-col h-full justify-center relative`}>
                            <Link key={`level-0__${uid}__${index}_sub`} title={navItem.label} to={navItem.url} className={`py-2 border-b border-transparent group-hover:text-rm-green group-hover:border-rm-green`}>
                                <span className={``}>{navItem.label}</span>
                            </Link>
                            {navItem.childItems.nodes.length > 0 &&
                                <div key={`${navItem.label}_mid_level_0`} className={`hidden group-hover:block absolute top-full min-w-max left-1/2 right-1/2 -translate-x-1/2`}>
                                    <span key={`${navItem.label}_span_level_0`}  className={`w-[44px] mx-auto block text-white`}><Triangle key={`${navItem.label}_triangle`} /></span>
                                    {navItem.childItems.nodes.length <= 6 &&
                                        <div key={`${navItem.label}_mid_level_0_1`}  className={`bg-white pt-6 pb-8 px-5 text-rm-black flex flex-col gap-6 shadow-block`}>
                                            {navItem.childItems.nodes.map((subNavItem, index) => {
                                                let menuIcon    = false;
                                                const uid       = subNavItem.label.replace(' ', '_')
                                                if(subNavItem.acfWpMenu.icon){
                                                    menuIcon = checkImg(subNavItem.acfWpMenu.icon, 'h-[40px] w-[40px] mr-5');
                                                }
                                                return(
                                                    <Link key={`level-2a__${uid}__${index}`} to={subNavItem.url} className={`hover:text-rm-green hover:underline`}>
                                                        {menuIcon && menuIcon}
                                                        {subNavItem.label}
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    }
                                    {navItem.childItems.nodes.length > 6 &&
                                        <div key={`${navItem.label}_mid_level_1`} className={`bg-white pt-6 pb-8 px-5 text-rm-black grid grid-cols-2 gap-y-4 gap-x-6 shadow-block`}>
                                            {navItem.childItems.nodes.map((subNavItem, index) => {
                                                let menuIcon        = false
                                                let menuIconHover   = false
                                                const uid           = subNavItem.label.replace(' ', '_')

                                                if (subNavItem.acfWpMenu.icon) {
                                                    menuIcon = checkImg(subNavItem.acfWpMenu.icon, 'h-[40px] w-[40px] mr-5');
                                                }
                                                if (subNavItem.acfWpMenu.iconHover) {
                                                    menuIconHover = checkImg(subNavItem.acfWpMenu.iconHover, 'h-[40px] w-[40px] mr-5');
                                                }

                                                if(subNavItem.label.toLowerCase() === 'ai search audit') {
                                                    return(
                                                        <Link key={`level-2b__${uid}__${index}`} to={subNavItem.url} className={`group/link flex text-black hover:text-white focus:text-white bg-rm-pale-grey hover:bg-black focus:bg-black transition-all duration-300 ease-out w-max px-6 py-2 items-center rounded-md`}>
                                                            {menuIconHover ? 
                                                                <>
                                                                    {menuIcon && 
                                                                        <div className="group-hover/link:hidden group-focus/link:hidden">{menuIcon}</div>
                                                                    }
                                                                    <div className="hidden group-hover/link:block group-focus/link:block">
                                                                        {menuIconHover}
                                                                    </div>
                                                                </> : menuIcon && menuIcon}
                                                            {subNavItem.label}
                                                        </Link>
                                                    )
                                                }

                                                return(
                                                    <Link key={`level-2b__${uid}__${index}`} to={subNavItem.url} className={`flex hover:text-rm-green hover:underline`}>
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
                return
            })}
        </div>
    )
}

export default DesktopMenu