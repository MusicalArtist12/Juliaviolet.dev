
import {DirectoryEntry} from "@/components/BadgeElement"
import { getDirectory } from '@/components/Fetchers'

import Link from "next/link"

export default async function Page() {
    const Directory = await getDirectory()

    return <>
        <h1>Friends of Juliaviolet.dev</h1>
        <section>
        {Directory.Friends.map((entry) => <DirectoryEntry entry={entry} key={entry.link}/>)}
        </section>
        <h1>Other Interesting Sites</h1>
        <section>
        {Directory.Sites.map((entry) => <DirectoryEntry entry={entry} key={entry.link}/>)}
        <Link href="/Data/Directory.json" style={{textAlign: "center"}}>
            <article>View as raw JSON</article>
        </Link>
        </section>
    </>
}

