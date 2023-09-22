import React, { useContext } from "react";
import { DashboardContext } from "./Context";

export default function UserPage() {
  const user = useContext(DashboardContext);
  console.log(user);

  return (
    <>
      <p>{user ? user.firstname : "guest"}</p>
    </>
  );
}
