import Article from '@/components/Article'
import metaData from '@/components/metadata'


export default async function Onion() {
    const data = await import(`@/public/Pages/Onion.md`) as any
    
    const frontmatter: metaData = data.frontmatter;
    const Post = data.default;

    return <>
        <Article slug='Onion' Post={Post} frontmatter={frontmatter} noRaw={true}/>
    </>
}