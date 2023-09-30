import { React, useState, useEffect } from "react";
import { useContext } from "react";
import { DashboardContext } from "./Context";
import Login from "./Login";

export default function RecommendedPage() {
  const access_token = useContext(DashboardContext);

  if (access_token) {
    return (
      <>
        <p>{access_token}</p>
      </>
    );
  } else {
    return <>Please log in</>;
  }
}
