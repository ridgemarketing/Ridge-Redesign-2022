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
    
    const globalStyles = `
        .accent-text {
          color: ${colors.accent};
        }
    `

    return (
        <ThemeContext.Provider value={{
            accent: colors.accent,
            updateAccentFunction: updateAccent
        }}>
             <style>{globalStyles}</style>
             <Header color={`white`}/>
             <main id="mainContent" tabIndex={0} aria-label="Main Content">
                {children}
             </main>
             <Footer/>
        </ThemeContext.Provider>
    )
  }