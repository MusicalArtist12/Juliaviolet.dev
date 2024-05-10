"use client"

import '@/styles/header.css'
import { useState } from 'react';

import Link from 'next/link';
import SpinButton from "@/components/SpinButton"
import GetLogo from "@/components/GetLogo"
import {  MobileMenu } from "@/components/Menu"
import WindowWidth from "@/components/WindowWidth";

function MenuItem( {title, link }) {
    return (
        <h2><Link href={link}>{title}</Link></h2>
    );
}

export default function Header() {
    let menuItems = <>
        <MenuItem title={"/Projects"} link={"/Projects"}/>
        <MenuItem title={"/Blog"} link={"/Blog"}/>
        <MenuItem title={"/About Me"} link={"/About-Me"}/>
        <MenuItem title={"/Contact"} link={"/Contact"}/>
    </>

    let width = WindowWidth();

    const [index, set] = useState(0);
    const onClick = () => {
        set(state => (state + 1) % 2);
    }


    return <header>
        <div className='title'>
            <h1>
                <Link href="/">JuliaViolet.dev</Link>
                <span style={{float: 'right'}}><SpinButton onClick={onClick} logo={GetLogo("Bars", "1x")}/></span>
            </h1>                 
        </div>
        <div className='nav'>
            <nav>
                {menuItems}
            </nav> 
        </div>
        <MobileMenu index={index} width={width}>
            {menuItems}
        </MobileMenu>
        
    </header>
}