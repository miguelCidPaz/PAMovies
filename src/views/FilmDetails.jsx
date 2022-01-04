import CastComponent from '../components/FilmDetails/CastComponent';
import { useState, useEffect } from 'react';
import { filmDetail } from '../components/FilmDetails/Data';
import DetailPresentation from '../components/FilmDetails/DetailPresentation';
import DetailValorations from '../components/FilmDetails/DetailValorations';
import DetailTrailer from '../components/FilmDetails/DetailTrailer';
//import Button from '@mui/material/Button';

const FilmDetails = () => {
    const [search, setSearch] = useState("movie") //Controlara el tipo de busqueda que se realiza
    const [rating, setRating] = useState(0);
    const [view, setView] = useState(false);
    const [movie, setMovie] = useState(filmDetail); //Pasara a ser o bien una llamada a la Api o el objeto que reciba por prop

    //Url necesaria para las imagenes
    const urlForImages = "https://image.tmdb.org/t/p/w500/";

    //Llamada a la api
    const requestApi = async () => {
        const idProp = "343611";
        const ApiKey = "07e793aeac523d9f4455050b060257c7";
        const URL = `https://api.themoviedb.org/3/movie/${idProp}?api_key=${ApiKey}&language=en-UStr}`;
        await fetch(URL).then(res => res.json()).then(data => {
            setMovie(data);
        })
    }

    useEffect(() => {
        requestApi();
    }, [])

    const selectScore = (value) => {
        setRating(value);
    }

    const selectView = () => {
        setView(!view);
    }

    //Controlando renders innecesarios
    console.log("Renderizado en details")

    return (

        <section className="filmdetails--main-container">

            <DetailPresentation photo={urlForImages + movie.poster_path} title={movie.title} />

            <DetailValorations view={view} puntuation={rating} rating={filmDetail.rating} selectScore={selectScore} selectView={selectView} />

            <section className='filmdetails--section filmdetails--description'>
                <p>{movie.overview}</p>
            </section>

            <section className='filmdetails--section filmdetails--cast'>
                {movie.production_companies !== undefined ? movie.production_companies.map((element, index) => {
                    return <CastComponent key={index} cast={element} />
                }) : null}
            </section>
            {movie.video ? <DetailTrailer url={movie.video} /> : null}


        </section>
    )
}

export default FilmDetails;