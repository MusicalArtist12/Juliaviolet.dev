import Link from 'next/link'
import Image from 'next/image'
import metaData from './metadata'
import './projects.css'

import fs from 'fs'
import path from 'path'

function PostElement({post} : {post: metaData}): JSX.Element {
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
        <section className="project-grid">
            {posts?.sort((a, b) => {
                return Date.parse(b.publishDate) - Date.parse(a.publishDate)
            }).map((post, idx) => <PostElement post={post} key={idx}/>)}
        </section>
    </>
}
