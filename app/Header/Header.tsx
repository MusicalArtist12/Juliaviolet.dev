"use client"
import header from "./header.module.css"

import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';


import Menu from "./Menu"
import GetLogo from "../_apps/GetLogo"

function MenuItem( {title, link }) {
    return (
        <a href={link} className={header.menuItem}>{ title }</a>
    );
}

export default function Header() {
    

    const [spring, api] = useSpring(
        () => ({
            config: {
                tension: 100,
                friction: 60
            }
        })
    );

    // Button handling
    const [index, set] = useState(0);
    const onClick = () => {
        api.start({
            from: { transform: 'rotateZ(0deg)' },
            to: { transform: 'rotateZ(180deg)' }
        });
        set(state => (state + 1) % 2);
    }

    return  (
        <>
            <header className={header.sticky}>
                <div className={header.bar}>
                    <div className={header.content}>
                        <div className={header.titlebar}>
                            <a href="/"><h1 className={header.title}>JuliaViolet.dev</h1></a>
                            
                            <animated.button onClick={onClick} className={header.navButton} style={{...spring}}>{GetLogo("Bars", "1x")}</animated.button>
                        </div>
                    </div> 
                </div>

                <Menu index={index}>        
                    <MenuItem title={"/Projects"} link={"Projects/"}/>
                    <MenuItem title={"/Blog"} link={"Blog/"}/>
                    <MenuItem title={"/About Me"} link={"About-Me/"}/>
                    <MenuItem title={"/Contact"} link={"Contact/"}/>
                </Menu>


            </header>

            


        </>
    )
}