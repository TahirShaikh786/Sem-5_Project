import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Users from "../../Admin/Users";
import Review from "../../Admin/Review";
import BlogForm from "../../BlogForm/Form";
import "./adHeader.css";
import { useAuth } from "../../../API/auth";

const AdHeader = () => {
  const [activeComponent, setActiveComponent] = useState("users");
  const {user} = useAuth();

  const renderComponent = () => {
    switch (activeComponent) {
      case "users":
        return <Users />;
      case "form":
        return <BlogForm />;
      case "review":
        return <Review />;
      default:
        return <Users />;
    }
  };

  return (
    <>
      <section className="dark py-5">
        <Container>
          <Row>
            <h1 className="panelHeading">Hello Admin <span>{user.username}</span></h1>
            <Col sm={3} md={4} className="d-flex flex-column align-tems-center justify-content-center">
              <NavLink className="sideBar" onClick={() => setActiveComponent("users")}>
                <i class="bi bi-people-fill"></i> Users
              </NavLink>
              <br/>
              <br/>
              <br/>
              <NavLink className="sideBar" onClick={() => setActiveComponent("review")}>
                <i class="bi bi-chat-left-text-fill"></i> Reviews
              </NavLink>
              <br />
              <br />
              <br />
              <NavLink className="sideBar" onClick={() => setActiveComponent("form")}>
              <i class="bi bi-file-text-fill"></i> Blog Form
              </NavLink>
            </Col>

            <Col sm={9} md={8} className="bg-body rounded shadow py-2">
              {renderComponent()}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdHeader;
