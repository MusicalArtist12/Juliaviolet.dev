import localFont from 'next/font/local'
import GetLogo from "@/components/GetLogo"
import {BadgeElement} from "@/components/BadgeElement"
import { getDirectory } from '@/components/Fetchers'
import PhotoSlideshow from '@/components/PhotoSlideshow'
import Favicon from '@/components/Favicon'
import metaData from '@/components/metadata'
import Link from 'next/link'
import Image from 'next/image'
import { MDXContent } from 'mdx/types'

import type { JSX } from "react";

const Futura = localFont({
    src: "../lib/fonts/Futura-Light.ttf",
    display: 'swap'
})

export default async function Article({slug, Post, frontmatter, noRaw}: {slug: string, Post: MDXContent, frontmatter: metaData, noRaw?: boolean | undefined}): Promise<JSX.Element> {
    const Directory = await getDirectory()

    let associatedPeople = frontmatter.header?.people ? 
        frontmatter.header.people.map((person, idx) => {
            let friendEntry = Directory.Friends.find((a) => a.nickname == person || a.name == person);

            if (friendEntry !== undefined) {
                return <BadgeElement entry={friendEntry} key={idx}/>
            }
            else {
                return <div className='background' key={idx}>{person}</div>
            }
        }) 
    : null

    let githubLink = frontmatter.header?.githubLink !== undefined ? 
        <a href={frontmatter.header.githubLink}>
            <div className='background'>
                {GetLogo("Github", "1x")} {frontmatter.header.githubLink.replace("https://github.com/", '')}
            </div>
        </a> 
    : null

    let projectLink = frontmatter.header?.link !== undefined ? 
        <a href={frontmatter.header.link}>
            <div className='background'>
                {GetLogo("Link", "1x")} {frontmatter.header.link.replace("https://", '')}
            </div>
        </a> 
    : null


    let Photos = frontmatter.header ? 
        frontmatter.header.photos ? 
            frontmatter.header.photos.map((x) => {
                return { 
                    location: x, 
                    title: frontmatter.header ? frontmatter.header.subtitle : "" 
                }
            }) 
        : null
    : null;

 
    return <>
        {frontmatter.header ? 
            <section className='about-me-grid'>
                    {Photos != null ?
                    <PhotoSlideshow Photos={Photos}/>
                : null}
                
                {frontmatter.header.title || frontmatter.header.subtitle || frontmatter.header.publishDate || frontmatter.header.githubLink || frontmatter.header.people ?
                    <header className='content'>
                        <h1>{frontmatter.header.title}</h1>
                        <h2>{frontmatter.header.subtitle}</h2>
                        <h3>{frontmatter.header.publishDate}</h3>
                        {githubLink != null || projectLink != null ? 
                            <div className='list'>
                                {githubLink}
                                {projectLink}
                            </div> 
                            : null}
                        {associatedPeople != null ? 
                            <div className='list'>
                                {associatedPeople}
                            </div>
                        : null}

                        {noRaw == false || noRaw === undefined ?
                            <div style={{display: "flex", justifyContent: "right"}}>
                                <a href={slug + '.md'}><div>Raw</div></a>
                            </div>
                        : null}
                    </header>
                : null}
            </section>
        : null}
        <hr/>
        {Post({}).props.children ?
            <section>
                <article className='content'>
                    <section className={`${Futura.className}`}>
                        <Post/>
                    </section>
                    <Favicon style={{width: "3em"}}/>
                </article>
            </section>        
        : null}

        {frontmatter.galleryImages ? 
            <section className="grid">
            {
                frontmatter.galleryImages.map((x, idx) => {
                    return <Link key={idx} href={`Images${x}`}><Image width={0} height={0} sizes={"100vw, 12em, 6em"} src={x} alt={""}/></Link>
                })
            }
            </section>
        : null}
    </>
}