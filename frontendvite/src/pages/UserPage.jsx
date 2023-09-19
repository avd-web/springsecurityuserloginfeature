import React from "react";
import axios from "axios";
import { AuthHeader } from "../auth/authorization";

export default function UserPage() {
  // function getUser sessionStorage.getItem("user_email")

  function getUser() {
    axios
      .get("http://localhost:8080/api/v1/user", AuthHeader())
      .then((response) => {
        const currentUser = {
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          email: response.data.email,
          //ADD MORE
        };
        console.log(currentUser);
      })
      .catch();
    //ADD CATCH
  }

  return <>{getUser()}</>;
}
