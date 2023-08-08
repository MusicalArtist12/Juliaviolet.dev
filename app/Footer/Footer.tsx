
import footer from "./footer.module.css"
import GetLogo from "../_apps/GetLogo"
import friends from "../../public/friends.json" assert { type: 'json' }

function Badge({badge, link, color}) {


    return(
        <div>
            <a className={footer.badgeHover} href={link}><img className={footer.badge} style={{"--inputcolor": color} as any} src={badge} /></a>
        </div>
    );
}

export default function Footer() {
    let badges: JSX.Element[] = [];

    for(let i = 0; i < friends.friends.length; i++) {
        badges[i] = Badge(friends.friends[i]);
    }


    return (
        <footer className={footer.bar}>
            <div className={footer.content}>
                <div className={footer.badge_collection}> 
                    {badges}
                </div>

                <div className={footer.right}>
                    <p className={footer.p}><a className={footer.link} href="https://github.com/MusicalArtist12/Juliaviolet.dev">{GetLogo("Github", "1x")} MusicalArtist12/Juliaviolet.dev</a> | 2023</p> 
                    <p className={footer.p}>Made with Next.js, React.js, React-Spring, and &lt;3 </p>
                </div>
            </div>
        </footer>
    );
}