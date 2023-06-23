// juliaviolet.dev/Contact
import flexbox from "../../styles/flexbox.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import { faTwitter, faDiscord, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faCloud, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function ContactItem({logo, name, link, description = ""}) {
    return (
        <div className="body_panel">
            <div className={flexbox.flex_row}>
                <div className={flexbox.logo}>
                        <FontAwesomeIcon icon={logo} size="2x" />
                </div>
                <div>
                    <a className={flexbox.username_link} href={link}><p>{name}</p></a>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <section>
            <div className={flexbox.flex_column}>
                <ContactItem logo={faTwitter} name="@MusicalArtist12" link="https://twitter.com/MusicalArtist12" description="Twitter, until it dies"/>
                <ContactItem logo={faCloud} name="@Juliaviolet.dev" link="https://bsky.app/profile/juliaviolet.dev" description="Bluesky, for when Twitter dies"/>
                <ContactItem logo={faDiscord} name="@MusicalArtist12" link="" description="Discord"/>
                <ContactItem logo={faInstagram} name="@MusicalArtist.12" link="https://www.instagram.com/musicalartist.12/" description="Instagram, for the few people that want it"/>
                <ContactItem logo={faGithub} name="@MusicalArtist12" link="https://github.com/MusicalArtist12" description="Github, for the nerds"/>
                <ContactItem logo={faEnvelope} name="Julia.Violet@outlook.com" link="mailto:julia.violet@outlook.com" description="Email"/>

            </div>
        </section>
    )
}
