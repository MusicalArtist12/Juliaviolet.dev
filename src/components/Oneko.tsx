"use client"

import { oneko, freezeOneko } from '@/lib/oneko/oneko.js' 
import { useState, type JSX } from 'react';

let rendered = false;

export default function Oneko({startX, startY, startAlert, nekoSites}): JSX.Element {
    if (!rendered) {
        oneko(startX, startY, startAlert, nekoSites);
        rendered = true;   
    }

    let f = false;
    const [source,setSource] = useState("/Oneko/oneko_enabled.png")
    function onClick() {
        f = !f
        freezeOneko(f)
        
        if (f) {
            setSource("/Oneko/oneko_sleep.png")
        }
        else {
            setSource("/Oneko/oneko_enabled.png")
        }
    }

    return <img 
        className="pixel-art oneko" 
        style={{width: "40px", height: "31px", display: "block"} as any} 
        src={source} onClick={onClick} 
        width={40} 
        height={31} 
        alt=' '
    />
}

