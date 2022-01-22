import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const ButtonsBack = (props) => {
    const [name, setName] = useState();
    const [idSave, setIDSave] = useState();

    useEffect(() => {
        props.movieName !== null ? setName(props.movieName) : setName(name)
        props.idSaved !== null ? setIDSave(props.idSaved) : setIDSave(idSave)
    }, [idSave, name, props])

    //Route detecta que estamos en la misma ruta, asi que creamos un objeto sustituto con una clave unica para forzarlo
    const routeLink = (id, type) => {
        return {
            pathname: type !== null ? props.inMovie ? '/' : `/details/${type}/${id}` : '/',
            key: Math.random(), // we could use Math.random, but that's not guaranteed unique.
            state: {
                applied: true
            }
        }
    }

    return (
        <div className="details--container-back">
            <Link className="details--back" to={routeLink(idSave, props.type)}>{props.inMovie ? 'Home' : props.type !== null ? `Vuelve a ${name}` : 'Home'}</Link>
        </div>
    )
}

export default ButtonsBack