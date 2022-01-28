import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Divisor from "../Divisor/Divisor";
//renderiamos los datos que nos va a pasar el navegador cuando hagan click en el botón de All Premieres
export default function AllPremieres() {
  const location = useLocation().state;
  const navigate = useNavigate();

  return (
    <div className="container ">
      <div className="title-genre">
        <Divisor title={"ALL PREMIERES"}></Divisor>
      </div>
      <div className="all-components">
        {location.map((element) => (
          <div
            className="ind-premiere"
            key={element.id}
            onClick={() => {
              navigate(`/details/movie/${element.id}`);
            }}
          >
            <figure>
              {element.poster_path.includes("null") ? (
                <img
                  alt="premiere film"
                  src={`https://www.gruposertec.com/wp-content/uploads/2015/03/no_image_available.jpeg`}
                />
              ) : (
                <img
                  className="image-"
                  alt="film"
                  src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
                />
              )}
            </figure>
            <p className="title-premiere">{element.title}</p>
            <button className="details">
              <span></span>
              <span></span>
              <span></span>
              <span></span> Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
