import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);

  const handlePassword = (e) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postUser = {
      email: user.email,
      password: user.password,
      // role : "USER",
    };
    console.log(postUser);

    axios
      .post("http://localhost:8080/api/v1/auth/authenticate", postUser)
      //   .then((response) => console.table(response))
      .then((response) =>
        sessionStorage.setItem("key", response.data.access_token)
      )
      .then(() => console.log(sessionStorage.getItem("key")));

    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h1> Sign in </h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              value={user.email}
              onChange={handleEmail}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type={show ? "text" : "password"}
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              value={user.password}
              onChange={handlePassword}
              required
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
