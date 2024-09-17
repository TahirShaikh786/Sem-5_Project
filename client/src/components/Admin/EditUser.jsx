import React, { useEffect, useState } from "react";
import Header from "../common/Header/header";
import PagesBanner from "../Banner/PagesBanner";
import Footer from "../common/Footer/footer";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../API/auth";
import { toast } from "react-toastify";

const EditUser = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const navigate = useNavigate();
  const { authorizationToken } = useAuth();

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await response.json();
      console.log(`Users single Data ${data}`);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type" : "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("Updated Successfully");
        navigate('/admin')
      }else{
        toast.error("Not Updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />

      <PagesBanner title="Edit User" />

      <section className="dark py-5">
        <Container>
          <Link to="/admin" className="backBtn">
            <i class="bi bi-caret-left-fill">Back</i>
          </Link>
          <Row className="d-flex justify-content-center">
            <Col md={4}>
              <form className="inputArea" onSubmit={handleSubmit}>
                <div className="col-auto my-2">
                  <label htmlFor="validationDefault01" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={data.username}
                    onChange={handleInput}
                    className="form-control"
                    id="validationDefault01"
                    placeholder="Enter Your Username..."
                    required
                  />
                </div>
                <div className="col-auto my-2">
                  <label htmlFor="validationDefault02" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleInput}
                    className="form-control"
                    id="validationDefault02"
                    placeholder="Enter Your Email..."
                    required
                  />
                </div>
                <div className="col-auto my-2">
                  <label htmlFor="validationDefault04" className="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    name="phone"
                    value={data.phone}
                    onChange={handleInput}
                    className="form-control"
                    id="validationDefault04"
                    placeholder="Enter Your Phone Number..."
                    required
                  />
                </div>
                <div className="col-auto my-1 d-flex justify-content-center submit-btn">
                  <button>Update</button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
      {/* <ToastContainer/> */}
    </>
  );
};

export default EditUser;
