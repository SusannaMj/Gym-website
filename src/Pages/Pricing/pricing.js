import React, { useState } from "react";
import "./pricing.css";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const navigate = useNavigate();

  function navigateToSignUp() {
    navigate("/signUp");
  }

  let [subscriptionTerm, setSubscriptionTerm] = useState("true");
  let [rotation, setRotation] = useState("false");

  function changeSubscription() {
    setSubscriptionTerm(function (prevState) {
      return !prevState;
    });
    setRotation(function (prevState) {
      return !prevState;
    });
  }

  return (
    <div className="pricing-body">
      <div className="pricing-wrapper">
        <h1>Our pricing</h1>
        <div className="toggle">
          <span>
            <span style={{ color: "gray", fontSize: "25px" }}>Monthly</span>
            <input
              type="checkbox"
              className="toggle-checkbox"
              id="toggle-checkbox"
              onChange={changeSubscription}
            />
            <label className="toggle-switch" htmlFor="toggle-checkbox">
              {" "}
            </label>
            <span style={{ color: "gray", fontSize: "25px" }}>Annually</span>
          </span>
        </div>
        <div className="pricing-cards">
          <div
            className={`pricing-card ${rotation ? "rotated" : ""}`}
            style={{ display: subscriptionTerm ? "grid" : "none" }}
          >
            <div className="subscription-name">
              <h2 style={{ color: "var(--turquoise)" }}>Basic</h2>
              <br />
              <p style={{ color: "var(--light-green)" }}>
                30-day, hassle-free money back guarantee
              </p>
              <p
                style={{
                  fontSize: "20px",
                  color: "var(--grey)",
                  fontWeight: "500",
                }}
              >
                Gain confidenct , strength and have fun with our tailored
                monthly packages, perfect for peopel who want to stay flexible
              </p>
            </div>
            <div
              className="subscription-price"
              style={{ backgroundColor: "var(--opaque)" }}
            >
              <p
                style={{
                  fontSize: "19px",
                  color: "var(--white)",
                  fontWeight: "600",
                }}
              >
                Monthly subscription
              </p>
              <br />
              <span
                style={{
                  fontSize: "30px",
                  color: "var(--white)",
                  fontWeight: "700",
                }}
              >
                $19.99{" "}
              </span>
              <span style={{ color: "var(--white)", opacity: "0.5" }}>
                per month
              </span>
              <button
                style={{ backgroundColor: "var(--light-green)" }}
                onClick={navigateToSignUp}
              >
                Sign Up
              </button>
            </div>
            <div
              className="subscription-inclusions"
              style={{ backgroundColor: "var(--turquoise)" }}
            >
              <ul>
                <li>24/7 access to the gym</li>
                <li>one free class a week</li>
                <li>discounted merchandise</li>
              </ul>
            </div>
          </div>
          <div
            className={`pricing-card ${rotation ? "rotated" : ""}`}
            style={{ display: subscriptionTerm ? "grid" : "none" }}
          >
            {" "}
            <div className="subscription-name">
              <h2 style={{ color: "var(--turquoise)" }}>Professional</h2>
              <br />
              <p style={{ color: "var(--light-green)" }}>
                30-day, hassle-free money back guarantee
              </p>
              <p
                style={{
                  fontSize: "20px",
                  color: "var(--grey)",
                  fontWeight: "500",
                }}
              >
                Gain confidenct , strength and have fun with our tailored
                monthly packages, perfect for peopel who want to stay flexible
              </p>
            </div>
            <div
              className="subscription-price"
              style={{ backgroundColor: "var(--opaque)" }}
            >
              <p
                style={{
                  fontSize: "19px",
                  color: "var(--white)",
                  fontWeight: "600",
                }}
              >
                Monthly subscription
              </p>
              <br />
              <span
                style={{
                  fontSize: "30px",
                  color: "var(--white)",
                  fontWeight: "700",
                }}
              >
                $29.99{" "}
              </span>
              <span style={{ color: "var(--white)", opacity: "0.5" }}>
                per month
              </span>
              <button
                style={{ backgroundColor: "var(--light-green)" }}
                onClick={navigateToSignUp}
              >
                Sign Up
              </button>
            </div>
            <div
              className="subscription-inclusions"
              style={{ backgroundColor: "var(--turquoise)" }}
            >
              <ul>
                <li>24/7 access to the gym</li>
                <li>unlimited free classes</li>
                <li>discounted merchandise</li>
              </ul>
            </div>
          </div>
          <div
            className={`pricing-card ${rotation ? "rotated" : ""}`}
            style={{ display: subscriptionTerm ? "grid" : "none" }}
          >
            {" "}
            <div className="subscription-name">
              <h2 style={{ color: "var(--turquoise)" }}>Master</h2>
              <br />
              <p style={{ color: "var(--light-green)" }}>
                30-day, hassle-free money back guarantee
              </p>
              <p
                style={{
                  fontSize: "20px",
                  color: "var(--grey)",
                  fontWeight: "500",
                }}
              >
                Gain confidenct , strength and have fun with our tailored
                monthly packages, perfect for peopel who want to stay flexible
              </p>
            </div>
            <div
              className="subscription-price"
              style={{ backgroundColor: "var(--opaque)" }}
            >
              <p
                style={{
                  fontSize: "19px",
                  color: "var(--white)",
                  fontWeight: "600",
                }}
              >
                Monthly subscription
              </p>
              <br />
              <span
                style={{
                  fontSize: "30px",
                  color: "var(--white)",
                  fontWeight: "700",
                }}
              >
                $39.99{" "}
              </span>
              <span style={{ color: "var(--white)", opacity: "0.5" }}>
                per month
              </span>
              <button
                style={{ backgroundColor: "var(--light-green)" }}
                onClick={navigateToSignUp}
              >
                Sign Up
              </button>
            </div>
            <div
              className="subscription-inclusions"
              style={{ backgroundColor: "var(--turquoise)" }}
            >
              <ul>
                <li>24/7 access to the gym</li>
                <li>unlimited free classes</li>
                <li>free personal training</li>
              </ul>
            </div>
          </div>
          <div
            className={`pricing-card ${rotation ? "" : "rotated"}`}
            style={{ display: subscriptionTerm ? "none" : "grid" }}
          >
            <div className="subscription-name">
              <h2 style={{ color: "var(--light-red)" }}>Basic</h2>
              <br />
              <p style={{ color: "var(--yellow)" }}>
                30-day, hassle-free money back guarantee
              </p>
              <p
                style={{
                  fontSize: "20px",
                  color: "var(--grey)",
                  fontWeight: "500",
                }}
              >
                Gain confidenct , strength and have fun with our tailored
                monthly packages, perfect for peopel who want to stay flexible
              </p>
            </div>
            <div
              className="subscription-price"
              style={{ backgroundColor: "var(--red)" }}
            >
              <p
                style={{
                  fontSize: "19px",
                  color: "var(--white)",
                  fontWeight: "600",
                }}
              >
                Yearly subscription
              </p>
              <br />
              <span
                style={{
                  fontSize: "30px",
                  color: "var(--white)",
                  fontWeight: "700",
                }}
              >
                $191.99{" "}
              </span>
              <span style={{ color: "var(--white)", opacity: "0.5" }}>
                per year
              </span>
              <button
                style={{ backgroundColor: "var(--light-yellow)" }}
                onClick={navigateToSignUp}
              >
                Sign Up
              </button>
            </div>
            <div
              className="subscription-inclusions"
              style={{ backgroundColor: "var(--light-red)" }}
            >
              <ul>
                <li>24/7 access to the gym</li>
                <li>one free class a week</li>
                <li>discounted merchandise</li>
              </ul>
            </div>
          </div>
          <div
            className={`pricing-card ${rotation ? "" : "rotated"}`}
            style={{ display: subscriptionTerm ? "none" : "grid" }}
          >
            {" "}
            <div className="subscription-name">
              <h2 style={{ color: "var(--light-red)" }}>Professional</h2>
              <br />
              <p style={{ color: "var(--yellow)" }}>
                30-day, hassle-free money back guarantee
              </p>
              <p
                style={{
                  fontSize: "20px",
                  color: "var(--grey)",
                  fontWeight: "500",
                }}
              >
                Gain confidenct , strength and have fun with our tailored
                monthly packages, perfect for peopel who want to stay flexible
              </p>
            </div>
            <div
              className="subscription-price"
              style={{ backgroundColor: "var(--red)" }}
            >
              <p
                style={{
                  fontSize: "19px",
                  color: "var(--white)",
                  fontWeight: "600",
                }}
              >
                Yearly subscription
              </p>
              <br />
              <span
                style={{
                  fontSize: "30px",
                  color: "var(--white)",
                  fontWeight: "700",
                }}
              >
                $287.99{" "}
              </span>
              <span style={{ color: "var(--white)", opacity: "0.5" }}>
                per year
              </span>
              <button
                style={{ backgroundColor: "var(--light-yellow)" }}
                onClick={navigateToSignUp}
              >
                Sign Up
              </button>
            </div>
            <div
              className="subscription-inclusions"
              style={{ backgroundColor: "var(--light-red)" }}
            >
              <ul>
                <li>24/7 access to the gym</li>
                <li>unlimited free classes</li>
                <li>discounted merchandise</li>
              </ul>
            </div>
          </div>
          <div
            className={`pricing-card ${rotation ? "" : "rotated"}`}
            style={{ display: subscriptionTerm ? "none" : "grid" }}
          >
            {" "}
            <div className="subscription-name">
              <h2 style={{ color: "var(--light-red)" }}>Master</h2>
              <br />
              <p style={{ color: "var(--yellow)" }}>
                30-day, hassle-free money back guarantee
              </p>
              <p
                style={{
                  fontSize: "20px",
                  color: "var(--grey)",
                  fontWeight: "500",
                }}
              >
                Gain confidenct , strength and have fun with our tailored
                monthly packages, perfect for peopel who want to stay flexible
              </p>
            </div>
            <div
              className="subscription-price"
              style={{ backgroundColor: "var(--red)" }}
            >
              <p
                style={{
                  fontSize: "19px",
                  color: "var(--white)",
                  fontWeight: "600",
                }}
              >
                Yearly subscription
              </p>
              <br />
              <span
                style={{
                  fontSize: "30px",
                  color: "var(--white)",
                  fontWeight: "700",
                }}
              >
                $383.99{" "}
              </span>
              <span style={{ color: "var(--white)", opacity: "0.5" }}>
                per year
              </span>
              <button
                style={{ backgroundColor: "var(--light-yellow)" }}
                onClick={navigateToSignUp}
              >
                Sign Up
              </button>
            </div>
            <div
              className="subscription-inclusions"
              style={{ backgroundColor: "var(--light-red)" }}
            >
              <ul>
                <li>24/7 access to the gym</li>
                <li>unlimited free classes</li>
                <li>free personal training</li>
              </ul>
            </div>
          </div>
        </div>{" "}
        <a
          className="attribution"
          rel="norefferrer"
          target="_blank"
          href="www.freepik.com"
        >
          {" "}
          backgound image by{" "}
          <a
            href="https://www.freepik.com/author/creative-hat"
            target="_blank"
            rel="noreferrer"
          >
            Creative_hat
          </a>
          www.freepik.com
        </a>
      </div>
    </div>
  );
}
