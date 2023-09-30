import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Nav from "./pages/Nav.jsx";
import MoviePage from "./pages/MoviePage.jsx";
import ViewMoviePage from "./pages/ViewMoviePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/movie/:id" element={<ViewMoviePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
