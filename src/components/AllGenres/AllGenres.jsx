import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { genres } from "../Main/data-main";
import Divisor from "../Divisor/Divisor";

export default function AllGenres() {
  const location = useLocation().state;
  const navigate = useNavigate();

  return (
    <div className="container">
      <Divisor title="ALL CATEGORIES"></Divisor>
      <div className="containerGenres ">
        {location.map((element) => (
          <div
            className="type-container"
            key={element.id}
            onClick={() => {
              navigate(`/Genres/${element.name}/${element.id}`);
            }}
          >
            <img
              src={genres.src}
              height={250}
              width={160}
              alt="genre"
              className="image-film"
            />
            <p className="centerGender big">{element.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
