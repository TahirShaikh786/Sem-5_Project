import React from 'react'
import '../CSS/error.css'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
        <section id="error-page">
            <div className="content">
                <h2 className="header">404</h2>
                <h4>Sorry! Page Not Found</h4>
                <p>
                    OOps! It Seems like the page you're trying to access Doesn't exist.
                    If You believe there's an issue, feel Free to report it and we'll
                    look into it.
                </p>
                <div className="btns my-4 d-flex justify-content-evenly">
                    <NavLink className="home-btn" to="/">Return Home</NavLink>
                    <NavLink className="home-btn" to="/contact">Report Problem</NavLink>
                </div>
            </div>
        </section>
    </>
  )
}

export default Error;