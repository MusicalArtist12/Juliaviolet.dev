// juliaviolet.dev/
import '@/styles/index.css'

import Contact from './Contact/page';
import About_Me from './About-Me/page';
import Projects from './Projects/page';
 
export default function Page() {
    return <>
        <About_Me/>
        <h1 className='break'>Projects</h1>  
        <Projects/>
        <h1 className='break'>Contact</h1>
        <Contact/>
    </>
}

