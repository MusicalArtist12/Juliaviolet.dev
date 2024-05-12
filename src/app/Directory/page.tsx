import {DirectoryEntry} from "@/components/BadgeElement"
import Directory from "@/public/Directory.json" assert { type: 'json' }
import Link from "next/link"

export default function Page() {
    return <>
        {Directory.Friends.map((entry) => <DirectoryEntry entry={entry} key={entry.link}/>)}
        {Directory.Sites.map((entry) => <DirectoryEntry entry={entry} key={entry.link}/>)}
        <section className="box-shadow button">
        <Link href="/Directory.json" style={{textAlign: "center", margin: "auto"}}>View as raw JSON</Link>
        </section>
    </>
}

