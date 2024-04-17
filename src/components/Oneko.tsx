"use client"

import { oneko, freezeOneko } from '@/lib/oneko/oneko.js' 
import {useState} from 'react';


let rendered = false;

export function Oneko({startX, startY, startAlert, nekoSites}) {
  if (!rendered) {
    oneko(startX, startY, startAlert, nekoSites);
    rendered = true;   
  }

  let f = false;

  const [source,setSource] = useState("88x31/oneko_enabled.png")

  
  function onClick() {
    f = !f
    freezeOneko(f)
    
    if (f) {
      setSource("88x31/oneko_sleep.png")
    }
    else {
      setSource("88x31/oneko_enabled.png")
    }
  }

  return <img className="badge" style={{"--inputcolor": "#ffffff00"} as any} src={source} onClick={onClick}/> 

}

