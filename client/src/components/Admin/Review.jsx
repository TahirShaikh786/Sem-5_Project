import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useAuth } from "../../API/auth";
import { toast } from "react-toastify";

const Review = () => {
  const { authorizationToken } = useAuth();
  const [reviews, setReviews] = useState([]);

  const getAllReviews = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contact", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteReview = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contact/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        getAllReviews();
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  return (
    <>
      <section>
        <Container>
          <Row>
            <h1 className="fs-3 fw-bold text-center text-decoration-underline text-info">
              All Reviews
            </h1>
          </Row>
          <Row className="d-flex justify-content-center flex-wrap my-3">
          {reviews.map((review, index) => {
              return (
                <Col sm={6} md={4} className="users-Card" key={index}>
                  <h1>
                    <i class="bi bi-person-bounding-box"></i>
                  </h1>
                  <h2 className="my-1 text-dark fw-bold">
                    Name:- <span className="text-white">{review.username}</span>
                  </h2>
                  <h3 className="my-1 text-dark fw-bold">
                    Email:- <span className="text-white">{review.email}</span>
                  </h3>
                  <h3 className="my-1 text-dark fw-bold">
                    Comment:-{" "}
                    <span className="text-white">{review.message}</span>
                  </h3>
                  <div className="buttons my-2">
                    <Button
                      className="btn btn-danger"
                      onClick={() => deleteReview(review._id)}
                    >
                      {" "}
                      Delete
                    </Button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Review;
