import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { AuthHeader } from "../auth/authorization";
// import AddReview from "../components/reviews/addReview";
// import ViewReviews from "../components/reviews/viewReviews";
// import AddToWatchListButton from "../components/watchList/addToWatchListButton";
// import Movie from "../components/movie/movie";

export default function ViewMoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    let getWatchList = async () => {
      let data = await axios.get(
        "http://localhost:8080/api/v1/movie/" + id
        // AuthHeader()
      );

      setMovie(data.data);
    };
    getWatchList();
  }, []);

  if (!movie) {
    return <>loading...</>;
  }

  return (
    <div>
      {console.log(movie.genres)}
      <div>
        <h2>{movie.title}</h2>
        <div className="description-container">
          <p>description goes here</p>
        </div>
        <div className="genres-container">
          {movie.genres.map((genre) => (
            <div key={genre.name} className="genre-container">
              {genre.name}
            </div>
          ))}
        </div>
        <div className="actors-container">
          <div>here be actors</div>
          <div>here be actors</div>
        </div>
      </div>

      {/* <AddReview id={id} />
      <ViewReviews movie_id={id} />
      <AddToWatchListButton movie_id={id} /> */}
    </div>
  );
}
