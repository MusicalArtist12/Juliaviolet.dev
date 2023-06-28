import "./Styles.css"

import GetLogo from "../_apps/GetLogo"

export default function ContactItem({name, handle, link, description = ""}): JSX.Element {
    let logo = GetLogo(name, "2x");

    if(description.length == 0) {
        description = name;
    }
    
    return (
        <div className="body_panel">
            <a  href={link}>
            <div className="row">
                <div className="logo">
                    {logo}    
                </div>
                <h2 className="link">{handle}</h2>
                <p>{description}</p>
            </div>
            </a>
        </div>
    );
}

