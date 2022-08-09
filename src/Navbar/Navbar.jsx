import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light ">
          <div className="container-fluid ">
            <Nav.Link as={Link} to={"/"} className="navbar-brand ">
              Navbar
            </Nav.Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Nav.Link as={Link} to={"/"}>
                    Home
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link as={Link} to={"/login"}>
                    Login
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link as={Link} to={"/form"}>
                    Form
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link as={Link} to={"/logout"}>
                    Logout
                  </Nav.Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  );
};

export default Navbar;
