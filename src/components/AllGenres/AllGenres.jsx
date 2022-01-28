import { useNavigate } from "react-router-dom";
import { genres } from "../Main/data-main";
import Divisor from "../Divisor/Divisor";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllGenres() {
  const navigate = useNavigate();

  const [getGenresFilms, setGetGenresFilms] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=198b2f6e124efb8ffaed4dd22cc65a8c&language=en-US`
        )
        .then((res) => {
          setGetGenresFilms(res.data.genres);
        });
    }
    getData();
  }, []);

  return (
    <div className="container">
      <Divisor title="ALL CATEGORIES"></Divisor>
      <div className="containerGenres ">
        {getGenresFilms.map((element) => (
          <div
            className="type-container"
            key={element.id}
            onClick={() => {
              navigate(`/Genres/${element.name}/${element.id}`);
            }}
          >
            <img
              src={genres.src}
              height={240}
              width={150}
              alt="genre"
              className="image-genres"
            />
            <p className="centerGender big">{element.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
