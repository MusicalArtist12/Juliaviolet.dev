"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import SpinButton from "@/components/SpinButton"
import GetLogo from "@/components/GetLogo"
import MobileMenu from "@/components/MobileMenu"
import WindowWidth from "@/components/WindowWidth"
import Favicon from '@/components/Favicon'

function MenuItem( {title, link}) {
    return <h2><Link href={link}>{title}</Link></h2>
}

export default function Header() {
    let width = WindowWidth()

    const [index, set] = useState(0)
    const [button, setButton] = useState<JSX.Element>(<></>);

    const onClick = () => {
        set(state => (state + 1) % 2)
    }


    useEffect(() => {
        setButton(
            <h1 className='menu-button'>
                <SpinButton onClick={onClick} logo={GetLogo("Bars", "2x")}/>
            </h1>
        )
    }, [])


    const menuItems = <>
        <MenuItem title={"/About Me"} link={"/About-Me"}/>
        <MenuItem title={"/Projects"} link={"/Projects"}/>
        <MenuItem title={"/Contact"} link={"/Contact"}/>
    </>

    return <>
        <header style={{zIndex: 1}}>
            <div className='bar'>
                <Favicon/>
                <div className='main-section'>
                    <h1><Link  href="/" >Juliaviolet.dev</Link></h1>
                    <hr/>  
                    <nav className='nav'>
                        {menuItems}
                    </nav>    
                </div>  
                {button}
            </div>     
            <MobileMenu index={index} width={width}>
                {menuItems}
            </MobileMenu>       
        </header>
    </>
}