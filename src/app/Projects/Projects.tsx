import { getAllPostsMeta } from '@/lib/mdx/postAPI'
import Link from 'next/link'
import Image from 'next/image'
import './projects.css'

function PostElement({post}): JSX.Element {
    return <>
        <Link href={`Projects/${post.slug}`}>
            <article>
                <div className='image'><Image 
                    src={post.photos[0]} 
                    alt={post.subtitle}
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
        <section className="project-grid">
            {posts?.sort((a, b) => {
                return Date.parse(b.publishDate) - Date.parse(a.publishDate)
            }).map((post, idx) => <PostElement post={post} key={idx}/>)}
        </section>
    </>
}
