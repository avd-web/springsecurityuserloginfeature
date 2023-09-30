import React, { useEffect, useState } from "react";
// import "../../styles/movieSheet.css";
import { Link } from "react-router-dom";

export default function MovieList({ movie }) {
  return (
    // <tr key={movie.id} className="movie-container">
    //   <td className="text-items item1"> {movie.title} </td>
    //   <td className="text-items item2"> description </td>
    //   <td className="text-items item3"> score </td>
    //   <td>
    <Link to={"/movie/" + movie.id}>
      {" "}
      <button className="text-items button"> view </button>
    </Link>
    // </td>
    // </tr>
  );
}
