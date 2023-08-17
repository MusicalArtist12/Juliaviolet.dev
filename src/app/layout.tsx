import '@/styles/globals.css'

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
    // root layout, must have html and body tag

    return (
        <html lang="en" className={SourceCodePro.className}>
            <head>
                <script src="http://localhost:8097"></script>
                <meta name="google-site-verification" content="r5PlHr4WDYzmUgIpNaonYMa6UIbjSNKWuVMGpRkkKVU" />
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