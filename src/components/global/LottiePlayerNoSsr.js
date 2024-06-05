import React,{ Suspense, lazy, useEffect, useRef, useState } from 'react';

const Player = lazy(() => import('@lottiefiles/react-lottie-player'));
export const LottiePlayerNoSsr = (props) => {
    return(
        <Suspense fallback={<p>loading</p>}>
        <Player
            {...props}
        />
        </Suspense>
    )
}