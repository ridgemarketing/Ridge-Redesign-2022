import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { theme } from '../../static/theme'
//import { Container } from "../../components/global/Wrappers"
import { Link } from "gatsby" 

const FooterMenu = () =>{
    
    const Menu = useStaticQuery( graphql`
    query GetMenu {
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
    }      
    `); 

    const footerLinks   = Menu.allWpMenu.nodes[0].menuItems.nodes;

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
      <section className="text-center lg:text-left py-12 lg:py-16">
          <div className="block mt-16 lg:mt-0 lg:flex">
            {menuBreakpoints.map( (breakPoint)=>{
              return(<div key={`breakpoint${Math.random()}`}>
                  <ul>                 
                  {breakPoint.map( (menuItem) => {   
                          if(menuItem.childItems.nodes.length > 0){
                              return(
                                  <li key={menuItem.url + Math.random()} className={`mt-4 lg:mr-12`}>
                                      <Link to={menuItem.url} className={`${theme.text.P_BLD} uppercase`}>
                                          {menuItem.label}
                                      </Link>
                                      <ul key={menuItem.label + Math.random()}>
                                          {menuItem.childItems.nodes.map( (subMenuItem) => { 
                                              return(
                                                  <li key={subMenuItem.label + Math.random()} className={`${theme.text.FOOTER} normal-case mt-2`}>
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
                                  <li key={menuItem.url + Math.random()} className="mt-4 lg:mr-12">
                                      <Link to={menuItem.url} className={`${theme.text.P_BLD} uppercase`}>
                                          {menuItem.label}
                                      </Link>
                                  </li>
                              )
                          }
                  })}
                  </ul>
              </div>)
            })}
          </div>
      </section>
    )
} 

export default FooterMenu


