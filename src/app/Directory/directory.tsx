'use client'

import './directory.css'
import { BadgeInfo, DirInfo } from '@/components/Fetchers'
import { useRef, useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

function GlareEffect({parentRef, posx, posy, gradientParams, gradientParamsHover, blendingMode, style}: {
    parentRef: any, 
    posx: number, 
    posy: number, 
    gradientParams?: string,
    gradientParamsHover?: string,
    blendingMode?: string,
    style?: any
}): JSX.Element {
    const [ rectposx, setrectposx ] = useState<number>(0)
    const [ rectposy, setrectposy ] = useState<number>(0)

    useEffect(() => {
        if (parentRef.current == null) {
            return
        }

        const rect = parentRef.current.getBoundingClientRect()
        setrectposx(rect.left)
        setrectposy(rect.top)  
    })


    return <div className='glare' style={{
        "--gradientParams": gradientParams ? `${gradientParams}` : null,
        "--gradientParamsHover": gradientParamsHover ? `${gradientParamsHover}` : null,
        "--posx": `${posx - rectposx}px`,
        "--posy": `${posy - rectposy}px`,
        ...style
    } as any}/>
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


    const [ badge, _setBadge ] = useState<BadgeInfo>((): BadgeInfo => {
        if (entry.badges.length > 1) {
            let total = 0
            entry.badges.forEach((badge, i, array) => {
                badge.rarity += i > 0 ? array[i - 1].rarity : 0
            })
    
            const maxWeight = entry.badges[entry.badges.length - 1].rarity
            const randomNumber = Math.floor(Math.random() * maxWeight)
   
            for (let i = 0; i < entry.badges.length; i++) {
                if (randomNumber <= entry.badges[i].rarity) {
                    return entry.badges[i]
                }
            }
        }    

        return entry.badges[0]
    })

    const [ background, _setBackground ] = useState<string>((): string => {
        if (entry.colors.length > 1) {
            const randomNumber = Math.floor(Math.random() * entry.colors.length)

            return entry.colors[randomNumber]
        }

        return entry.colors[0]
    })

    // https://cdn.malie.io/file/malie-io/art/foils/png/en_US/SWSH/SWSH10-ASR/en_US-SWSH10-002-hisuian_voltorb-ph.png check this out for a good glare pattern
    
    return <div ref={cardRef} style={{ display: "flex"}}>
        <animated.div className='layeredEffectBase cardBase' style={{ transform: xys.to(trans) }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className='layeredEffectBase cardBody' style={{ "--backgroundColor": background} as any}>
                <div className='mask'>
                    <GlareEffect parentRef={cardRef} posx={posx} posy={posy} blendingMode='soft-light'                         
                        gradientParams='rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 20%, rgba(255,255,255,0.0) 35%, rgba(255,255,255,0.5) 100%'
                        gradientParamsHover='rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 20%, rgba(255,255,255,0.0) 35%, rgba(255,255,255,0.5) 100%'
                    />
                </div>
                <div className='cardContent'>
                    <img className='pixel-art' src={badge.path} style={{zIndex: 2}}/>
                </div>
            </div>

  


        </animated.div>
    </div>
    
    /*
    return <div ref={cardRef} style={{ display: "flex"}}>
        <animated.div className='layeredEffectBase cardBase' style={{ transform: xys.to(trans) }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className='layeredEffectBase cardBody' style={{ "--backgroundColor": background} as any}>
                <div className='cardContent'>
                        <img className='pixel-art' src={badge.path}/>
                    </div>
                <div className='mask'>
                    <GlareEffect parentRef={cardRef} posx={posx} posy={posy} 
                        blendingMode='soft-light' 
                        gradientParams='rgba(255,255,255,0.0) 0%, rgba(100,100,100,0.0) 50%' 
                        gradientParamsHover='rgba(255,255,255,1.0) 0%, rgba(100,100,100,0.0) 100%'
                    />
                </div>
            </div>

        </animated.div>
    </div>
    */
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