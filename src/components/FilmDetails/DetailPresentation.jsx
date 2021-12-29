const DetailPresentation = (props) => {
    return (
        <section className='filmdetails--section filmdetails--presentation'>
            <p className="filmdetails--title">{props.title}</p>
            <div className="filmdetails--frame-photo">
                <img src={props.photo} alt={`Poster de ${props.title}`} />
            </div>
        </section>
    )
}

export default DetailPresentation