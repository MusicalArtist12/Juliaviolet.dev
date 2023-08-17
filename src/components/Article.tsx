import localFont from 'next/font/local'

const Futura = localFont({
    src: "../lib/fonts/Futura-Light.ttf",
    display: 'swap'
})

export default function Article({children}) {
    return(
        <div className={`${Futura.className} article`}>
            {children}
            <br/>
        </div>
    )
}