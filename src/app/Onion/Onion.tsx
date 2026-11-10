import Article from '@/components/Article'
import metaData from '@/components/metadata'


export default async function Onion() {
    const path = `@/public/Pages/Onion.md`
    const data = await import(path) as any

    const frontmatter: metaData = data.frontmatter;
    const Post = data.default;

    return <>
        <Article slug='Onion' Post={Post} frontmatter={frontmatter} noRaw={true}/>
    </>
}