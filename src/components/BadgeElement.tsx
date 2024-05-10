"use client"

import { useEffect, useState } from 'react';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default function BadgeElement({badges, link, colors}): JSX.Element {
    const [color,setColor] = useState(colors[0]);
    const [badge, setBadge] = useState(badges[0][0]);

    useEffect(() => {
        const badgeIdx = getRandomInt(100);
        let idx = 0;
        for (let i = 0; i < badges.length; i++) {
            if (badgeIdx <= badges[i][1]) {
                console.log("link: %s, badge id: %i, random number: %i", link, i, badgeIdx);
                idx = i;
            }
        }
        setBadge(badges[idx][0]);
    }, [badges])

    function onHover() {
        let idx = getRandomInt(colors.length);
        // console.log("link: %s, idx: %i", link, idx);
        setColor(colors[idx]);
    }

    return <a href={link} key={link}><img className="badge" style={{"--inputcolor": color} as any} src={badge} onMouseLeave={onHover} alt={link}/></a>
}

