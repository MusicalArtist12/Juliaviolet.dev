
'use client'

import header from "./header.module.css"


import * as React from 'react';


import { useSpring, animated } from '@react-spring/web'


export default function Menu( { children, open, isMobile}) {
    let navType = header.navbar;
    let menuType = header.menu;
    
    if(isMobile) {
        navType = header.mobile_navbar;
        menuType = header.mobile_menu;
    }
    
    let menu: JSX.Element = (
        <div>
            <div className={navType}>
                
                <div className={header.content}>
                    <nav className={menuType}>
                        {children} 
                    </nav>
                </div> 

            </div>
        </div>
    );
    
    if(!isMobile){
        return(menu); 

    } else if(open) {
        return(menu);
        
    } else {
        return(null);
    }
}

function mobileMenu({children}) {
    return (
        <animated.div
          style={{
            width: 80,
            height: 80,
            background: '#ff6d6d',
            borderRadius: 8,
          }}
        />
      )
    
}

// {menu.map( (menuItem, index) => (<a key={index} className={header.menuItem}>{menuItem}</a>) )}