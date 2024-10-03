import React from "react";
import "./home.css";
import Footer from "../../Footer/footer";
import { useNavigate, useNavigation } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

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
      <Footer />
      <p className="attribution">
        Foto von{" "}
        <a
          target="_blank"
          href="https://unsplash.com/de/@scottwebb?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        >
          Scott Webb
        </a>{" "}
        auf{" "}
        <a
          target="_blank"
          href="https://unsplash.com/de/fotos/frau-tragt-schwarzes-oberteil-und-halt-schwarze-hanteln-die-vor-dem-spiegel-stehen-Vn39uEkX00s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        >
          Unsplash
        </a>
      </p>
    </div>
  );
}
