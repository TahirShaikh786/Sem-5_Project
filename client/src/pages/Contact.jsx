import React, { useState } from "react";
import "../CSS/contact.css";
import { Helmet } from "react-helmet";
import Header from "../components/common/Header/header";
import PagesBanner from "../components/Banner/PagesBanner";
import Footer from "../components/common/Footer/footer";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useAuth } from "../API/auth";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  
  const [userData, setUserData] = useState(true);
  
  const { user, isLoading, API } = useAuth();
  if (isLoading) {
    return (
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    );
  }
  const URL = `${API}/api/form/contact`;

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        toast.success("Form Has Been Submitted");
        setContact({ username: user.username, email: user.email, message: "" });
      } else {
        toast.error("Not Submitted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Tahir Tourism</title>
      </Helmet>

      <Header />

      <PagesBanner title="Contact US" />

      {/* Contact Form Start */}
      <section className="my-1 py-5 dark">
        <Container>
          <Row className="d-flex justify-content-sm-center justify-content-md-evenly">
            <Col sm={10} md={5} lg={5} className="contact-form">
              <h1>Contact Now</h1>
              <form onSubmit={handleSubmit} className="my-5">
                <div className="col-12 my-3">
                  <label htmlFor="username" className="form-label text-white">
                    Enter Your Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    onChange={handleInput}
                    value={contact.username}
                    className="form-control"
                    id="username"
                    required
                  />
                </div>
                <div className="col-12 my-3">
                  <label htmlFor="email" className="form-label text-white">
                    Enter Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleInput}
                    value={contact.email}
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="col-12 my-3">
                  <label htmlFor="message" className="form-label text-white">
                    Enter Message
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    onChange={handleInput}
                    value={contact.message}
                    className="form-control"
                    id="message"
                    rows="7"
                    cols="30"
                    required
                  ></textarea>
                </div>

                <Button type="submit">Submit</Button>
              </form>
            </Col>

            <Col
              sm={12}
              md={7}
              lg={5}
              className="p-3 d-flex flex-column align-items-center"
            >
              <div className="contact-info">
                <h2>
                  <i class="bi bi-telephone-fill"></i>
                </h2>
                <p>+91 8591384199</p>
              </div>
              <div className="contact-info">
                <h2>
                  <i class="bi bi-envelope-paper-fill"></i>
                </h2>
                <p>altahirshaikh786@gmail.com</p>
              </div>
              <div className="contact-info">
                <h2>
                  <i class="bi bi-building"></i>
                </h2>
                <p>
                  A-10/003, RNA BROADWAY AVENUE, NEAR JANGID CIRCLE, MIRA-ROAD,
                  THANE-401105
                </p>
              </div>
            </Col>
          </Row>

          <Row className="my-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1882.957349434699!2d72.86740322963867!3d19.286075368255688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1725044953338!5m2!1sen!2sin"
              width="600"
              height="450"
              className="contactMap"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Row>
        </Container>
      </section>
      {/* Contact Form End */}

      <Footer />

      <ToastContainer />
    </>
  );
};

export default Contact;
