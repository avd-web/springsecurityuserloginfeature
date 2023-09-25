import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <ul>
        <li>
          <div>
            <Link to="http://localhost:5173/">Home</Link>
          </div>
        </li>
      </ul>
    </>
  );
}
