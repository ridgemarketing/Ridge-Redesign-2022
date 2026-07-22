import { useEffect } from "react"
import { shouldLoadGtm, loadGtm } from "../../static/consent"

// Renders nothing. Loads Google Tag Manager on page load for everyone except
// visitors who have opted out via "Do Not Sell or Share My Personal
// Information" in the footer.
export default function ConsentLoader() {
    useEffect(() => {
        if (shouldLoadGtm()) loadGtm()
    }, [])

    return null
}
