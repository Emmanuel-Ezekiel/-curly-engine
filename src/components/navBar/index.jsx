import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-center">
          <Link to="/">
            <span>Logo</span>
          </Link>
          <div className="nav-route">
            <Link to="/about">
              <span>About us</span>
            </Link>
            <Link to="/blog">
              <span>Blog</span>
            </Link>
             <div className="contact-container">
              <Link to="/">
                  <span>Contact Us</span>
              </Link>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
