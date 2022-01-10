import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Divisor from "../Divisor/Divisor";

function ListSearch() {
  const [getMovie, setGetMovie] = useState([]);
  const location = useLocation().state;

  let link = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    // console.log(getMovie);
    // location('./detail',{ state :getMovie )
  }, [getMovie]);

  return (
    <div className="container">
      <Divisor title="TITULOS"></Divisor>
      <div className="movie-list">
        {location.map((element) => (
          <div
            className="container-movie-list"
            onClick={() =>
              setGetMovie({ id: element.id, title: element.title })
            }
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
