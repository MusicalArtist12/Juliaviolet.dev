// juliaviolet.dev/Contact
import "./Styles.css"

import Head from 'next/head';
import ContactItem from './ContactItem'

import contacts from '../../public/contactInfo.json' assert { type: 'json' }

export default function Page() {
    let contactItems: JSX.Element[] = [];

    for(let i = 0; i < contacts.methods.length; i++) {
        contactItems[i] = ContactItem(contacts.methods[i]);
    }

    return (
        <>
            <Head>
                <title>Contact Info | Juliaviolet.dev</title>
            </Head>
            
            {contactItems}
       </>
    )
}
