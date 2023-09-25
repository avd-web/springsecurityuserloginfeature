import React, { useEffect, useState } from "react";
import axios from "axios";
import { AuthHeader } from "../auth/authorization";
import { DashboardContext } from "./Context";
import UserPage from "./UserPage";
import { useContext } from "react";
import Login from "./Login";

export default function HomePage() {
  const [show, setShow] = useState(false);
  const test = useContext(DashboardContext);
  if (!test) {
    return <>test</>;
  }
}
