import React from "react";
// import "../../styles/paginationStyle.scss";

export default function Pagination({ page, totalPages, setPage }) {
  const pageArray = [];

  for (let i = 0; i < totalPages; i++) {
    pageArray.push(i);
  }

  console.log(`current page ${page}`);
  console.log(`total pages : ${totalPages}`);

  const showRange = pageArray.filter((number) => {
    if (page === 0) {
      return number <= page + 3 || number === totalPages - 1;
    } else if (page === 1) {
      return number <= page + 2 || number === totalPages - 1;
    } else if (page === totalPages - 2) {
      return (
        (number >= page - 3 && number <= page - 2) ||
        number === page ||
        number === 0 ||
        number === totalPages - 1
      );
    } else if (page === totalPages - 1) {
      return (
        (number >= page - 4 && number <= page - 2) ||
        number === page ||
        number === 0
      );
    } else
      return (
        (number >= page - 1 && number <= page + 1) ||
        number == totalPages - 1 ||
        number == 0
      );
  });

  const handleNext = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    } else alert("limit reached");
  };

  console.log(showRange);

  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
    } else alert("limit reached");
  };

  const handleItem = (e) => {
    setPage(e.target.value);
  };

  return (
    <div className="container">
      <ul className="pagination">
        <button className="pagination-button button1" onClick={handlePrevious}>
          {"<"}
        </button>
        {showRange.map((pageNumber) => (
          <li
            className="pagination-item"
            onClick={handleItem}
            value={pageNumber}
            key={pageNumber}
          >
            {page === pageNumber ? (
              <span id="current-page">{page + 1}</span>
            ) : (
              pageNumber + 1
            )}
          </li>
        ))}
        <button className="pagination-button button2" onClick={handleNext}>
          {">"}
        </button>
      </ul>
    </div>
  );
}
