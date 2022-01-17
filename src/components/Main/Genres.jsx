import React, { useState, useEffect } from "react";
import GenreType from "./GenreType";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <ArrowForwardIosIcon className={className} style={{...style,  color:"white", height:"50px" }} onClick={onClick}/>   
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosIcon className={className}
    style={{...style, 
    color:"white",
    height:"50px" }} 
    onClick={onClick}/>   
  );
}

export default function Genres(props) {
  const [getGenresFilms, setGetGenresFilms] = useState([]);

  useEffect(async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=198b2f6e124efb8ffaed4dd22cc65a8c&language=en-US`
      )
      .then((res) => {
        setGetGenresFilms(res.data.genres);
      });
  }, []);

  let dataGenres = getGenresFilms;

  let settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    className: "gender-slider",
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="row-container">
        <div>
          <p className="row-title">ALL CATEGORY</p>
        </div>

        <Slider {...settings}>
        {dataGenres.map((item) => (
        <div className="news-container" key={item.id}>
        
          <GenreType
            title={item.name}
            id={item.id}
            theme={props.genres.src}
            dataGenres={props.data}
          />
        </div>
        ))}
        </Slider>
      </div>
    </>
  );
}

