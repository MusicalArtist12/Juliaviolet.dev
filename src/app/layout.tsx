import '@/styles/layout.css'
import '@/styles/mobile-layout.css'
import '@/styles/no-js-layout.css'
import '@/styles/theme.css'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import { useSearchParams } from 'next/navigation'

const SourceCodePro = localFont({
    src: "../lib/fonts/SourceCodePro-Regular.otf",
    display: 'swap'
})

const Futura = localFont({
    src: "../lib/fonts/Futura-Light.ttf",
    display: 'swap'
})

export const metadata: Metadata = {
    title: {
        template: '%s | Juliaviolet.dev',
        default: 'Juliaviolet.dev',
    },
}

export default function RootLayout({ children } : { children: React.ReactNode }) {

    return <>
        <html lang="en" className={SourceCodePro.className}>
            <Script src="checkJS.js"/>
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