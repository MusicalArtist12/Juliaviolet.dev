import { getPostBySlug } from '@/lib/mdx/postAPI'
import { notFound } from 'next/navigation'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { slug: string }
}

let Title: string;

async function getData(slug: string) {
    try {
        return getPostBySlug(slug, ["public", "Projects"])
    } catch (err) {
        return notFound();
    } 
}

export async function generateMetadata( 
    { params }: Props,
    parent: ResolvingMetadata 
    ): Promise<Metadata> {
        return {
            title: Title
        }
}

export default async function Page({ params }: Props ) {   
    const data = await getData(params.slug)

    Title = data.meta.title

    return (
        <>
            <div className='body_panel'>
                <h1>{data.meta.title}</h1>
                <h2>{data.meta.subtitle}</h2>
                <h3>{data.meta.publishDate}</h3>
                <hr/>

                {data.content}
            </div>
        </>

    )
}