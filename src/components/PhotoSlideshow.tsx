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
                fill={true}
            />
        </>
    )

    let data: AnimatedPropConstructor[] = photos
        .map((photo) => {
            const Constructor = ({ style }) => <>
                <animated.button style={{display: "flex", border: "none", ...style}} className={'box-shadow'}> 
                    {photo}
                </animated.button>
            </>

            return Constructor
        }
    )

    return data

}

export default function PhotoSlideshow({Photos} : {Photos: {location, title}[] } ): JSX.Element {

    if (Photos.length == 1) {
        return <>
            <div className="photo-slideshow-single">
                <Image
                    alt={`Image: ${Photos[0].title}`} 
                    src={Photos[0].location}
                    fill={true}
                />
            </div>
        </>
    }

    const data = getPhotos(Photos);


    const [index, set] = useState(0)
    
    const onClick = () => set(state => (state + 1) % Photos.length)

    const ref = useRef<HTMLInputElement>(null)

    let width = ref.current ? ref.current.offsetWidth : 50
    let height = ref.current ? ref.current.offsetHeight : 50

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


    return <>
        <div onClick={onClick} ref={ref} className="photo-slideshow">
            {transition((style, i) => {
                const Item = data[i]
                return <Item style={style}/>
            })}
        </div>
    </>
}
