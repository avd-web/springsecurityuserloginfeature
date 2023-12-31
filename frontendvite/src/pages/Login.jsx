import React, { useState } from "react";
import axios from "axios";
import { DashboardContext } from "./Context";
import UserPage from "./UserPage";
import Register from "./Register";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [authResp, setAuthResp] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let authBody = { email: email, password: password };
    console.log(authBody);

    let authResp = await axios
      .post("http://localhost:8080/api/v1/auth/authenticate", authBody)
      .then((response) => {
        console.log(response);
        return response;
      })
      //ADD ERROR HANDLING
      .catch((error) => console.log(error));

    setAuthResp(authResp);
    console.log(authResp);

    emptyForm();
  };

  const emptyForm = () => {
    setEmail("");
    setPassword("");
  };

  try {
    if (!authResp) {
      return (
        <div className="register-container">
          <h1 className="register-header"> Sign in </h1>
          <div className="label-container">
            <form className="register-labels" onSubmit={handleSubmit}>
              <label htmlFor="email" id="email-label">
                Enter e-mail:
              </label>
              <input
                type="text"
                id="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="password" id="password-label">
                Enter password:
              </label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(ev) => {
                  setPassword(ev.target.value);
                }}
              />
              <button type="submit">login</button>
            </form>
            <Register />
          </div>
        </div>
      );
    } else {
      return (
        <>
          <DashboardContext.Provider value={authResp}>
            <UserPage />
          </DashboardContext.Provider>
          <p>You are logged in</p>
        </>
      );
    }
  } catch {
    //ADD ERROR HANDLING
    (error) => console.log(error);
  }
}
