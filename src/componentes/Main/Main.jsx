import Banner from '../Banner/Banner';
import CarouselSillon from '../Carousel/CarouselSillon';
import Hero from '../Hero/Hero';
import HeroVideo from '../Hero/HeroVideo';
import Subtitulo from '../Subtitulo/Subtitulo';
import './Main.css';
function Main(){
    return(
        <div className="contenedor-main">
            <Hero/>
            <Subtitulo texto = "Quality that lasts + delivery as fast as 7 days"/>
            <CarouselSillon/>
            <Subtitulo texto = "Our best deals are here"/>
            <CarouselSillon/>
            <Banner/>
            <HeroVideo/>
            <Subtitulo/>
        </div>
    )
}
export default Main;