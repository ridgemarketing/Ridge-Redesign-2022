import { useEffect } from "react"
import { hasConsent, loadGtm } from "../../static/consent"

// Renders nothing. On window load, checks the stored consent cookie and, if the
// visitor previously accepted, injects Google Tag Manager into the head — no
// banner. New/undecided visitors are handled by CookieConsent instead.
export default function ConsentLoader() {
    useEffect(() => {
        const run = () => {
            if (hasConsent()) loadGtm()
        }

        if (document.readyState === "complete") {
            run()
        } else {
            window.addEventListener("load", run)
            return () => window.removeEventListener("load", run)
        }
    }, [])

    return null
}
