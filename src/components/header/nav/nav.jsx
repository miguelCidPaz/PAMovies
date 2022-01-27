import { useTranslation } from "react-i18next";
import ButtonTranslations from "./buttomTranslate";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Nav() {
  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate();
  const [getGenresFilms, setGetGenresFilms] = useState([]);
  const [viewModal, setViewModal] = useState(true);

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
  
  const titles = {
    premieres: `/AllPremieres`,
    genres: '/AllGenres',
    about: `/AboutUs`,
  }

  let data = getFilms;

  useEffect(() =>{
  },[])
  
  const takeURL = (value) => {
    return value.replace("http://localhost:3000/", "")
  }

  return (
    <>
      <nav className="nav">
        <p 
        className="views-nav"
        onClick={() => {

          if(takeURL(window.location.href) === titles.genres){
            navigate('/'+takeURL(window.location.href), 
            {state: {modal: viewModal, auxiliarKeys: dataGenres}})

          }else if(takeURL(window.location.href) === titles.premieres){
            navigate('/'+takeURL(window.location.href), 
            {state: {modal: viewModal, auxiliarKeys: data}})

          }else if(takeURL(window.location.href) === titles.about){
            navigate('/'+takeURL(window.location.href), 
            {state: {modal: viewModal, auxiliarKeys: data}})

          }else if(takeURL(window.location.href).length > 3){
            navigate('/' + takeURL(window.location.href), 
            {state: {modal: viewModal, auxiliarKeys: data}})

          }else{
            navigate(`/`, 
            { state: {modal: !viewModal}});
          }
          setViewModal(!viewModal)
        }}
        >
          Randomize
        </p>
        <p
          className="views-nav"
          onClick={() => {
            navigate(titles.premieres, { state: {modal: viewModal, auxiliarKeys: data} });
          }}
        >
          All Premieres
        </p>
        <p
          className="views-nav"
          onClick={() => {
            navigate(titles.genres, { state: {modal: viewModal, auxiliarKeys: dataGenres} });
          }}
        >
          All Categories
        </p>
        <p
          className="views-nav"
          onClick={() => {
            navigate(titles.about);
          }}
        >
          About us
        </p>
        <ButtonTranslations></ButtonTranslations>
      </nav>
    </>
  );
}
