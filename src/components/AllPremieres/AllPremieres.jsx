import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Divisor from "../Divisor/Divisor";
import Randomizer from "../Randomizer/Randomizer";
import { useTranslation } from "react-i18next";

export default function AllPremieres() {
  const [t] = useTranslation("global");

  const location = useLocation().state;
  const navigate = useNavigate();
  const [modal, setModal] = useState(location !== undefined && location !== null ? !location.modal : false);
  // eslint-disable-next-line no-unused-vars

  const keys = location.auxiliarKeys.map(element => element.id)

  console.log(location)

  return (
    <>
    {
    (location !== undefined && location !== null)
      ? location.modal === modal
      ? <Randomizer modal={modal} setModal={setModal} keys={keys} /> 
      : null 
      : null
    } 
    {location !== undefined && location !== null 
    ? <div className="container ">
      <div className="title-genre">
        <Divisor title={t("dividers.premieres")}></Divisor>
      </div>
      <div className="all-components">
        {location.auxiliarKeys.map((element) => (
          <div
            className="ind-premiere"
            key={element.id}
            onClick={() => {
              navigate(`/details/movie/${element.id}`);
            }}
          >
            <figure>
              {element.poster_path.includes("null") ? (
                <img
                  alt="premiere film"
                  src={`https://www.gruposertec.com/wp-content/uploads/2015/03/no_image_available.jpeg`}
                />
              ) : (
                <img
                  className="image-"
                  alt="film"
                  src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
                />
              )}
            </figure>
            <p className="title-premiere">{element.title}</p>
            <button className="details">
              <span></span>
              <span></span>
              <span></span>
              <span></span> Details
            </button>
          </div>
        ))}
      </div>
    </div> : null}
    </>
  );
}
