import { useState, useEffect } from "react";

const DetailTrailer = (props) => {
    const [url, setUrl] = useState("");

    const requestApi = async () => {
        const id = props.id;
        const ApiKey = "07e793aeac523d9f4455050b060257c7";
        //https://api.themoviedb.org/3/movie/225886/videos?api_key=07e793aeac523d9f4455050b060257c7&language=en-US
        const URL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}&language=en-US`;
        await fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results)
                setUrl(data.results[0].key)
            });
    };

    useEffect(() => {
        requestApi();
    }, [])

    return (
        <section className='details--section details--frame-video'>
            <iframe src={`https://www.youtube.com/embed/${url}`}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </section>
    )
}

export default DetailTrailer