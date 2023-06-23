import '../styles/globals.css'
import flexbox from "../styles/flexbox.module.css"

import Header from './header';
import Footer from './footer'
import Head from 'next/head'

export default function RootLayout({ 
    children
} : { 
    children: React.ReactNode 
}) {
    // root layout, must have html and body tag
    return (
        <html lang="en">
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