import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import MoviePage from "./pages/MoviePage.jsx";
import ViewMoviePage from "./pages/ViewMoviePage.jsx";
import Header from "./components/headerfooter/Header.jsx";
import Footer from "./components/headerfooter/Footer.jsx";
import RecommendedPage from "./pages/RecommendedPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/movie/:id" element={<ViewMoviePage />} />
        <Route path="/recommended" element={<RecommendedPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
