import React, { useContext } from "react";
import { DashboardContext } from "./Context";

export default function UserPage() {
  const access_token = useContext(DashboardContext);

  if (access_token) {
    return <>{access_token}</>;
  } else {
    return <>loading....</>;
  }
}
