import ContactItem from '@/components/ContactItem'
import contacts from '@/public/contactInfo.json' assert { type: 'json' }

export default function Contact() {
    let contactItems: JSX.Element[] = []

    for(let i = 0; i < contacts.methods.length; i++) {
        contactItems[i] = ContactItem(contacts.methods[i])
    }

    return <>  
        {contactItems}
    </>
}
