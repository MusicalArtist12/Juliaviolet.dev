import {DirectoryEntry} from "@/components/BadgeElement"
import { getDirectory } from '@/components/Fetchers'

import Link from "next/link"

export default async function Page() {
    const Directory = await getDirectory()


    return <section>
        {Directory.Friends.map((entry) => <DirectoryEntry entry={entry} key={entry.link}/>)}
        {Directory.Sites.map((entry) => <DirectoryEntry entry={entry} key={entry.link}/>)}
        <Link href="/Data/Directory.json" style={{textAlign: "center"}}><section>View as raw JSON</section></Link>
    </section>
}

