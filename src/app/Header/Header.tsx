"use client"

import { useState } from 'react';

import header from "@/styles/header.module.css"
import SpinButton from "@/components/SpinButton"
import GetLogo from "@/components/GetLogo"

import Menu from "@/components/Menu"

function MenuItem( {title, link }) {
    return (
        <a href={link} className={header.menuItem}>{ title }</a>
    );
}

export default function Header() {
    const [index, set] = useState(0);

    const onClick = () => {
        set(state => (state + 1) % 2);
    }

    return (
        <>
            <header className={header.sticky}>
                <div className={header.bar}>
                    <div className={header.content}>
                        <div className={header.titlebar}>
                            <a href="/"><h1 className={header.title}>JuliaViolet.dev</h1></a>
                            
                            <SpinButton onClick={onClick} buttonStyle={header.navButton} logo={GetLogo("Bars", "1x")}/>
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