import GetLogo from "@/components/GetLogo"
import {BadgeElement} from "@/components/BadgeElement"
import Oneko from '@/components/Oneko' 
import Link from 'next/link'
import { getDirectory } from '@/components/Fetchers'

export default async function Footer() {
    const Directory = await getDirectory()

    const friendSites = Directory.Friends
        .filter((site) => site.hasOneko == true)
        .map((site) => new URL(site.link).host)

    const friendBadges: JSX.Element[] = Directory.Friends
        .map((badge, i) => <BadgeElement entry={badge} key={i}/>
    )  

    const siteBadges: JSX.Element[] = Directory.Sites.map((badge, i) => 
        <BadgeElement entry={badge} key={i}/>
    )  

    return <>
        <footer>   
            <div className="badge-collection"> 
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    height: "31px",
                    width: "88px"
                }}>
                    <Link style={{fontSize: "14px", fontWeight: "bold", TextWrap: "nowrap"} as any} href="/Directory">/Directory</Link>
                </div> 
                {friendBadges}
                {siteBadges}
            </div>
            <Oneko startX={16} startY={16} startAlert={false} nekoSites={friendSites}/>
            <header>
                <p><Link href="https://github.com/MusicalArtist12/Juliaviolet.dev">{GetLogo("Github", "1x")} MusicalArtist12/Juliaviolet.dev</Link> | 2023</p> 
                <p>Made with Next.js and :3 </p>
            </header>
 
        </footer>
    </>
}
