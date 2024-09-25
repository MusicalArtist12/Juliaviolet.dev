import Contact from './Contact/Contact'
import About_Me from './About-Me/About_Me'
import Projects from './Projects/Projects'
 
export default function Page() {
    return <>
        <About_Me/>
        <hr/>
        <h1 className='break'>Projects</h1>  
        <Projects/>
        <hr/>
        <h1 className='break'>Contact</h1>
        <Contact/>
    </>
}

