// juliaviolet.dev/Contact

'use-client'

import "./Styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import { faTwitter, faDiscord, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faCloud, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function ContactItem({logo, name, link, description = ""}) {
    return (
        <div className="body_panel">
            <a  href={link}>
            <div className="row">
                <div className="logo">
                        <FontAwesomeIcon icon={logo} size="2x" />
                </div>
                <h2 style={{color: "var(--footer_color)"}}>{name}</h2>
                <p>{description}</p>
            </div>
            </a>
        </div>
    );
}
 
export default function Page() {
    return (
        <>
            <head>
                <title>Contact Info | Juliaviolet.dev</title>
            </head>
            <ContactItem logo={faTwitter} name="@MusicalArtist12" link="https://twitter.com/MusicalArtist12" description="Twitter, until it dies"/>
            <ContactItem logo={faCloud} name="@Juliaviolet.dev" link="https://bsky.app/profile/juliaviolet.dev" description="Bluesky, for when Twitter dies"/>
            <ContactItem logo={faDiscord} name="@MusicalArtist12" link="" description="Discord"/>
            <ContactItem logo={faInstagram} name="@MusicalArtist.12" link="https://www.instagram.com/musicalartist.12/" description="Instagram, for the few people that want it"/>
            <ContactItem logo={faGithub} name="@MusicalArtist12" link="https://github.com/MusicalArtist12" description="Github, for the nerds"/>
            <ContactItem logo={faEnvelope} name="Julia.Violet@outlook.com" link="mailto:julia.violet@outlook.com" description="Email"/>
        </>
    )
}
