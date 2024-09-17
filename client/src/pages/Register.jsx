import React, { useEffect, useState } from "react";
import "../CSS/auth.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../API/auth";

const Register = () => {
  let [pstatus, setPstatus] = useState(false);
  
  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();
  
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  
  const URL = `${API}/api/auth/register`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      

      if (response.ok) {
        storeTokenInLS(data.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
      } else {
        toast.error(data.extraDetails ? data.extraDetails : data.message);
      }

    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Catch Error:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Registration Page | Tahir Tourism</title>
      </Helmet>
      <section className="loginbg">
        <div className="innerContainer">
          <div className="row glassBox">
            <h1 className="text-center">Registration</h1>
            <form onSubmit={handleSubmit} className="inputArea">
              <div className="col-auto my-2">
                <label htmlFor="validationDefault01" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={user.username}
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
                  value={user.email}
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
                  value={user.phone}
                  onChange={handleInput}
                  className="form-control"
                  id="validationDefault04"
                  placeholder="Enter Your Phone Number..."
                  required
                />
              </div>
              <div className="col-auto my-2">
                <label htmlFor="validationDefault03" className="form-label">
                  Password
                </label>
                <div className="d-flex">
                  <input
                    type={pstatus ? "text" : "password"}
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    className="form-control"
                    style={{ borderRadius: "0.5rem 0rem 0rem 0.5rem" }}
                    id="validationDefault03"
                    placeholder="Enter Password..."
                    required
                  />
                  <button
                    className="passbtn"
                    onClick={() => setPstatus(!pstatus)}
                  >
                    {pstatus ? "Show" : "Hide"}
                  </button>
                </div>
              </div>
              <div className="col-auto my-2 d-none">
                <div className="d-flex">
                  <input
                    type="checkbox"
                    name="isAdmin"
                    value={user.isAdmin}
                    onChange={handleInput}
                    className="form-control"
                    style={{ borderRadius: "0.5rem 0rem 0rem 0.5rem" }}
                  />
                  Admin
                </div>
              </div>
              <div className="col-auto my-2">
                <p className="text-center">
                  Already Have an Account?{" "}
                  <Link to="/login" className="fw-bold text-info">
                    Login Now
                  </Link>
                </p>
              </div>
              <div className="col-auto my-1 d-flex justify-content-center submit-btn">
                <button>Register Now</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Register;
