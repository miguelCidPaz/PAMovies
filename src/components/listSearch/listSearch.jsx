import React from "react";
import { useLocation } from "react-router-dom";
import Divisor from "../Divisor/Divisor";

function ListSearch() {
  const location = useLocation().state;

  let link = "https://image.tmdb.org/t/p/w500";
  console.log(location[0]);

  return (
    <div className="container">
      <Divisor title="TITULOS"></Divisor>
      <div className="movie-list">
        {location.map((element) => (
          <div className="container-movie-list" key={element.id}>
            <img
              className="img-movie-list"
              src={`${link}${element.poster_path}`}
              alt=""
            ></img>
            <div className="movie-list-detail">
              <h1>{element.title}</h1>
              <p>{element.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListSearch;
