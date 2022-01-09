import React from "react";
import { useLocation } from "react-router-dom";

function ListSearch() {
  const location = useLocation().state;

  let link = "https://image.tmdb.org/t/p/w500";
  console.log(location[0]);

  return (
    <div className="container">
      {location.map((element) => (
        <div key={element.id}>
          <img src={`${link}${element.poster_path}`} alt=""></img>
          <h1>{element.title}</h1>
          <p>{element.release_date}</p>
        </div>
      ))}
    </div>
  );
}

export default ListSearch;
