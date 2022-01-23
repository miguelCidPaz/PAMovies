import React from "react";
import Slider from "react-slick";
import Film from "./Film";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="arrows arrow-2">
      <ArrowForwardIosIcon
        className={className}
        style={{ ...style, fontSize: "35px", color: "white", right: "-35px" }}
        onClick={onClick}
      />
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="arrows arrow-1">
      <ArrowBackIosNewIcon
        className={className}
        style={{ ...style, fontSize: "35px", color: "white", left: "-32px" }}
        onClick={onClick}
      />
    </div>
  );
}

export default function NewFilms(props) {
  let settings = {
    dots: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    arrows: true,
    autoplay: true,
    className: "container-slider-films",
    autoplaySpeed: 3000,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          rows: 2,
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          rows: 2,
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {props.data.map((item) => (
          <div key={item.id}>
            <Film item={item} />
          </div>
        ))}
      </Slider>
    </>
  );
}
