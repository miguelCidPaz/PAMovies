import CastComponent from './CastComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { filmDetail } from './Data';

const FilmDetails = () => {
    const [rating, setRating] = useState(0);
    const [view, setView] = useState(false);

    const selectScore = (value) => {
        setRating(value)
    }

    const selectView = () => {
        setView(!view);
    }
    /* 
        useEffect(() => {
    
        }, []); */

    const CastFilm = Object.values(filmDetail.cast);

    return (
        <section className="filmdetails--main-container">

            <section className='filmdetails--section filmdetails--presentation'>
                <p className="filmdetails--title">{filmDetail.title}</p>
                <div className="filmdetails--frame-photo">
                    <img src={filmDetail.photo} alt={`Poster de ${filmDetail.title}`} />
                </div>
            </section>

            <section className="filmdetails--section filmdetails--valorations">
                <div className='filmdetails--stars'>
                    {filmDetail.rating.map((element, index) => {
                        return <button key={index} className={rating > index ? 'star-point' : 'star'} value={element} onClick={(e) => selectScore(e.currentTarget.value)}><FontAwesomeIcon icon={faStar} /></button>
                    })}
                </div>
                <div className='filmdetails--show-or-not'>
                    <button className='filmdetails--check' onClick={selectView}>
                        <FontAwesomeIcon color={view ? "yellow" : "white"} size='5x' icon={view ? faToggleOn : faToggleOff} />
                    </button>
                </div>
            </section>

            <section className='filmdetails--section filmdetails--description'>
                <p>{filmDetail.description}</p>
            </section>

            <section className='filmdetails--section filmdetails--cast'>
                {CastFilm.map((element, index) => {
                    return <CastComponent key={index} cast={element} />
                })}
            </section>

            <section className='filmdetails--section filmdetails--frame-video'>
                <iframe src={`https://www.youtube.com/embed/${filmDetail.trailer.url}`}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </section>

        </section>
    )
}

export default FilmDetails;