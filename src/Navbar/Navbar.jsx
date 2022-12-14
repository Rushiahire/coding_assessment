import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logoutUser } from "../Auth/FirebaseConfig";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();
  var idToken = window.localStorage.getItem("idToken");
  var isUserLogin = false;

  if (idToken) {
    isUserLogin = true;
  } else {
    isUserLogin = false;
  }

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

              {/* <li className="nav-item"> */}
                {isUserLogin ? (
                  
                  <>
                    <li className="nav-item">
                      <Nav.Link as={Link} to={"/form"}>
                        Form
                      </Nav.Link>
                    </li>

                    <li className="nav-item">
                      <Nav.Link as={Link} to={"/list"}>
                        View Data
                      </Nav.Link>
                    </li>
                  <li className="nav-item">  <button onClick={logoutUser} id="logout_button" className="btn btn-info w-20">
                      Logout
                    </button></li>
                  </>
                ) : (
                  <Nav.Link as={Link} to={"/login"}>
                    Login
                  </Nav.Link>
                )}
              {/* </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
