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
    
    const globalStyles = `
        .accent-text {
          color: ${primary.accent};
        }
        .secondary-text {
            color: ${secondary.accent}
        }
    `

    return (
        <ThemeContext.Provider value={{
            accent: primary.accent,
            secondary: secondary.secondary,
            updateAccentFunction: updatePrimary,
            updateSecondaryFunction: updateSecondary
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