import React, { useState } from "react";
import "./pricing.css";

export default function Pricing() {
  let [subscriptionTerm, setSubscriptionTerm] = useState("true");

  function changeSubscription() {
    setSubscriptionTerm(function (prevState) {
      return !prevState;
    });
  }

  return (
    <div className="pricing-body">
      <h1>Our pricing</h1>
      <div className="toggle">
        <span>
          Monthly
          <input
            type="checkbox"
            className="toggle-checkbox"
            id="toggle-checkbox"
            onChange={changeSubscription}
          />
          <label className="toggle-switch" htmlFor="toggle-checkbox">
            {" "}
          </label>
          Annually
        </span>
      </div>
      <div className="Wrapper">
        <div className="pricing-cards">
          <div
            className="pricing-card"
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
                  fontSize: "16px",
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
              <button style={{ backgroundColor: "var(--light-green)" }}>
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
            className="pricing-card"
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
                  fontSize: "16px",
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
              <button style={{ backgroundColor: "var(--light-green)" }}>
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
            className="pricing-card"
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
                  fontSize: "16px",
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
              <button style={{ backgroundColor: "var(--light-green)" }}>
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
            className="pricing-card"
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
                  fontSize: "16px",
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
              <button style={{ backgroundColor: "var(--light-yellow)" }}>
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
            className="pricing-card"
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
                  fontSize: "16px",
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
              <button style={{ backgroundColor: "var(--light-yellow)" }}>
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
            className="pricing-card"
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
                  fontSize: "16px",
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
              <button style={{ backgroundColor: "var(--light-yellow)" }}>
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
        </div>
      </div>
    </div>
  );
}
