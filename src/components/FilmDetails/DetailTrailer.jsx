const DetailTrailer = (props) => {
    return (
        <section className='filmdetails--section filmdetails--frame-video'>
            <iframe src={`https://www.youtube.com/embed/${props.url}`}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </section>
    )
}

export default DetailTrailer