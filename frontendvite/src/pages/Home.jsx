import React from "react";
import Register from "./Register";
import Login from "./Login";
import { useState } from "react";

export default function HomePage() {
  const [color, setColor] = useState("red");
  const [user, setUser] = useState("");

  return (
    <>
      <Login />
      <Register />

      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>

      <h1>My name is {user}!</h1>
      <button
        type="button"
        onClick={() => setUser(sessionStorage.getItem("key"))}
      >
        show name
      </button>
    </>
  );
}
