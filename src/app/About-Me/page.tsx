import { Metadata } from 'next'
import About_Me from './About_Me'

export const metadata: Metadata = {
    title: 'About Me',
}  

export default function Page() {
    return <About_Me/>
}