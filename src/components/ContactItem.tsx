import contact from "@/styles/contact.module.css"
import GetLogo from "@/components/GetLogo"

import Link from 'next/link';

export default function ContactItem({name, handle, link, description = "", logo}): JSX.Element {
    let Logo = GetLogo(logo, "2x");

    if(description.length == 0) {
        description = name;
    }
    
    return <>
        <Link href={link} className="body-panel link" key={link}>
            <div className={contact.row}>
                <div className={contact.logo}>
                    <h4>{Logo}</h4> 
                </div>
                <h2>{handle}</h2>
                <h4>
                    {description}
                </h4>
            </div>
        </Link>
    </>
}
