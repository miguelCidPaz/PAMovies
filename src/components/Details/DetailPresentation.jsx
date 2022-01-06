const DetailPresentation = (props) => {
    return (
        <section className='details--section details--presentation'>
            <p className="details--title">{props.title}</p>
            <div className="details--frame-photo">
                <img src={props.photo} alt={`Poster de ${props.title}`} />
            </div>
        </section>
    )
}

export default DetailPresentation