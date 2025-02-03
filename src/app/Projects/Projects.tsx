import Link from 'next/link'
import Image from 'next/image'
import metaData from '../../components/metadata'
import './projects.css'

import fs from 'fs'
import path from 'path'

function PostElement({post} : {post: metaData}): JSX.Element {
    return <>
        {post.header ?
        <Link href={`Projects/${post.slug}`}>
            <article>
                <div className='image'>
                    {post.header.photos ? 
                    <Image 
                        src={post.header.photos[0]} 
                        alt={post.header.subtitle || ""}
                        width={0} 
                        height={0}
                        sizes={'100vw, 12em'}
                    />
                    : null}
                </div>
                <header>
                    <h1>{post.header.title}</h1>
                    <h3>{post.header.publishDate}</h3>
                </header>
            </article>
        </Link>
        : null}
    </>
}

export const getAllPostMetadata = async () => {
    const rootDirectory = path.join(process.cwd(), "public/Projects")
    
    const fileArray = fs.readdirSync(rootDirectory)

    let postArray: metaData[] = []

    for (const slug of fileArray) {
        const { frontmatter } = await import(`@/public/Projects/${slug}`)
        // console.log(frontmatter )

        postArray.push({slug: slug.replace('.md', ""), ...frontmatter})
    }

    return postArray
}

export default async function Projects() {
    const posts: metaData[] = await getAllPostMetadata();
  
    return <>
        <section className="grid">
            {posts?.sort((a, b) => {
                return b.header?.publishDate && a.header?.publishDate ? Date.parse(b.header.publishDate) - Date.parse(a.header.publishDate) : 0
            }).map((post, idx) => <PostElement post={post} key={idx}/>)}
        </section>
    </>
}
