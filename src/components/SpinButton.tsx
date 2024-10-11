"use client"

import { useSpring, animated } from '@react-spring/web'

export default function SpinButton({logo, onClick}) {
    const [spring, api] = useSpring(() => ({
        config: {
            tension: 50,
            friction: 10,
            clamp: true
        }
    }))

    const ClickFunction = () => {
        onClick()
        api.start({
            from: { transform: 'rotateZ(0deg)' },
            to: { transform: 'rotateZ(180deg)' }
        })
    }
    
    return <>
        <animated.button 
            onClick={ClickFunction} 
            style={{backgroundColor: "inherit", border: "none", margin: "auto", ...spring}}
        >
            {logo}
        </animated.button>
    </>
}