import React from "react";
import "./footer.css";
import { useNavigate, useNavigation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const navigate = useNavigate();

  function navigateToSignUp() {
    navigate("/signUp");
  }

  return (
    <div className="contact">
      <form>
        <input type="email" className="homepageEmail" placeholder="Email" />
        <button
          style={{ backgroundColor: "var(--red)" }}
          className="homepageSignUpButton"
          onClick={navigateToSignUp}
        >
          Sign up
        </button>
      </form>
      <a href="" rel="noreferrer">
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className="icon"
          name="linkedin-icon"
        />
      </a>
      <a href="#" rel="noreferrer">
        <FontAwesomeIcon
          icon={faFacebookF}
          className="icon"
          name="facebook-icon"
        />
      </a>
      <a href="" rel="noreferrer">
        <FontAwesomeIcon
          icon={faTwitter}
          className="icon"
          name="twitter-icon"
        />
      </a>
    </div>
  );
}
