import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
import Divisor from "../Divisor/Divisor";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div className="arrow-next arrow">
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
    <div className="arrow-back arrow">
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
  const navigate = useNavigate();
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    focusOnSelect: true,
    className: "container-slider-cast",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
        <Divisor title={props.title}></Divisor>
      </div>
      <Slider {...settings}>
        {props.element?.map((element, key) => (
          <div
            onClick={() => {
              navigate(`/details/person/${element.id}`);
            }}
            key={key}
            className="container-cast"
          >
            {element.picture?.includes("null") ? (
              <ImageNotSupportedIcon className="img-cast"></ImageNotSupportedIcon>
            ) : (
              <img className="img-cast" src={element.picture} alt=""></img>
            )}
            <div className="h2">
              <p>({element.item})</p>
              <h2>{element.name}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Cast;
