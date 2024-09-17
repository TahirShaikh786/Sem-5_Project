import React from "react";
import '../CSS/blog.css';
import { Helmet } from "react-helmet";
import Header from "../components/common/Header/header";
import PagesBanner from "../components/Banner/PagesBanner";
import Footer from "../components/common/Footer/footer";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useAuth } from "../API/auth";

const Blog = () => {
  const { blogs } = useAuth();

  return (
    <>
      <Helmet>
        <title>Tahir Tourism - Blogs</title>
      </Helmet>

      <Header />

      <PagesBanner title="Blogs" />

      <section className="dark popular py-5 h-100">
        <Container>
          <Row>
            <Col md="12">
              <div className="blogMain_heading">
                <h1> Blogs </h1>
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            {blogs.map((currElem, index) => {
              const { img, title, description, _id } = currElem;
              return (
                <Col sm={10} md={4} className="mb-5 blogCard" key={index}>
                  <Card className="rounded-2 shadow-sm h-100">
                    <Card.Img
                      variant="top"
                      src={img}
                      className="img-fluid blog-img"
                      alt={"image"}
                    />
                    <Card.Body>
                      <Card.Title> {title} </Card.Title>
                      <p className="reviwe">{description}</p>
                    </Card.Body>

                    <Card.Footer className="py-4">
                      <Button>Read More.....</Button>
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

export default Blog;