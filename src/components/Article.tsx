import localFont from 'next/font/local'

const Futura = localFont({
    src: "../lib/fonts/Futura-Light.ttf",
    display: 'swap'
})

export default function Article({children}): JSX.Element {
    return <>
        <section className={`${Futura.className}`}>
            {children}
            <br/>
        </section>
    </>
}