import React, { useState, useEffect } from "react";
import axios from "axios";
import { genres } from "./data-main";
import Genres from "./Genres";
import NewFilms from "./NewFilms";
import Divisor from "../Divisor/Divisor";
import { useLocation, useParams } from "react-router-dom";
import Randomizer from "../Randomizer/Randomizer";

export default function Main() {
  const [getFilms, setGetFilms] = useState([])
  const location = useLocation().state;

  useEffect(() => {
    async function getInfo() {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=198b2f6e124efb8ffaed4dd22cc65a8c&language=en-US&page=1adult=false`
        )
        .then((res) => {
          setGetFilms(res.data.results);
        });
    }
    getInfo();
  }, []);

  let data = getFilms;

  console.log(location.modal)

  return (
    <>
    {location.modal ? <Randomizer /> : null}
      <div className="container">
        <Divisor title="PREMIERES"></Divisor>
        <div className="main-container background-color">
          <NewFilms data={data} />
        </div>
      </div>
      <div>
        <div className="container">
          <Divisor title="CATEGORIES"></Divisor>
        </div>
        <div>
          <Genres genres={genres} data={data} />
        </div>
      </div>
    </>
  );
}
