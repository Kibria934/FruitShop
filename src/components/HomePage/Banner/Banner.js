import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img style={{height:"90vh"}} 
            className="d-block  w-100"
            src="https://i.ibb.co/jvX3tqt/pineapple-juice-splash-background.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:"90vh"}}
            className="d-block w-100"
            src="https://i.ibb.co/Lxkhzpy/concept-ramadan-kareem-space-text.jpg"
            alt="Second slide"
          />
      
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:"90vh"}}
            className="d-block w-100"
            src="https://i.ibb.co/S6QSdTf/colorful-fruits-tasty-fresh-ripe-juicy-white-desk.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;