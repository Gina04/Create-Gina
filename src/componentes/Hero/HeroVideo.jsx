//import { useRef } from 'react';
import{Link} from "react-router-dom";
function HeroVideo(){
    //const videoRef = useRef(null);

  /*const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };*/
    return (
      <div className="contenedor-hero flex justify-center items-center h-screen bg-cover bg-center relative text-white">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://s7d5.scene7.com/is/content/Crate/Video/cb_dHP_20240305_Outdoor.mp4"
            type="video/mp4"
          />
        
        </video>
        <div className=" text-center text-withe-900 relative z-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-left">
            built for summer living (it’s coming, promise!)
          </h1>
          <Link
            to="/furniture/living-room/sofa-and-sectional-collections"
            className="inline-block mt-6 rounded-md border border-white bg-white px-8 py-3 font-medium hover:bg-gray-200 text-gray-900"
          >
            Shop Collection
          </Link>
          <Link
            to="/furniture/living-room/sofa-and-sectional-collections"
            className="inline-block mt-2 rounded-md border border-white bg-transparent px-8 py-3 font-medium hover:bg-gray-700 text-white ml-2"
          >
            Shop Collection
          </Link>
        </div>
      </div>
    );
}

export default HeroVideo;