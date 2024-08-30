import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="NavbarLinks">
      <Link to="/" className="NavLink">
        Home
      </Link>
      <Link to="/courses" className="NavLink">
        Courses
      </Link>
      <Link to="/pricing" className="NavLink">
        Pricing
      </Link>
      <Link to="/signUp" className="NavLink">
        SignUp
      </Link>
    </div>
  );
}
