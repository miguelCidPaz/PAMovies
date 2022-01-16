import { useState, useEffect } from "react";
import Divisor from "../Divisor/Divisor";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from "@mui/material";

const DetailTrailer = (props) => {
    const [film, setFilm] = useState();
    const [libraryFilms, setLibraryFilms] = useState([]);
    const [index, setIndex] = useState(0);

    const requestApi = async () => {
        const id = props.id;
        const ApiKey = "07e793aeac523d9f4455050b060257c7";
        const URL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}&language=en-US`;

        await fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results)
                setFilm(data.results[index]);
                setLibraryFilms(data.results)
            });
    };

    useEffect(() => {
        requestApi();
    }, [props])

    useEffect(() => {

    }, [index])

    console.log(film)

    return (
        <section className="details--main-container details--main-column">
            <Divisor title="Trailer" />
            <section className='details--section'>
                <p className="details--title">{libraryFilms[index] !== undefined ? libraryFilms[index].name : null}</p>
                <div className="details--interior-row">
                    <div className="details--interior-row-nowrap">
                        <Button onClick={e => index - 1 < 0 ? setIndex(libraryFilms.length - 1) : setIndex(index - 1)} fullWidth><ArrowBackIosIcon /></Button>
                        <iframe className="details--frame-video" src={`https://www.youtube.com/embed/${libraryFilms[index] !== undefined ? libraryFilms[index].key : null}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        <Button onClick={e => index + 1 > libraryFilms.length - 1 ? setIndex(0) : setIndex(index + 1)} fullWidth><ArrowForwardIosIcon /></Button>
                    </div>
                    <div className="details--main-column details--container-secondary">
                        {libraryFilms !== undefined ? libraryFilms.map((element, indexInterno) => <p className={libraryFilms[index].name !== element.name ? "details--scenes" : "details--scenes-selected"} onClick={e => setIndex(indexInterno)}>{element.name}</p>) : null}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default DetailTrailer