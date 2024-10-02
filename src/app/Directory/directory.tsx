"use client"

import { ReactNode } from "react";
import './directory.css'
import { BadgeInfo, DirInfo } from '@/components/Fetchers'
import { useRef, useState, useEffect, ReactElement } from 'react'
import { useSpring, animated } from '@react-spring/web'

function EffectBody({posx, posy, children, style, className}: {
    posx: number, 
    posy: number, 
    children?: ReactNode, 
    style?: React.CSSProperties, 
    className?: string
}): ReactElement {
    const ref = useRef<HTMLInputElement>(null)

    const [ rectposx , setrectposx ] = useState<number>(0)
    const [ rectposy, setrectposy ] = useState<number>(0)

    useEffect(() => {
        if (ref.current == null) {
            return
        }

        const rect = ref.current.getBoundingClientRect()
        setrectposx(rect.left)
        setrectposy(rect.top)  
    })

    return <div className={'effectBody ' + className } ref={ref} style={{
        "--posx": `${posx - (rectposx)}px`, 
        "--posy": `${posy - (rectposy)}px`, 
        ...style
    } as any}>
        {children}

    </div>
}


function CardBase({entry, posx, posy}: {entry: DirInfo, posx: number, posy: number}): JSX.Element {
    const cardRef = useRef<HTMLInputElement>(null)

    const [{ xys }, api] = useSpring(() => (
        {
            xys: [0, 0, 1],
        }
    ))

    const calc = (x, y, rect) => [
        (y - rect.top - rect.height / 2) / 5,
        -(x - rect.left - rect.width / 2) / 5,
        1,
    ]
      
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
      
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


    const [ badge, setBadge ] = useState<BadgeInfo>(entry.badges[0])
    const [ background, setBackground ] = useState<string>(entry.colors[0])
    const [ isFoil, setFoil ] = useState<boolean>(false);
    const [ loadCard, setLoadCard] = useState<boolean>(false)

    useEffect(() => {
        let randomNumber = Math.floor(Math.random() * 2)
        setFoil(randomNumber == 0 ? false : true)
        setFoil(true)

        if (entry.colors.length > 1) {
            randomNumber = Math.floor(Math.random() * entry.colors.length)
            console.log(randomNumber)
            console.log(`${entry.colors[randomNumber]}`)

            setBackground(entry.colors[randomNumber])
        }

        if (entry.badges.length > 1) {
            let total = 0
            entry.badges.forEach((badge, i, array) => {
                badge.rarity += i > 0 ? array[i - 1].rarity : 0
            })
    
            const maxWeight = entry.badges[entry.badges.length - 1].rarity
            randomNumber = Math.floor(Math.random() * maxWeight)
   
            for (let i = 0; i < entry.badges.length; i++) {
                if (randomNumber <= entry.badges[i].rarity) {

                    setBadge(entry.badges[i])
                    break;
                }
            }
        }

        setLoadCard(true)
    }, [])

    // https://cdn.malie.io/file/malie-io/art/foils/png/en_US/SWSH/SWSH10-ASR/en_US-SWSH10-002-hisuian_voltorb-ph.png check this out for a good glare pattern

    return loadCard ? <animated.div ref={cardRef} className="cardBase" style={{ transform: xys.to(trans) }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <EffectBody posx={posx} posy={posy}> 
            <div className='glareEffect'/>
            <EffectBody className='cardBackground' posx={posx} posy={posy} style={{"--backgroundColor": background} as any}>
                <div className='glareEffect'/>
                <div className='cardContent'>
                    <EffectBody className='cardBadge' posx={posx} posy={posy}>
                        <img src={badge.path} className='pixel-art'/>
                        <div className='glareEffect'/>
                    </EffectBody>
                </div>       
            </EffectBody>     
        </EffectBody>
    </animated.div> : <></>

}

function Cards({Directory}): JSX.Element {
    const [ posx, setposx ] = useState<number>(0)
    const [ posy, setposy ] = useState<number>(0)
    const baseRef = useRef<HTMLInputElement>(null)

    const setGlare = e => {
        setposx(e.clientX)
        setposy(e.clientY)
    }

    // <GlareEffect parentRef={baseRef} posx={posx} posy={posy} gradientParams="rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 10%"/>

    return <section className='layeredEffectBase' onMouseMove={setGlare} ref={baseRef} >
        <section style={{display: "flex", flexDirection: 'row', flexWrap: 'wrap', justifyContent: "center", columnGap: "inherit", rowGap: "inherit"}}>
            {Directory.map((x, index) => {
                return <CardBase entry={x} key={index} posx={posx} posy={posy}/>
            })}
        </section>
    </section>
}


export default async function Directory({Directory}): Promise<JSX.Element> {
    return <Cards Directory={Directory}/>
}