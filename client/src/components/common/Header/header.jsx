import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Row,
  Modal,
} from "react-bootstrap";
import "./header.css";
import Logo from "../../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../API/auth";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { isLoggedIn } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/data");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await fetchData();
    const results = data.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    if (results.length > 0) {
      setSelectedData(results[0]);
      setShowModal(true);
    } else {
      setSelectedData(null);
      setShowModal(false);
    }
  };

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  // Sticky Header
  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 120
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  const handleModalClose = () => setShowModal(false);

  return (
    <header className="header-section">
      <Container>
        <Row>
          <Navbar expand="lg" className="mb-3">
            <Navbar.Brand href="/">
              <NavLink to="/">
                <img src={Logo} alt="Logo" className="logo" />
              </NavLink>
            </Navbar.Brand>
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-lg"
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="start"
              show={open}
            >
              <Offcanvas.Header>
                <NavLink to="/" closeButton>
                  <img src={Logo} alt="Logo" className="logo" />
                </NavLink>
                <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                  <i className="bi bi-x-lg fs-1"></i>
                </span>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className="nav-link under-animation" to="/">
                    HOME
                  </NavLink>
                  <NavLink className="nav-link under-animation" to="/about">
                    ABOUT US
                  </NavLink>

                  <NavLink className="nav-link under-animation" href="#action2">
                    <Link className="text-decoration-none" to="/Gallery">
                      GALLERY
                    </Link>
                  </NavLink>
                  <NavLink className="nav-link under-animation" href="#action2">
                    <Link className="text-decoration-none" to="/contact">
                      CONTACT
                    </Link>
                  </NavLink>

                  {isLoggedIn ? (
                    <NavLink className="nav-link under-animation" to="/logout">
                      Logout
                    </NavLink>
                  ) : (
                    <>
                      <NavLink
                        className="nav-link under-animation"
                        to="/register"
                      >
                        Register
                      </NavLink>
                      <NavLink className="nav-link under-animation" to="/login">
                        Login
                      </NavLink>
                    </>
                  )}
                  
                </Nav>
                <Form className="d-flex" onSubmit={handleSearch}>
                  <Form.Control
                    type="search"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type Here to Search..."
                    className="me-2 SearchBar"
                    aria-label="Search"
                  />
                  <Button variant="outline-light" type="submit">
                    Search
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <div className="ms-md-4 ms-2">
              <li className="d-inline-block d-lg-none ms-3 toggle_btn">
                <i
                  className={
                    open ? "bi bi-door-closed fs-1" : "bi bi-door-open fs-1"
                  }
                  onClick={toggleMenu}
                ></i>
              </li>
            </div>
          </Navbar>
        </Row>
      </Container>

      {/* Modal for displaying selected data */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 className="text-center">{selectedData?.title}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedData?.description.map((desc, index) => (
            <p key={index}>{desc.text}</p>
          ))}
          {selectedData?.image.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={selectedData?.title}
              style={{ width: "100%", marginBottom: "10px" }}
            />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;
