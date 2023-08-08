import './globals.css'

import Header from './Header/Header';
import Footer from './Footer/Footer'

import Head from 'next/head';

export default function RootLayout({ children } : { children: React.ReactNode }) {
    // root layout, must have html and body tag
    return (
        <html lang="en">
            <head>
                <meta name="google-site-verification" content="r5PlHr4WDYzmUgIpNaonYMa6UIbjSNKWuVMGpRkkKVU" />
                <title>JuliaViolet.dev</title>
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