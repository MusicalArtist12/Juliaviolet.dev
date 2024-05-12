import contacts from '@/public/contactInfo.json' assert { type: 'json' }
import contact from "@/styles/contact.module.css"
import GetLogo from "@/components/GetLogo"
import Link from 'next/link'

function ContactItem({method}): JSX.Element {
    let Logo = GetLogo(method.logo, "2x")

    if(method.description.length == 0) {
        method.description = method.name
    }
    
    return <>
        <section className="box-shadow button">
            <Link href={method.link}>
                <div className={contact.row}>
                    <div className={contact.logo}>
                        <h4>{Logo}</h4> 
                    </div>
                    <h2>{method.handle}</h2>
                    <h4>
                        {method.description}
                    </h4>
                </div>
            </Link>
        </section>
    </>
}


export default function Contact() {
    let contactItems: JSX.Element[] = contacts.methods.map((method, idx) => 
        <ContactItem method={method}/>
    )

    return <>  
        {contactItems}
    </>
}
