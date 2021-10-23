import React from "react";
import {Link} from "react-router-dom";
import '../index.css';

function Navbar() {
  return (
    <div className="navbar">
    <Link to="/">Home</Link>
    <Link to="/Projects">Projects</Link>
    <Link to="/About">About</Link>
    <Link to="/ContactForm">Contact</Link>
    </div>
  );
}

export default Navbar;
