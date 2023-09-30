import React, { useContext, useState } from "react";
import { DashboardContext } from "./Context";
import axios from "axios";
import { useEffect } from "react";

export default function UserPage() {
  const access_token = useContext(DashboardContext);
  const [userData, setUserData] = useState();

  // const test = axios.get(
  //   "http://localhost:8080/api/v1/user",
  //   {
  //     headers: {
  //       Authorization: `token ${access_token}`,
  //     },
  //   }.then()
  // );

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
        // .then((response) => console.log(response));
        .then((response) => setUserData(response.data));
      // .then((response) => console.log(userData));
    }
  }, []);

  if (userData) {
    return (
      <>
        <div>{userData.firstname}</div>
        <div>{userData.lastname}</div>
      </>
    );
  } else {
    return <>loading....</>;
  }
}
