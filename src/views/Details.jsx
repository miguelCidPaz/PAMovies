import Description from "../components/Details/Description";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { filmDetail } from "../components/Details/Data";
import Presentation from "../components/Details/Presentation";
import { Normalizer } from "./../components/Details/Normalizer";
import DetailTrailer from "../components/Details/DetailTrailer";
import ContainerCast from "../components/Details/ContainerCast";
import Omnibar from "../components/Omnibar/Omnibar";
import Randomizer from "../components/Randomizer/Randomizer";
import { useTranslation } from "react-i18next";
import DetailProvider from "../components/DetailProvider/DetailProvider";

const Details = ({ state }) => {
  const [casting, setCasting] = useState(undefined); //Reparto de la pelicula
  const [director, setDirector] = useState(undefined);
  const [item, setItem] = useState(filmDetail); //Pasara a ser o bien una llamada a la Api o el objeto que reciba por prop
  const [keys, setKeys] = useState(undefined); // Las keys que recogeremos de otra parte
  const params = useParams(); //Parametros de la URL
  const [saveparams, setSaveParams] = useState({
    type: params.type,
    id: params.id,
  });
  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate();
  const location = useLocation().state;
  const [modal, setModal] = useState(location !== undefined && location !== null ? !location.modal : false);

  //Url necesaria para las imagenes
  const urlForImages = "https://image.tmdb.org/t/p/w500/";
  const image =
    "https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg";

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
          if (data.status_code === 34) {
            navigate("/ERROR");
          } else if (data.status_code === 404) {
            navigate("/ERROR");
          } else {
          }
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
    setSaveParams({ type: params.type, id: params.id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  /* console.log(keys) */

  return (
    <>
        {
    (location !== undefined && location !== null)
      ? location.modal === modal
      ? <Randomizer modal={modal} setModal={setModal} keys={keys} /> 
      : null 
      : null
    } 
      <div className="container">
        {item.photo_principal !== undefined ? (
          <Presentation
            urlImage={
              item.photo_principal !== undefined &&
              item.photo_principal !== null
                ? urlForImages + item.photo_principal
                : image
            } // 2 strings
            item={item} //Objeto con datos de la api
            casting={casting} //Array de Objetos
            director={director} //Array de Objetos
          />
        ) : (
          <div className="details--container-spinner">
            <span className="details--spinner"></span>
          </div>
        )}

        {/* {item !== undefined && params.type === 'movie' ? (
          <DetailProvider id={params.id} /> //Objeto con datos de la api
        ) : (
          null
        )} */}

        {item !== undefined ? (
          <Description item={item} /> //Objeto con datos de la api
        ) : (
          <div className="details--container-spinner">
            <span className="details--spinner"></span>
          </div>
        )}
        {item.video !== null && params.type === "movie" ? (
          <DetailTrailer id={params.id} />
        ) : null}{" "}
        {/* Int */}
        {item !== undefined && item !== null ? (
          <Omnibar
            text={
              item.video !== null
                ? t("details.similarMovies")
                : t("details.otherMovies")
            }
            id={saveparams.id}
            value={saveparams.type}
            setKeys={keys === undefined ? setKeys : null}
          />
        ) : null}
      </div>

      {item !== undefined && params.type === "movie" ? (
        <ContainerCast id={params.id}></ContainerCast>
      ) : null}
    </>
  );
};

export default Details;
