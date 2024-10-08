import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faTwitter, faDiscord, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCloud, faEnvelope, faBars, faFile, faCodeBranch, faRadio, faLink, faUser } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

const logoLookup = {
    "Twitter": faTwitter,
    "Bluesky": faCloud,
    "Discord": faDiscord,
    "Instagram": faInstagram,
    "Github": faGithub,
    "Email": faEnvelope,
    "Bars": faBars,
    "Resume": faFile,
    "Git": faCodeBranch,
    "Radio": faRadio,
    "Link": faLink,
    "User": faUser
}

export default function GetLogo(id: string, size): JSX.Element {
    return <FontAwesomeIcon icon={logoLookup[id]} size={size} className="fa-logo"/>
}