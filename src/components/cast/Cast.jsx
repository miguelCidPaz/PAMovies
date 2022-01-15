import axios from "axios";
import react, { useState, useEffect } from "react";
import Slider from "react-slick";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
import Divisor from "../Divisor/Divisor";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div className="arrow-next">
      <ArrowForwardIosIcon
        className={className}
        style={{
          ...style,

          color: "white",

          right: "0px",
        }}
        onClick={onClick}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="arrow-back">
      <ArrowBackIosNewIcon
        className={className}
        style={{
          ...style,

          color: "white",

          left: "-2%",
        }}
        onClick={onClick}
      />
    </div>
  );
}

const Cast = (props) => {
  const [data, setData] = useState("");
  let id = props.id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        let getData = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=fb1999e69926d1387eb44c3abee6e7c5&language=en-US`
        );
        setData(getData.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();

    console.log(data);
  }, [props]);
  useEffect(() => {
    console.log(data.cast);
  }, [data]);

  let link = "https://image.tmdb.org/t/p/w500";

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    // initialSlide: 2,
    className: "container-slider-cast",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1244,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "80px",
        },
      },
    ],
  };
  return (
    <>
      <div className="container ">
        <Divisor title="CAST"></Divisor>
      </div>
      <Slider {...settings}>
        {data.cast?.map((element) => (
          <div className="container-cast">
            {element.profile_path === null ? (
              <ImageNotSupportedIcon className="img-cast"></ImageNotSupportedIcon>
            ) : (
              <img
                className="img-cast"
                src={link + element.profile_path}
                alt=""
              ></img>
            )}
            <div className="h2">
              <h2>{element.name}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Cast;
