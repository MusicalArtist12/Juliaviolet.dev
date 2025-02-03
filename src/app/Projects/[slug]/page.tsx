import { Metadata } from 'next'
import Article from '@/components/Article'

import metaData from '@/components/metadata'

type Props = {
    params: Promise<{ slug: string }>
}
 
// or Dynamic metadata
export async function generateMetadata({ params }) {
    const slug = (await params).slug
    const data = await import(`@/public/Projects/${slug}.md`)
    
    return {
      title: data.frontmatter.title,
    }
  }

export default async function Page({ params } : Props ) {   
    
    const slug = (await params).slug
 
    const data = await import(`@/public/Projects/${slug}.md`)
    
    const frontmatter: metaData = data.frontmatter;
    const Post = data.default;


    return <>
        <Article slug={slug} Post={Post} frontmatter={frontmatter}/>
    </>
    

}