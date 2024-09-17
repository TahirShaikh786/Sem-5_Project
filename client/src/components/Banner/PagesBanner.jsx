import React from "react";
import { Carousel } from "react-bootstrap";
import "./banner.css";
import slider1 from "../../assets/gallery/g2.jpg";
import slider2 from "../../assets/gallery/g4.jpg";
import slider3 from "../../assets/gallery/g5.jpg";

const AdminBanner = ({ title }) => {
  return (
    <>
      <section className="slider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              src={slider3}
              className="d-block w-100 Cbannerimg"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="bannerContainer d-flex justify-content-center">
                <div className="innerbContainer">
                  <h1>{title} </h1>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src={slider2}
              className="d-block w-100 Cbannerimg"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="bannerContainer d-flex justify-content-center">
                <div className="innerbContainer">
                  <h1>{title}</h1>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src={slider1}
              className="d-block w-100 Cbannerimg"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="bannerContainer d-flex justify-content-center">
                <div className="innerbContainer">
                  <h1>{title}</h1>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default AdminBanner;
