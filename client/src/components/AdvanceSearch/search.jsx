import "./search.css";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import Modal from "react-bootstrap/Modal";
import Logo from "../../assets/logo.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import emailjs from "emailjs-com";
import { useAuth } from "../../API/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

emailjs.init("JjQL3UymerrTEGSAV");

const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [selectedLocationValue, setSelectedLocationValue] = useState("");
  const [selectedGuestValue, setSelectedGuestValue] = useState("");

  const { user } = useAuth();

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
  
    const templateParams = {
      to_email: user.email, // User's email
      to_name: user.username, // User's name
      location: selectedLocationValue, // Selected location
      guests: selectedGuestValue, // Selected guest details
      check_in: startDate.toDateString(), // Check-in date
      check_out: endDate.toDateString(), // Check-out date
    };
  
    try {
      const result = await emailjs.send(
        "service_3qqbyx7",
        "template_q9j17ux",
        templateParams
      );
  
      console.log("Email sent successfully:", result.text);
      toast.success("Email Sent Successfully!");
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send email.");
    }
  };
  

  const handleLocationSelect = (value) => {
    setSelectedLocationValue(value);
  };

  const handleGuestSelect = (value) => {
    setSelectedGuestValue(value);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="w-100 d-flex align-items-center justify-content-center">
            <img src={Logo} alt="" className="modalImg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="fs-4 fst-italic btn-outline-primary">
            Hello {user.username}
          </h5>
          <br />
          <p>Check Your Mail For Your Custom Booking Request.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
      <section className="box-search-advance">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <div className="box-search">
                <h2 className="fs-5 fw-bold text-center text-decoration-underline fst-italic mb-4">
                  Custom Booking
                </h2>
                <div className="item-search">
                  <CustomDropdown
                    label="Location"
                    onSelect={handleLocationSelect}
                    options={[
                      "USA",
                      "TURKEY",
                      "INDIA",
                      "JAPAN",
                      "DUBAI",
                      "AUSTRALIA",
                      "Melbourne",
                      "PARIS",
                      "France",
                    ]}
                  />
                </div>
                <div className="item-search item-search-2">
                  <label className="item-search-label">Check In</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd, MMMM , yyyy"
                  />
                </div>
                <div className="item-search item-search-2">
                  <label className="item-search-label">Check Out</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd, MMMM , yyyy"
                  />
                </div>
                <div className="item-search bd-none">
                  <CustomDropdown
                    label="Guest"
                    onSelect={handleGuestSelect}
                    options={[
                      "2 adults, 1 child",
                      "2 adults, 2 child",
                      "Couples",
                      "2 adults",
                      "4 adults",
                    ]}
                  />
                </div>
                <div className="item-search bd-none">
                  <Button
                    className="btn-primary p-3 flex-even fst-italic fw-bold d-flex justify-content-center"
                    onClick={handleShow}
                  >
                    <i class="bi bi-bag-heart me-2"></i>Book Tour
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ToastContainer/> 
    </>
  );
};

export default Search;
