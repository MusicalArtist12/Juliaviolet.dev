"use client"

import photo from './photo.module.css'

import React, { useState, useEffect, useRef } from 'react'
import { useTransition, animated, AnimatedProps } from '@react-spring/web'

import Photos from "../../public/juliaPhotos.json" assert { type: 'json' }


export default function JuliaPhoto():JSX.Element {
    
    let PhotoArray = Photos.Photos;
    const [index, set] = useState(0);
    
    const onClick = () => set(state => (state + 1) % PhotoArray.length);

    let data: ((props: AnimatedProps<{ style }>) => React.ReactElement)[] = [];
    
    for(let i = 0; i < PhotoArray.length; i++){
        data[i] = ({ style }) => <button><animated.img style={{ ...style}} title={PhotoArray[i].title} className={photo.img} src={PhotoArray[i].location}/></button>
    }

    const ref = useRef(null);

    let width = ref.current ? ref.current.offsetWidth/2 : 0;

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
        
        //from: { opacity: 0},
        //enter: { opacity: 1},
        //leave: { opacity: 0},
        config: { 
            tension: 210,
            friction: 20,
            clamp: true
        },
        exitBeforeEnter: true,
    
    }))

    useEffect(() => {
        api.start();
    }, [index])

    return( 
        <div onClick={onClick} className={photo.div} ref={ref}>
            {transition(
                (style, i) => {
                    const Item = data[i];
                    return (
                        <Item style={style}/>
                    )
                }
            )}
        </div>
    );
}