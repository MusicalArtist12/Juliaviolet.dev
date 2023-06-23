import '../styles/globals.css'
import Navbar from './navbar';
import Footer from './footer'


export default function RootLayout({ 
    children 
} : { 
    children: React.ReactNode 
}) {
    // root layout, must have html and body tag
    return (
        <html lang="en">
            <body>  
                <div>
                    <Navbar/>
                </div>
                <div className="body">
                    {children}
                </div>
                <div>
                    <Footer/>
                </div>
                

                
            </body>
        </html>
    );
}