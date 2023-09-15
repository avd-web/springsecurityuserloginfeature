import React from "react";
import Register from "./Register";
import Login from "./Login";

export default function HomePage() {
  return (
    <div>
      <div>
        <h1> Home </h1>
        <Register />
        <Login />
      </div>
    </div>
  );
}
