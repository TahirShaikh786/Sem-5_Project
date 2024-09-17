import React from "react";
import "../CSS/tour.css"
import { Helmet } from "react-helmet";
import Header from "../components/common/Header/header";
import PagesBanner from "../components/Banner/PagesBanner";
import Footer from "../components/common/Footer/footer";
import populars from "../API/tours";
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";

const Tours = () => {

  const redirectTo = (id) => {
    window.location.href = `/detail/${id}`; // Redirect to the specific page
  };
  return (
    <>
      <Helmet>
        <title>Tahir Tourism - All Destinations</title>
      </Helmet>
      <Header />

      <PagesBanner title="All Tours" />

      <section className="popular">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading d-flex justify-content-between">
                <h1> All Packages </h1>
              </div>
            </Col>
          </Row>
          <Row>
            {populars.map((val, inx) => {
              return (
                <Col md={3} sm={6} xs={12} className="mb-5" key={inx}>
                  <Card
                    className="rounded-2 shadow-sm"
                  >
                    <Card.Img
                      variant="top"
                      src={val.image}
                      className="img-fluid tourImage"
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
                      {val.category.map((cat, index) => {
                        return (
                          <span
                            key={index}
                            className={cat.replace(/ .*/, "") + " badge"}
                          >
                            {cat}
                          </span>
                        );
                      })}
                    </Card.Body>

                    <Card.Footer className="py-4">
                      {val.afterDiscount ? (
                        <p className="text-decoration-line-through">
                          {" "}
                          ${val.price.toFixed(2)}
                        </p>
                      ) : (
                        ""
                      )}

                      <Stack
                        direction="horizontal"
                        className="justify-content-between  mt-3"
                      >
                        <p>
                          From{" "}
                          <b>
                            {val.afterDiscount
                              ? val.afterDiscount.toFixed(2)
                              : val.price.toFixed(2)}
                          </b>
                        </p>
                        <p>
                          <i className="bi bi-clock"></i> {val.days}
                        </p>
                      </Stack>
                      <div className="button my-3 d-flex justify-content-end">
                        <Button onClick={() => redirectTo(val.id)}>Click For More Info</Button>
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Tours;
