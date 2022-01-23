import React, { useState, useEffect } from "react";
import GenreType from "./GenreType";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      className={className}
      style={{ ...style, fontSize: "35px", color: "white", height: "50px" }}
      onClick={onClick}
    />
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosNewIcon
      className={className}
      style={{ ...style, fontSize: "35px", color: "white", height: "50px" }}
      onClick={onClick}
    />
  );
}

export default function Genres(props) {
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

  let settings = {
    dots: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 3,
    arrows: true,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "70px",
        },
      },
    ],
  };

  return (
    <>
      <Button
        className="buttonAll details--back"
        onClick={() => {
          navigate(`/AllGenres`, { state: dataGenres });
        }}
      >
        ALL CATEGORIES
      </Button>

      <Slider {...settings}>
        {dataGenres.map((item) => (
          <div className="news-container" key={item.id}>
            <GenreType
              title={item.name}
              id={item.id}
              theme={props.genres.src}
            />
          </div>
        ))}
      </Slider>
    </>
  );
}
