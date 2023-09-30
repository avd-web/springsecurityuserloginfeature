import { useState } from "react";

export default function MovieSearch({
  search,
  setSearch,
  movieSearch,
  setPage,
}) {
  const [currentSearch, setCurrentSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search !== e.target.value) {
      setPage(0);
    }

    console.log(search);
    movieSearch();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleSearch} value={search} />
        <input type="submit" title="search" />
      </form>
    </div>
  );
}
