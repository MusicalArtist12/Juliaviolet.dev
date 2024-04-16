import '@/styles/globals.css'

import Script from 'next/script'
import Header from './Header/Header'
import Footer from './Footer/Footer'

import { Metadata } from 'next'
import localFont from 'next/font/local'
 
export const metadata: Metadata = {
    title: {
        template: '%s | Juliaviolet.dev',
        default: 'Juliaviolet.dev',
    },
}

const SourceCodePro = localFont({
    src: "../lib/fonts/SourceCodePro-Regular.otf",
    display: 'swap'
})

const Futura = localFont({
    src: "../lib/fonts/Futura-Light.ttf",
    display: 'swap'
})

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
        <html lang="en" className={SourceCodePro.className}>
            <head>
                <meta name="google-site-verification" content="r5PlHr4WDYzmUgIpNaonYMa6UIbjSNKWuVMGpRkkKVU" />
            </head>
            <body>  
                <Script src="oneko.js/oneko-webring.js" data-cat="oneko.js/oneko.gif"/>

                <Header/>
                <section className='body'>
                    {children}
                </section>
                <Footer/>
            </body>
        </html>
    );
}