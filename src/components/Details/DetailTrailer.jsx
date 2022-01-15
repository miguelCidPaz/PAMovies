import { useState, useEffect } from "react";
import Divisor from "../Divisor/Divisor";

const DetailTrailer = (props) => {
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [index, setIndex] = useState(0);

    const requestApi = async () => {
        const id = props.id;
        const ApiKey = "07e793aeac523d9f4455050b060257c7";
        //https://api.themoviedb.org/3/movie/225886/videos?api_key=07e793aeac523d9f4455050b060257c7&language=en-US
        const URL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}&language=en-US`;
        await fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results)
                setUrl(data.results[index].key);
                setTitle(data.results[index].name);
            });
    };

    useEffect(() => {
        requestApi();
    }, [props])

    return (
        <section className="details--main-container details--main-column">
            <Divisor title="Trailer" />
            <section className='details--section'>
                <p className="details--title">{title}</p>
                <div className="details--interior-row">
                    <iframe className="details--frame-video" src={`https://www.youtube.com/embed/${url}`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>
        </section>
    )
}

export default DetailTrailer