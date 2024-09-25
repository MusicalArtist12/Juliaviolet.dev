import { getAllPostsMeta } from '@/lib/mdx/postAPI'
import Link from 'next/link'
import Image from 'next/image'
import './projects.css'

function PostElement({post}): JSX.Element {
    return <>
        <Link href={`Projects/${post.slug}`}>
            <article>
                <div className='image'><Image 
                    src={post.photo} 
                    alt=" "
                    width={800} 
                    height={800}
                />
                </div>
                <header>
                    <h1>{post.title}</h1>
                    <h3>{post.publishDate}</h3>
                </header>
            </article>
        </Link>
    </>
}

export default async function Projects() {
    const posts = (await getAllPostsMeta(["public", "Projects"]))

    return <>
        <section className="flex">
            {posts?.map((post, idx) => <PostElement post={post} key={idx}/>)}
        </section>
    </>
}
