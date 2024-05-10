"use client"

import { useSpring, animated } from '@react-spring/web';

export default function SpinButton({logo, onClick}) {
    const [spring, api] = useSpring(
        () => ({
            config: {
                tension: 50,
                friction: 10,
                clamp: true
            }
        })
    );

    const ClickFunction = () => {
        api.start({
            from: { transform: 'rotateZ(0deg)' },
            to: { transform: 'rotateZ(180deg)' }
        });
        onClick();
    }
    
    return <animated.button onClick={ClickFunction} style={{backgroundColor: "inherit", border: "none", ...spring}}>{logo}</animated.button>
    
}