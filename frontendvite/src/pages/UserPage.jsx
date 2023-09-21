import React, { useContext } from "react";
import axios from "axios";
// import { AuthHeader } from "../auth/authorization";
import { DashboardContext } from "./Context";

export default function UserPage() {
  const user = useContext(DashboardContext);
  user.then((data) => {
    console.log(data);
  });
  // function getUser sessionStorage.getItem("user_email")

  // function getUser() {
  //   axios
  //     .get("http://localhost:8080/api/v1/user", AuthHeader())
  //     .then((response) => {
  //       const currentUser = {
  //         firstname: response.data.firstname,
  //         lastname: response.data.lastname,
  //         email: response.data.email,
  //         //ADD MORE
  //       };
  //       console.log(currentUser);
  //     })
  //     .catch();
  //   //ADD CATCH
  // }

  return <></>;
}
