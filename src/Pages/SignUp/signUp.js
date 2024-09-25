import React, { useState } from "react";
import "./signUp.css";

export default function SignUp() {
  let [name, setName] = useState("");

  function handleNameInput(event) {
    setName(event.target.value);
  }
  function signUpMessage() {
    let adjustedName = name.toUpperCase();
    alert(
      `Thank you for signing up ${adjustedName}, we will be in touch shortly!`
    );
  }
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
          onClick={signUpMessage}
        >
          Try it free for 7 days{" "}
          <span style={{ opacity: "0.6" }}>
            | full price as per chosen package thereafter
          </span>
        </button>
        <div className="signUpMain">
          <input
            type="text"
            placeholder="FIRST NAME"
            name="first-name"
            onChange={handleNameInput}
          />
          <input type="text" placeholder="LAST NAME" name="surname" />
          <input type="email" placeholder="EMAIL" name="email" />
          <input type="password" placeholder="PASSWORD" name="password" />
          <button
            style={{
              backgroundColor: "var(--dark-green)",
              color: "var(--white)",
            }}
            onClick={signUpMessage}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
