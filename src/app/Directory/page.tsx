import {DirectoryEntry} from "@/components/BadgeElement"
import { getDirectory } from '@/components/Fetchers'

import Link from "next/link"

export default async function Page() {
    const Directory = await getDirectory()

    return <>
        {Directory.Friends.map((entry) => <DirectoryEntry entry={entry} key={entry.link}/>)}
        {Directory.Sites.map((entry) => <DirectoryEntry entry={entry} key={entry.link}/>)}
        <Link className="box-shadow" href="/Data/Directory.json" style={{textAlign: "center", margin: "auto"}}>View as raw JSON</Link>
    </>
}

