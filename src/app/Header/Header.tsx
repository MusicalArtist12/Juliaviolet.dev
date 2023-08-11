"use client"

import { useState } from 'react';

import header from "@/styles/header.module.css"
import SpinButton from "@/components/SpinButton"
import GetLogo from "@/components/GetLogo"

import { Menu, MobileMenu } from "@/components/Menu"
import WindowWidth from "@/components/WindowWidth";

import Link from 'next/link';

const mobileWidth = 600;

function MenuItem( {title, link }) {
    return (
        <Link href={link} className={header.menuItem}>{ title }</Link>
    );
}

export default function Header() {
    const [index, set] = useState(0);

    const onClick = () => {
        set(state => (state + 1) % 2);
    }

    let width = WindowWidth();
    let isMobile = (width <= mobileWidth) 

    let menuItems = <>
        <MenuItem title={"/Projects"} link={"/Projects"}/>
        <MenuItem title={"/Blog"} link={"/Blog"}/>
        <MenuItem title={"/About Me"} link={"/About-Me"}/>
        <MenuItem title={"/Contact"} link={"/Contact"}/>
    </>

    let currentMenu = <>
        <Menu>
            {menuItems}
        </Menu>
    </>

    if(isMobile) {
        currentMenu = <>
            <MobileMenu index={index} width={width}>
                {menuItems}
            </MobileMenu>
        </>
    }

    return (
        <>
            <header className={header.sticky}>
                <div className={header.bar}>
                    <div className={header.content}>
                        <div className={header.titlebar}>
                            <Link href="/" className='remove_global'><h1 className={header.title}>JuliaViolet.dev</h1></Link>
                            <SpinButton onClick={onClick} buttonStyle={header.navButton} logo={GetLogo("Bars", "1x")}/>
                        </div> 
                    </div> 
                </div>
                {currentMenu}
            </header>
        </>
    )
}