import "./adminLayout.css";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../API/auth";
import {Link} from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";

const Users = () => {
  const { authorizationToken } = useAuth();
  const [users, setusers] = useState([]);

  const getAllUserData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();      
      setusers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await response.json();

      if(response.ok){
        getAllUserData();
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  return (
    <>
      <section>
        <Container>
          <Row>
            <h1 className="fs-3 fw-bold text-center text-decoration-underline text-info">
              User Data
            </h1>
          </Row>
          <Row className="d-flex justify-content-center flex-wrap my-3">
            {users.map((user, index) => {
              return (
                <Col sm={6} md={4} className="users-Card" key={index}>
                  <h1>
                    <i class="bi bi-person-bounding-box"></i>
                  </h1>
                  <h2 className="my-1 text-dark fw-bold">
                    Name:- <span className="text-white">{user.username}</span>
                  </h2>
                  <h3 className="my-1 text-dark fw-bold">
                    Phone:- <span className="text-white">{user.phone}</span>
                  </h3>
                  <h3 className="my-1 text-dark fw-bold">
                    Email ID :- <span className="text-white">{user.email}</span>
                  </h3>
                  <div className="buttons my-2">
                    <Link className="btn btn-warning fw-bold fst-italic" to={`/admin/users/${user._id}/edit`}>Edit</Link>
                    <Button
                      className="btn btn-danger"
                      onClick={() => deleteUser(user._id)}
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

export default Users;
