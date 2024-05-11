import { Metadata } from 'next'
import Projects from './Projects'

export const metadata: Metadata = {
    title: 'Projects',
}

export default async function Page() {
    return <Projects/>
}