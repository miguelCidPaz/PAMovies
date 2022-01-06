import CastComponent from '../components/FilmDetails/CastComponent';
import { useState, useEffect } from 'react';
import { filmDetail } from '../components/FilmDetails/Data';
import Divisor from '../components/Divisor/Divisor'
import DetailPresentation from '../components/FilmDetails/DetailPresentation';
import DetailValorations from '../components/FilmDetails/DetailValorations';
import DetailTrailer from '../components/FilmDetails/DetailTrailer';

const FilmDetails = () => {
    const [search, setSearch] = useState("movie") //Controlara el tipo de busqueda que se realiza {movie | tv | person}
    const [rating, setRating] = useState(0);
    const [view, setView] = useState(false);
    const [item, setItem] = useState(filmDetail); //Pasara a ser o bien una llamada a la Api o el objeto que reciba por prop

    //Url necesaria para las imagenes
    const urlForImages = "https://image.tmdb.org/t/p/w500/";

    //Llamada a la api
    const requestApi = async () => {
        const idProp = "343611";
        const ApiKey = "07e793aeac523d9f4455050b060257c7";
        const normalize = { name: "", photo_principal: "", description: "", details: [], video: null };
        //Esta url serviria para cualquiera de las 3 busquedas
        const URL = `https://api.themoviedb.org/3/${search}/${idProp}?api_key=${ApiKey}&language=en-US`;
        await fetch(URL).then(res => res.json()).then(data => {
            console.log(data);
            switch (search) {
                case "movie":
                    normalize.name = data.title;
                    normalize.photo_principal = data.poster_path;
                    normalize.description = data.overview;
                    normalize.details = data.production_companies;
                    normalize.video = data.video;
                    break;

                case "person":
                    normalize.name = data.name;
                    normalize.photo_principal = data.profile_path;
                    normalize.description = data.biography;
                    normalize.details = undefined;
                    normalize.video = null;
                    break;

                default:
                    setItem(filmDetail);
            }

            setItem(normalize);
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
        <>
            <Divisor title="Poster" />
            <section className="filmdetails--main-container">
                <DetailPresentation photo={urlForImages + item.photo_principal} title={item.name} />
            </section>

            <Divisor title="Valorations" />
            <section className="filmdetails--main-container">
                <DetailValorations view={view} puntuation={rating} rating={filmDetail.rating} selectScore={selectScore} selectView={selectView} />
            </section>

            <Divisor title="Description" />
            <section className="filmdetails--main-container">
                <section className='filmdetails--section filmdetails--description'>
                    <p>{item.description}</p>
                </section>
            </section>

            <Divisor title="Companies" />
            <section className="filmdetails--main-container">
                <section className='filmdetails--section filmdetails--cast'>
                    {item.details !== undefined ? item.details.map((element, index) => {
                        return <CastComponent key={index} cast={element} />
                    }) : null}
                </section>
            </section>

            <section className="filmdetails--main-container">
                {item.video ? <DetailTrailer url={item.video} /> : null}
            </section>
        </>
    )
}

export default FilmDetails;