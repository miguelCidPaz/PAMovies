import React from "react";
import Slider from "react-slick";
import Film from "./Film";

export default function NewFilms(props) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // centerMode: true,
    arrows: true,
    focusOnSelect: true,
    className: "news-slider",
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          rows: 2,
          slidesToShow: 2,
          slidesToScroll: 2,
          
        },
      },
      {
        breakpoint: 600,
        settings: {
          rows: 2,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {props.data.map((item) => (
          <div className="news-container" key={item.id}>
            <Film
              item={item}
            />
          </div>
        ))}
      </Slider>
    </>
  );
}
