"use client"

import React, { useState, useEffect, useRef } from 'react'
import { useTransition, animated, AnimatedProps } from '@react-spring/web'

export default function PhotoSlideshow({Photos, Style}): JSX.Element {
    let PhotoArray = Photos.Photos
    const [index, set] = useState(0)
    
    const onClick = () => set(state => (state + 1) % PhotoArray.length)

    let data: ((props: AnimatedProps<{ style }>) => React.ReactElement)[] = []
    

    const ref = useRef<HTMLInputElement>(null)

    let width = ref.current ? ref.current.offsetWidth/2 : 0

    const [transition, api] = useTransition(index, () => ({
        from:  { 
            x: width,
            width: "0%"
        },
        enter: { 
            x: 0,
            width: "100%"
        },
        leave: { 
            x: -width,
            width: "0%"
        },
        config: { 
            tension: 210,
            friction: 20,
            clamp: true
        },
        exitBeforeEnter: true,
    
    }))

    useEffect(() => {
        api.start()
    }, [index])

    for(let i = 0; i < PhotoArray.length; i++) {
        data[i] = ({ style }) => <div 
            onClick={onClick} 
            ref={ref} 
            style={{
                backgroundColor: "transparent", 
                border: "none", 
                cursor: "pointer",
                ...Style
            }}
        >
            <animated.img 
                className="link" 
                style={{ 
                    margin: "auto", 
                    padding: 0, 
                    ...style
                }} 
                title={PhotoArray[i].title} 
                src={PhotoArray[i].location}
                />
        </div>
    }

    return <>
        <button style={{background: "transparent", border: "none"}}>
            {transition((style, i) => {
                const Item = data[i]
                return <Item style={style}/>
            })}
        </button>
    </>
}