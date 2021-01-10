import React from 'react';
import { Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div>

      <Carousel className="carousel">
        <Carousel.Item>

          <img
            className="d-block carousel-img"
            src="https://i.ibb.co/y4hwz3W/river2.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <div>
              <small>JUN 01, 2020</small>
              <h1>Florida Considering Bill to <br /> Reverse Key West</h1>
              <Link to="/election"><Button className="text-white btn-brand">READ MORE</Button></Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src="https://i.ibb.co/BfZ1ZC9/banner2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="carousel-caption">
            <div>
              <small>JUN 01, 2020</small>
              <h1>ASTA Provides Unprecedented <br /> Assistance</h1>
              <Link to="/healthcare"><Button className="text-white btn-brand">READ MORE</Button></Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src="https://i.ibb.co/FBP8mqT/banner4.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="carousel-caption">
            <div>
              <small>JUN 01, 2020</small>
              <h1>US Travel Explains How Industry <br /> Can Take</h1>
              <Link to="/world"><Button className="text-white btn-brand">READ MORE</Button></Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;