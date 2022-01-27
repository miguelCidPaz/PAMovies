import React, { useState, useEffect } from "react";
import axios from "axios";
import { genres } from "./data-main";
import Genres from "./Genres";
import NewFilms from "./NewFilms";
import Divisor from "../Divisor/Divisor";
import { useLocation } from "react-router-dom";
import Randomizer from "../Randomizer/Randomizer";

export default function Main() {
  const [getFilms, setGetFilms] = useState([])
  const [modal, setModal] = useState(false);
  const [keys, setKeys] = useState(undefined);
  const location = useLocation().state;

  useEffect(() => {
    async function getInfo() {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=198b2f6e124efb8ffaed4dd22cc65a8c&language=en-US&page=1adult=false`
        )
        .then((res) => {
          setGetFilms(res.data.results);
          console.log(res.data.results)
          setKeys(res.data.results.map(element => element.id))
        });
    }
    getInfo();
  }, []);

  let data = getFilms;

  return (
    <>
    {
    (location !== undefined && location !== null)
      ? location.modal === modal
      ? <Randomizer modal={modal} setModal={setModal} keys={keys} /> 
      : null 
      : null
    } 

      <div className="container">
        <Divisor title="PREMIERES"></Divisor>
        <div className="main-container background-color">
          <NewFilms data={data} />
        </div>
      </div>
      <div className="container">
        <div>
          <Divisor title="CATEGORIES"></Divisor>
        </div>
        <div className="container-genres">
          <Genres genres={genres} data={data} />
        </div>
      </div>
    </>
  );
}
