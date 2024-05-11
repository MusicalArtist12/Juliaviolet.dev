import { getAllPostsMeta } from '@/lib/mdx/postAPI'
import Link from 'next/link'
import Image from 'next/image'
import "@/styles/project-styles.css"

function PostElement({post}): JSX.Element {
    return <>
        <Link href={`Projects/${post.slug}`} className="body-panel link">
            <Image src={post.photo} className='image' alt={post.title} width={800} height={800}/>
            <div className='post-title'>
                <h1>{post.title}</h1>
                <h3>{post.publishDate}</h3>
            </div>
        </Link>
    </>
}

export default async function Projects() {
    const posts = (await getAllPostsMeta(["public", "Projects"]))

    return <>
        <div className='body-grid'>
            {posts?.map((post, idx) => <PostElement post={post} key={idx}/>)}
        </div>
    </>
}
