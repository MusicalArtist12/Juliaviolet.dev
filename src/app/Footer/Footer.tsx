import GetLogo from "@/components/GetLogo"
import { Oneko } from '@/components/Oneko' 

function Badge({badge, link, color}) {
    return(
        <a href={link}><img className="badge" style={{"--inputcolor": color} as any} src={badge} /></a>
    );
}

export default function Footer({ friends }) {
    let badges: JSX.Element[] = [];

    for(let i = 0; i < friends.length; i++) {
        badges[i] = Badge(friends[i]);
    }
    const friendSites = friends.map((friend) => new URL(friend.link).host);
    
    badges.push(<Oneko startX={16} startY={16} startAlert={false} nekoSites={friendSites}/>)

    return (
        <footer>
            
            <div className="content">
                <div className="badge-collection"> 
                    {badges}
                </div>
                <div>
                    <p><a href="https://github.com/MusicalArtist12/Juliaviolet.dev">{GetLogo("Github", "1x")} MusicalArtist12/Juliaviolet.dev</a> | 2023</p> 
                    <p>Made with Next.js, React.js, React-Spring, and &lt;3 </p>
                </div>
            </div>
        </footer>
    );
}