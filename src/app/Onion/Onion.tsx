import { getOnionPhotos } from '@/components/Fetchers'
import './Onion.css'
import Image from 'next/image';

export default async function Onion() {
    const Photos = await getOnionPhotos(); 

    return <>
        <section className="onion-grid">
            {
                Photos.map((x, idx) => {
                    return <div key={idx}><img alt={""} src={x.location}/></div>
                })
            }
        </section>
    </>
}