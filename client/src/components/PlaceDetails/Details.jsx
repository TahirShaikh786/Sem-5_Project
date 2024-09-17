import React from "react";
import "../../css/details.css";
import { Link, useParams } from "react-router-dom";
import populars from "../../API/populars";
import { Col, Container, Row } from "react-bootstrap";
import { ImageGallery } from "react-image-grid-gallery";

const PlaceDetails = () => {
  const { id } = useParams();

  const place = populars.find((p) => p.id === parseInt(id));

  return (
    <div>
      {place ? (
        <>
          <section>
            <Container className="my-2">
              <Row>
                <Col className="col-12">
                  <h1 className="detail-title">{place.tilte}</h1>
                </Col>
              </Row>
              <Row className="my-5">
                <Col sm={10} md={8} lg={6}>
                    <img src={place.image} alt={place.tilte} className="detail-image" />
                </Col>
                <Col sm={10} md={8} lg={6} className="d-flex flex-column justify-content-center detail-info">
                    <h2 className="fs-4 detail-location">{place.location}</h2>
                    <p className="my-2">{place.descr}</p>
                    <div className="my-2 d-flex justify-content-between">
                        <h5 className="detail-days">{place.days}</h5>
                        <h5 className="detail-price">Actual Price:- <span className="me-5"> ₹{place.price}</span>Discounted Price <span>₹{place.afterDiscount}</span></h5>
                    </div>
                    <div className="my-1 d-flex flex-column justify-content-between">
                        <h5 className="detail-ratings my-2">Customer Ratings:- <span>{place.rating}</span></h5>
                        <h5 className="detail-review">Customer Review:- <span>{place.reviews}</span></h5>
                    </div>
                    <div className="d-flex justify-content-end my-4">
                        <Link to="/home" className="detail-book">Book Now</Link>
                    </div>
                </Col>
              </Row>
            </Container>
          </section>
        </>
      ) : (
        <p>Place not found.</p>
      )}
    </div>
  );
};

export default PlaceDetails;