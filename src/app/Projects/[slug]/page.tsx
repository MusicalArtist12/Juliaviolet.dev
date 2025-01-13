import { getPostBySlug } from '@/lib/mdx/postAPI'
import { notFound } from 'next/navigation'
import { Metadata, ResolvingMetadata } from 'next'
import Article from '@/components/Article'
import Favicon from '@/components/Favicon'
import GetLogo from "@/components/GetLogo"
import { getDirectory } from '@/components/Fetchers'
import {BadgeElement} from "@/components/BadgeElement"
import Image from 'next/image'
import PhotoSlideshow from '@/components/PhotoSlideshow'

type Props = {
    params: { slug: string }
}

let Title: string

async function getData(slug: string) {
    try {
        return getPostBySlug(slug, ["public", "Projects"])
    } catch (err) {
        return notFound()
    } 
}

export default async function Page({ params }: Props ) {   
    const data = await getData(params.slug)
    const Directory = await getDirectory()

    Title = data.meta.title

    let associatedPeople = data.meta.people !== undefined ? 
        data.meta.people.map((person, idx) => {
            let friendEntry = Directory.Friends.find((a) => a.nickname == person || a.name == person);

            if (friendEntry !== undefined) {
                return <BadgeElement entry={friendEntry} key={idx}/>
            }
            else {
                return <div className='background' key={idx}>{person}</div>
            }
        }) 
    : null

    let githubLink = data.meta.githubLink !== undefined ? 
        <a href={data.meta.githubLink}>
            <div className='background'>
                {GetLogo("Github", "1x")} {data.meta.githubLink.replace("https://github.com/", '')}
            </div>
        </a> 
    : null

    let projectLink = data.meta.link !== undefined ? 
        <a href={data.meta.link}>
            <div className='background'>
                {GetLogo("Link", "1x")} {data.meta.link.replace("https://", '')}
            </div>
        </a> 
    : null


    let Photos = data.meta.photos.map((x) => {
        return { location: x, title: data.meta.subtitle }
    })


    return <>


        <section className='about-me-grid'>
            <PhotoSlideshow Photos={Photos}/>
            
            <header className='content'>
                <h1>{data.meta.title}</h1>
                <h2>{data.meta.subtitle}</h2>
                <h3>{data.meta.publishDate}</h3>
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
            </header>
        </section>

        <hr/>

        <section>
            <article  className='content'>
                <Article>
                    {data.content}
                </Article>
                <Favicon style={{width: "3em"}}/>
            </article>
        </section>
    </>
}