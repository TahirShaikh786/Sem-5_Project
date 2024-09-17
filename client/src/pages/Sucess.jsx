import "../CSS/success.css";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../API/auth";
import { Col, Container, Row, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import jsPDF from "jspdf";

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [receipt, setReceipt] = useState(null);
  const { user, API } = useAuth();

  const [bookingDB, setBookingDb] = useState({
    email: user?.email || "",
    tourTitle: "",
    amount: 0,
    status: "",
  });

  useEffect(() => {
    const fetchSession = async () => {
      if (sessionId) {
        try {
          const response = await axios.get(
            `${API}/api/payment/session/${sessionId}`
          );
          const receiptData = response.data;
          setReceipt(receiptData);

          // Prepare booking data after receipt is fetched
          setBookingDb({
            email: user.email,
            tourTitle: receiptData.line_items?.data[0]?.description,
            amount: receiptData.amount_total,
            status: receiptData.payment_status,
          });
        } catch (error) {
          console.error("Error fetching session data:", error.message);
        }
      }
    };

    fetchSession();
  }, [sessionId, API, user]);

  useEffect(() => {
    const sendBookingData = async () => {
      if (bookingDB.email) {
        try {
          const response = await fetch(`${API}/api/payment/bookingData`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingDB),
          });

          if (response.ok) {
            toast.success("Booking data has been successfully saved!");
          } else {
            toast.error("Failed to save booking data");
          }
        } catch (error) {
          console.error("Error submitting booking data:", error);
          toast.error("Error submitting booking data");
        }
      }
    };

    if (receipt) {
      sendBookingData(); // Send booking data each time the page is refreshed
    }
  }, [receipt, bookingDB, API]);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Receipt", 20, 30);
    doc.setFontSize(14);
    if (receipt) {
      doc.text(`Email: ${receipt.customer_details.email}`, 20, 50);
      doc.text(
        `Amount Paid: Rs${(receipt.amount_total / 100).toFixed(2)}`,
        20,
        70
      );
      doc.text(`Payment Status: ${receipt.payment_status}`, 20, 90);
      doc.text(`Tour: ${receipt.line_items?.data[0]?.description}`, 20, 110);
    } else {
      doc.text("Loading receipt...", 20, 50);
    }
    doc.save("receipt.pdf");
  };

  return (
    <>
      <Helmet>
        <title>Tahir Tourism - Success Page</title>
      </Helmet>

      <section className="dark py-5">
        <Container>
          <Row>
            <Col className="Paymentheading">
              <h1>Payment Completed Successfully</h1>
              <p>Thank you for your purchase!</p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center my-5">
            <Col md={5} className="d-flex justify-content-center">
              {receipt ? (
                <div className="paymentData">
                  <h2>Receipt</h2>
                  <p className="email my-2">
                    Email: <span>{user.email}</span>
                  </p>
                  <p className="packageName my-2">
                    <strong>Tour:</strong>{" "}
                    <span>{receipt.line_items?.data[0]?.description}</span>
                  </p>
                  <p className="amount my-2">
                    <strong>Amount Paid:</strong>{" "}
                    <span>₹{(receipt.amount_total / 100).toFixed(2)}</span>
                  </p>
                  <p className="payment my-2">
                    <strong>Payment Status:</strong>{" "}
                    <span className="status">{receipt.payment_status}</span>
                  </p>
                  <Button className="my-3" onClick={downloadPDF}>
                    Download Receipt
                  </Button>
                </div>
              ) : (
                <p>Loading receipt...</p>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SuccessPage;
