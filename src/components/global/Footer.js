import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { theme } from '../../static/theme'
import { Link } from "gatsby" 
import { Container, Section } from '../../components/global/Wrappers.js'

const Footer = (props) =>{

    const footerMenu = useStaticQuery( graphql`
        query GetMenus {
            allWpMenu(filter: {name: {eq: "Footer"}}) {
                nodes {
                name
                    menuItems {
                        nodes {
                            url
                            label
                        }
                    }
                }
            }
        }  
    `); 
    const footerLinks = footerMenu.allWpMenu.nodes[0].menuItems.nodes;
    console.log('footer', footerMenu.allWpMenu.nodes[0].menuItems.nodes);

    return(
        <footer className=" bg-rm-black text-rm-white ">
            <h2 className={theme.text.HERO}>READY TO RAMP UP YOUR DIGITAL MARKETING?</h2>
            <Link to={``} className={`text-rm-green ${theme.text_links.BASE_STYLING} ${theme.text_links.FWD_BASE} ${theme.text_links.LARGE} ${theme.text_links.ARW_FWD_GREEN}`}>LET'S TALK</Link>
            <ul> 
                {footerLinks.map( (key, index) => {
                    return( 
                        <li key={index + key.url}>
                            <Link to={key.url} className={`${theme.text_links.BASE_STYLING} ${theme.text_links.FWD_BASE} ${theme.text_links.STD} ${theme.text_links.ARW_FWD_GREEN}`}>
                                {key.label}
                            </Link>
                        </li>
                    ) 
                })}
            </ul>
        </footer>
    )
}

export default Footer


