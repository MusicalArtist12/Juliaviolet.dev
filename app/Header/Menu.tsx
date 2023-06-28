"use client"
import header from "./header.module.css"

import React, { useEffect } from 'react'
import { useTransition, animated, AnimatedProps } from '@react-spring/web'

import WindowWidth from "../_apps/WindowWidth";

const mobileWidth = 600;

export default function Menu( { children, index }) {
    let width = WindowWidth();

    let isMobile:boolean = false;
    let menuType = header.menu;

    if(width <= mobileWidth) { 
        isMobile = true; 
        menuType = header.mobile_menu;
    }

    let menu: JSX.Element = (
        <div className={header.content}>
            <nav className={menuType}>
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
        config: {
            tension: 150,
            friction: 10,
            clamp: true
        },
    
    }))

    useEffect(() => {
        api.start();
    }, [index])

    if(!isMobile){
        return(
           <div className={header.navbar}>
                {menu}
           </div> 
        ); 

    } else {
        return( transition(
            (style, i) => {
                const Page = data[i];
                return (
                    <Page style={style}/>
                )
            }
        ))
    }
}
