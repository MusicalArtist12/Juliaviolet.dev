import { useSpring, animated } from '@react-spring/web';

export default function SpinButton({buttonStyle, logo, onClick}) {
    const [spring, api] = useSpring(
        () => ({
            config: {
                tension: 50,
                friction: 10,
                clamp: true
            }
        })
    );

    // Button handling
    
    const ClickFunction = () => {
        api.start({
            from: { transform: 'rotateZ(0deg)' },
            to: { transform: 'rotateZ(180deg)' }
        });
        onClick();
    }
    
    return(
        <animated.button onClick={ClickFunction} className={buttonStyle} style={{backgroundColor: "inherit", border: "none", ...spring}}>{logo}</animated.button>
    )
}