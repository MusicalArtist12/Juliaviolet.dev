'use client'

import * as React from 'react';
import {useLayoutEffect, useEffect, useRef, useState} from 'react';

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


export default function Header() {
    const [open, setOpen] = React.useState(false);

        const handleOpen = () => {
        setOpen(!open);
    };

    const ref = useRef(null);

    const [width, setWidth] = useState(0);
  
    useLayoutEffect(() => {
    if ( ref && ref.current ) { setWidth(ref.current['clientWidth']); }
      ;
    }, []);

    useEffect(() => {
        function handleWindowResize() {
            if ( ref && ref.current ) { setWidth(ref.current['clientWidth']); }
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    
    let navType = header.navbar;
    let menuType = header.menu;

    const mobileWidth = 600;

    let isMobile:boolean = false;

    if(width <= mobileWidth) {
        isMobile = true;
    }
    
    return  (
        <>
        <header ref={ref} className={header.bar}>
            
            <div className={header.content}>
                <div className={header.titlebar}>
                    <a href="/"><h1 className={header.title}>JuliaViolet.dev</h1></a>
                    
                    <button onClick={handleOpen} className={header.navButton}><FontAwesomeIcon icon={faBars}/></button>
                </div>
            </div> 
            <Menu open={open} isMobile={isMobile}>        
                <Button title={"/Projects"} link={"Projects/"} />
                <Button title={"/Blog"} link={"Blog/"} />
                <Button title={"/About Me"} link={"About-Me/"} />
                <Button title={"/Contact"} link={"Contact/"} />
            </Menu>
        </header>


        </>
    )
}