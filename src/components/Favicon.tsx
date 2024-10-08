import Link from 'next/link'

export default function Favicon({style} : {style?: any}) {
    return <Link href="/" className='ghost'>
        <img 
            src="/favicon.png" 
            alt="favicon-link" 
            width={32} 
            height={32} 
            className='pixel-art favicon' 
            style={style}
        />
    </Link>
}