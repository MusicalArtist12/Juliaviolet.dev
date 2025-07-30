
import GetLogo from "@/components/GetLogo"
import Link from 'next/link'
import { getContacts } from '@/components/Fetchers'
import "./contact.css"

import type { JSX } from "react";

function ContactItem({method}): JSX.Element {
    let Logo = GetLogo(method.logo, "2x")

    
    return <>
        <Link href={method.link}>
            <article className="contact-grid">
                {Logo}
                <header>
                    <h1>{method.name}</h1>
                    <h2>{method.handle}</h2>
                </header>
            </article>   
        </Link>
    </>
}


export default async function Contact() {
    const contacts = await getContacts();

    let contactItems: JSX.Element[] = contacts.contactInfo.map((method, idx) => 
        <ContactItem method={method} key={idx}/>
    )

    return <section className="column">  
        {contactItems}
    </section>
}
