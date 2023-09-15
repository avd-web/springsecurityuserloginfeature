import React, { useState } from "react";
import "../styles/registerSheet.css";

export default function Login() {
  const [show, setShow] = useState(false);

  const showPassword = () => {
    setShow(!show);
  };

  return (
    <div className="register-container">
      <h1 className="register-header"> Sign in </h1>
      <div className="label-container">
        <form className="register-labels">
          <label htmlFor="email" id="email-label">
            Enter e-mail:
          </label>
          <input type="text" id="email" />
          <label htmlFor="password" id="password-label">
            Enter password:
          </label>
          <input type={show ? "text" : "password"} id="password" />
        </form>
        <button onClick={showPassword} id="show-button">
          {" "}
          show{" "}
        </button>
      </div>
    </div>
  );
}
