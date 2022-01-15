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
          console.log(data)
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
      <DetailPresentation
        urlImage={urlForImages + item.photo_principal}
        item={item}
        rating={rating}
        selectScore={selectScore}
        casting={casting}
        director={director}
      />

      {/* Segunda Seccion para productoras y description */}

      {item.description !== null || item.description !== undefined ? (
        <section className="details--main-container">
          <section className="details--section details--description">
            <p>{item.description}</p>
          </section>
        </section>
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
