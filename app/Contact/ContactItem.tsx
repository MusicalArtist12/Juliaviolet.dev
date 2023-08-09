import "./Styles.css"

import GetLogo from "../_apps/GetLogo"

export default function ContactItem({name, handle, link, description = "", logo}): JSX.Element {
    let Logo = GetLogo(logo, "2x");

    if(description.length == 0) {
        description = name;
    }
    
    return (
        <div className="body_panel">
            <a className="remove_global" href={link}>
                <div className="row">
                    <div className="logo">
                        {Logo}    
                    </div>
                    <h2 className="a">{handle}</h2>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    );
}

