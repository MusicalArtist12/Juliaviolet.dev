import header from "@/styles/header.module.css"

import React, { useEffect } from 'react'
import { useTransition, animated, AnimatedProps } from '@react-spring/web'

export function Menu( { children }) {
    let menu: JSX.Element = (
        <div className={header.content }>
            <nav className={ header.menu }>
                {children} 
            </nav>
        </div> 
    );

    return(
        <div className={header.navbar}>
             {menu}
        </div> 
     );
}

export function MobileMenu({ children, index, width}) {
    let menu: JSX.Element = (
        <div className={header.content }>
            <nav className={ header.mobile_menu }>
                {children} 
            </nav>
        </div> 
    );
    
    let data: ((props: AnimatedProps<{ style }>) => React.ReactElement)[] = [
        ({ style }) => <animated.div style={{ ...style, display: "none"}}/>,
        ({ style }) => <animated.div style={{ ...style}} className={header.mobile_navbar}>{menu}</animated.div>,
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
        api.start();
    }, [index])

    return( transition(
        (style, i) => {
            const Page = data[i];
            return (
                <Page style={style}/>
            )
        }
    ))
}


