"use client"

import { useState } from 'react';

import header from "./header.module.css"
import Menu from "./Menu"
import WindowWidth from "./WindowWidth";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import { faBars } from '@fortawesome/free-solid-svg-icons'


function MenuItem( {title, link }) {
    
    return (
        <a href={link} className={header.menuItem}>{ title }</a>
    );
}



export default function Header() {
    
    // Button handling
    const [open, setOpen] = useState(false);


    function handleClick() {
        setOpen(!open);
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

                <Menu open={open} isMobile={isMobile}>        
                    <MenuItem title={"/Projects"} link={"Projects/"} />
                    <MenuItem title={"/Blog"} link={"Blog/"} />
                    <MenuItem title={"/About Me"} link={"About-Me/"} />
                    <MenuItem title={"/Contact"} link={"Contact/"} />
                </Menu>


            </header>

            


        </>
    )
}