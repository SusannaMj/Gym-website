import React from "react";
import "./signUp.css";

export default function SignUp() {
  return (
    <div className="signUpWrapper">
      <div className="catchPhrase">
        Ready to take the leap into a health´ier, happier life?
      </div>
      <div className="signUpForm">
        <div>
          <input type="text" placeholder="FIRST NAME" />
          <input type="text" placeholder="LAST NAME" />
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
