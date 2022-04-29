import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img style={{height:"90vh"}} 
            className="d-block  w-100"
            src="https://i.ibb.co/3B1s1Kc/element5-digital-acr-Bf9-Blfv-E-unsplash.jpg"
            alt="First slide"
          />
          <Carousel.Caption  className='text-dark' >
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption >
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:"90vh"}}
            className="d-block w-100"
            src="https://i.ibb.co/k1nPf4C/gianluca-gerardi-Bn-RTS550-Lzc-unsplash.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption  className='text-dark'>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption >
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:"90vh"}}
            className="d-block w-100"
            src="https://i.ibb.co/7ysCjKV/kaizen-nguy-n-jc-Lc-WL8-D7-AQ-unsplash.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption  className='text-white'>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption >
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;