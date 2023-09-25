import React, { useContext } from "react";
import { DashboardContext } from "./Context";

export default function UserPage() {
  const user = useContext(DashboardContext);
  console.log(user);

  if (user) {
    console.log(user.data);
    return <>{user.data.access_token}</>;
  }
}
