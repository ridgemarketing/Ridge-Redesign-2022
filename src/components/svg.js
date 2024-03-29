import React from "react"

export const Triangle = ({className}) => {
    return(
        <svg width="45" height="17" viewBox="0 0 45 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M21.1209 0.929763L0 17H44.5L24.8313 0.990563C23.7569 0.116045 22.2234 0.0909171 21.1209 0.929763Z" fill="currentColor"/>
        </svg>
    )
}

export const ChevronLeft = ({className}) => {
    return(
        <svg width="20" height="36" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M18.5938 35.1875L19.1406 34.6406C19.5312 34.25 19.5312 33.7031 19.1406 33.3125L3.90625 18L19.1406 2.76562C19.5312 2.375 19.5312 1.82812 19.1406 1.4375L18.5938 0.890625C18.2031 0.5 17.6562 0.5 17.2656 0.890625L0.78125 17.375C0.390625 17.7656 0.390625 18.3125 0.78125 18.7031L17.2656 35.1875C17.6562 35.5781 18.2031 35.5781 18.5938 35.1875Z" fill="currentColor"/>
        </svg>
    )
}

export const ChevronRight = ({className}) => {
    return(
        <svg width="20" height="36" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M1.40625 35.1875L0.859375 34.6406C0.46875 34.25 0.46875 33.7031 0.859375 33.3125L16.0938 18L0.859375 2.76562C0.46875 2.375 0.46875 1.82812 0.859375 1.4375L1.40625 0.890625C1.79688 0.5 2.34375 0.5 2.73438 0.890625L19.2188 17.375C19.6094 17.7656 19.6094 18.3125 19.2188 18.7031L2.73438 35.1875C2.34375 35.5781 1.79688 35.5781 1.40625 35.1875Z" fill="currentColor"/>
        </svg>
    )
}

export const Hamburger = ({className}) => {
    return(
        <svg version="1.1" x="0px" y="0px" width="33" height="19.5" viewBox="0 0 33 19.5" className={className}>
            <g className={`w-full`} fill={`currentColor`}>
                <path d="M0,0h33v4H0V0z"/>
                <path d="M0,15.6h33v4H0V15.6z"/>
                <path d="M0,7.8h33v4H0V7.8z"/>
            </g>
        </svg>
    )
}

export const Close = ({className}) => {
    return(
        <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M2.17708 2.7369C3.27392 1.71602 4.98513 1.78271 5.99918 2.88587L23.3211 21.73C24.3352 22.8332 24.2681 24.555 23.1712 25.5759C22.0744 26.5968 20.3632 26.5301 19.3491 25.4269L2.02718 6.58281C1.01313 5.47965 1.08025 3.75778 2.17708 2.7369Z" fill="currentColor"/>
            <path d="M2.35122 25.736C1.23902 24.732 1.14563 23.0116 2.14263 21.8932L19.1773 2.78434C20.1743 1.66594 21.8842 1.57313 22.9964 2.57704C24.1086 3.58095 24.2019 5.30142 23.2049 6.41982L6.17027 25.5287C5.17327 26.6471 3.46342 26.7399 2.35122 25.736Z" fill="currentColor"/>
        </svg>
    )
}

export const Play = ({className}) => {
    return(
        <svg width="167" height="167" viewBox="0 0 167 167" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_922_3872)">
            <path d="M112.699 78.6797L68.0117 51.5117C63.9492 49.4805 59.125 52.2734 59.125 56.8438V109.656C59.125 114.48 63.9492 117.273 68.0117 114.988L112.699 89.3438C117.016 87.0586 117.016 81.2188 112.699 78.6797ZM146.469 83.25C146.469 48.4648 118.285 20.2812 83.5 20.2812C48.7148 20.2812 20.5312 48.4648 20.5312 83.25C20.5312 118.035 48.7148 146.219 83.5 146.219C118.285 146.219 146.469 118.035 146.469 83.25ZM32.7188 83.25C32.7188 55.3203 55.3164 32.4688 83.5 32.4688C111.43 32.4688 134.281 55.3203 134.281 83.25C134.281 111.434 111.43 134.031 83.5 134.031C55.3164 134.031 32.7188 111.434 32.7188 83.25Z" fill="currentColor"/>
            </g>
        <defs>
            <filter id="filter0_d_922_3872" x="0.53125" y="0.28125" width="165.938" height="165.938" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_922_3872"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_922_3872" result="shape"/>
            </filter>
        </defs>
        </svg>
    )
}