
import { getOnionPhotos } from '@/components/Fetchers'
import Image from 'next/image';
import Link from 'next/link';


export default async function Onion() {
    const Photos = await getOnionPhotos(); 

    return <>
        <section className="grid">
            {
                Photos.map((x, idx) => {
                    return <Link key={idx} href={`Onion/${idx.toString()}`}><Image width={0} height={0} sizes={"100vw, 12em, 6em"} src={x.location} alt={""}/></Link>
                })
            }
        </section>
    </>
}