import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const ButtonsBack = (props) => {
    const [name, setName] = useState(props.movieName);

    useEffect(() => {
        props.movieName !== null ? setName(props.movieName) : setName(name)
    }, [name, props])

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
            <Link className="details--back" to={routeLink(props.idSaved, props.type)}>{props.inMovie ? 'Home' : props.type !== null ? `Vuelve a ${name}` : 'Home'}</Link>
        </div>
    )
}

export default ButtonsBack