import React, { useContext, useState } from "react";
import { DashboardContext } from "./Context";

export default function UserPage() {
  const user = useContext(DashboardContext);
  console.log(user);
  if (user) {
    console.log(user.data);
    return <>{user.data.access_token}</>;
  }

  // const [user, setUser] = useState(null);
  // setUser(useContext(DashboardContext));
  // console.log(user);

  return <></>;
}
