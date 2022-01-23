import DetailValorations from "./DetailValorations"
import { filmDetail } from "./Data"
import { normalizeKeys } from "./Normalizer";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import SlotRow from "./SlotRow";
import { useLocalStorage } from "./CustomStorage";
import ButtonsBack from "./ButtonsBack";

const DetailPresentation = (props) => {
    const params = useParams();
    const [ratingSave, setRatingSave] = useLocalStorage(normalizeKeys(props.item.photo_principal), { totalPuntuation: 0, numVotes: 0 })
    const [rating, setRating] = useState(props.rating); //Rating para las estrellas
    const [movie, setMovie] = useState()
    const [id, setID] = useState(0)
    const [type, setType] = useState(0)
    

    const filterDirecting = (directing) => {
        if (directing !== undefined) {
            const newArr = directing.filter(element => element.department === 'Directing')
            return newArr;
        }
    }

    const selectScore = (value) => {
/*         console.log(value) */
        setRatingSave({ 
            totalPuntuation: ratingSave.totalPuntuation + parseInt(value), 
            numVotes: ratingSave.numVotes + 1 })

        setRating(value)
/*         console.log(ratingSave) */
    };

    useEffect(() => {

        if (params.type === 'movie') {
            setMovie(params.id);
        }

        if(id !== params.id){
            setID(params.id)
        }

        if(type !== params.type){
            setType(params.type)
        }

/*         if(rating !== ratingSave.totalPuntuation){
            setRating(ratingSave.totalPuntuation)
        } */

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props, params, rating, ratingSave])

    console.log('evaluando valorations')

    return (
        <section className="details--main-container">
            <div className="details--frame-photo">
                <img src={props.urlImage} alt={`Poster de ${props.item.name}`} />
                {props.item.video !== null || params.type === 'person' ?
                <ButtonsBack
                    type={props.item.video !== null ? null : 'movie'} //true -> a main || false -> a movie
                    //Con type distinguimos si entramos con movie en recamara o a pelo
                    idSaved={props.item.video !== null ? movie !== undefined ? movie : null : null}
                    inMovie={params.type === 'movie' ? true : false}
                    movieName={props.item.video !== null ? props.item.name : null}
                />
                :
                null}
            </div>

            <div className="details--interior-container">

                <p className="details--title">{props.item.name}</p>
                <div className="details--interior-row details--interior-row-extra">
                    {props.item.date !== undefined 
                    && props.item.date !== null
                    && props.item.date.length > 0
                    ?<p>({props.item.date})</p> 
                    : null}
                    
                    {props.item.photo_principal !== null
                    && props.item.photo_principal !== undefined ?
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
                        title={props.casting.length !== 0 ? "Reparto: " : null} //Texto a resaltar, el titulo
                        areLinks={true} //Para señalar si el arr debe ser de links o no
                        items={props.casting} //El item es un arr de items
                    />
                    : null}

            </div>

            


        </section>
    )
}

export default DetailPresentation