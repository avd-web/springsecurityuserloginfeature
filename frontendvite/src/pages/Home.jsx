import React, { useEffect, useState } from "react";
import axios from "axios";
import { AuthHeader } from "../auth/authorization";
import { DashboardContext } from "./Context";
import UserPage from "./UserPage";

export default function HomePage() {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    if (AuthHeader()) {
      axios
        .get("http://localhost:8080/api/v1/user", AuthHeader())
        .then((data) => {
          setUserDetails(data.data);
        });
    }
  }, []);

  return (
    <>
      <DashboardContext.Provider value={userDetails}>
        <UserPage />
      </DashboardContext.Provider>
    </>
  );
}
