"use client"

import React, { useState, useEffect, useRef } from 'react'
import { useTransition, animated, AnimatedProps } from '@react-spring/web'

function getPhotos(Photos): ((props: AnimatedProps<{ style: any; }>) => ReactElement<any, string | JSXElementConstructor<any>>)[] {
    let PhotoArray = Photos.Photos
    let data: ((props: AnimatedProps<{ style }>) => React.ReactElement)[] = []

    for(let i = 0; i < PhotoArray.length; i++) {
        
        data[i] = ({ style }) => 
        <div>
            <animated.img 
                style={{ 
                    margin: "auto", 
                    padding: 0, 
                    ...style
                }} 
                title={PhotoArray[i].title} 
                src={PhotoArray[i].location}
                className={'box-shadow'}
            />
        </div>
    }
    
    return data
}

export default function PhotoSlideshow({Photos, className}): JSX.Element {
    let PhotoArray = Photos.Photos
    const [index, set] = useState(0)
    
    const onClick = () => set(state => (state + 1) % PhotoArray.length)

    const ref = useRef<HTMLInputElement>(null)

    let width = ref.current ? ref.current.offsetWidth : 50

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
            x: 0,
            width: "0%"
        },
        config: { 
            tension: 110,
            friction: 10,
            clamp: true
        },
        exitBeforeEnter: true,
    
    }))

    useEffect(() => {
        api.start()
    }, [index])

    const data = getPhotos(Photos);

    return <>
        <div onClick={onClick} ref={ref} className={className}>
            {transition((style, i) => {
                const Item = data[i]
                return <Item style={style}/>
            })}
        </div>
    </>
}