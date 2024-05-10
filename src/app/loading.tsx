"use client"

import { useTrail, animated } from '@react-spring/web'

export default function Loading() {
    const trails = useTrail(3, {
        from: { opacity: 0 },
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
    })

    return <>
        <div style={{flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center", margin: "auto"}}>
            {trails.map(props => (
                <animated.h1 style={{width: "fit-content", ...props}} key={1}>Loading</animated.h1>
            ))}
        </div>
    </>
}
