import React from "react";
import { useState } from "react";
import LoginPage from "./LoginPage";

export default function HomePage() {
  // const [color, setColor] = useState("red");
  // const [user, setUser] = useState("");
  const [show, setShow] = useState(true);

  return (
    <>
      {/* <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>

      <h1>My name is {user}!</h1>
      <button
        type="button"
        onClick={() => setUser(sessionStorage.getItem("key"))}
      >
        show name
      </button> */}

      <div>
        {show ? null : <LoginPage />}

        <button onClick={() => setShow(!show)}> show </button>
      </div>
    </>
  );
}
