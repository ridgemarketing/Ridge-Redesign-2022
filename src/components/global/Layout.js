import React, { useState } from "react"
import { theme, ThemeContext } from "../../static/theme"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {

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

    const [primary, setPrimary] = useState({
        accent: theme.colors.primary.accent
      }
    )
    const [secondary, setSecondary] = useState({
        accent: theme.colors.primary.accent
      }
    )

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

    return (
        <ThemeContext.Provider value={{
            accent: primary.accent,
            secondary: secondary.secondary,
            
            updateAccentFunction: updatePrimary,
            updateSecondaryFunction: updateSecondary,  
                      
            backgroundColor: backgroundColor.headerBkgcolor,
            updateHeaderBkgcolor: updateHeaderBkg,
        }}>
             <style>{globalStyles}</style>
             <Header classes={`header-color`} color={backgroundColor.headerBkgcolor}/>
             <main id="mainContent" tabIndex={0} aria-label="Main Content">
                {children}
             </main>
             <Footer/>
        </ThemeContext.Provider>
    )
  }