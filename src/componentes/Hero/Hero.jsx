import './Hero.css';
import{Link} from "react-router-dom";
//import banners_sillon from'../../assets/img/banners-sillon.png';
function Hero(){
    return (
      <div className="contenedor-hero flex justify-center items-center h-screen bg-cover bg-center ">
        <div className="sm:max-w-lg text-center text-gray-900">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Summer styles are finally here
          </h1>
          <p className="mt-4 text-xl">
            This year, our new summer collection will shelter you from the harsh
            elements of a world that doesn't care if you live or die.
          </p>
          <Link to="/furniture/living-room/sofa-and-sectional-collections" className="inline-block mt-6 rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium hover:bg-gray-700  text-white">
      Shop Collection
    </Link>
        </div>
      </div>
    );
}

export default Hero; 