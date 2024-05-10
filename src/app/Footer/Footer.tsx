import '@/styles/footer.css'

import GetLogo from "@/components/GetLogo"
import BadgeElement from "@/components/BadgeElement"
import friends from "@/public/friends.json" assert { type: 'json' }
import { Oneko } from '@/components/Oneko' 

export default function Footer() {
    const badges: JSX.Element[] = [];

    const friendSites = friends.friends.map((friend) => new URL(friend.link).host);
    const friendList = friends.friends.sort((a, b) => a.order - b.order)

    for(let i = 0; i < friendList.length; i++) {
        badges[i] = <BadgeElement badges={friendList[i].badges} link={friendList[i].link} colors={friendList[i].colors}/>
    }     

    return <footer>   
        <div className="badge-collection"> 
            {badges}
            <Oneko startX={0} startY={0} startAlert={false} nekoSites={friendSites}/>
        </div>
        <div>
            <p><a href="https://github.com/MusicalArtist12/Juliaviolet.dev">{GetLogo("Github", "1x")} MusicalArtist12/Juliaviolet.dev</a> | 2023</p> 
            <p>Made with Next.js, React.js, React-Spring, and &lt;3 </p>
        </div>
    </footer>
}