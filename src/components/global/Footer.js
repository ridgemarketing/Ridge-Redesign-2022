import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { theme } from '../../static/theme'
import { Link } from "gatsby" 
import { GatsbyImage } from 'gatsby-plugin-image'

const Footer = () =>{
    
    const footerMenu = useStaticQuery( graphql`
    query GetMenus {
        allWpMenu(filter: {name: {eq: "Footer"}}) {
          nodes {
            name
            menuItems {
              nodes {
                url
                label
                childItems {
                  nodes {
                    label
                    url
                    parentId
                  }
                }
                parentId
              }
            }
          }
        }
       
        allWp {
            nodes {
              globalSettings {
                globalSettings {
                  contact {
                    address
                    email {
                      target
                      title
                      url
                    }
                    phone {
                      target
                      title
                      url
                    }
                    socials {
                      icon {
                        localFile {
                          ext
                          childImageSharp {
                            gatsbyImageData
                          }
                        }
                        sourceUrl
                        altText
                      }
                      link {
                        target
                        title
                        url
                      }
                    }
                  }
                  footertext {
                    cta
                    link {
                      target
                      title
                      url
                    }
                  }
                  logos {
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

    const footerLinks   = footerMenu.allWpMenu.nodes[0].menuItems.nodes;
    const content       = footerMenu.allWp.nodes[0].globalSettings.globalSettings;

    const checkImg = function(img){
        if (img.localFile.ext == `.svg`) {
            return(<img className={''} src={img.sourceUrl} />)
        }else{ 
            return(<GatsbyImage 
                image={img.localFile.childImageSharp.gatsbyImageData} 
                alt={``} 
                className={ `flex self-start w-auto h-[55px]` } 
                objectFit={`contain`}/>)
        }
    }
    let logo        = content.logos.dark;
    let socials     = content.contact.socials;
    logo            = checkImg(logo);


    return(
        <footer className=" bg-rm-black text-rm-white py-12 lg:py-16">
            <section className="container">
                <h2 className={`${theme.text.HERO} lg:w-3/4`}>{content.footertext.cta}</h2>
                <Link to={content.footertext.link.url} className={`text-rm-green mt-12 lg:mt-16 w-max hover:text-rm-white hover:underline ${theme.text_links.BASE_STYLING} ${theme.text_links.FWD_BASE} ${theme.text_links.LARGE} ${theme.text_links.ARW_FWD_GREEN}`}>{content.footertext.link.title}</Link>
                <div className="mt-12 lg:mt-28">
                    <ul key={'footer' + Math.random()} className="flex">
                        <div>
                            {logo}
                            {socials.map( (social) =>{
                                let icon = checkImg(social.icon);
                                return(icon);
                            })}
                        </div>
                        {footerLinks.map( (menuItem) => {   
                                if(menuItem.parentId){ return (<></>); }
                                if(menuItem.childItems.nodes.length > 2){
                                    return(
                                        <li key={menuItem.url + Math.random()} className="mt-2">
                                            <Link to={menuItem.url} className={`${theme.text.P_BLD} uppercase`}>
                                                {menuItem.label}
                                            </Link>
                                            <ul key={menuItem.label + Math.random()}>
                                                {menuItem.childItems.nodes.map( (subMenuItem) => { 
                                                    return(
                                                        <li key={subMenuItem.label + Math.random()} className={`${theme.text.P_STD} normal-case mt-2`}>
                                                            <Link to={subMenuItem.url} className={`hover:text-rm-green hover:underline`}>                                                        
                                                                {subMenuItem.label}
                                                            </Link>
                                                        </li>
                                                    )
                                                }
                                                )}
                                            </ul>
                                        </li>
                                    )
                                }
                            })}
                        <div key={'footerDiv' + Math.random()}>
                            {footerLinks.map( (menuItem) => {   
                                if(menuItem.parentId){ return (<></>); }
                                if(menuItem.childItems.nodes.length > 0){}else{
                                    return(
                                        <li key={menuItem.url + Math.random()} className="mt-2">
                                            <Link to={menuItem.url} className={`${theme.text.P_BLD} uppercase`}>
                                                {menuItem.label}
                                            </Link>
                                        </li>
                                    )
                                }
                            } )}
                        </div>
                    </ul> 
                </div>
            </section>
        </footer>
    )
} 

export default Footer


