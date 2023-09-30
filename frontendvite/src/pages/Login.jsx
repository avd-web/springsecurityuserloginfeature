import React, { useEffect, useState } from "react";
import axios from "axios";
import { DashboardContext } from "./Context";
import UserPage from "./UserPage";
import Register from "./Register";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [authResp, setAuthResp] = useState(null);

  useEffect(() => {
    console.log("useeffect activated");
    if (sessionStorage.getItem("key")) {
      setAuthResp(sessionStorage.getItem("key"));
      console.log("key set:");
      console.table(sessionStorage.getItem("key"));
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let authBody = { email: email, password: password };
    console.log(authBody);

    let auth = await axios
      .post("http://localhost:8080/api/v1/auth/authenticate", authBody)
      .then((response) => {
        sessionStorage.setItem("key", response.data.access_token);
        console.log(response.data.access_token);
        return response.data.access_token;
      })
      //ADD ERROR HANDLING
      .catch((error) => console.log(error));

    setAuthResp(auth);
    console.log(auth);

    emptyForm();
  };

  const emptyForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogout = () => {
    setAuthResp(null);
    sessionStorage.removeItem("key");
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
    }
  } catch {
    //ADD ERROR HANDLING
    (error) => console.log(error);
  }

  return (
    <>
      <p>
        <Link to="/">Account</Link>You are logged in{" "}
        <button onClick={handleLogout}>Logout</button>
      </p>

      <DashboardContext.Provider value={authResp}>
        <UserPage />
      </DashboardContext.Provider>
    </>
  );
}
