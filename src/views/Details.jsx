import CastComponent from "../components/Details/CastComponent";
import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { filmDetail } from "../components/Details/Data";
import Divisor from "../components/Divisor/Divisor";
import DetailPresentation from "../components/Details/DetailPresentation";
import { Normalizer } from './../components/Details/Normalizer'
import DetailValorations from "../components/Details/DetailValorations";
import DetailTrailer from "../components/Details/DetailTrailer";

const Details = ({ state }) => {
  const [rating, setRating] = useState(0); //Rating para las estrellas
  const [casting, setCasting] = useState([]) //Reparto de la pelicula
  const [director, setDirector] = useState("");
  const [item, setItem] = useState(filmDetail); //Pasara a ser o bien una llamada a la Api o el objeto que reciba por prop
  const params = useParams(); //Parametros de la URL

  //Url necesaria para las imagenes
  const urlForImages = "https://image.tmdb.org/t/p/w500/";

  //Llamada a la api

  useEffect(() => {
    const requestApi = async () => {
      const id = params.id;
      const type = params.type;
      const ApiKey = "07e793aeac523d9f4455050b060257c7";

      //Esta url serviria para cualquiera de las 3 busquedas
      const URLPrincipal = `https://api.themoviedb.org/3/${type}/${id}?api_key=${ApiKey}&language=en-US`;
      await fetch(URLPrincipal)
        .then((res) => res.json())
        .then((data) => {
          setItem(Normalizer(data, type));
        });
      if (type === "movie") {
        const URLReparto = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}&language=en-US`;
        await fetch(URLReparto)
          .then((res) => res.json())
          .then((data) => {
            setCasting(Object.values(data.cast))
            setDirector(data.crew[0])
          })
      }
    };
    requestApi();
  }, [params]);


  const selectScore = (value) => {
    setRating(value);
  };

  //Controlando renders innecesarios
  console.log("Renderizado en details");

  return (
    <div className="container">
      <Divisor title="Poster" />
      <section className="details--main-container">
        <div className="details--frame-photo">
          <img src={urlForImages + item.photo_principal} alt={`Poster de ${item.name}`} />
        </div>

        <div className="details--interior-container">
          <p className="details--title">{item.name}</p>
          <div className="details--interior-row details--interior-row-extra">
            <p>{item.date}</p>
            <DetailValorations
              puntuation={rating}
              rating={filmDetail.rating}
              selectScore={selectScore}
            />
          </div>
          <div className="details--interior-row">
            <p>Director:</p>
            <NavLink className={"details--casting"} to={`/person/${director.id}`}>{director.name}</NavLink>
          </div>
          <div className="details--interior-row">
            <p>Reparto:</p>
            {casting.map((element, index) => index < 15 ? <NavLink className={"details--casting"} to={`/person/${element.id}`}>{element.name}</NavLink> : null)}
          </div>
        </div>
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
    </div>
  );
};

export default Details;
