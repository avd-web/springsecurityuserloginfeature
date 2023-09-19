import React from "react";
import { useState } from "react";
import LoginPage from "./LoginPage";
import axios from "axios";
import { AuthHeader } from "../auth/authorization";
import Auth from "./Auth";

export default function HomePage() {
  // const [show, setShow] = useState(true);

  //WRITE FUNCTION HERE
  //I WANT TO sessionStorage.getItem("user_email") ON LOADING HOMEPAGE

  // let token = sessionStorage.getItem("key");
  // console.log(token);

  // console.log(AuthHeader());

  // axios
  //   .get("http://localhost:8080/api/v1/demo-controller", AuthHeader())
  //   .then((response) => console.log(response));

  // axios.get(
  //   "http://localhost:8080/api/v1/demo-controller",
  //   sessionStorage.getItem("key")
  // );

  return (
    <>
      <div>
        <Auth />
        {/* <LoginPage /> */}
        {/* <button onClick={() => setShow(!show)}> show </button>
        {show ? null : <LoginPage />} */}
      </div>
    </>
  );
}
