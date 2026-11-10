
import Article from '@/components/Article'
import metaData from '@/components/metadata'


export default async function About_Me() {
    const path = "@/public/Pages/About_Me.md"
    const data = await import(path) as any

    const frontmatter: metaData = data.frontmatter;
    const Post = data.default;

    return <>
        <Article slug={"About_Me"} Post={Post} frontmatter={frontmatter} noRaw={true}/>
    </>
}