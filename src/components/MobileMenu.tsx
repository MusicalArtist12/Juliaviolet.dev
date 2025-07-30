import React, { useEffect, type JSX } from 'react';
import { useTransition, animated, AnimatedProps } from '@react-spring/web'

export default function MobileMenu({ children, index, width}): JSX.Element {
    let menu: JSX.Element = (
        <nav className='mobile_nav'>
            {children} 
        </nav> 
    )
    
    let data: ((props: AnimatedProps<{ style }>) => React.ReactElement<any>)[] = [
        ({ style }) => <animated.div style={{ ...style, display: "none"}}/>,
        ({ style }) => <animated.div style={{ ...style, width: "100%"}}>{menu}</animated.div>,
    ]

    const [transition, api] = useTransition(index, () => ({
        from:  { x: -width },
        enter: { x: 0      },
        leave: { x: width  },
        exitBeforeEnter: true,
        config: {
            tension: 210,
            friction: 20,
            clamp: true
        },
    
    }))

    useEffect(() => {
        api.start()
    }, [index])

    return (transition((style, i) => {
        const Page = data[i]
        return <Page style={style}/>
    }))
}


