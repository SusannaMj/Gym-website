import React from "react";
import "./home.css";
import { useNavigate, useNavigation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const navigate = useNavigate();

  function navigateToSignUp() {
    navigate("/signUp");
  }

  function navigateToPricing() {
    navigate("/pricing");
  }

  function navigateToCourses() {
    navigate("/courses");
  }

  return (
    <div className="homepageBody">
      <div className="overlay">
        <div className="stripe"></div>
        <div className="homepageHero">
          <h1>Become Fitter, Stronger & more Confident!</h1>
          <div className="button-container">
            <button onClick={navigateToPricing}>Pricing</button>
            <button onClick={navigateToCourses}>Learn More</button>
          </div>
          <p className="ticks">
            <span>√ Daily Classes</span>
            <span>√ personal Training</span>
            <span>√ Modern Equipment</span>
          </p>{" "}
        </div>
        <div className="stripeTwo"></div>{" "}
      </div>{" "}
      <footer className="contact">
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
        <a href="">
          <FontAwesomeIcon icon={faLinkedinIn} id="icon" />
        </a>
        <a href="#" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebookF} id="icon" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faTwitter} id="icon" />
        </a>

        <p className="attribution">
          Foto von{" "}
          <a href="https://unsplash.com/de/@scottwebb?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Scott Webb
          </a>{" "}
          auf{" "}
          <a href="https://unsplash.com/de/fotos/frau-tragt-schwarzes-oberteil-und-halt-schwarze-hanteln-die-vor-dem-spiegel-stehen-Vn39uEkX00s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </p>
      </footer>
    </div>
  );
}
