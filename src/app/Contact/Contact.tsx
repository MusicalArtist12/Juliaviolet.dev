import ContactItem from '@/components/ContactItem'
import contacts from '@/public/contactInfo.json' assert { type: 'json' }

export default function Contact() {
    let contactItems: JSX.Element[] = contacts.methods.map((method, idx) => 
        <ContactItem 
            name={method.name} 
            handle={method.handle} 
            link={method.link} 
            logo={method.logo} 
            description={method.description} 
            key={idx}
        />
    )

    return <>  
        {contactItems}
    </>
}
