// Shared consent + Google Tag Manager helpers.
// Opt-out model: GTM loads on page load for everyone EXCEPT visitors who have
// used the footer's "Do Not Sell or Share My Personal Information" control to
// opt out. ConsentLoader loads GTM on mount; DoNotSell records the opt-out and
// clears any cookies that were already set.

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

export const deleteCookie = (name) => {
    document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`
}

// Best-effort removal of every cookie the browser exposes to JS. Prefers the
// async CookieStore API, falling back to the classic document.cookie loop.
export const clearAllCookies = async () => {
    if (typeof window === "undefined") return
    if ("cookieStore" in window) {
        const cookies = await window.cookieStore.getAll()
        await Promise.all(cookies.map((el) => window.cookieStore.delete(el.name)))
    } else if (typeof document !== "undefined") {
        document.cookie.split(";").forEach((c) => {
            const name = c.split("=")[0].trim()
            if (name) deleteCookie(name)
        })
    }
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

// --- opt-out state --------------------------------------------------------
export const hasOptedOut  = () => getCookie(COOKIE_NAME) === "opted_out"
export const shouldLoadGtm = () => !hasOptedOut()

// Record the opt-out and purge any cookies already dropped this session.
// The opt-out cookie is re-set AFTER clearing so the choice survives.
export const optOut = async () => {
    await clearAllCookies()
    setCookie(COOKIE_NAME, "opted_out", COOKIE_DAYS)
}

// Undo the opt-out; analytics may load again on the next page load.
export const optIn = () => {
    setCookie(COOKIE_NAME, "allowed", COOKIE_DAYS)
}
