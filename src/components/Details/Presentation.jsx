import DetailValorations from "./DetailValorations";
import { filmDetail } from "./Data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SlotRow from "./SlotRow";
import { useTranslation } from "react-i18next";
import ButtonsBack from "./ButtonsBack";

const DetailPresentation = (props) => {
  const params = useParams();
  const [rating, setRating] = useState(0); //Rating para las estrellas
  const [movie, setMovie] = useState();
  const [t, i18n] = useTranslation("global");

  const filterDirecting = (directing) => {
    if (directing !== undefined) {
      const newArr = directing.filter(
        (element) => element.department === "Directing"
      );
      return newArr;
    }
  };

  const selectScore = (value) => {
    setRating(value);
  };

  useEffect(() => {
    setRating(0);
  }, [params]);

  useEffect(() => {
    if (params.type === "movie") {
      setMovie(params.id);
    }
  }, [props, params]);

  return (
    <section className="details--main-container">
      <div className="details--frame-photo">
        <img src={props.urlImage} alt={`Poster de ${props.item.name}`} />
        {props.item.video !== null || params.type === "person" ? (
          <ButtonsBack
            type={props.item.video !== null ? null : "movie"} //true -> a main || false -> a movie
            //Con type distinguimos si entramos con movie en recamara o a pelo
            idSaved={
              props.item.video !== null
                ? movie !== undefined
                  ? movie
                  : null
                : null
            }
            inMovie={params.type === "movie" ? true : false}
            movieName={props.item.video !== null ? props.item.name : null}
          />
        ) : null}
      </div>

      <div className="details--interior-container">
        <p className="details--title">{props.item.name}</p>
        <div className="details--interior-row details--interior-row-extra">
          {props.item.date !== undefined &&
          props.item.date !== null &&
          props.item.date.length > 0 ? (
            <p>({props.item.date})</p>
          ) : null}

          {props.item.photo_principal !== null &&
          props.item.photo_principal !== undefined ? (
            <DetailValorations
              puntuation={rating}
              rating={filmDetail.rating}
              selectScore={selectScore}
              photo_principal={props.item.photo_principal}
            />
          ) : null}
        </div>

        {props.item.countries !== undefined ? (
          <SlotRow
            title={t("details.country")} //Texto a resaltar, el titulo
            areLinks={false} //Para señalar si el arr debe ser de links o no
            items={props.item.countries} //El item es un arr de items
          />
        ) : null}

        {props.director !== undefined ? (
          <SlotRow
            title={t("details.director")} //Texto a resaltar, el titulo
            areLinks={true} //Para señalar si el arr debe ser de links o no
            items={filterDirecting(props.director)} //El item es un arr de items
          />
        ) : null}

        {props.casting !== undefined ? (
          <SlotRow
            title={props.casting.length !== 0 ? t("details.cast") : null} //Texto a resaltar, el titulo
            areLinks={true} //Para señalar si el arr debe ser de links o no
            items={props.casting} //El item es un arr de items
          />
        ) : null}
      </div>
    </section>
  );
};

export default DetailPresentation;
