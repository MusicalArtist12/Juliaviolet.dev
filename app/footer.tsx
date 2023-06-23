import flexbox from "../styles/flexbox.module.css"

function Badge( {location, link}) {
    return(
        <a href={link}><img className="badge" src={location} /></a>
    );
}

export default function Footer() {
    return (
        /*<footer>
            <div className={flexbox.flex_row_inline_left}>
                <div>
                    <Badge location="/88x31/ava.png" link="https://avasilver.dev"/>
                    <Badge location="/88x31/breq.png" link="https://breq.dev"/>
                </div>

            </div>
            <div className={flexbox.flex_row_inline_right}>
                <div>
                    <p>Juliaviolet.dev</p>
                </div>

            </div>

        </footer>
        */

        <footer>
            <div className="center">
                <div className="inline">
                    <Badge location="/88x31/ava.png" link="https://avasilver.dev"/>
                </div>
                <div className="inline">
                    <Badge location="/88x31/breq.png" link="https://breq.dev"/>
                </div>
            </div>




        </footer>
    );
}