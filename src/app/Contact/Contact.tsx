
import GetLogo from "@/components/GetLogo"
import Link from 'next/link'
import { getContacts } from '@/components/Fetchers'

function ContactItem({method}): JSX.Element {
    let Logo = GetLogo(method.logo, "2x")

    if(method.description.length == 0) {
        method.description = method.name
    }
    
    return <>
        <Link href={method.link} className="box-shadow" style={{display: "flex", flexDirection: "row", columnGap: "0.5em", alignItems: "center"}}>

            <h1>{Logo}</h1> 
            <div>
                <h1>{method.handle}</h1>
                <h2>{method.description}</h2>
            </div>
                
        </Link>
    </>
}


export default async function Contact() {
    const contacts = await getContacts();

    let contactItems: JSX.Element[] = contacts.contactInfo.map((method, idx) => 
        <ContactItem method={method} key={idx}/>
    )

    return <>  
        {contactItems}
    </>
}
