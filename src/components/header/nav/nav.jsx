import ButtonTranslations from "./buttomTranslate";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../footer/footer";

import { t } from "i18next";
import { useTranslation } from "react-i18next";

export default function Nav() {
  const [t, i18n] = useTranslation("global");
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
  const [getFilms, setGetFilms] = useState([]);

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
      <nav className="nav">
        <p
          className="views-nav"
          onClick={() => {
            navigate(`/AllPremieres`, { state: data });
          }}
        >
          {t("dividers.premieres")}
        </p>
        <p
          className="views-nav"
          onClick={() => {
            navigate(`/AllGenres`, { state: dataGenres });
          }}
        >
          {t("dividers.categories")}
        </p>
        <p
          className="views-nav"
          onClick={() => {
            navigate(`/AboutUs`);
          }}
        >
          {t("aboutUs")}
        </p>
        <ButtonTranslations></ButtonTranslations>
      </nav>
    </>
  );
}
