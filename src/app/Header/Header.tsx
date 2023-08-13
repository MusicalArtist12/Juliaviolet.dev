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
        <h2><Link href={link}>{title}</Link></h2>
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
                        <div className={header.title}>
                            <h1><Link href="/">JuliaViolet.dev</Link></h1>
                            <h1 style={{textAlign: "right"}}><SpinButton onClick={onClick} buttonStyle={header.mobileMenuButton} logo={GetLogo("Bars", "1x") }/></h1>
                        </div>
                    </div> 
                </div>
                {currentMenu}
            </header>
        </>
    )
}