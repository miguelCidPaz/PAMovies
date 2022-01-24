import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Nav() {
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
  let dataGenres = getGenresFilms;

  return (
    <>
      <nav className="nav">
        <p
          className="views-nav"
          onClick={() => {
            navigate(`/AllPremieres`);
          }}
        >
          All Premieres
        </p>
        <p
          className="views-nav"
          onClick={() => {
            navigate(`/AllGenres`, { state: dataGenres });
          }}
        >
          All Categories
        </p>
        <p className="views-nav">inicio</p>
        <p className="views-nav">inicio</p>
      </nav>
    </>
  );
}
