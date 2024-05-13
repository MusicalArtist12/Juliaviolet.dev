import { getAllPostsMeta } from '@/lib/mdx/postAPI'
import Link from 'next/link'
import Image from 'next/image'
import '@/styles/projects.css'

function PostElement({post}): JSX.Element {
    return <>
        <Link href={`Projects/${post.slug}`}>
            <section>
                <Image 
                    src={post.photo} 
                    alt={post.title} 
                    width={800} 
                    height={800}
                    style={{
                        backgroundColor: "black"
                    }}
                    className='image'
                />
                <div>
                    <h1>{post.title}</h1>
                    <h3>{post.publishDate}</h3>
                </div>
            </section>
        </Link>
    </>
}

export default async function Projects() {
    const posts = (await getAllPostsMeta(["public", "Projects"]))

    return <>
        <section style={{flexDirection: "row", justifyContent: "center"}}>
            {posts?.map((post, idx) => <PostElement post={post} key={idx}/>)}
        </section>
    </>
}
