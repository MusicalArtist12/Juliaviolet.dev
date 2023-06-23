'use client'

import '../styles/globals.css';
import { useState } from 'react';

function Button( {title, link}) {
    return (
        <a className="navButton" href={link}>{ title }</a>
    );
}

export default function Navbar() {
    return (
        <header>
            <a href='/'><h1>Julia Abdel-Monem</h1></a>
            <nav>
                <Button title={"Projects"} link={"Projects/"} /> 
                <Button title={"About Me"} link={"About-Me/"} />
                <Button title={"Contact"} link={"Contact/"} />
            </nav>
        </header>
    );
}

