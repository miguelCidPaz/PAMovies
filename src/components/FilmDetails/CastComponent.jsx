
const CastComponent = (props) => {
    const urlForImages = "https://image.tmdb.org/t/p/w500/";
    const logoDefault = "https://st4.depositphotos.com/14343834/39242/v/450/depositphotos_392426376-stock-illustration-vector-finance-illustration-logo-default.jpg";
    return (
        <div className="castcomponent--container">
            <div className="castcomponent--frame-photo">
                <img src={props.cast.logo_path == null ? logoDefault : urlForImages + props.cast.logo_path} alt={`Foto de ${props.cast.name}`} />
            </div>
            <div className="castcomponent--container-name">
                <p>{props.cast.name}</p>
            </div>
        </div>
    )
}

export default CastComponent