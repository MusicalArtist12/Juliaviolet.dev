"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function BoxShadowLink({entry, children }): JSX.Element {
    const [color,setColor] = useState(entry.colors[0])
    const [index,setIndex] = useState(0)
    function onHover() {
        setIndex((index + 1) % entry.colors.length)
        setColor(entry.colors[index])
    }

    return <>
        <Link
            href={entry.link}               
            style={{
                "--box-shadow-color": color, 
                display: "flex",
                alignItems: "center"
            } as any} 
            onMouseLeave={onHover} 
            className='block'
        >
            {children}
        </Link>
    </>
}

function GenerateBadge({entry}): JSX.Element {
    const [badge, setBadge] = useState(entry.badges[0][0])

    useEffect(() => {
        const badgeIdx = getRandomInt(100)
        let idx = 0
        for (let i = 0; i < entry.badges.length; i++) {
            if (badgeIdx <= entry.badges[i][1]) {
                idx = i
            }
        }
        setBadge(entry.badges[idx][0])
    }, [entry.badges])


    return <>
        <img 
            className="badge pixel-art"
            src={badge} 
            alt={entry.link}  
        />
    </> 
}

export function BadgeElement({entry}): JSX.Element {

    return <>
        <BoxShadowLink entry={entry}>
            <GenerateBadge entry={entry}/>
        </BoxShadowLink>
    </>
}

