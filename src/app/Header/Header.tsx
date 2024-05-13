"use client"

import { useState } from 'react'
import Link from 'next/link'
import SpinButton from "@/components/SpinButton"
import GetLogo from "@/components/GetLogo"
import MobileMenu from "@/components/MobileMenu"
import WindowWidth from "@/components/WindowWidth"
import Image from 'next/image'

function MenuItem( {title, link}) {
    return <h2><Link href={link}>{title}</Link></h2>
}

export default function Header() {
    let width = WindowWidth()

    const [index, set] = useState(0)

    const onClick = () => {
        set(state => (state + 1) % 2)
    }

    const menuItems = <>
        <MenuItem title={"/About Me"} link={"/About-Me"}/>
        <MenuItem title={"/Projects"} link={"/Projects"}/>
        <MenuItem title={"/Contact"} link={"/Contact"}/>
    </>

    return <>
        <header>
            <div className='bar'>
                <Link href="/"><img src="/favicon.png" alt="/favicon.png" width={32} height={32} className='pixel-art' style={{display: "block", height: "3.5em", width: "3.5em", paddingRight: "1em"}}/></Link>
                <div style={{flexGrow: 1}}>
                    <h1>
                        JuliaViolet.dev
                        <span style={{float: 'right'}}><SpinButton onClick={onClick} logo={GetLogo("Bars", "1x")}/></span>
                    </h1>  
        
                    <nav className='nav'>
                        {menuItems}
                    </nav>    
                </div>  
            </div>     

            <MobileMenu index={index} width={width}>
                {menuItems}
            </MobileMenu>       
        </header>
    </>
}