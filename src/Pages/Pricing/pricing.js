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
          <label className="toggle-switch" for="toggle-checkbox">
            {" "}
          </label>
          Monthly
        </span>
      </div>
      <div className="Wrapper">
        <div className=""></div>
      </div>
    </div>
  );
}
