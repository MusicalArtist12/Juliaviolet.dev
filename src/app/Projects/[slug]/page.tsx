import { Metadata } from 'next'
import Article from '@/components/Article'
import Favicon from '@/components/Favicon'
import GetLogo from "@/components/GetLogo"
import { getDirectory } from '@/components/Fetchers'
import {BadgeElement} from "@/components/BadgeElement"
import Image from 'next/image'
import PhotoSlideshow from '@/components/PhotoSlideshow'
import metaData from '../metadata'


type Props = {
    params: Promise<{ slug: string }>
}
 
// or Dynamic metadata
export async function generateMetadata({ params }) {
    const slug = (await params).slug
    const data = await import(`@/public/Projects/${slug}.md`)
    
    return {
      title: data.frontmatter.title,
    }
  }

export default async function Page({ params } : Props ) {   
    const Directory = await getDirectory()
    const slug = (await params).slug
 
    const data = await import(`@/public/Projects/${slug}.md`)
    
    const frontmatter: metaData = data.frontmatter;
    const Post = data.default;
 
    let associatedPeople = frontmatter.people !== undefined ? 
        frontmatter.people.map((person, idx) => {
            let friendEntry = Directory.Friends.find((a) => a.nickname == person || a.name == person);

            if (friendEntry !== undefined) {
                return <BadgeElement entry={friendEntry} key={idx}/>
            }
            else {
                return <div className='background' key={idx}>{person}</div>
            }
        }) 
    : null

    let githubLink = frontmatter.githubLink !== undefined ? 
        <a href={frontmatter.githubLink}>
            <div className='background'>
                {GetLogo("Github", "1x")} {frontmatter.githubLink.replace("https://github.com/", '')}
            </div>
        </a> 
    : null

    let projectLink = frontmatter.link !== undefined ? 
        <a href={frontmatter.link}>
            <div className='background'>
                {GetLogo("Link", "1x")} {frontmatter.link.replace("https://", '')}
            </div>
        </a> 
    : null


    let Photos = frontmatter.photos.map((x) => {
        return { location: x, title: frontmatter.subtitle }
    })


    return <>
        <section className='about-me-grid'>
            <PhotoSlideshow Photos={Photos}/>
            
            <header className='content'>
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.subtitle}</h2>
                <h3>{frontmatter.publishDate}</h3>
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

                <div style={{display: "flex", justifyContent: "right"}}>
                    <a href={slug + '.md'}><div>Raw</div></a>
                </div>

            </header>
        </section>

        <hr/>

        <section>
            <article  className='content'>
                
                <Article>
                    <Post/>
                </Article>
                <Favicon style={{width: "3em"}}/>
            </article>
        </section>
    </>
    

}