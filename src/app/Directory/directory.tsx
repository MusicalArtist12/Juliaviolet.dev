'use client'

import './directory.css'
import { DirInfo } from '@/components/Fetchers'
import { useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

function CardBase({entry}: {entry: DirInfo}): JSX.Element {
    const cardRef = useRef(null)

    const [{ xys, zIndex }, api] = useSpring(() => (
        {
            xys: [0, 0, 1],
        }
    ))

    const calc = (x, y, rect) => [
        -(y - rect.top - rect.height / 2) / 5,
        (x - rect.left - rect.width / 2) / 5,
        1.2,
    ]
      
    const trans = (x, y, s) =>
        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
      
        
    const handleMouseLeave = () =>
        api.start({
            xys: [0, 0, 1],
        })

    const handleMouseMove = e => {
        const rect = cardRef.current.getBoundingClientRect()
        api.start({
            xys: calc(e.clientX, e.clientY, rect),
        })
    }

    return <div ref={cardRef} style={{ display: "flex"}}>
        <animated.div className='cardBase' style={{ transform: xys.to(trans) }} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
            <div className='card'>
                <div className='border' style={{
                    "--backgroundColor": entry.colors[0]
                } as any}>
                    <img className="pixel-art" src={entry.badges[0].path}/>
                </div>
            </div>
            <div className='glare'/>
        </animated.div>
    </div>
}

export default async function Directory({Directory}): Promise<JSX.Element> {
    return <section style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {Directory.map((x, index) => {
            return <CardBase entry={x} key={index}/>
        })}
    </section>
}