import '../styles/main.css'

export default function RootLayout( { children } : { children: React.ReactNode }) {
    // root layout, must have html and body tag
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}