import CastComponent from './CastComponent';
import { filmDetail } from './Data';

const FilmDetails = () => {

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
                    Estrellitas
                </div>
                <div className='filmdetails--show-or-not'>
                    La ves o no
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