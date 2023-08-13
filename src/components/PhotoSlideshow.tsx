"use client"
import React, { useState, useEffect, useRef } from 'react'
import { useTransition, animated, AnimatedProps } from '@react-spring/web'

export default function PhotoSlideshow({Photos}):JSX.Element {
    let PhotoArray = Photos.Photos;
    const [index, set] = useState(0);
    
    const onClick = () => set(state => (state + 1) % PhotoArray.length);

    let data: ((props: AnimatedProps<{ style }>) => React.ReactElement)[] = [];
    
    for(let i = 0; i < PhotoArray.length; i++){
        data[i] = ({ style }) => <button style={{backgroundColor: "inherit", border: "none", cursor: "pointer"}}><animated.img style={{ margin: "auto", ...style}} title={PhotoArray[i].title} src={PhotoArray[i].location}/></button>
    }

    const ref = useRef<HTMLInputElement>(null);


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
        <div onClick={onClick} ref={ref}>
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