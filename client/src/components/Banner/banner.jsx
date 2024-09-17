import React from "react";
import './banner.css'
import {Carousel} from "react-bootstrap";
import sliderImg1 from "../../assets/Slider/1.png"
import sliderImg2 from "../../assets/Slider/2.png"
import sliderImg3 from "../../assets/Slider/3.png"

const banner = () => {
  return (
    <>
      <section className='slider'>
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={sliderImg1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider-des">
                <h5 className="heading">JOURNEY TO <span>EXPLORE WORLD</span></h5>
                <p className="sub_text">Explore the world with ease through our Tours and Travel website. This project offers a seamless experience for discovering, booking, and planning trips. Designed to enhance user experience, it features destination insights, travel packages, and a user-friendly interface to help you embark on your next adventure.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg2} className="d-block w-100" alt="Second slide" />
            <Carousel.Caption>
              <div className="slider-des">
                <h5 className="heading">BEAUTIFUL PLACE <span>TO VISIT</span></h5>
                <p className="sub_text">Explore the world with ease through our Tours and Travel website. This project offers a seamless experience for discovering, booking, and planning trips. Designed to enhance user experience, it features destination insights, travel packages, and a user-friendly interface to help you embark on your next adventure.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg3} className="d-block w-100" alt="Third slide" />
            <Carousel.Caption>
              <div className="slider-des">
                <h5 className="heading">JOURNEY TO <span>EXPLORE WORLD</span></h5>
                <p className="sub_text">Explore the world with ease through our Tours and Travel website. This project offers a seamless experience for discovering, booking, and planning trips. Designed to enhance user experience, it features destination insights, travel packages, and a user-friendly interface to help you embark on your next adventure.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default banner;
