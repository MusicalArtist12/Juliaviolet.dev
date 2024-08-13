"use client"

import './directory.css'
import { BadgeInfo, DirInfo } from '@/components/Fetchers'
import { useRef, useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

function GlareEffect({parentRef, posx, posy, gradientParams, gradientParamsHover, blendingMode, style, gradientSize}: {
    parentRef: React.RefObject<HTMLInputElement>, 
    posx: number, 
    posy: number, 
    gradientParams?: string,
    gradientParamsHover?: string,
    blendingMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' |  'hue' | 'saturation' | 'color' | 'luminosity',
    style?: React.CSSProperties,
    gradientSize?: number
}): JSX.Element {
    const [ rectposx , setrectposx ] = useState<number>(0)
    const [ rectposy, setrectposy ] = useState<number>(0)

    useEffect(() => {
        if (parentRef.current == null) {
            return
        }

        const rect = parentRef.current.getBoundingClientRect()
        setrectposx(rect.left)
        setrectposy(rect.top)  
    })

    return <section className='glare' style={{
        "--gradientParams": gradientParams ? `${gradientParams}` : null,
        "--gradientParamsHover": gradientParamsHover ? `${gradientParamsHover}` : null,
        "--posx": `${posx - rectposx}px`,
        "--posy": `${posy - rectposy}px`,
        "--gradientSize": `${gradientSize}px`,
        "--blendingMode": blendingMode ? blendingMode : null,
        ...style
    } as any}></section>
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


    const [ badge, setBadge ] = useState<BadgeInfo>(entry.badges[0])
    const [ background, setBackground ] = useState<string>(entry.colors[0])
    const [ isFoil, setFoil ] = useState<boolean>(false);

    useEffect(() => {
        let randomNumber = Math.floor(Math.random() * 2)
        setFoil(randomNumber == 0 ? false : true)
        //setFoil(true)

        if (entry.colors.length > 1) {
            randomNumber = Math.floor(Math.random() * entry.colors.length)
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
                    console.log(`${entry.name}`)
                    console.log(randomNumber)
                    setBadge(entry.badges[i])
                    break;
                }
            }
        }
    }, [])

    // https://cdn.malie.io/file/malie-io/art/foils/png/en_US/SWSH/SWSH10-ASR/en_US-SWSH10-002-hisuian_voltorb-ph.png check this out for a good glare pattern

    return <div ref={cardRef} style={{ display: "flex"}}>
        <animated.div className='layeredEffectBase cardBase' style={{ transform: xys.to(trans) }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            
            <GlareEffect parentRef={cardRef} posx={posx} posy={posy}
                blendingMode='soft-light'
                gradientParams='rgba(180,180,180,0.5) 0%, rgba(0,0,0,0.0) 100%'
                gradientParamsHover='rgba(180,180,180,0.5) 0%, rgba(0,0,0,0.0) 100%'
                style={{zIndex: 1}}
                gradientSize={500}
            />
            <div className='layeredEffectBase cardBackground' style={{ "--backgroundColor": background, zIndex: 0} as any}>

                <div className='mask' style={{display: isFoil ? "block" : "none", zIndex: 1}}>
                    <GlareEffect parentRef={cardRef} posx={posx} posy={posy} blendingMode='screen'                         
                        gradientParams='rgba(180,180,180,0.5) 0%, rgba(0,0,0,0.0) 100%'
                        gradientParamsHover='rgba(0,0,255,1.0) 8%, rgba(40,255,19,1.0) 32%, rgba(252,255,0,1.0) 40%, rgba(255,0,0,1.0) 53%, rgba(124,0,101,1.0) 73%, rgba(150,150,150,1.0) 100%'
                        gradientSize={600}
                    />  
                </div>
                <GlareEffect parentRef={cardRef} posx={posx} posy={posy}
                    blendingMode='soft-light'
                    gradientParams='rgba(180,180,180,0.5) 0%, rgba(100.0,100.0,100.0,0.8) 30%'
                    gradientParamsHover='rgba(180,180,180,0.5) 0%, rgba(100,100,100.0,0.8) 30%'
                    style={{zIndex: 4, borderRadius: 0 }}
                    gradientSize={200}
                />

                <div className='cardContent' style={{zIndex: 1}}>
                    <div className='layeredEffectBase'>
                        <GlareEffect parentRef={cardRef} posx={posx} posy={posy}
                            blendingMode='hard-light'
                            gradientParams='rgba(180,180,180,1.0) 0%, rgba(100.0,100.0,100.0,0.8) 30%'
                            gradientParamsHover='rgba(180,180,180,1.0) 0%, rgba(100,100,100.0,0.8) 30%'
                            style={{zIndex: 4, borderRadius: 0 }}
                            gradientSize={200}
                        />
                        <img src={badge.path} className='pixel-art' style={{width: "100%"}}/>
                    </div>
                    <div>
                    </div>
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