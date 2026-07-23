import React, { useEffect, useState } from "react"
import { theme } from "../../static/theme"
import { hasOptedOut, optOut, optIn } from "../../static/consent"

// Footer control + dialog implementing the CCPA "Do Not Sell or Share My
// Personal Information" opt-out. Opting out purges existing cookies and stops
// analytics from loading on subsequent page loads; the page reloads afterward
// so anything already running this session is halted.
export default function DoNotSell() {
    const [open, setOpen]         = useState(false)
    const [optedOut, setOptedOut] = useState(false)
    const [busy, setBusy]         = useState(false)

    useEffect(() => {
        setOptedOut(hasOptedOut())
    }, [])

    const handleOptOut = async () => {
        setBusy(true)
        await optOut()
        setOptedOut(true)
        setBusy(false)
        if (typeof window !== "undefined") window.location.reload()
    }

    const handleOptIn = () => {
        optIn()
        setOptedOut(false)
        if (typeof window !== "undefined") window.location.reload()
    }

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className={`${theme.text.FOOTER} text-[14px] inline underline hover:text-rm-green ml-1`}
            >
                Do Not Sell or Share My Personal Information
            </button>

            {open &&
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Do Not Sell or Share My Personal Information"
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-6"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="relative w-full max-w-lg bg-rm-black text-rm-white p-8 text-left font-basic-sans"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            aria-label="Close"
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-5 text-3xl leading-none hover:text-rm-green"
                        >
                            &times;
                        </button>

                        <h2 className={`${theme.text.H5} mb-4`}>Do Not Sell or Share My Personal Information</h2>

                        <p className="text-sm leading-relaxed mb-6">
                            We use cookies and similar technologies to analyze traffic and improve your
                            experience, which may involve sharing information with third parties. You can
                            opt out below. See our{" "}
                            <a href="/privacy-policy/" className="underline hover:text-rm-green">privacy policy</a>{" "}
                            for details.
                        </p>

                        {optedOut
                            ? <div>
                                <p className="text-sm leading-relaxed mb-6 text-rm-green">
                                    You have opted out. Analytics and sharing are disabled on this browser.
                                </p>
                                <button
                                    type="button"
                                    onClick={handleOptIn}
                                    className={`${theme.button.BASE_STYLING + theme.button.GHOST_WHITE_HOVER_LIGHT} scale-75 origin-left`}
                                >
                                    Allow Again
                                </button>
                            </div>
                            : <button
                                type="button"
                                disabled={busy}
                                onClick={handleOptOut}
                                className={`${theme.button.BASE_STYLING + theme.button.SOLID_GREEN_HOVER_LIGHT} scale-75 origin-left ${busy ? "opacity-50" : ""}`}
                            >
                                {busy ? "Opting Out…" : "Opt Out"}
                            </button>
                        }
                    </div>
                </div>
            }
        </>
    )
}
