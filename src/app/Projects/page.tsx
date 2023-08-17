// juliaviolet.dev/Projects
import Head from 'next/head';
import { getAllPostsMeta } from '@/lib/mdx/postAPI'
import Link from 'next/link';
import Image from 'next/image'

import "@/styles/project-styles.css"

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
}

export default async function Page() {
    const posts = await getAllPostsMeta(["public", "Projects"]);

    return (
        <div className='body-grid'>
                {posts?.map(post => (   
                    <div className="body-panel link">
                        <Link href={`Projects/${post.slug}`}>
                            <div className="post">
                                <Image src={post.photo} className='image' width={512} height={512} alt={post.title}/>
                                <div className='post-title'>
                                    <h1>{post.title}</h1>
                                    <h3>{post.publishDate}</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
        </div>
    )
}
