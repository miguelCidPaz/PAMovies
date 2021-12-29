import CastComponent from '../components/FilmDetails/CastComponent';
import { useState, useEffect } from 'react';
import { filmDetail } from '../components/FilmDetails/Data';
import DetailPresentation from '../components/FilmDetails/DetailPresentation';
import DetailValorations from '../components/FilmDetails/DetailValorations';
import DetailTrailer from '../components/FilmDetails/DetailTrailer';
//Prueba

const FilmDetails = () => {
    const [rating, setRating] = useState(0);
    const [view, setView] = useState(false);

    const selectScore = (value) => {
        setRating(value)
    }

    const selectView = () => {
        setView(!view);
    }

    useEffect(() => {

    }, [rating, view])

    const CastFilm = Object.values(filmDetail.cast);

    return (
        <section className="filmdetails--main-container">

            <DetailPresentation photo={filmDetail.photo} title={filmDetail.title} />

            <DetailValorations view={view} puntuation={rating} rating={filmDetail.rating} selectScore={selectScore} selectView={selectView} />

            <section className='filmdetails--section filmdetails--description'>
                <p>{filmDetail.description}</p>
            </section>

            <section className='filmdetails--section filmdetails--cast'>
                {CastFilm.map((element, index) => {
                    return <CastComponent key={index} cast={element} />
                })}
            </section>

            <DetailTrailer url={filmDetail.trailer.url} />

        </section>
    )
}

export default FilmDetails;