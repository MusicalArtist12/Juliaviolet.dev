import GetLogo from "@/components/GetLogo"
import friends from "@/public/friends.json" assert { type: 'json' }

function Badge({badge, link, color}) {
    return(
        <a href={link}><img className="badge" style={{"--inputcolor": color} as any} src={badge} /></a>
    );
}

export default function Footer() {
    let badges: JSX.Element[] = [];

    for(let i = 0; i < friends.friends.length; i++) {
        badges[i] = Badge(friends.friends[i]);
    }

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