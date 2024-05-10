"use client"

import { useState } from 'react';
import { Oneko } from '@/components/Oneko' 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function BadgeElement({badges, link, colors}): JSX.Element {
    const [color,setColor] = useState(colors[0]);
    const [badge, _] = useState(() => {
        const badgeIdx = getRandomInt(100);

        let idx = 0;
        for (let i = 0; i < badges.length; i++) {
            if (badgeIdx <= badges[i][1]) {
                idx = i;
            }
        }
        return badges[idx][0];
    });

    function onHover() {
        let idx = getRandomInt(colors.length);
        // console.log("link: %s, idx: %i", self.link, idx);
        setColor(colors[idx]);
    }

    return <a href={link} key={link}><img className="badge" style={{"--inputcolor": color} as any} src={badge} onMouseLeave={onHover} alt={link}/></a>
}

export default function Badges({ friends }) {
    const badges: JSX.Element[] = [];

    for(let i = 0; i < friends.length; i++) {
        badges[i] = BadgeElement(friends[i])
    }     

    const friendSites = friends.map((friend) => new URL(friend.link).host);

    return <>
        <div className="badge-collection"> 
            {badges}
            <Oneko startX={0} startY={0} startAlert={false} nekoSites={friendSites}/>
        </div>
    </>
}