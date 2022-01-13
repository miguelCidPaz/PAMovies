import CastComponent from "../components/Details/CastComponent";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { filmDetail } from "../components/Details/Data";
import Divisor from "../components/Divisor/Divisor";
import DetailPresentation from "../components/Details/DetailPresentation";
import DetailValorations from "../components/Details/DetailValorations";
import DetailTrailer from "../components/Details/DetailTrailer";

const Details = ({ state }) => {
  const [rating, setRating] = useState(0);
  const [view, setView] = useState(false);
  const [item, setItem] = useState(filmDetail); //Pasara a ser o bien una llamada a la Api o el objeto que reciba por prop
  const params = useParams();

  //Url necesaria para las imagenes
  const urlForImages = "https://image.tmdb.org/t/p/w500/";

  //Llamada a la api
  const requestApi = async () => {
    const id = params.id;
    const type = params.type;
    const ApiKey = "07e793aeac523d9f4455050b060257c7";
    const normalize = {
      name: "",
      photo_principal: "",
      description: "",
      details: [],
      video: null,
    };
    //Esta url serviria para cualquiera de las 3 busquedas
    const URL = `https://api.themoviedb.org/3/${type}/${id}?api_key=${ApiKey}&language=en-US`;
    await fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        switch (type) {
          case "movie":
            normalize.name = data.title;
            normalize.photo_principal = data.poster_path;
            normalize.description = data.overview;
            normalize.details = data.production_companies;
            normalize.video = data.video;
            break;

          case "person":
            normalize.name = data.name;
            normalize.photo_principal = data.profile_path;
            normalize.description = data.biography;
            normalize.details = undefined;
            normalize.video = null;
            break;

          default:
            setItem(filmDetail);
        }

        setItem(normalize);
      });
  };

  useEffect(() => {
    requestApi();
  }, []);

  const selectScore = (value) => {
    setRating(value);
  };

  const selectView = () => {
    setView(!view);
  };

  //Controlando renders innecesarios
  console.log("Renderizado en details");

  return (
    <>
      <Divisor title="Poster" />
      <section className="details--main-container">
        <DetailPresentation
          photo={urlForImages + item.photo_principal}
          title={item.name}
        />
      </section>

      <Divisor title="Valorations" />
      <section className="details--main-container">
        <DetailValorations
          view={view}
          puntuation={rating}
          rating={filmDetail.rating}
          selectScore={selectScore}
          selectView={selectView}
        />
      </section>

      {item.description !== null || item.description !== undefined ? (
        <>
          <Divisor title="Description" />
          <section className="details--main-container">
            <section className="details--section details--description">
              <p>{item.description}</p>
            </section>
          </section>
        </>
      ) : null}

      {item.details !== undefined ? <Divisor title="Companies" /> : null}
      <section className="details--main-container">
        <section className="details--section details--cast">
          {item.details !== undefined
            ? item.details.map((element, index) => {
              return <CastComponent key={index} cast={element} />;
            })
            : null}
        </section>
      </section>

      <section className="details--main-container">
        {item.video !== null ?
          <><Divisor title="Trailer" />
            <DetailTrailer id={params.id} />
          </> : null}
      </section>
    </>
  );
};

export default Details;
