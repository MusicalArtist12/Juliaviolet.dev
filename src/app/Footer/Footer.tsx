import '@/styles/footer.css'
import GetLogo from "@/components/GetLogo"
import BadgeElement from "@/components/BadgeElement"
import Badges from "@/public/Badges.json" assert { type: 'json' }
import Oneko from '@/components/Oneko' 

export default function Footer() {
    const friendSites = Badges.Friends.filter((site) => site.hasOneko == true)

    const friendBadges: JSX.Element[] = Badges.Friends
        .map((badge, i) => <BadgeElement 
            badges={badge.badges} 
            link={badge.link} 
            colors={badge.colors} 
            key={i}
        />
    )  

    const siteBadges: JSX.Element[] = Badges.Sites.map((badge, i) => 
        <BadgeElement 
            badges={badge.badges} 
            link={badge.link} 
            colors={badge.colors} 
            key={i}
        />
    )  

    return <>
        <footer>   
            <div className="badge-collection"> 
                {friendBadges}
                {siteBadges}
                <Oneko startX={0} startY={0} startAlert={false} nekoSites={friendSites}/>
            </div>
            <div>
                <p><a href="https://github.com/MusicalArtist12/Juliaviolet.dev">{GetLogo("Github", "1x")} MusicalArtist12/Juliaviolet.dev</a> | 2023</p> 
                <p>Made with Next.js, React.js, React-Spring, and &lt;3 </p>
            </div>
        </footer>
    </>
}