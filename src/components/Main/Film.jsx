import React from "react";
import { useNavigate } from "react-router-dom";

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
        {props.item.poster_path === null ? (
          <img
            className="img-film"
            src={`https://www.gruposertec.com/wp-content/uploads/2015/03/no_image_available.jpeg`}
          />
        ) : (
          <img
            className="img-film"
            src={`https://image.tmdb.org/t/p/w500/${keyword}`}
          />
        )}
        <div className="layer">
          <p>{props.item.release_date}</p>
          <p>{props.item.title}</p>
          {/* <p>{props.vote_average}</p> */}
        </div>
      </figure>
    </div>
  );
}
export default Film;
