import React from "react";
import "./pricing.css";

export default function Pricing() {
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
          />
          <label className="toggle-switch" htmlFor="toggle-checkbox">
            {" "}
          </label>
          Annually
        </span>
      </div>
      <div className="Wrapper">
        <div className="pricing-cards">
          <div className="pricing-card ">
            <div className="subscription-name">
              <h2>Basic</h2>
              <br />
              <p>30-day, hassle-free money back guarantee</p>
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
            <div className="subscription-price">
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
              <button>Sign Up</button>
            </div>
            <div className="subscription-inclusions">
              <ul>
                <li>24/7 access to the gym</li>
                <li>one free class a week</li>
                <li>discounted merchandise</li>
              </ul>
            </div>
          </div>
          <div className="pricing-card">
            {" "}
            <div className="subscription-name">
              <h2>Professional</h2>
              <br />
              <p>30-day, hassle-free money back guarantee</p>
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
            <div className="subscription-price">
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
              <button>Sign Up</button>
            </div>
            <div className="subscription-inclusions">
              <ul>
                <li>24/7 access to the gym</li>
                <li>unlimited free classes</li>
                <li>discounted merchandise</li>
              </ul>
            </div>
          </div>
          <div className="pricing-card">
            {" "}
            <div className="subscription-name">
              <h2>Master</h2>
              <br />
              <p>30-day, hassle-free money back guarantee</p>
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
            <div className="subscription-price">
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
              <button>Sign Up</button>
            </div>
            <div className="subscription-inclusions">
              <ul>
                <li>24/7 access to the gym</li>
                <li>unlimited free classes</li>
                <li>free personal training</li>
              </ul>
            </div>
          </div>
          <div className="pricing-card">
            <div className="subscription-name">
              <h2>Basic</h2>
              <br />
              <p>30-day, hassle-free money back guarantee</p>
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
            <div className="subscription-price">
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
              <button>Sign Up</button>
            </div>
            <div className="subscription-inclusions">
              <ul>
                <li>24/7 access to the gym</li>
                <li>one free class a week</li>
                <li>discounted merchandise</li>
              </ul>
            </div>
          </div>
          <div className="pricing-card">
            {" "}
            <div className="subscription-name">
              <h2>Professional</h2>
              <br />
              <p>30-day, hassle-free money back guarantee</p>
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
            <div className="subscription-price">
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
              <button>Sign Up</button>
            </div>
            <div className="subscription-inclusions">
              <ul>
                <li>24/7 access to the gym</li>
                <li>unlimited free classes</li>
                <li>discounted merchandise</li>
              </ul>
            </div>
          </div>
          <div className="pricing-card ">
            {" "}
            <div className="subscription-name">
              <h2>Master</h2>
              <br />
              <p>30-day, hassle-free money back guarantee</p>
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
            <div className="subscription-price">
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
              <button>Sign Up</button>
            </div>
            <div className="subscription-inclusions">
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
