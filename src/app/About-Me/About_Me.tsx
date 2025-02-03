
import Article from '@/components/Article'
import metaData from '@/components/metadata'


export default async function About_Me() { 
 
    const data = await import(`@/public/Pages/About_Me.md`) as any
    
    const frontmatter: metaData = data.frontmatter;
    const Post = data.default;

    return <> 
        <Article slug={"About_Me"} Post={Post} frontmatter={frontmatter} noRaw={true}/>
    </>
}