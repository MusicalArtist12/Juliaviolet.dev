import '@/styles/layout.css'
import '@/styles/mobile-layout.css'
import '@/styles/no-js-layout.css'
import '@/styles/theme.css'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'

const SourceCodePro = localFont({
    src: "../lib/fonts/SourceCodePro-Regular.otf",
    display: 'swap'
})

export const metadata: Metadata = {
    title: {
        template: '%s | Juliaviolet.dev',
        default: 'Juliaviolet.dev',
    },
    keywords: ['developer', 'Julia', 'Violet', 'Juliaviolet'],
    authors: [{name: "Julia Abdel-Monem"}],
    creator: 'Julia Abdel-Monem',
    manifest: 'https://juliaviolet.dev/manifest.json'
}

export default function RootLayout({ children } : { children: React.ReactNode }) {

    return <>
        <html lang="en" className={SourceCodePro.className}>
            <Script src="/checkJS.js"/>
            <body id="main" className={'noJS'}>                  
                <Header/>
                <hr/>
                <main>
                    {children}
                </main>
                <hr/>
                <Footer/>
            </body>
        </html>
    </>
}