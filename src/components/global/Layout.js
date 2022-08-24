import React, { useState } from "react"
import { theme, ThemeContext } from "../../static/theme"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {

    const updateAccent = (color) => {
        setColors({
            accent: color
        })
    }

    const [colors, setColors] = useState({
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
          color: ${colors.accent};
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
            accent: colors.accent,
            updateAccentFunction: updateAccent,
            
            backgroundColor: backgroundColor.headerBkgcolor,
            updateHeaderBkgcolor: updateHeaderBkg,
        }}>
             <style>{globalStyles}</style>
             <Header class={`header-color`} color={backgroundColor.headerBkgcolor}/>
             <main id="mainContent" tabIndex={0} aria-label="Main Content">
                {children}
             </main>
             <Footer/>
        </ThemeContext.Provider>
    )
  }