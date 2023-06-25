import '../styles/globals.css'

import Header from './Header/Header';
import Footer from './Footer/Footer'


export default function RootLayout({ 
    children
} : { 
    children: React.ReactNode 
}) {
    // root layout, must have html and body tag
    return (
        <html lang="en">
            <head>
                <meta name="google-site-verification" content="......." />
            </head>
            
            <body>  
                <Header/>
                
                <section className='body'>
                    {children}
                </section>

                <Footer/>
            </body>
        </html>
    );
}