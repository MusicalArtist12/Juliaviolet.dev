"use client"

import React, { useState, useEffect, useRef, ReactElement} from 'react'
import { useTransition, animated, AnimatedProps } from '@react-spring/web'
import Image from 'next/image';

type AnimatedPropConstructor = (props: AnimatedProps<{ style: any; }>) => ReactElement<any, string>

function getPhotos(Photos): AnimatedPropConstructor[] {
    let photos = Photos.map((photo) => <>
            <Image
                alt={`Image: ${photo.title}`} 
                src={photo.location}
                width={0}
                height={0}
                sizes='100vw'
                loading='eager'
            />
        </>
    )

    let data: AnimatedPropConstructor[] = photos
        .map((photo) => {
            const Constructor = ({ style }) => <>
                <animated.div style={{...style}} className={'box-shadow'}> 
                    {photo}
                </animated.div>
            </>

            return Constructor
        }
    )

    return data

}

export default function Slideshow({Photos} : {Photos: {location, title}[] } ): JSX.Element {


    const data = getPhotos(Photos);

    let buttons: JSX.Element[] = [];


    const [index, set] = useState(0)
    
    const onClick = () => set(state => (state + 1) % Photos.length)

    const ref = useRef<HTMLButtonElement>(null)

    let width = ref.current ? ref.current.offsetWidth : 50
    let height = ref.current ? ref.current.offsetHeight : 50

    data.forEach((_, i) => {
        buttons[i] = <button onClick={() => set(i)} className={i == index ? 'selected' : ''}>⬤</button>
    })

    const [transition, api] = useTransition(index, () => ({
        from:  { 
            x: width,
            y: height / 2,
            width: "0%",
            height: "0%"
        },
        enter: { 
            x: 0,
            y: 0,
            width: "100%",
            height: "100%"
        },
        leave: { 
            x: 0,
            y: height / 2,
            width: "0%",
            height: "0%"
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

    if (data.length > 1) {
        return <>
            <button onClick={onClick} ref={ref} className="photo-slideshow">
                {transition((style, i) => {
                    const Item = data[i]
                    return <Item style={style}/>
                })}
            </button>
            <div className='photo-slideshow-buttons-container'>
                <div className='photo-slideshow-buttons'>
                    {buttons}
                </div>
            </div>

        </>
    }
    else {
        return <div className="photo-slideshow">
            {transition((style, i) => {
                const Item = data[i]
                return <Item style={style}/>
            })}
        </div>
    }

}
