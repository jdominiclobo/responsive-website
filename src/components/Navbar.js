import React from "react";
import { Link } from "react-router-dom";
import { GiSmokingFinger } from "react-icons/gi";
import { FaBeer, FaTimes } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <GiSmokingFinger className="navbar-icon" />
            Smokin
          </Link>
          <div className="menu-icon">{}</div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
