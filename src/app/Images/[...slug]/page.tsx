import { Metadata } from 'next'
import Image from 'next/image';

type Props = {
    params: Promise<{ slug: string[] }>
}

export default async function Page({ params } : Props) {
    let mystring = ""

    let array = (await params).slug;

    array.forEach(element => {
        mystring += '/' + element
    });

    return <>
        <Image alt={""} width={0} height={0} sizes={"100vw"} src={mystring}/>
    </>
}