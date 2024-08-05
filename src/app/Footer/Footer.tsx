import GetLogo from "@/components/GetLogo"
import Oneko from '@/components/Oneko' 
import Link from 'next/link'
import { getDirectory } from '@/components/Fetchers'

export default async function Footer() {
    const Directory = await getDirectory()

    return <>
        <footer>   
            <div className="badge-collection"> 

            </div>
            <Oneko startX={16} startY={16} startAlert={false} nekoSites={friendSites}/>
            <header>
                <p><Link href="https://github.com/MusicalArtist12/Juliaviolet.dev">{GetLogo("Github", "1x")} MusicalArtist12/Juliaviolet.dev</Link> | 2023</p> 
                <p>Made with Next.js and :3 </p>
            </header>
 
        </footer>
    </>
}
