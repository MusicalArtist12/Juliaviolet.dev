// juliaviolet.dev/About-Me

import Head from 'next/head';
import PhotoSlideshow from '@/components/PhotoSlideshow';

import Photos from "@/public/juliaPhotos.json" assert { type: 'json' }


export default function Page() { 
    return (
        <>
            <Head>
                <title>About Me | Juliaviolet.dev</title>
            </Head>
            <div className="body_panel" style={{padding: "30px"}}>
                <div className="text">
                    <h1>Hi! I'm Julia</h1>
                    <h2 className="body_paragraph" style={{paddingTop: "0px"}}>I use She/Her pronouns</h2>
                    <PhotoSlideshow Photos={Photos} />
                    <p className="body_paragraph" style={{paddingTop: "10px"}}> 
                        I'm a sophomore at the <a className="link" href="https://www.uidaho.edu/">University of Idaho</a>, pursuing a bachelors degree in computer science with a minor in music.
                        I'm interested in low-level programming, Robotics, and 3D graphics (most recently OpenGL).
                        Though as i'm writing this, web development might find a home in that list. 
                        I like to learn new skills and concepts to develop clever solutions to solve difficult problems. 
                    </p>
                    <p className="body_paragraph">
                        I have a love for playing Trumpet and making music, mostly in contemporary and jazz settings. 
                        I also love talking about and analyzing music used in movies, musicals, and video games. 
                        Music and I have a storied history; its an integral part of my identity.
                    </p>
                    <p className="body_paragraph">
                        A long term goal of mine is to be able to express both of my interests together, combining music with computer science.
                        Some of my other smaller interests include Drawing/Watercolor painting and graphic design.
                    </p>
                    <p className="body_paragraph">
                        I'm a trans girl, and i'm still learning who I am. I chose the domain <a className="link" href="https://juliaviolet.dev">JuliaViolet.dev</a> since it's
                        a concatenation of my first and middle name.
                    </p>
                </div>
            </div>
        </>
    )
}
