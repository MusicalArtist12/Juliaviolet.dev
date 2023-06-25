"use client"

import { animated } from '@react-spring/web'
import { useSpring } from '@react-spring/web'

import header from "./header.module.css"


export default function Menu( { children, open, isMobile}) {
    const [springs, api] = useSpring(
        () => ({
            config: {
                velocity: 5,
            },
        
            from: { y: 0 },
        })
    )

    if(open) {
        api.start({
            from: {
            y: -100,
            },
            to: {
            y: 0,
            },
        })
    }
    
    
    let navType = header.navbar;
    let menuType = header.menu;
    
    if(isMobile) {
        navType = header.mobile_navbar;
        menuType = header.mobile_menu;
    }
    
    let menu: JSX.Element = (
        <div className={header.content}>
            <nav className={menuType}>
                {children} 
            </nav>
        </div> 
    );
    
    if(!isMobile){
        return(
           <div className={navType}>
                {menu}
           </div> 
        ); 
    } else if(open) {
        return(
            <animated.div className={navType} style={...springs}>
                {menu}
            </animated.div>
        )
    } else {
        return(null);
    }
}
// {menu.map( (menuItem, index) => (<a key={index} className={header.menuItem}>{menuItem}</a>) )}