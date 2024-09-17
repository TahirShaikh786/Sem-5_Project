import "../CSS/tour.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import tours from "../API/tours";
import hotels from "../API/hotels";
import { Helmet } from "react-helmet";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import Header from "../components/common/Header/header";
import PagesBanner from "../components/Banner/PagesBanner";
import Footer from "../components/common/Footer/footer";
import Slider from "react-slick";
import { useAuth } from "../API/auth";
import { useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const { API } = useAuth();  
  const stripe = useStripe();
  const tour = tours.find((tour) => tour.id === parseInt(id, 10));

  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleHotelSelection = (hotel) => {
    setSelectedHotel((prevSelectedHotel) => {
      if (prevSelectedHotel) {
        return { ...prevSelectedHotel, ...hotel };
      }
      return hotel;
    });
    setShowModal(false);
  };

  const handleBookNow = async () => {
    const totalPrice = selectedHotel
      ? tour.afterDiscount + selectedHotel.price
      : tour.afterDiscount;
    setTotalPrice(totalPrice);
    try {
      const { data } = await axios.post(`${API}/api/payment/create-checkout-session`, {
        tour,
        selectedHotel
      });
  
      const result = await stripe.redirectToCheckout({ sessionId: data.id });
      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Error creating Stripe checkout session", error);
    }

  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="bi bi-star-fill yellow"></i>);
    }
    return stars;
  };

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Tahir Tourism - Tours Details</title>
      </Helmet>

      <Header />

      <PagesBanner title={tour.tilte} />

      <section className="py-5 dark h-100">
        <Container>
          <Row>
            <Col md={12} className="detailsImg">
              <img src={tour.image} alt="" />
            </Col>
          </Row>

          <Row className="d-flex justify-content-center">
            <Col md={6} className="detailsDesc">
              <h1 className="tourTitle">{tour.tilte}</h1>
              <p className="tourLocation">
                <i class="bi bi-geo-alt"></i> {tour.location}
              </p>
              <p className="tour-Description">Description:</p>
              <p>{tour.descr}</p>

              <p className="tourDays">
                <i class="bi bi-calendar-day-fill"></i> {tour.days}
              </p>
              <p className="tourPrice">
                Price: ₹{" "}
                <span>
                  {selectedHotel
                    ? tour.afterDiscount + selectedHotel.price
                    : tour.afterDiscount}
                </span>
              </p>
              <div className="d-flex justify-content-end">
                <p className="hotelBtn" onClick={() => setShowModal(true)}>
                  Want to Choose Hotel
                </p>
              </div>
              <div className="rating">
                Reviews :- {renderStars(tour.rating)}
                <span className="reviews">({tour.reviews} reviews)</span>
              </div>
              <div className="d-flex justify-content-center my-3 bookBtn">
                <Button onClick={handleBookNow}>Book Now</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Select a Hotel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="tours_section slick_slider">
            <Col md="12">
              <Slider {...settings}>
                {hotels.map((destination, inx) => {
                  return (
                    <div
                      className="img-box"
                      key={inx}
                      onClick={() => handleHotelSelection(destination)}
                    >
                      <Card>
                        <Card.Img
                          variant="top"
                          src={destination.image}
                          className="img-fluid"
                          alt={destination.name}
                        />
                        <Card.Title>{destination.name}</Card.Title>
                        <span className="tours">₹ {destination.price}</span>
                      </Card>
                    </div>
                  );
                })}
              </Slider>
            </Col>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Detail;
