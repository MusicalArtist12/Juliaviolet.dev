// juliaviolet.dev/Contact
import ContactItem from '@/components/ContactItem'
import contacts from '@/public/contactInfo.json' assert { type: 'json' }

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact',
}

export default function Page() {
    let contactItems: JSX.Element[] = [];

    for(let i = 0; i < contacts.methods.length; i++) {
        contactItems[i] = ContactItem(contacts.methods[i]);
    }

    return <>  
        {contactItems}
    </>
}
