import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import { faTwitter, faDiscord, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faCloud, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'

const logoLookup = {
    "Twitter": faTwitter,
    "Bluesky": faCloud,
    "Discord": faDiscord,
    "Instagram": faInstagram,
    "Github": faGithub,
    "Email": faEnvelope,
    "Bars": faBars
}

export default function GetLogo(id: string, size): JSX.Element {
    return(<FontAwesomeIcon icon={logoLookup[id]} size={size} />);
}