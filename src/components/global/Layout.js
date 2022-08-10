import React, { useState, useEffect} from "react"
import { theme, ThemeContext } from "../../static/theme"

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
            <div>
                {children}
            </div>
        </ThemeContext.Provider>
    )
  }