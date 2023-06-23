import flexbox from "../styles/flexbox.module.css"
import footer from "../styles/footer.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import {faGithub} from '@fortawesome/free-brands-svg-icons'


function Badge( {location, link}) {
    return(
        <div className="inline">
            <a className={footer.badgeHover} href={link}><img className={footer.badge} src={location} /></a>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className={footer.bar}>
            <div className={footer.content}>
                <div>
                    <Badge location="/88x31/ava.png" link="https://avasilver.dev"/>
                    <Badge location="/88x31/breq.png" link="https://breq.dev"/>
                    <Badge location="/88x31/vivi.png" link="https://www.vhafener.com/"/>
                </div>
                
                <div className={footer.right}>
                    <p className={footer.p}><a className={footer.link} href="https://github.com/MusicalArtist12/MusicalArtist12.github.io"><FontAwesomeIcon icon={faGithub} /> juliaviolet.dev</a> | 2023</p> 
                </div>
            </div>
        </footer>
    );
}