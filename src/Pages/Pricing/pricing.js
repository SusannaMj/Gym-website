import React from "react";
import "./pricing.css";

export default function Pricing() {
  return (
    <div>
      <h1>Our pricing</h1>
      <div className="toggle">
        <span>
          Annually
          <input
            type="checkbox"
            className="toggle-checkbox"
            id="toggle-checkbox"
          />
          <label className="toggle-switch" htmlFor="toggle-checkbox">
            {" "}
          </label>
          Monthly
        </span>
      </div>
      <div className="Wrapper">
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="subscription-name" id="1">
              Basic
              <br />
              30-day, hassle-free money back guarantee
            </div>
            <div className="subscription-price" id="2">
              $19.99
              <button>Sign Up</button>
            </div>
            <div className="subscription-inclusions" id="3">
              <ul>
                <li>24/7 access to the gym</li>
                <li>1 free class a week</li>
                <li>discounted merchandise</li>
              </ul>
            </div>
          </div>
          <div className="pricing-card">
            {" "}
            <div className="subscription-name" id="1">
              Professional
              <br />
              30-day, hassle-free money back guarantee
            </div>
            <div className="subscription-price" id="2">
              $24.99
              <button>Sign Up</button>
            </div>
            <div className="subscription-inclusions" id="3">
              <ul>
                <li>24/7 access to the gym</li>
                <li>unlimited free classes</li>
                <li>discounted merchandise</li>
              </ul>
            </div>
          </div>
          <div className="pricing-card">
            {" "}
            <div className="subscription-name" id="1">
              Master
              <br />
              30-day, hassle-free money back guarantee
            </div>
            <div className="subscription-price" id="2">
              $39.99
              <button>Sign Up</button>
            </div>
            <div className="subscription-inclusions" id="3">
              <ul>
                <li>24/7 access to the gym</li>
                <li>unliited free classes</li>
                <li>free personal training sessions </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
