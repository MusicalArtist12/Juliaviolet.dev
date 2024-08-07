'use client'

import './directory.css'
import { BadgeInfo, DirInfo } from '@/components/Fetchers'
import { useRef, useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

function CardBase({entry, posx, posy}: {entry: DirInfo, posx: number, posy: number}): JSX.Element {
    const [ rectposx, setrectposx ] = useState<number>(0)
    const [ rectposy, setrectposy ] = useState<number>(0)

    const cardRef = useRef<HTMLInputElement>(null)

    const [{ xys }, api] = useSpring(() => (
        {
            xys: [0, 0, 1],
        }
    ))

    const calc = (x, y, rect) => [
        (y - rect.top - rect.height / 2) / 5,
        -(x - rect.left - rect.width / 2) / 5,
        1.2,
    ]
      
    const trans = (x, y, s) =>
        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
      
        
    const handleMouseLeave = () =>
        api.start({
            xys: [0, 0, 1],
        })

    const handleMouseMove = e => {
        if (cardRef.current == null) {
            return
        }

        const rect = cardRef.current.getBoundingClientRect()
        api.start({
            xys: calc(e.clientX, e.clientY, rect),
        })
    }

    useEffect(() => {
        if (cardRef.current == null) {
            return
        }

        const rect = cardRef.current.getBoundingClientRect()
        setrectposx(rect.left)
        setrectposy(rect.top)  
    })

    const [ badge, _ ] = useState<BadgeInfo>((): BadgeInfo => {
        if (entry.badges.length > 1) {
            let total = 0
            entry.badges.forEach((badge, i, array) => {
                badge.rarity += i > 0 ? array[i - 1].rarity : 0
            })
    
            const maxWeight = entry.badges[entry.badges.length - 1].rarity
            const randomNumber =  Math.floor(Math.random() * maxWeight)
   
            for (let i = 0; i < entry.badges.length; i++) {
                if (randomNumber <= entry.badges[i].rarity) {
                    console.log(entry.badges[i])
                    return entry.badges[i]
                }
            }
        }    

        return entry.badges[0]
    })



    return <div ref={cardRef} style={{ display: "flex"}}>
        <animated.div className='cardBase' style={{ transform: xys.to(trans) }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className='card'>
                <div className='border' style={{
                    "--backgroundColor": entry.colors[0]
                } as any}>
                    <img className="pixel-art" src={badge.path}/>
                </div>
            </div>
            <div className='glare' style={{
                "--posx": `${posx - rectposx}px`,
                "--posy": `${posy - rectposy}px`
            } as any}/>
        </animated.div>
    </div>
}

function Cards({Directory}): JSX.Element {
    const [ posx, setposx ] = useState<number>(0)
    const [ posy, setposy ] = useState<number>(0)

    const setGlare = e => {
        setposx(e.clientX)
        setposy(e.clientY)
    }

    return <section onMouseMove={setGlare} style={{flexDirection: 'row', flexWrap: 'wrap',  justifyContent: "center"}}>
        {Directory.map((x, index) => {
            return <CardBase entry={x} key={index} posx={posx} posy={posy}/>
        })}
    </section>
}


export default async function Directory({Directory}): Promise<JSX.Element> {
    return <Cards Directory={Directory}/>
}