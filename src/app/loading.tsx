"use client"

import { useTrail, animated } from '@react-spring/web'
import React, { useEffect } from 'react'

const nextConfig = {
    reactStrictMode: false
}

export default function Loading() {
    const [trails, api] = useTrail(3, () => ({
        from: { opacity: 0.0 },
        to: { opacity: 0.5},
        loop: true,
        delay: 1,
        config: {
            frequency: 1,
            damping: 0,
            tension: 100,
            friction: 0,
            mass: 1
        }
    }))

    return <>
        <div style={{flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center", margin: "auto"}}>
            {trails.map((props, idx) => (
                <animated.h1 style={{width: "fit-content", color: "white !important", ...props}} key={idx}>Loading</animated.h1>
            ))}
        </div>
    </>
}
