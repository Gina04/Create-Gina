import './Carousel.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../assets/img/HenningLthrChairSOSSF23.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function CarouselSillon(){
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    return(
    <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: '100%', height: 'auto', padding: '20px 0' }}>
      <Carousel.Item>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '500px', overflow: 'hidden', position: 'relative', color: 'black', paddingLeft: '20px' }}>
            <img src='https://cb.scene7.com/is/image/Crate/cb_dHP_20240305_DeliveryCarousel_Sofas?wid=896&qlt=80&op_sharpen=1' alt="First slide" style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center' }} />
            <p style={{ textAlign: 'center', padding: '20px 0', fontSize: '18px', fontWeight: 'bold' }}>
              <Link to='/furniture/living-room/sofa-and-sectional-collections' style={{ color: 'black', textDecoration: 'none' }}>
                Sofas Start at $1299 <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
              </Link>
            </p>
          </div>
          <div style={{ width: '500px', overflow: 'hidden', position: 'relative', color: 'black', paddingLeft: '20px' }}>
            <img src='https://cb.scene7.com/is/image/Crate/cb_dHP_20240305_DeliveryCarousel_CoffeeTables?wid=896&qlt=80&op_sharpen=1' alt="First slide" style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center' }} />
            <p style={{ textAlign: 'center', padding: '20px 0', fontSize: '18px', fontWeight: 'bold' }}>
              <Link to='/furniture/living-room/sofa-and-sectional-collections' style={{ color: 'black', textDecoration: 'none' }}>
              Coffee Tables Start at $549  <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
              </Link>
            </p>
          </div>

          <div style={{ width: '500px', overflow: 'hidden', position: 'relative', color: 'black', paddingLeft: '20px' }}>
            <img src='https://cb.scene7.com/is/image/Crate/cb_dHP_20240305_DeliveryCarousel_AccentChairs?wid=896&qlt=80&op_sharpen=1' alt="First slide" style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center' }} />
            <p style={{ textAlign: 'center', padding: '20px 0', fontSize: '18px', fontWeight: 'bold' }}>
              <Link to='/furniture/living-room/sofa-and-sectional-collections' style={{ color: 'black', textDecoration: 'none' }}>
              Accent Chairs Start at $499   <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
              </Link>
            </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ display: 'flex' }}>
        <div style={{ width: '500px', overflow: 'hidden', position: 'relative', color: 'black', paddingLeft: '20px' }}>
            <img src='https://cb.scene7.com/is/image/Crate/cb_dHP_20240305_DeliveryCarousel_Lighting?wid=896&qlt=80&op_sharpen=1' alt="First slide" style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center' }} />
            <p style={{ textAlign: 'center', padding: '20px 0', fontSize: '18px', fontWeight: 'bold' }}>
              <Link to='/furniture/living-room/sofa-and-sectional-collections' style={{ color: 'black', textDecoration: 'none' }}>
              Lighting Starts at $70    <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
              </Link>
            </p>
          </div>
          <div style={{ width: '500px', overflow: 'hidden', position: 'relative', color: 'black', paddingLeft: '20px' }}>
            <img src='https://cb.scene7.com/is/image/Crate/cb_dHP_20240305_DeliveryCarousel_Rugs?wid=896&qlt=80&op_sharpen=1' alt="First slide" style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center' }} />
            <p style={{ textAlign: 'center', padding: '20px 0', fontSize: '18px', fontWeight: 'bold' }}>
              <Link to='/furniture/living-room/sofa-and-sectional-collections' style={{ color: 'black', textDecoration: 'none' }}>
              350+ New Rugs<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
              </Link>
            </p>
          </div>

          <div style={{ width: '500px', overflow: 'hidden', position: 'relative', color: 'black', paddingLeft: '20px' }}>
            <img src='https://cb.scene7.com/is/image/Crate/cb_dHP_20240305_DeliveryCarousel_Pillows?wid=896&qlt=80&op_sharpen=1' alt="First slide" style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center' }} />
            <p style={{ textAlign: 'center', padding: '20px 0', fontSize: '18px', fontWeight: 'bold' }}>
              <Link to='/furniture/living-room/sofa-and-sectional-collections' style={{ color: 'black', textDecoration: 'none' }}>
              Pillows Start at $24.95 <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
              </Link>
            </p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSillon; 
