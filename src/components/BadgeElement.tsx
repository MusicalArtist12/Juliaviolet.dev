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

    return <a href={entry.link} onMouseLeave={onHover} style={{"--box-shadow-color": color} as any}>{children}</a>
}

function Badge({entry}): JSX.Element {
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

export function DirectoryEntry({entry}): JSX.Element {
    const nickname = entry.nickname !== undefined ? <> * {entry.nickname}</> : <></>
    const callsign = entry.callsign !== undefined ? <> * {entry.callsign}</> : <></>

    let badgeURL = new URL(entry.link);

    return <StyledLinkElement entry={entry}>
            <article style={{display: "flex", flexDirection: "row", columnGap: "0.5em", alignItems: "center"}}>
                <Badge entry={entry}/>
                <header style={{flexGrow: "1"}}>
                    <h1>{entry.name} {nickname} {callsign}</h1>
                    <h2>{badgeURL.hostname}</h2>
                </header>
            </article>   
    </StyledLinkElement>
}

export function BadgeElement({entry}): JSX.Element {
    return <StyledLinkElement entry={entry}>
        <Badge entry={entry}/>
    </StyledLinkElement>
}

