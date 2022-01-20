import Description from "../components/Details/Description";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { filmDetail } from "../components/Details/Data";
import Presentation from "../components/Details/Presentation";
import { Normalizer } from "./../components/Details/Normalizer";
import DetailTrailer from "../components/Details/DetailTrailer";
import ContainerCast from "../components/Details/ContainerCast";
const Details = ({ state }) => {
  const [casting, setCasting] = useState(undefined); //Reparto de la pelicula
  const [director, setDirector] = useState(undefined);
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

      //Aqui tendriamos que tener el seteo del rating con el LocalStorage usando el photo_principal

      if (type === "movie") {
        const URLReparto = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}&language=en-US`;
        await fetch(URLReparto)
          .then((res) => res.json())
          .then((data) => {
            setCasting(Object.values(data.cast));
            setDirector(Object.values(data.crew));
          });
      }
    };
    requestApi();
  }, [params]);

  //Controlando renders innecesarios
  console.log("Render en details");

  return (
    <>
      <div className="container">
        {item.photo_principal !== undefined ? (
          <Presentation
            urlImage={urlForImages + item.photo_principal} // 2 strings
            item={item} //Objeto con datos de la api
            casting={casting} //Array de Objetos
            director={director} //Array de Objetos
          />
        ) : (
          <div className="details--container-spinner">
            <span className="details--spinner"></span>
          </div>
        )}
        {item !== undefined ? (
          <Description item={item} /> //Objeto con datos de la api
        ) : (
          <div className="details--container-spinner">
            <span className="details--spinner"></span>
          </div>
        )}
        {item.video !== null ? <DetailTrailer id={params.id} /> : null}{" "}
        {/* Int */}
      </div>
      {item.video !== null ? (
        <ContainerCast id={params.id}></ContainerCast>
      ) : null}{" "}
      {/* Int */}
    </>
  );
};

export default Details;
