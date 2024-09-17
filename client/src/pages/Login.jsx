import React, { useEffect, useState } from "react";
import "../CSS/auth.css";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import { useAuth } from "../API/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [pstatus, setPstatus] = useState(false);

  const navigate = useNavigate();
  
  const { storeTokenInLS, API } = useAuth();
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    
    setUser({
      ...user,
      [name]: value,
    });
  };
  
  const URL = `${API}/api/auth/login`;
  const handleSubmit = async (e) => {
    e.preventDefault();
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
        setUser({ email: "", password: "" });
        navigate("/");
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
        <title>Tahir Tourism - Login Now</title>
      </Helmet>
      <section className="loginbg">
        <div className="innerContainer">
          <div className="row glassBox">
            <h1 className="text-center">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="col-12 my-2">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleInput}
                  value={user.email}
                  className="form-control"
                  id="email"
                  autoComplete="none"
                  required
                />
              </div>
              <div className="col-12 my-2">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="d-flex">
                  <input
                    type={pstatus ? "text" : "password"}
                    className="form-control"
                    name="password"
                    onChange={handleInput}
                    value={user.password}
                    style={{ borderRadius: "0.5rem 0rem 0rem 0.5rem" }}
                    id="password"
                    autoComplete="none"
                    required
                  />
                  <button
                    className="passbtn"
                    type="button"
                    onClick={() => setPstatus(!pstatus)}
                  >
                    {pstatus ? "Show" : "Hide"}
                  </button>
                </div>
              </div>
              <div className="col-12 my-2">
                <p className="text-center">
                  Don't Have an Account?{" "}
                  <Link to="/register" className="fw-bold text-info">
                    Register Here
                  </Link>
                </p>
              </div>
              <div className="col-12 my-2 d-flex justify-content-center submit-btn">
                <button type="submit">Login Now</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Login;
