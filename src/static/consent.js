// Shared consent + Google Tag Manager helpers.
// Used by ConsentLoader (loads GTM on window load for returning visitors who
// already accepted) and CookieConsent (the opt-in banner for new visitors).

export const GTM_ID      = "GTM-NV9M24V"
export const COOKIE_NAME = "ridge_consent"
// 13 months — the maximum a consent record may be relied on before the user
// must be re-prompted (IAB TCF / CNIL guidance).
export const COOKIE_DAYS = 395

// --- cookie helpers -------------------------------------------------------
export const getCookie = (name) => {
    if (typeof document === "undefined") return null
    const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"))
    return match ? decodeURIComponent(match[1]) : null
}

export const setCookie = (name, value, days) => {
    const maxAge = days * 24 * 60 * 60
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`
}

// --- GTM loader -----------------------------------------------------------
// Injects the standard Google Tag Manager snippet. Guarded so it only ever
// runs once per page load, even if called from multiple places.
export const loadGtm = () => {
    if (typeof window === "undefined" || window.__gtmLoaded) return
    // Match the previous plugin's includeInDevelopment: false behavior.
    // if (process.env.NODE_ENV !== "production") return
    window.__gtmLoaded = true

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ platform: "gatsby" })
    window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" })

    const script  = document.createElement("script")
    script.async  = true
    script.src    = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
    document.head.appendChild(script)
}

export const hasConsent = () => getCookie(COOKIE_NAME) === "accepted"
