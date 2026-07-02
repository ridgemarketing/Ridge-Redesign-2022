import React, { useEffect, useState } from "react"
import { theme } from "../../static/theme"
import { COOKIE_NAME, COOKIE_DAYS, getCookie, setCookie, loadGtm } from "../../static/consent"

export default function CookieConsent() {
    const [visible, setVisible] = useState(false)

    // Only show the banner when the visitor hasn't decided yet. Returning
    // visitors who already accepted are handled by ConsentLoader on window load.
    useEffect(() => {
        const stored = getCookie(COOKIE_NAME)
        if (stored !== "accepted" && stored !== "declined") {
            setVisible(true)
        }
    }, [])

    const accept = () => {
        setCookie(COOKIE_NAME, "accepted", COOKIE_DAYS)
        setVisible(false)
        loadGtm()
    }

    const decline = () => {
        setCookie(COOKIE_NAME, "declined", COOKIE_DAYS)
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div
            role="dialog"
            aria-live="polite"
            aria-label="Cookie consent"
            className="fixed bottom-0 left-0 right-0 z-[9999] bg-black text-white px-6 py-5 md:flex md:items-center md:justify-between gap-6"
        >
            <p className="text-sm leading-relaxed mb-4 md:mb-0 md:max-w-3xl font-basic-sans">
                We use cookies and similar technologies to analyze traffic and improve your
                experience. You can accept these or opt out. See our{" "}
                <a href="/privacy-policy/" className="underline">privacy policy</a> for details.
            </p>
            <div className="flex flex-shrink-0">
                <button
                    type="button"
                    onClick={decline}
                    className={`${theme.button.BASE_STYLING + theme.button.GHOST_WHITE_HOVER_LIGHT} scale-75`}
                >
                    Decline
                </button>
                <button
                    type="button"
                    onClick={accept}
                    className={`${theme.button.BASE_STYLING + theme.button.SOLID_GREEN_HOVER_LIGHT} scale-75`}
                >
                    Accept
                </button>
            </div>
        </div>
    )
}
