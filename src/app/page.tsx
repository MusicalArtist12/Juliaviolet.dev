// juliaviolet.dev/
import Head from 'next/head';

import { Metadata } from 'next'
 
export const metadata: Metadata = {}

export default function Page() {
    return (
        <>
            <div className="body_panel">
                <h1>Hello World! and Hello Next.js!</h1>
                <h2>This page is not finished</h2>
                <p>I guess i should also greet react-spring...</p>
                <p>You have reached my new webpage! More is to come in the future, hold on tight.</p>
                <p>June 18th Update: <a className="link" href="/About-Me">/About Me</a> has content on it!</p>
            </div>
        </>
    )
}

