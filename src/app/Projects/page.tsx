// juliaviolet.dev/Projects
import Head from 'next/head';
import { getAllPostsMeta } from '@/lib/mdx/postAPI'
import Link from 'next/link';
import Image from 'next/image'

import "./styles.css"

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Projects',
}

export default async function Page() {
    const posts = await getAllPostsMeta(["public", "Projects"]);

    return (
        <div className='body_grid'>
            {posts?.map(post => (   
                <Link className="remove_global" href={`Projects/${post.slug}`}>
                    <div className="body_panel_link" style={{ paddingLeft: "var(--padding)", paddingRight: "var(--padding)" }}>
                        <div className="post">
                            <Image src={post.photo} className='image' width={100} height={100} alt={post.title}/>
                            <div>
                                <h1>{post.title}</h1>
                                <h3>{post.publishDate}</h3>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
