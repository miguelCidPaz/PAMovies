import React, { useState, useEffect } from "react";
import axios from "axios";
import AnimationGenre from "./AnimationGenre";
import Divisor from "../Divisor/Divisor";
import { useParams } from "react-router-dom";

export default function ListGenres() {
  const params = useParams();
  //   const gender_ID = params.id;
  const gender_name = params.title;

  const [orderFilms, setOrderFilms] = useState([]);

  useEffect(() => {
    async function getID() {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=fb1999e69926d1387eb44c3abee6e7c5&language=en-US&with_genres=&primary_release_year=2021`
        )

        .then((res) => {
          setOrderFilms(res.data.results);
        });
    }
    getID();
  }, []);

  let data = orderFilms;

  return (
    <div className="title-genre container">
      <Divisor title={`${gender_name}`}></Divisor>
      <div className="genre-container">
        <AnimationGenre data={data} />
      </div>
    </div>
  );
}
