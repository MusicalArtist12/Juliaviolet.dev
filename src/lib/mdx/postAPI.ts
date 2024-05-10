// https://github.com/HamedBahram/nextjs-13/blob/next-mdx-remote/lib/mdx/index.js
// Adapted to TS, generalized to any filepath

import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

interface metaData {
    title: string;
    subtitle: string;
    photo: string;
    publishDate: string;
    slug: string;
}

interface PostInfo {
    meta: any // metaData
    content: JSX.Element
}

export async function getPostBySlug(slug: string, Filepath: string[]) {
    const rootDirectory = path.join(process.cwd(), ...Filepath)

    const realSlug: string = slug.replace(/\.md$/, '')
    const filePath: string = path.join(rootDirectory, `${realSlug}.md`)

    let fileContent: string;

    fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

    const { frontmatter, content } = await compileMDX({
        source: fileContent,
        options: { parseFrontmatter: true }
    })

    const post: PostInfo = {
        meta: { ...frontmatter, slug: realSlug },
        content: content
    }

    return post
}

export const getAllPostsMeta = async (Filepath: string[]) => {
    const rootDirectory = path.join(process.cwd(), ...Filepath)
    
    const fileArray = fs.readdirSync(rootDirectory)

    let postArray: metaData[] = []

    for (const file of fileArray) {
        const { meta } = await getPostBySlug(file, Filepath)
        postArray.push(meta)
    }

    return postArray
}