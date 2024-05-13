"use client"

import React, { useState, useEffect, useRef, ReactElement} from 'react'
import { useTransition, animated, AnimatedProps } from '@react-spring/web'
import Image from 'next/image';

type AnimatedPropConstructor = (props: AnimatedProps<{ style: any; }>) => ReactElement<any, string>

function getPhotos(Photos): AnimatedPropConstructor[] {

    let photos = Photos.map((photo) => <>
            <Image
                style={{ 
                    margin: "auto", 
                    height: "100%",
                    width: "100%",
                    padding: 0,  
                }} 
                alt={photo.title} 
                src={photo.location}
                width={800}
                height={800}
            />
        </>
    )

    let data: AnimatedPropConstructor[] = photos
        .map((photo) => {
            const Constructor = ({ style }) => <>
                <animated.button style={{display: "flex", ...style}} className={'box-shadow'}> 
                    {photo}
                </animated.button>
            </>

            return Constructor
        }
    )

    return data

}

export default function PhotoSlideshow({Photos, className}): JSX.Element {

    const [index, set] = useState(0)
    
    const onClick = () => set(state => (state + 1) % Photos.length)

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