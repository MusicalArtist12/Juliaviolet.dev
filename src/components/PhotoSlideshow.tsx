import Slideshow from "./Slideshow"
export default function PhotoSlideshow({Photos} : {Photos: {location, title}[] } ): JSX.Element {
  
    return <div className='photo-slideshow-parent'>
        <Slideshow Photos={Photos}/>
    </div>
}