'use client'

import * as React from 'react';

import '../styles/globals.css';

import header from '../styles/header.module.css'
import flexbox from "../styles/flexbox.module.css"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import { faBars } from '@fortawesome/free-solid-svg-icons'

function Button( {title, link}) {
    return (
        <a href={link} className={header.menuItem}>{ title }</a>
    );
}

function MobileMenu({open, menu}) {
        return(
            <div>
            {open ? (
                <ul className={header.mobileMenu}>
                    {menu.map( (menuItem, index) => (<li key={index} className={header.mobileMenuItem}>{menuItem}</li>) )}
                </ul>
            ) : null}
            </div>
    );
};

function Menu({menu}) {
    return(
        <nav className={header.menu}>
            {menu.map( (menuItem, index) => (<a key={index} className={header.menuItem}>{menuItem}</a>) )}
        </nav>
    )
}

export default function Navbar() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };

    const barMenu = [                           
        <Button title={"/Projects"} link={"Projects/"} />,
        <Button title={"/Design Reference"} link={"Design-Reference/"} />,
        <Button title={"/Blog"} link={"Blog/"} />,
        <Button title={"/About Me"} link={"About-Me/"} />,
        <Button title={"/Contact"} link={"Contact/"} />,
    ]

    return (
        <header className='stickyTop'>
            <div className={header.bar}>
                <div className={flexbox.row}>
                    <a className={header.title} href='/'><h1 className={header.title}>Julia Abdel-Monem</h1></a>
                    <button className={header.navButton} onClick={handleOpen}><FontAwesomeIcon icon={faBars}/></button>
                </div>
                <Menu menu={barMenu}/>
            </div>
            
            <MobileMenu open={open} menu={barMenu}/>
            
        </header>
    );
}

