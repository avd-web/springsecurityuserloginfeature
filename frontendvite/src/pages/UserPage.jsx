import React, { useContext, useState } from "react";
import { DashboardContext } from "./Context";
import axios from "axios";
import { useEffect } from "react";

export default function UserPage() {
  const access_token = useContext(DashboardContext);
  const [userData, setUserData] = useState();

  const AuthHeader = () =>
    access_token === null
      ? null
      : {
          headers: {
            Authorization: "Bearer " + access_token,
          },
        };

  useEffect(() => {
    console.log("useeffect activated");
    if (access_token) {
      axios
        .get("http://localhost:8080/api/v1/user", AuthHeader())
        .then((response) => setUserData(response.data));
    }
  }, []);

  if (userData) {
    return (
      <>
        <div>
          Welcome back {userData.firstname} {userData.lastname}
        </div>

        <div></div>
      </>
    );
  } else {
    return <>loading....</>;
  }
}
