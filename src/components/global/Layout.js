import React, { useState } from "react"
import { useStaticQuery, graphql } from 'gatsby';
// import { SEOContext } from 'gatsby-plugin-wpgraphql-seo';
import { theme, ThemeContext } from "../../static/theme"
import Header from "./Header"
import Footer from "./Footer"
import "../../css/styles.css"

export default function Layout({ location, children }) {
    const {
        wp: { seo },
    } = useStaticQuery(graphql`
        query SiteInfoQuery {
            wp {
                seo {
                    contentTypes {
                        post {
                            title
                            schemaType
                            metaRobotsNoindex
                            metaDesc
                        }
                        page {
                            metaDesc
                            metaRobotsNoindex
                            schemaType
                            title
                        }
                    }
                    webmaster {
                        googleVerify
                        yandexVerify
                        msVerify
                        baiduVerify
                    }
                    schema {
                        companyName
                        personName
                        companyOrPerson
                        wordpressSiteName
                        siteUrl
                        siteName
                        inLanguage
                        logo {
                            sourceUrl
                            mediaItemUrl
                            altText
                        }
                    }
                    social {
                        facebook {
                            url
                            defaultImage {
                                sourceUrl
                                mediaItemUrl
                            }
                        }
                        instagram {
                            url
                        }
                        linkedIn {
                            url
                        }
                        mySpace {
                            url
                        }
                        pinterest {
                            url
                            metaTag
                        }
                        twitter {
                            username
                            cardType
                        }
                        wikipedia {
                            url
                        }
                        youTube {
                            url
                        }
                    }
                }
            }
        }
    `);

    const updatePrimary = (color) => {
        setPrimary({
            accent: color
        })
    }
    const updateSecondary = (color) => {
        setSecondary({
            accent: color
        })
    }
    const updateFilter = (filter) => {
        setFilter(filter);
    }

    const [primary, setPrimary] = useState({
        accent: theme.colors.primary.accent
      }
    )
    const [secondary, setSecondary] = useState({
        accent: theme.colors.primary.accent
      }
    )
    const [filter, setFilter] = useState("Websites");

    const updateHeaderBkg = (prop) => {
        setBackgroundColor({
            headerBkgcolor: prop,
        })
    }
    const [backgroundColor, setBackgroundColor] = useState({
        headerBkgcolor: 'white',
    })

    const globalStyles = `
        .accent-text {
          color: ${primary.accent};
        }
        .secondary-text {
            color: ${secondary.accent}
        }
        .header-color{
            background:${backgroundColor.headerBkgcolor};
            ${backgroundColor.headerBkgcolor === 'black' && 
             `background-color:rgba(0,0,0,0.7);`
            }
        }
    `

    if(location.pathname === '/wrapped_2024/'){
        return (
            <main id="mainContent" tabIndex={0} aria-label="Main Content">
                {children}
            </main>
        )
    }

    return (
        // <SEOContext.Provider value={{ global: seo }}>
            <ThemeContext.Provider value={{
                accent: primary.accent,
                secondary: secondary.secondary,
                
                updateAccentFunction: updatePrimary,
                updateSecondaryFunction: updateSecondary,  
                        
                backgroundColor: backgroundColor.headerBkgcolor,
                updateHeaderBkgcolor: updateHeaderBkg,

                filterState: filter,
                updateFilterState: updateFilter
            }}>
                <style>{globalStyles}</style>
                <Header classes={`header-color`} color={backgroundColor.headerBkgcolor} />
                <main id="mainContent" tabIndex={0} aria-label="Main Content">
                    {children}
                </main>
                <Footer location={location} />
            </ThemeContext.Provider>
        // </SEOContext.Provider>
    )
  }