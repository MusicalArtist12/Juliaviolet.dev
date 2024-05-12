import '@/styles/globals.css'
import '@/styles/article.css'
import '@/styles/body.css'
import '@/styles/box-shadow.css'


import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Metadata } from 'next'
import localFont from 'next/font/local'

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
            <body>                  
                <Header/>
                <section className='body'>
                    {children}
                </section>
                <Footer/>
            </body>
        </html>
    </>
}