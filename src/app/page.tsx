// juliaviolet.dev/
import Link from 'next/link';

import { Metadata } from 'next'
 
export const metadata: Metadata = {}

export default function Page() {
    return (
        <>
            <div className="body-panel">
                <h1>Hello World! and Hello Next.js!</h1>
                <h2>This page is not finished</h2>
                <p>I guess i should also greet react-spring...</p>
                <p>You have reached my new webpage! More is to come in the future, hold on tight.</p>
                <p>June 18th Update: <Link href="/About-Me">/About Me</Link> has content on it!</p>
                <p>August 13th update: We got a loading screen, <Link href="/Projects">/Projects</Link>, <code> &#123;harder, better, faster, stronger&#125;</code> CSS, oh and a <Link href="/Resume.pdf">resume</Link> if you care.</p>
            </div>
        </>
    )
}

