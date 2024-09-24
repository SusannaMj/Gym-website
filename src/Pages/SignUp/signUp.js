import React from "react";
import "./signUp.css";

export default function SignUp() {
  return (
    <div className="signUpWrapper">
      <div className="catchPhrase">
        <h2>Ready to take the leap into a healthier, happier life?</h2>
        <p>
          Sign up and join us and milions of others - choose a package that best
          suits your needs and we will be in contact soon
        </p>
      </div>
      <div className="signUpForm">
        <button
          className="tryButton"
          style={{ backgroundColor: "var(--purple)", color: "var(--white)" }}
        >
          Try it free for 7 days{" "}
          <sapn style={{ opacity: "0.6" }}>
            | full price as per chosen package thereafter
          </sapn>
        </button>
        <div className="signUpMain">
          <input type="text" placeholder="FIRST NAME" />
          <input type="text" placeholder="LAST NAME" />
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <button
            style={{
              backgroundColor: "var(--dark-green)",
              color: "var(--white)",
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
