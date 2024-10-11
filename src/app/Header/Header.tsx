"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import SpinButton from "@/components/SpinButton"
import GetLogo from "@/components/GetLogo"
import MobileMenu from "@/components/MobileMenu"
import WindowWidth from "@/components/WindowWidth"
import Favicon from '@/components/Favicon'

function MenuItem( {title, link, onClick}) {
    return <h2><Link href={link} onClick={onClick}>{title}</Link></h2>
}

export default function Header() {
    let width = WindowWidth()

    const [index, set] = useState(0)
    
    const onClick = () => {
        set(state => (state + 1) % 2)
    }


    const menuItems = <>
        <MenuItem title={"/About Me"} link={"/About-Me"} onClick={onClick}/>
        <MenuItem title={"/Projects"} link={"/Projects"} onClick={onClick}/>
        <MenuItem title={"/Contact"} link={"/Contact"} onClick={onClick}/>
    </>

    return <>
        <header style={{zIndex: 1}}>
            <div className='bar'>
                <Favicon/>
                <div className='main-section'>
                    <h1><Link href="/">Juliaviolet.dev</Link></h1>
                    <hr/>  
                    <nav className='nav'>
                        {menuItems}
                    </nav>    
                </div>  
                <h1 className='menu-button'>
                    <SpinButton onClick={onClick} logo={GetLogo("Bars", "2x")}/>
                </h1>
            </div>     
            <MobileMenu index={index} width={width}>
                {menuItems}
            </MobileMenu>       
        </header>
    </>
}