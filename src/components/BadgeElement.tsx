"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function StyledLinkElement({entry, children}): JSX.Element {
    const [color,setColor] = useState(entry.colors[0])
    const [index,setIndex] = useState(0)
    function onHover() {
        setIndex((index + 1) % entry.colors.length)
        setColor(entry.colors[index])
    }

    return <Link href={entry.link} onMouseLeave={onHover} style={{"--box-shadow-color": color} as any}>{children}</Link>
}

export function DirectoryEntry({entry}): JSX.Element {
    const nickname = entry.nickname !== undefined ? <> * {entry.nickname}</> : <></>
    
    return <StyledLinkElement entry={entry}>
            <section style={{display: "flex", flexDirection: "row", columnGap: "0.5em", alignItems: "center"}}>
                <BadgeElement entry={entry}/>
                <div>
                    <h1>{entry.name} {nickname}</h1>
                    <h2>{entry.link}</h2>
                </div>
            </section>   
    </StyledLinkElement>
}

export function BadgeElement({entry}): JSX.Element {
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

    return <StyledLinkElement entry={entry}>
        <img 
            className="badge pixel-art"
            src={badge} 
            alt={entry.link}  
        />
    </StyledLinkElement>
}

