
import { Metadata } from 'next'
import { getAllPostsMeta } from '@/lib/mdx/postAPI'
import Link from 'next/link';
import Image from 'next/image'

import "@/styles/project-styles.css"


function postElement(post) {
    return <Link href={`Projects/${post.slug}`} className="body-panel link" key={post.slug}>
        <Image src={post.photo} className='image' alt={post.title} width={800} height={800}/>
        <div className='post-title'>
            <h1>{post.title}</h1>
            <h3>{post.publishDate}</h3>
        </div>
    </Link>
}

export async function Projects() {
    const posts = await getAllPostsMeta(["public", "Projects"]);

    return <>
        <div className='body-grid'>
            {posts?.map(post => postElement(post))}
        </div>
    </>
}

export const metadata: Metadata = {
    title: 'Projects',
}

export default async function Page() {
    return <Projects/>
}