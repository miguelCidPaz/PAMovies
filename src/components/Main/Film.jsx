import React from "react";
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";

function Film(props) {
  const navigate = useNavigate();
  let keyword = props.item.poster_path;

  return (
    <div
      className="full-container"
      onClick={() => {
        navigate(`/details/movie/${props.item.id}`);
      }}
      key={props.id}
    >
      <figure>
        {props.item.poster_path.includes("null") ? (
          <img
            alt="film"
            src={`https://www.gruposertec.com/wp-content/uploads/2015/03/no_image_available.jpeg`}
          />
        ) : (
          <img alt="film" src={`https://image.tmdb.org/t/p/w500/${keyword}`} />
        )}
        <div className="layer">
          <div>{<InfoIcon fontSize="large" />}</div>
          <p>{props.item.release_date.slice(0, 4)}</p>
          <p>
            <b>{props.item.title}</b>
          </p>
        </div>
      </figure>
    </div>
  );
}
export default Film;
