
const CastComponent = (props) => {
    return (
        <div className="castcomponent--container">
            <div className="castcomponent--frame-photo">
                <img src={props.cast.photo} alt={`Foto de ${props.cast.nameActor}`} />
            </div>
            <div className="castcomponent--container-name">
                <p>{props.cast.nameActor}</p>
            </div>
        </div>
    )
}

export default CastComponent