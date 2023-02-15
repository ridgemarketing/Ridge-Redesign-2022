import React, { useEffect, useRef, useState, useContext } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { theme, ThemeContext } from '../../static/theme'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Triangle } from "../svg"

const DesktopMenu = ({}) => {

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
                            }
                        }
                        }
                    }
                }
            }
        }
    `);
    return(
        <div className={`flex justify-end h-full items-center gap-10`}>
            {desktopWpMenuContent && desktopWpMenuContent.wpMenu.menuItems.nodes.map( (navItem, index) => {
                let currentItem = false;
                if (!navItem.parentId) {
                    return(
                        <li key={`level-0-${index}`} className={`${theme.text.P_STD} group flex flex-col h-full justify-center relative`}>
                            <Link title={navItem.label} to={navItem.url} className={`py-2 border-b border-transparent group-hover:text-rm-green group-hover:border-rm-green`}>
                                <span className={``}>{navItem.label}</span>
                            </Link>
                            {navItem.childItems.nodes.length > 0 &&
                                <div key={``} className={`hidden group-hover:block absolute top-full min-w-max left-1/2 right-1/2 -translate-x-1/2`}>
                                    <span className={`w-[44px] mx-auto block text-white`}><Triangle /></span>
                                    {navItem.childItems.nodes.length <= 6 &&
                                        <div className={`bg-white pt-6 pb-8 px-5 text-rm-black flex flex-col gap-6 shadow-block`}>
                                            {navItem.childItems.nodes.map((subNavItem, index) => {
                                                let menuIcon = false;

                                                if(subNavItem.acfWpMenu.icon){
                                                    menuIcon = checkImg(subNavItem.acfWpMenu.icon, 'h-[40px] w-[40px] mr-5');
                                                }
                                                return(
                                                    <Link to={subNavItem.url} className={`hover:text-rm-green hover:underline`}>
                                                        {menuIcon && menuIcon}
                                                        {subNavItem.label}
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    }
                                    {navItem.childItems.nodes.length > 6 &&
                                        <div className={`bg-white pt-6 pb-8 px-5 text-rm-black grid grid-cols-2 gap-y-4 gap-x-6 shadow-block`}>
                                            {navItem.childItems.nodes.map((subNavItem, index) => {
                                                let menuIcon = false;

                                                if(subNavItem.acfWpMenu.icon){
                                                    menuIcon = checkImg(subNavItem.acfWpMenu.icon, 'h-[40px] w-[40px] mr-5');
                                                }
                                                return(
                                                    <Link to={subNavItem.url} className={`flex hover:text-rm-green hover:underline`}>
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
            })}
        </div>
    )
}

export default DesktopMenu