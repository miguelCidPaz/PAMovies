import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Divisor from "../Divisor/Divisor";

function ListSearch() {
  const location = useLocation().state;
  const navigate = useNavigate();

  let link = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="container">
      <Divisor title="TITULOS"></Divisor>
      <div className="movie-list">
        {location.map((element) => (
          <div
            className="container-movie-list"
            onClick={() => {
              navigate(`/details/movie/${element.id}`);
            }}
            key={element.id}
          >
            <img
              className="img-movie-list"
              src={`${link}${element.poster_path}`}
              alt=""
            ></img>
            <div className="movie-list-detail">
              <h1>{element.title}</h1>
              <p>( {element.release_date} )</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListSearch;
