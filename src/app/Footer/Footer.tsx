import GetLogo from "@/components/GetLogo"
import Badges from "@/components/Badge"

export default function Footer({ friends }) {
    return (
        <footer>
            
            <div className="content">
                <Badges friends={friends} />
                
                <div>
                    <p><a href="https://github.com/MusicalArtist12/Juliaviolet.dev">{GetLogo("Github", "1x")} MusicalArtist12/Juliaviolet.dev</a> | 2023</p> 
                    <p>Made with Next.js, React.js, React-Spring, and &lt;3 </p>
                </div>
            </div>
        </footer>
    );
}