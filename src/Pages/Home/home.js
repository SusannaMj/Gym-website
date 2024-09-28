import React from "react";
import "./home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="homepageBody">
      <div className="overlay">
        <div className="stripe"></div>
        <div className="homepageHero">
          <h1>Become Fitter, Stronger & more confident!</h1>
          <h2>Get started with us from $5 AUD a week</h2>
          <button>Pricing</button>
          <button>Learn More</button>
          <h3>
            More than 1 million people are training with us in one of our
            programs all over Australia and New Zealand
          </h3>
          <p>
            <span>√ Daily Classes</span>
            <span>√ personal Training</span>
            <span>√ Modern Equipment</span>
          </p>{" "}
        </div>
        <div className="stripeTwo"></div>{" "}
      </div>{" "}
      <footer className="contact">
        <a href="">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="#" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </footer>
    </div>
  );
}
