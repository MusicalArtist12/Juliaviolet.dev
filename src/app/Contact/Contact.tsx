
import GetLogo from "@/components/GetLogo"
import Link from 'next/link'
import { getContacts } from '@/components/Fetchers'
import "./contact.css"

function ContactItem({method}): JSX.Element {
    let Logo = GetLogo(method.logo, "2x")

    if(method.description.length == 0) {
        method.description = method.name
    }
    
    return <>
        <Link href={method.link}>
            <article className="contact-grid">
                {Logo}
                <header>
                    <h1>{method.handle}</h1>
                    <h2>{method.description}</h2>
                </header>
            </article>   
        </Link>
    </>
}


export default async function Contact() {
    const contacts = await getContacts();

    let contactItems: JSX.Element[] = contacts.map((method, idx) => 
        <ContactItem method={method} key={idx}/>
    )

    return <section className="column">  
        {contactItems}
    </section>
}
