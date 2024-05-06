import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { theme } from '../../static/theme'
import { Link } from "gatsby" 
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container } from "./Wrappers"

const Footer = ({location}) =>{
    
    const Menu = useStaticQuery( graphql`
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
                cssClasses
              }
            }
          }
        }
        allWp {
            nodes {
              globalSettings {
                globalSettings {
                  contact {
                    address{
                      address 
                    }
                    email {
                      target
                      title
                      url
                    }
                    phone{
                      phone {
                        target
                        title
                        url
                      }
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
                  copyright
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
                      altText
                    }
                  }
                }
              }
            }
          }

      }      
    `); 

    const footerLinks   = Menu.allWpMenu.nodes[0].menuItems.nodes;
    const content       = Menu.allWp.nodes[0].globalSettings.globalSettings;

    const checkImg = function(img){
        if (img.localFile.ext === `.svg`) {
            return(<img className={'block ml-auto mr-auto lg:mr-0 lg:ml-0'} alt={img.altText} src={img.sourceUrl} />)
        }else{ 
            return(<GatsbyImage 
                image={img.localFile.childImageSharp.gatsbyImageData} 
                alt={img.altText} 
                className={ `flex self-start w-auto h-[55px]` } 
                objectFit={`contain`}/>)
        }
    }
    let logo        = content.logos.dark;
    let socials     = content.contact.socials;
    logo            = checkImg(logo);

    let address     = ``;
    if(content.contact.address.address){
        address = content.contact.address.address;
        address = address.replace(/\s*<script>.*?<\/script>\s*/g, ' ');
    }

    let menuBreakpoints = [];
    let counter = 0;
    let prevCounter = 0;
    for(let i =0; footerLinks.length > i; i++){
      if(!footerLinks[i].parentId){
        if (counter === 0){
          menuBreakpoints[counter] = [];
          menuBreakpoints[counter].push(footerLinks[i]);
          if(footerLinks[i].cssClasses.includes('menu-break')){
            prevCounter = counter;
            counter = counter + 1;
            menuBreakpoints[counter] = [];
          }
        }else if(counter > prevCounter){
          menuBreakpoints[counter].push(footerLinks[i]);
          if(footerLinks[i].cssClasses.includes('menu-break')){
            prevCounter = counter;
            counter = counter + 1;
            menuBreakpoints[counter] = [];
          }
        }else{}
      }
    }

    return(
        <footer className="-mt-px text-center lg:text-left bg-rm-black text-rm-white py-12 lg:py-16">
            <Container container={"slim"}>
                {!location.pathname.includes('lander/') &&
                  <div className={`mb-12 lg:mb-28`}>
                      {content.footertext.cta &&
                        <h2 className={`${theme.text.HERO} lg:w-3/4`}>{content.footertext.cta}</h2>
                      }
                      {content.footertext.link.url && content.footertext.link.title &&
                        <Link to={content.footertext.link.url} className={`ml-auto mr-auto lg:ml-0 lg:mr-0 text-rm-green mt-12 lg:mt-16 w-max hover:text-rm-white hover:underline ${theme.text_links.BASE_STYLING} ${theme.text_links.FWD_BASE} ${theme.text_links.LARGE} ${theme.text_links.ARW_FWD_GREEN} ${theme.text_links.HOVER_ARW_FWD_WHITE}`}>{content.footertext.link.title}</Link>
                      }
                  </div>
                }
                <div className="lg:w-[95%]">
                    <ul key={`footer-top`} className="block lg:flex justify-between">
                        <li className="lg:mt-4">
                            {logo}
                            <address className={`${theme.text.FOOTER} flex items-center lg:items-start flex-col my-9 not-italic`}>
                                <span className="mb-9" dangerouslySetInnerHTML={{__html:address}}></span>
                                {content.contact.phone && content.contact.phone.phone.url && content.contact.phone.phone.title &&
                                  <a href={content.contact.phone.phone.url} className="text-rm-green w-max">{content.contact.phone.phone.title}</a>
                                }
                                {content.contact.email && content.contact.email.url && content.contact.email.title &&
                                  <a href={content.contact.email.url} className="text-rm-green w-max">{content.contact.email.title}</a>
                                }
                            </address>
                            {socials &&
                                <ul className="flex mt-9 justify-center lg:justify-start">
                                  {socials.map( (social) =>{
                                      let icon = checkImg(social.icon);
                                      return(
                                          <li key={`${social.link.url.replace('https://', '')}___footer-social-a`} className="mr-3 last-of-type:mr-0 hover:text-rm-green" >
                                              <a href={social.link.url} target={social.link.target}>
                                                  {icon}
                                              </a>
                                          </li>
                                      );
                                  })}
                              </ul>
                            }

                        </li>
                        {menuBreakpoints &&
                          <div className="block mt-16 lg:mt-0 lg:flex">
                            {menuBreakpoints.map( (breakPoint)=>{
                              //let colWidth = Math.round((1/menuBreakpoints.length)*100);
                              return(<div key={`breakpoint${ breakPoint.map((bp) =>{return(bp.label)} )}`}>
                                  {breakPoint.map( (menuItem) => {   
                                          if(menuItem.childItems.nodes.length > 0){
                                              return(
                                                  <li key={`${menuItem.url}footer-a`} className={`mt-4 lg:mr-12`}>
                                                      <Link to={menuItem.url} className={`${theme.text.P_BLD} uppercase hover:text-rm-green hover:underline`}>
                                                          {menuItem.label}
                                                      </Link>
                                                      <ul key={`${menuItem.label}footer`}>
                                                          {menuItem.childItems.nodes.map( (subMenuItem) => { 
                                                              return(
                                                                  <li key={subMenuItem.label} className={`${theme.text.FOOTER} normal-case mt-2`}>
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
                                          }else{
                                              return(
                                                  <li key={`${menuItem.url}${menuItem.label}}footer-b`} className="mt-4 lg:mr-12">
                                                      <Link to={menuItem.url} className={`${theme.text.P_BLD} uppercase hover:text-rm-green hover:underline`}>
                                                          {menuItem.label}
                                                      </Link>
                                                  </li>
                                              )
                                          }
                                  })}
                              </div>)
                            })}
                          </div>
                        }
                    </ul> 
                </div>
                {content.copyright &&
                  <div className="block mt-16 lg:mt-32">
                    <small className={`${theme.text.FOOTER} text-[14px] inline`} >&copy; {new Date().getFullYear()} &nbsp;</small>
                    <small className={`${theme.text.FOOTER} text-[14px] inline`} dangerouslySetInnerHTML={ {__html:content.copyright} }></small>
                  </div>
                }
            </Container>
        </footer>
    )
} 

export default Footer


