import contact from "@/styles/contact.module.css"
import GetLogo from "@/components/GetLogo"

export default function ContactItem({name, handle, link, description = "", logo}): JSX.Element {
    let Logo = GetLogo(logo, "2x");

    if(description.length == 0) {
        description = name;
    }
    
    return (
        <div className="body_panel_link" style={{padding: "0.75em", width: "100%"}}>
            <a className="remove_global" href={link}>
                <div className={contact.row} >
                    <div className={contact.logo}>
                        {Logo}    
                    </div>
                    <h2 className="a" style={{
                        paddingTop: "0px",
                        paddingBottom: "0px",
                    }}
                    >{handle}</h2>
                    <p style={{
                        paddingTop: "0px",
                        paddingBottom: "0px"}}
                    >
                        {description}
                    </p>
                </div>
            </a>
        </div>
    );
}
