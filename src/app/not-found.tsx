import Link from 'next/link';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '404 Not Found',
}

export default async function NotFound() {
    return(
        <>
            <div style={{margin: "auto", textAlign: "center"}}>
                <h1>404: This page does not exist</h1>
                <h2><Link href='/' style={{color: "var(--header_color)"}}>Go Home?</Link></h2>
            </div> 
        </>   
    )
}