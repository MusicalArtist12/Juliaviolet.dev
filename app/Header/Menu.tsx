"use client"

import { animated } from '@react-spring/web'

import header from "./header.module.css"


export default function Menu( { children, open, isMobile, springs}) {
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