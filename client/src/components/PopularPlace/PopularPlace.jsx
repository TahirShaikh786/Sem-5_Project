import React from "react";
import "./populaplace.css";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import populars from "../../API/populars";
import { NavLink } from "react-router-dom";

const PopularPlace = () => {
  return (
    <section className="popular">
      <Container>
        <Row>
          <Col md="12">
            <div className="main_heading d-flex justify-content-between">
              <h1> Popular Destination </h1>
              <NavLink to="/tours" className="destinationLink">
                  See All Destinations{" "}
                  <i class="bi bi-arrow-up-right-circle"></i>
                </NavLink>
            </div>
          </Col>
        </Row>
        <Row>
        {populars.map((val, inx)=>{
          return(
          <Col md={3} sm={6} xs={12} className="mb-5" key={inx}>
            <Card className="rounded-2 shadow-sm">
              <Card.Img
                variant="top"
                src={val.image}
                className="img-fluid"
                alt={"image"}
              />
              <Card.Body>
                <Card.Text>
                  <i className="bi bi-geo-alt"></i>
                  <span className="text">{val.location}</span>
                </Card.Text>
                <Card.Title> {val.tilte} </Card.Title>
                <p className="reviwe">
                  <span>
                    <i className="bi bi-star-fill me-1"></i>
                  </span>
                  <span>{val.rating} </span>
                  <span>( {val.reviews} reviews )</span>
                </p>
                {val.category.map((cat, index)=>{
                  return(
                    <span key={index} 
                    className={cat.replace(/ .*/, "") + " badge"}>{cat}</span>
                  )
                })}
                
              </Card.Body>

              <Card.Footer className="py-4">
                {val.afterDiscount ? (
                  <p className="text-decoration-line-through"> ${val.price.toFixed(2)}</p>
                ): ""}
               
                <Stack
                  direction="horizontal"
                  className="justify-content-between  mt-3"
                >
                  <p>
                    From <b>{val.afterDiscount ? val.afterDiscount.toFixed(2) : val.price.toFixed(2)}</b>
                  </p>
                  <p>
                  
                    <i className="bi bi-clock"></i> {val.days}
                  </p>
                </Stack>
              </Card.Footer>
            </Card>
          </Col>
        )
        })}
        </Row>
      </Container>
    </section>
  );
};

export default PopularPlace;