import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Become Fitter, Stronger & more confident!</h1>
        <h2>Get started with us from $5 AUD a week</h2>
        <button>Pricing</button>
        <button>Learn More</button>
        <h3>
          More than 1 million people are training with us in one of our programs
          all over Australia and New Zealand
        </h3>
        <p>
          <span>√ Daily Classes</span>
          <span>√ personal Training</span>
          <span>√ Modern Equipment</span>
        </p>
      </div>
      <div>Start training with us today</div>
      <footer className="contact">
        <a href="">Linkedin</a>
        <a href="">Facebook</a>
        <a href="">Twitter</a>
      </footer>
    </div>
  );
}
