import React from "react";
import { AuthHeader } from "../auth/authorization";
import Login from "./Login";
import UserPage from "./UserPage";

export default function Auth() {
  //   console.log(AuthHeader());

  // axios
  //   .get("http://localhost:8080/api/v1/demo-controller", AuthHeader())
  //   .then((response) => console.log(response));

  function authenticate() {
    let token = null;
    try {
      token = sessionStorage.getItem("access_token");
      console.log(token);
    } catch (error) {
      console.error("Something bad happened retrieving the access token");
      console.error(error);
    }
    if (token) {
      return (
        <>
          <UserPage />
        </>
      );
    } else {
      return (
        <>
          <Login />
        </>
      );
    }
  }

  return <>{authenticate()}</>;
}
