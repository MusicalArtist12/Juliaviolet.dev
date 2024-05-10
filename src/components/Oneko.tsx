"use client"

import { oneko, freezeOneko } from '@/lib/oneko/oneko.js' 
import { useState } from 'react';

let rendered = false;

export function Oneko({startX, startY, startAlert, nekoSites}) {
    if (!rendered) {
        oneko(startX, startY, startAlert, nekoSites);
        rendered = true;   
    }

    let f = false;

    const [source,setSource] = useState("/88x31/oneko_enabled.png")

    function onClick() {
        f = !f
        freezeOneko(f)
        
        if (f) {
            setSource("/88x31/oneko_sleep.png")
        }
        else {
            setSource("/88x31/oneko_enabled.png")
        }
    }

    return <img className="badge" style={{"--inputcolor": "#00000000"} as any} src={source} onClick={onClick} width={88} height={31} alt='oneko'/> 

}

