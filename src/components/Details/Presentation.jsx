import DetailValorations from "./DetailValorations"
import { filmDetail } from "./Data"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import SlotRow from "./SlotRow";
import { useLocalStorage } from "./CustomStorage";
import ButtonsBack from "./ButtonsBack";

const DetailPresentation = (props) => {
    const params = useParams();
    const [ratingSave, setRatingSave] = useLocalStorage(props.item.photo_principal, { totalPuntuation: 0, numVotes: 0 })
    const [rating, setRating] = useState(Math.floor(ratingSave.totalPuntuation / ratingSave.numVotes)); //Rating para las estrellas
    const [movie, setMovie] = useState()

    const filterDirecting = (directing) => {
        if (directing !== undefined) {
            const newArr = directing.filter(element => {
                if (element.department === 'Directing') {
                    return element
                }
            })
            return newArr;
        }
    }

    const selectScore = async (value) => {
        setRatingSave({ totalPuntuation: ratingSave.totalPuntuation + parseInt(value), numVotes: ratingSave.numVotes + 1 })
        setRating(value)
    };

    useEffect(() => {

        if (params.type === 'movie') {
            setMovie(params.id);
        }

    }, [props, rating, ratingSave])

    return (
        <section className="details--main-container">
            <div className="details--frame-photo">
                <img src={props.urlImage} alt={`Poster de ${props.item.name}`} />
            </div>

            <div className="details--interior-container">

                <p className="details--title">{props.item.name}</p>
                <div className="details--interior-row details--interior-row-extra">
                    <p>({props.item.date})</p>
                    {props.item.date !== null ?
                        <DetailValorations
                            puntuation={rating}
                            media={(ratingSave.totalPuntuation / ratingSave.numVotes) <= 0 ? 0 : Math.floor(ratingSave.totalPuntuation / ratingSave.numVotes) || 0}
                            rating={filmDetail.rating}
                            selectScore={selectScore}
                        />
                        :
                        null}
                </div>

                {props.item.countries !== undefined ?
                    <SlotRow
                        title={"Countrie: "} //Texto a resaltar, el titulo
                        areLinks={false} //Para señalar si el arr debe ser de links o no
                        items={props.item.countries} //El item es un arr de items
                    />
                    : null}

                {props.director !== undefined ?
                    <SlotRow
                        title={"Director: "} //Texto a resaltar, el titulo
                        areLinks={true} //Para señalar si el arr debe ser de links o no
                        items={filterDirecting(props.director)} //El item es un arr de items
                    />
                    : null}

                {props.casting !== undefined ?
                    <SlotRow
                        title={"Reparto: "} //Texto a resaltar, el titulo
                        areLinks={true} //Para señalar si el arr debe ser de links o no
                        items={props.casting} //El item es un arr de items
                    />
                    : null}

            </div>

            {props.item.date !== null ?
                <ButtonsBack
                    type={props.casting !== undefined ? 'movie' : null} //true -> a main || false -> a movie
                    //Con type distinguimos si entramos con movie en recamara o a pelo
                    idSaved={movie}
                    inMovie={params.type === 'movie' ? true : false}
                    movieName={params.type === 'movie' ? props.item.name : null}
                />
                :
                null}


        </section>
    )
}

export default DetailPresentation