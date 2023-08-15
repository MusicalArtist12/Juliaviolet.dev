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
            <div className='body-panel'>
                <h1>Project: {data.meta.title}</h1>
                <h3>Writeup Date: {data.meta.publishDate}</h3>
                <div className='article sans-serif'>
                    {data.content}
                </div> 
            </div>
        </>

    )
}