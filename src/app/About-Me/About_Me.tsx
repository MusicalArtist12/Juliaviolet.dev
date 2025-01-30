
import PhotoSlideshow from '@/components/PhotoSlideshow'
import Article from '@/components/Article'
import { getPhotos } from '@/components/Fetchers'
import Favicon from '@/components/Favicon';
import Link from 'next/link';


export default async function About_Me() { 
    const Photos = await getPhotos();
    return <> 
        <section className='about-me-grid'>

            <PhotoSlideshow Photos={Photos}/>
            <header className='content'>
                <h1>Welcome!</h1>
                <h2>My name is Julia</h2>
            </header>
        </section>

        <section> 
            <article>   
                <Article>
                    <p> 
                        I&apos;m a sophomore at the <a href="https://www.uidaho.edu/">University of Idaho</a>, pursuing a bachelors degree in computer science with a minor in music.
                        I like to learn new skills and concepts to develop clever solutions to solve difficult problems. 
                        I&apos;m interested in Game Development, 3D graphics (most recently OpenGL), Web Development, and low-level programming.
                    </p>
                    <p>
                        I have a love for playing Trumpet and making music, mostly in contemporary and jazz settings. 
                        I also love talking about and analyzing music used in movies, musicals, and video games. 
                        Music and I have a storied history; its an integral part of my identity.
                        Some of my other smaller interests include Drawing/Watercolor painting and graphic design.
                    </p>
                    <p>
                        I've documented a few of the projects I've worked on <Link href={'/Projects'}>here</Link>, and you can find my contact info <Link href={'/Contact'}>here</Link>.
                    </p>
                    <Favicon style={{width: "3em"}}/>
                </Article>
            </article>
        </section>
    </>
}