import React, { useState, useEffect } from "react";
import axios from "axios";
import { genres } from "./data-main";
import Genres from "./Genres";
import NewFilms from "./NewFilms";
import Divisor from "../Divisor/Divisor";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export default function Main() {
  const [getFilms, setGetFilms] = useState([]);
  const [t] = useTranslation("global");
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

  return (
    <>
      <div className="container">
        <Divisor title={t("dividers.premieres")}></Divisor>
        <div className="main-container background-color">
          <NewFilms data={data} />
        </div>
      </div>
      <div className="container">
        <div>
          <Divisor title={t("dividers.categories")}></Divisor>
        </div>
      </div>
      <div className="container-genres">
        <Genres genres={genres} data={data} />
      </div>
    </>
  );
}
