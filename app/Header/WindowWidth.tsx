"use client"

import { useState, useEffect } from 'react';

export default function WindowWidth(): number {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize.width;
}