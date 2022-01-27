import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Randomizer = (props) => {
    const [key, setKey] = useState(undefined);
    const [movie, setMovie] = useState(undefined)

    const urlForImages = "https://image.tmdb.org/t/p/w500/";
    const image = "https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
    const ApiKey = "07e793aeac523d9f4455050b060257c7";

    const randomSelect = async(values) => {
        const numRandom = Math.floor(Math.random()*values.length)
        const URLPrincipal = `https://api.themoviedb.org/3/movie/${numRandom}/similar?api_key=${ApiKey}&language=en-US&page=1`;
        await fetch(URLPrincipal)
        .then((res) => res.json())
        .then((data) => {
            //movies(data);
            const otherRandom = Math.floor(Math.random()*20)
            console.log(data.results)
            if(data.status_code !== 34){
                setMovie(data.results[otherRandom])
            }
        });
    }

    useEffect(() => {

    },[key, movie])

    console.log(props)
    return(
        <div className="randomizer--background">
            <div className="randomizer--body-main">
                <div className="randomizer--top-window">
                    <button className="randomizer--button-close"
                        onClick={(e) => props.setModal(!props.modal)}
                    >X</button>
                </div>
                {/*Aqui se renderiza el menu interior de la ventana, boton, resultado y refresh*/}
                <div className="randomizer--body-interior">

                    <div className="randomizer--container-interior">

                        <div className="randomizer--toCenter">
                            <p className="randomizer--title">
                                RANDOMIZER
                            </p>
                        </div>

                        <div className="randomizer--tobottom">
                            <button className="randomizer--button"
                            onClick={(e) => {setKey(randomSelect(props.keys))}}
                            >Randomizame</button>
                        </div>
                    </div>
                    
                    <div className="randomizer--container-interior">
                        
                        <div className="randomizer--toCenter">
                            <Link 
                            to={movie !== undefined ? `/details/movie/${movie.id}` : '/'}
                            className="randomizer--container-img">

                                {movie !== undefined
                                ? <img src={urlForImages + movie.poster_path} alt="#" />
                                : <img src={image} alt="#" />
                                }

                            </Link>
                        </div>

                        <div className="randomizer--tobottom">
                        </div>

                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Randomizer;