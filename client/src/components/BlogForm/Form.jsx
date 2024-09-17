import React, { useState } from "react";
import "./form.css";
import AdHeader from "../common/Header/AdHeader";
import PagesBanner from "../Banner/PagesBanner";
import Footer from "../common/Footer/footer";
import { Col, Container, Row } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Blogform = () => {
  const URL = "http://localhost:5000/api/blog/blogs";

  const [blogs, setBlogs] = useState({
    img: "",
    title: "",
    description: "",
    addDesc: "",
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setBlogs({
      ...blogs,
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
        body: JSON.stringify(blogs),
      });

      const data = await response.json();
      if (response.ok) {
        setBlogs({ img: "", title: "", description: "", addDesc: "" });
        toast.success(user.username, " Blogs Has been Created!");
      } else {
        console.error("Error Response:", data);
        toast.error("Blog Was Not Created");
      }
    } catch (error) {}
  };

  return (
    <>
      <section className="py-2">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col sm={10} md={4} className="blogForm">
              <form onSubmit={handleSubmit} className="inputArea">
                <h1 className="fs-1">Create A Blog</h1>
                <div className="col-12 my-2">
                  <label htmlFor="validationDefault01" className="form-label">
                    Blog Image
                  </label>
                  <input
                    type="text"
                    name="img"
                    value={blogs.img}
                    onChange={handleInput}
                    className="form-control"
                    id="validationDefault01"
                    placeholder="Enter Image Url..."
                    required
                  />
                </div>
                <div className="col-12 my-2">
                  <label htmlFor="validationDefault02" className="form-label">
                    Blog Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={blogs.title}
                    onChange={handleInput}
                    className="form-control"
                    id="validationDefault02"
                    placeholder="Enter Blog Title..."
                    required
                  />
                </div>
                <div className="col-12 my-2">
                  <label htmlFor="validationDefault04" className="form-label">
                    Blog Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={blogs.description}
                    onChange={handleInput}
                    className="form-control"
                    id="validationDefault04"
                    placeholder="Enter Blog Description..."
                    required
                  />
                </div>
                <div className="col-12 my-2">
                  <label htmlFor="validationDefault03" className="form-label">
                    Additional Info
                  </label>
                  <div className="d-flex">
                    <input
                      type="text"
                      name="addDesc"
                      value={blogs.addDesc}
                      onChange={handleInput}
                      className="form-control"
                      id="validationDefault03"
                      placeholder="Minimum 5 lines..."
                      required
                    />
                  </div>
                </div>
                <div className="col-12 my-1 d-flex justify-content-center submit-btn">
                  <button>Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>

      <ToastContainer />
    </>
  );
};

export default Blogform;
