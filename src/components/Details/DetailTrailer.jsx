import { useState, useEffect } from "react";
import Divisor from "../Divisor/Divisor";
import { shortString } from "./Normalizer";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from "@mui/material";
import NavBox from "../NavBox/NavBox";

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
                setFilm(data.results[index]);
                setLibraryFilms(data.results)
            });
    };

    const newIndex = (filmSelect) => {
        console.log(filmSelect);
        const newIndex = libraryFilms.indexOf(filmSelect.key);
        console.log(libraryFilms.map((element, index) => {
            if (element.key === filmSelect.key) {
                return element
            }
        }))
    }

    useEffect(() => {
        requestApi();
    }, [props])

    useEffect(() => {

    }, [index])

    return (
        <section className="details--main-container details--main-column">
            <Divisor title="Videos" />
            <section className='details--section'>
                <p className="details--title details--padding-title">{libraryFilms[index] !== undefined ? libraryFilms[index].name : null}</p>
                <div className="details--interior-row">

                    <div className="details--interior-row-nowrap">
                        <button className="details--scenes details--button" onClick={e => index - 1 < 0 ? setIndex(libraryFilms.length - 1) : setIndex(index - 1)}><ArrowBackIosIcon /></button>
                        <iframe className="details--frame-video" src={`https://www.youtube.com/embed/${libraryFilms[index] !== undefined ? libraryFilms[index].key : null}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        <button className="details--scenes details--button" onClick={e => index + 1 > libraryFilms.length - 1 ? setIndex(0) : setIndex(index + 1)}><ArrowForwardIosIcon /></button>
                    </div>

                    <NavBox
                        libraryFilms={libraryFilms}
                        nameSelect={libraryFilms[props.index] !== undefined ? libraryFilms[props.index].name : null}
                        newIndex={newIndex} />

                </div>
            </section>
        </section>
    )
}

export default DetailTrailer