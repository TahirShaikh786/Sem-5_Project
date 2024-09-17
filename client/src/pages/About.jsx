import React, { useEffect } from "react";
import "../CSS/about.css";
import AboutImg from "../assets/about.jpg";
import { Helmet } from "react-helmet";
import Header from "../components/common/Header/header";
import PagesBanner from "../components/Banner/PagesBanner";
import Footer from "../components/common/Footer/footer";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "../API/auth";

const About = () => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Tahir Tourism | About US</title>
      </Helmet>

      <Header />

      <PagesBanner title="About Us" />

      <section className="py-5 bg-dark">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col sm="10" md="6" className="aboutDesc">
              <h3 className="AboutUsername">
                Hello <span>{user.username}</span>
              </h3>
              <h2>Why Choose Us ?</h2>
              <p>
                Welcome to Tahir Tourism, your gateway to unforgettable travel
                experiences. At Tahir Tourism, we believe that travel is more
                than just visiting new places; it's about immersing yourself in
                diverse cultures, exploring breathtaking landscapes, and
                creating memories that last a lifetime. Our mission is to turn
                your travel dreams into reality, whether you're seeking
                adventure, relaxation, or a bit of both.
              </p>
              <p>
                Founded with a passion for discovery and a deep love for the
                world around us, Tahir Tourism is dedicated to providing
                personalized travel experiences that cater to every type of
                traveler. From solo explorers to family vacationers, we craft
                journeys that inspire and satisfy the wanderlust in everyone.
              </p>
              <p>
                Tahir Tourism is a forward-thinking travel agency dedicated to
                providing unforgettable travel experiences across the globe.
                With a passion for exploring new destinations and a commitment
                to exceptional service, Tahir Tourism offers personalized travel
                packages that cater to various interests, from adventurous
                excursions to relaxing getaways. Our team of experienced travel
                experts works tirelessly to create tailored itineraries that
                meet the unique preferences and needs of every traveler.
              </p>
              <div className="d-flex justify-content-evenly my-3">
                <NavLink to="/contact" className="btn btn-info text-white">
                  Connect Now
                </NavLink>
                <NavLink to="/" className="btn btn-outline-info">
                  Explore More
                </NavLink>
              </div>
            </Col>

            <Col
              sm="10 d-flex justify-content-center align-items-center"
              md="6"
            >
              <img
                src={AboutImg}
                alt="travelling people"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default About;
