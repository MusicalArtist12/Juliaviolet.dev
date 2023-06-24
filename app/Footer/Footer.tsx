import footer from "./footer.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import {faGithub} from '@fortawesome/free-brands-svg-icons'


function Badge( {location, link}) {
    let style = footer.badge;

    if(link == "https://breq.dev") {
        style = footer.breq;
    }
    
    return(
        <div className="inline">
            <a className={footer.badgeHover} href={link}><img className={style} src={location} /></a>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className={footer.bar}>
            <div className={footer.content}>
                <div className={footer.badge_collection}> 
                    <Badge location="/88x31/ava.png" link="https://avasilver.dev"/>
                    <Badge location="/88x31/breq.png" link="https://breq.dev"/>
                    <Badge location="/88x31/vivi.png" link="https://www.vhafener.com/"/>
                </div>

                <div className={footer.right}>
                    <p className={footer.p}><a className={footer.link} href="https://github.com/MusicalArtist12/Juliaviolet.dev"><FontAwesomeIcon icon={faGithub} /> MusicalArtist12/Juliaviolet.dev</a> | 2023</p> 
                </div>
            </div>
        </footer>
    );
}