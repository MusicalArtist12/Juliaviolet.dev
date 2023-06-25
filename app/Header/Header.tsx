"use client"

import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSpring } from '@react-spring/web'

import header from "./header.module.css"
import Menu from "./Menu"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import { faBars } from '@fortawesome/free-solid-svg-icons'


function Button( {title, link }) {
    
    return (
        <a href={link} className={header.menuItem}>{ title }</a>
    );
}

function WindowWidth(): number {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize.width;
}

export default function Header() {
    
    // Button handling
    const [open, setOpen] = React.useState(false);

    const [springs, api] = useSpring(
        () => ({
            config: {
                velocity: 5,
            },
        
            from: { y: 0 },
        })
    )
    
    function handleClick() {
        setOpen(!open);

        api.start({
            from: {
            y: -100,
            },
            to: {
            y: 0,
            },
        })
    }

    let width = WindowWidth();
     

    const mobileWidth = 600;

    let isMobile:boolean = false;

    if(width <= mobileWidth) {
        isMobile = true;
    }
    
    return  (
        <>
            <header className={header.sticky}>

            
                <div className={header.bar}>
                    <div className={header.content}>
                        <div className={header.titlebar}>
                            <a href="/"><h1 className={header.title}>JuliaViolet.dev</h1></a>
                            
                            <button onClick={handleClick} className={header.navButton}><FontAwesomeIcon icon={faBars}/></button>
                        </div>
                    </div> 
                </div>

                <Menu open={open} isMobile={isMobile} springs={springs} >        
                    <Button title={"/Projects"} link={"Projects/"} />
                    <Button title={"/Blog"} link={"Blog/"} />
                    <Button title={"/About Me"} link={"About-Me/"} />
                    <Button title={"/Contact"} link={"Contact/"} />
                </Menu>


            </header>

            


        </>
    )
}