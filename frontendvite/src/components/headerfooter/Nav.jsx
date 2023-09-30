import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  var LinkData = [
    { name: "Movies", link: "/movie" },
    { name: "Recommended", link: "/recommended" },
    { name: "Watchlist", link: "/watchlist" },
    { name: "Login", link: "/" },
  ];

  return (
    <>
      <nav>
        <ul>
          {LinkData.map((LinkData) => (
            <li className="nav__item" key={LinkData.name}>
              <Link to={LinkData.link}>{LinkData.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
