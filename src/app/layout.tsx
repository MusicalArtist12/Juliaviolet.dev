import '@/styles/globals.css'

import Header from './Header/Header'
import Footer from './Footer/Footer'

import Script from 'next/script'

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: {
    template: '%s | Juliaviolet.dev',
    default: 'Juliaviolet.dev',
  },
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
    // root layout, must have html and body tag
    return (
        <html lang="en">
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