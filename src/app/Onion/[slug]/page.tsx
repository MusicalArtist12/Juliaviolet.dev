import { Metadata } from 'next'
import { getOnionPhotos } from '@/components/Fetchers'
import Image from 'next/image';

type Props = {
    params: Promise<{ slug: string}>
}

export default async function Page({ params } : Props) {
    const Photos = await getOnionPhotos(); 
    
    
    return <>
        <Image alt={""} width={0} height={0} sizes={"100vw"} src={Photos[Number((await params).slug)].location}/>
    </>
}