import { Metadata } from 'next'
import Onion from './Onion'

export const metadata: Metadata = {
    title: 'Onion',
}

export default function Page() {
    return <Onion/>
}
